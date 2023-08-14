import api from '../api'
import { controller, get, post, del, put, adminRole } from '../decorator/router'
import xss from 'xss'
import axios from 'axios'

@controller('/msg')
export class OrderController {
  @get('/list')
  @adminRole('admin')
  async fetchMsgs (ctx, next) {
    let { page = 1, limit = 10, search = '' } = ctx.query
    let filter = {}
    try {
      const res = await api.msg.getMsgs(page, limit, filter)
      const total = await api.msg.getCount(filter)
      ctx.body = {
        data: res,
        total: total,
        success: true
      }
    } catch (err) {
      console.log(err)
      ctx.body = {
        success: false
      }
    }
  }

  @get('/my/list')
  async myMsgs (ctx, next) {
    const session = ctx.session
    let user = session.user
    let { page = 1, limit = 10, search = '' } = ctx.query
    try {
      user = await api.user.findUserByUnionId(session.user.unionid)
      if (!user) {
        return (
          ctx.body = {
            success: false
          }
        )
      }
      let filter = {
        user: user._id
      }
      const res = await api.msg.getMsgs(page, limit, filter)
      const total = await api.msg.getCount(filter)
      ctx.body = {
        data: res,
        total: total,
        success: true
      }
    } catch (err) {
      console.log(err)
      ctx.body = {
        success: false
      }
    }
  }

  @post('/save')
  async saveMsg (ctx, next) {
    let msg = ctx.request.body
    const session = ctx.session
    let user = session.user
    try {
      user = await api.user.findUserByUnionId(session.user.unionid)
      if (!user) {
        return (
          ctx.body = {
            success: false
          }
        )
      }
      msg.user = user
      msg.type = msg.type
      msg.phone = xss(msg.phone)
      msg.email = xss(msg.email)
      msg.msg = xss(msg.msg)
      msg = await api.msg.save(msg)
      api.sms.newMsg(msg)
      ctx.body = {
        success: true
      }
    } catch (e) {
      console.log(e)
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  @post('/update')
  async updateMsg (ctx, next) {
    let body = ctx.request.body
    const session = ctx.session
    const user = session.user
    if (!user) {
      return (
        ctx.body = {
          success: false
        }
      )
    }
    let msg = await api.msg.getMsg(body._id)
    if (!msg) {
      return (
        ctx.body = {
          success: false
        }
      )
    }
    try {
      msg.reply = body.reply
      msg = await api.msg.update(msg)
      ctx.body = {
        success: true
      }
    } catch (e) {
      console.log(e)
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  @post('/del')
  @adminRole('admin')
  async delMsgs (ctx, next) {
    const data = ctx.request.body
    try {
      await api.msg.del(data)
      ctx.body = {
        success: true
      }
    } catch (error) {
      console.log(error)
      ctx.body = {
        success: false
      }
    }
  }
}
