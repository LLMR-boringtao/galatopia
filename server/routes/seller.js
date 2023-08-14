import api from '../api'
import { controller, get, post, del, put, adminRole } from '../decorator/router'
import xss from 'xss'
import { nanoid, customAlphabet } from 'nanoid'

// 递归获得销售人员的销售码
async function getCode () {
  // 自定义字母表，只包含大写字母
  const alphabet = 'ABCDEFGHJKLMNOPQRSTUVWXYZ';

  // 指定自定义字母表和标识符长度
  const generateId = customAlphabet(alphabet, 4);

  // 生成只包含大写字母的标识符
  const coupon = generateId();

  // 验证码是否重复
  const res = await api.seller.getByCode(coupon)
  if (res) {
    await getCode()
  } else {
    return coupon
  }
}

@controller('/seller')
export class SellerController {
  @post('/save')
  @adminRole('admin')
  async saveSeller (ctx, next) {
    let seller = ctx.request.body
    try {
      seller = {
        phone: xss(seller.phone),
        name: xss(seller.name),
        work: xss(seller.work),
        coupon: await getCode()
      }
      seller = await api.seller.save(seller)
      const res = await api.sms.sendCoupneToSellor(seller.phone, seller.coupon)
      if (res) {
        const sms = {
          phone: seller.phone,
          type: '教师服务码'
        }
        await api.sms.saveSms(sms)
      }
      ctx.body = {
        success: true,
        data: seller
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  @put('/update')
  @adminRole('admin')
  async updateSeller (ctx, next) {
    let body = ctx.request.body
    const { _id } = body
    if (!_id) {
      return (ctx.body = {succes: false, err: '_id is required'})
    }

    let seller = await api.seller.getSeller(_id)

    if (!seller) {
      return (ctx.body = {
        succes: false,
        err: 'seller not exist'
      })
    }
    seller.name = xss(body.name)
    seller.work = xss(body.work)
    seller.coupon = xss(body.coupon)
    try {
      seller = await api.seller.update(seller)
      ctx.body = {
        success: true,
        data: seller
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  @get('/list')
  @adminRole('admin')
  async getSellerList (ctx, next) {
    const { limit = 20, page = 1, phone = '' } = ctx.query
    let filter = {
      phone: new RegExp(phone + '.*', 'i')
    }
    try {
      const res = await api.seller.getSellerList(filter, page, limit)
      const data = await api.seller.getCount(filter)
      ctx.body = {
        data: res,
        count: data,
        success: true
      }
    } catch (error) {
      console.log(error)
      ctx.body = {
        success: false
      }
    }
  }

  @del('/del/:_id')
  @adminRole('admin')
  async delSeller (ctx, next) {
    const params = ctx.params
    const { _id } = params
    if (!_id) {
      return (ctx.body = {success: false, err: '_id is required'})
    }
    let seller = await api.seller.getSeller(_id)

    if (!seller) {
      return (ctx.body = {success: false, err: 'seller not exist'})
    }
    try {
      await api.seller.del(seller)
      ctx.body = {
        success: true
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  @get('/:_id')
  @adminRole('admin')
  async getSeller (ctx, next) {
    const { _id } = ctx.query
    if (!_id) {
      return (ctx.body = {succes: false, err: '_id is required'})
    }
    try {
      let seller = await api.seller.getSeller(_id)
      ctx.body = {
        success: true,
        body: seller
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  // App Router
  @get('/app/list')
  async getAppList (ctx, next) {
    let { limit = 20, page = 1 } = ctx.query
    try {
      const res = await api.seller.getSellerList(page, limit)
      const data = await api.seller.getCount()
      ctx.body = {
        data: res,
        total: data,
        success: true
      }
    } catch (error) {
      console.log(error)
      ctx.body = {
        success: false
      }
    }
  }

  // App Router
  @get('/app/detail')
  async getAppSeller (ctx, next) {
    const { _id } = ctx.query
    if (!_id) {
      return (ctx.body = {succes: false, err: '_id is required'})
    }
    try {
      let seller = await api.seller.getSeller(_id)
      ctx.body = {
        success: true,
        data: seller
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }
}
