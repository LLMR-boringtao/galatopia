import { controller, get, post, put, required } from '../decorator/router'
import config from '../config'
import reply from '../wechat/reply'
import wechatMiddle from '../wechat-lib/middleware'
import { signature, redirect, oauth, wechatPay } from '../controllers/wechat'
import api from '../api'
import { getParamsAsync } from '../wechat-lib/pay'
import mongoose from 'mongoose'
import * as _ from 'lodash'
import getRawBody from 'raw-body'
import * as util from '../wechat-lib/util'
import {nanoid} from 'nanoid'

const User = mongoose.model('User')

@controller('')
export class WechatController {
  @get('/wx-hear')
  async wechatHear (ctx, next) {
    const middle = wechatMiddle(config.wechat, reply)
    const body = await middle(ctx, next)
    console.log(body)
    ctx.body = body
  }

  @post('/wx-hear')
  async wechatPostHear (ctx, next) {
    const middle = wechatMiddle(config.wechat, reply)
    const body = await middle(ctx, next)
    ctx.body = body
  }

  @get('/wechat/orders')
  async userOrders (ctx, next) {
    const session = ctx.session
    try {
      let user = await api.user.findUserByUnionId(session.user.unionid)
      if (!user) {
        ctx.body = {
          success: false,
          err: '用户不存在'
        }
      }
      const res = await api.payment.fetchAllOrders(user)
      ctx.body = {
        success: true,
        data: res
      }
    } catch (error) {
      ctx.body = {
        success: false,
        err: error
      }
    }
  }

  // 获取微信支付order参数
  @post('/wechat-pay')
  async createOrder (ctx, next) {
    // await wechatPay(ctx, next)
    // from controllers wechat.js
    const ip = ctx.ip.replace('::ffff:', '')
    const session = ctx.session
    
    try {
      let user = await api.user.findUserByUnionId(session.user.unionid)
      if (!user) {
        ctx.body = {
          success: false,
          err: '用户不存在'
        }
      }
      
      // 订单好号前面是用户id后面是时间戳
      const orderParams = {
        body: (+new Date),
        attach: user._id,
        out_trade_no: user._id + '-' + nanoid(6),
        spbill_create_ip: ip,
        // total_fee: (total_fee * 100).toFixed(0),
        total_fee: 21100,
        openid: session.user.openid,
        trade_type: 'JSAPI',
        product_id: user.unionid
      }
      console.log(orderParams)
      const order = await getParamsAsync(orderParams) // 返回order
      console.log(order)
      // const payment = await api.payment.create(user, order, '公众号', totalFee)
      ctx.body = {
        success: true,
        data: order
      }
    } catch (err) {
      console.log(err)
      ctx.body = {
        success: false,
        err: err
      }
    }
  }

  @post('/addtocart')
  @required({ body: ['productId'] })
  async addtoCart (ctx, next) {
    const session = ctx.session
    const {
      productId
    } = ctx.request.body

    const products = await api.product.findProduct(productId)
    const product = products[0]
    console.log('product:')
    console.log(product)
    if (!product) {
      return (ctx.body = {
        success: false, err: '这个宝贝不在了'
      })
    }
    console.log('yes')
    try {
      //let user = await User.findOne({unionid: session.user.unionid}).exec()
      let user = await api.user.findUserByUnionId(session.user.unionid)
      if (!user) {
        user = await api.user.saveFromSession(session)
      }
      console.log('user')
      console.log(session.user)
      let res = await api.cart.findinCart(product._id, user._id)
      console.log('res')
      console.log(res)
      if (res) {
				// 购物车里有产品数量增加1
        const cart = await api.cart.update(res)
        ctx.body = {
          success: true,
          data: cart
        }
      } else {
				// 没有的话，添加到购物车
        let cart = {
          product: product,
          user: user,
          num: 1
        }
        cart = await api.cart.save(cart)
        ctx.body = {
          success: true,
          data: cart
        }
      }
    } catch (err) {
      console.log(err)
      ctx.body = {
        success: false,
        err: err
      }
    }
  }
  
  @get('/wechat-signature')
  async wechatSignature (ctx, next) {
    await signature(ctx, next)
  }

  @get('/wechat-redirect')
  async wechatRedirect (ctx, next) {
    console.log('wechat-redirect')
    await redirect(ctx, next)
  }

  @get('/wechat-oauth')
  async wechatOAuth (ctx, next) {
    await oauth(ctx, next)
  }

  @put('/pay-success')
  async paySuccess (ctx, next) {
    let body = ctx.request.body
    const { id } = body
    if (!id) {
      ctx.body = {succes: false, err: '_id is required'}
    }
    try {
      let order = await api.payment.fetchOrder(id)
      if (!order) {
        return (ctx.body = {
          succes: false,
          err: 'Order not exist'
        })
      }
      order.success = 1
      order = await api.payment.update(order)
      let doctor = await api.doctor.getDoctor(order.doctor)
      doctor.fund += order.totalFee
      doctor = await api.doctor.updateDoctor(doctor)
      ctx.body = {
        success: true,
        data: order
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  @put('/update-payment')
  async updatePayment (ctx, next) {
    let body = ctx.request.body
    const { _id } = body
    if (!_id) {
      return (ctx.body = {succes: false, err: '_id is required'})
    }

    let order = await api.payment.fetchOrder(_id)
    if (!order) {
      return (ctx.body = {
        succes: false,
        err: 'Order not exist'
      })
    }
    _.extend(order, body)
    try {
      order = await api.payment.update(order)
      console.log(order)
      ctx.body = {
        success: true,
        data: order
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  @post('wx/n')
  async payBack(ctx, next) {
    try {
      const data = await getRawBody (ctx.req, {
        length: ctx.length,
        limit: '1mb',
        encoding: ctx.charset
      })
      const content = await util.parseXML(data)
      const xml = content.xml
      if (xml.result_code[0] === 'SUCCESS') {
        const uid = xml.attach[0]
        // 小程序支付成功也会调用这个
        console.log("-----------payBAck--------------")
        console.log(xml)
        let user = await api.user.findUserById(uid)
        console.log('user', user)
        user.role = 'vip'
        api.user.update(user)
        const tradeId = xml.out_trade_no[0]
        console.log('tradeId', tradeId)
        const totalFee = 211
        api.payment.create(user, '公众号', totalFee, tradeId)
      }
      const back = `<xml>
      <return_code><![CDATA[SUCCESS]]></return_code>
      <return_msg><![CDATA[OK]]></return_msg>
    </xml>`
      ctx.status = 200
      ctx.type = 'application/xml'
      ctx.body = back
    } catch (error) {
      console.log(error)
    }
  }
}
