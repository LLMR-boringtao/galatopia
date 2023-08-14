import api from '../api'
import { controller, get, post, del, put, adminRole } from '../decorator/router'
import { v4 as uuidv4 } from 'uuid'

@controller('/sms')
export class SmsController {
  @get('/list')
  async fetchSmses(ctx, next) {
    const {phone = '', page = 1, limit = 20} = ctx.query
    try {
      let contents = await api.sms.getList(page, limit, phone)
      let total = await api.sms.getListCount(phone)
      ctx.body = {
        data: contents,
        total: total,
        success: true
      }
    } catch (err) {
      console.log(err)
      ctx.body = {
        success: false,
        err: err
      }
    }
  }

  @get('/wechat/verify/:num')
  async verifyCode (ctx, next) {
    const user = ctx.session.user
    console.log(user)
    let { num } = ctx.params
    let code = Math.floor(Math.random() * (9999 - 1000)) + 1000
    try {
      const res = await api.sms.verifyCode(num, code)
      if (res) {
        ctx.body = {
          success: true,
          code: code,
          data: code
        }
      } else {
        ctx.body = {
          success: false,
          err: '验证码发送失败!'
        }
      }
    } catch (err) {
      console.log(err)
      ctx.body = {
        success: false,
        err: '验证码错误!'
      }
    }
  }

  @get('/wechat/get/coupon/:num')
  async verifyCode (ctx, next) {
    const user = ctx.session.user
    let { num } = ctx.params
    try {
      // 默认获得我的Coupon
      let data = await api.seller.getCouponByPhone('18652211115')
      console.log(data)
      const res = await api.sms.sendCouponToUser(num, data.coupon)
      if (res) {
        const sms = {
          phone: num,
          type: '考生优惠码'
        }
        // 保存短信记录
        api.sms.saveSms(sms)
        ctx.body = {
          success: true,
          data: data
        }
      } else {
        ctx.body = {
          success: false,
          err: '验证码发送失败!'
        }
      }
    } catch (err) {
      console.log(err)
      ctx.body = {
        success: false,
        err: '验证码错误!'
      }
    }
  }

  @get('/app/sms')
  async fetchSms (ctx, next) {
    const { doctor } = ctx.query
    console.log(doctor)
    try {
      const res = await api.sms.getSms(doctor)
      let total = await api.sms.getSmsCount(doctor)
      ctx.body = {
        success: true,
        total: total,
        data: res
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  @post('/app/doctor/sms')
  async doctorSms (ctx, next) {
    const { doctor, filter, msg, type } = ctx.request.body
    let filters = {}
    if (type === 'doctor') {
      filters.doctor = doctor
    } else {
      filters.expert = doctor
    }
    if (filter === 1) {
      filters.$and = [{"testResult":{"$gte": -3.5}},{"testResult":{"$lt": -2.5}}]
    } else if (filter === 2) {
      filters.$and = [{"testResult":{"$gte": -5}},{"testResult":{"$lt": -3.5}}]
    } else if (filter === 3) {  
      filters.testResult = {"$lte": -5}
    }
    try {
      let res = await api.patient.getPatientByTest(filters)
      let result = []
      if (res && res.length > 0) {
        for (let item of res) {
          result.push(item.phone)
        }
      }
      if (result.length > 0) {
        res = await api.sms.mulSms(msg, result)
      }
      if (res.total_count > 0) {
        let data = {
          doctor: doctor,
          msg: msg,
          patients: result,
          total_count: res.total_count,
          total_fee: res.total_fee
        }
        data = await api.sms.saveSms(data)
        ctx.body = {
          success: true,
          data: data
        }
      } else {
        ctx.body = {
          success: false,
          err: '系统错误'
        }
      }
    } catch (e) {
      console.log(e)
      ctx.body = {
        success: false,
        err: '系统错误'
      }
    }
  }
}
