import api from '../api'
import { controller, get, post, del, put, adminRole } from '../decorator/router'
import xss from 'xss'

@controller('/pay')
export class OrderController {
  @get('/list')
  @adminRole('admin')
  async fetchOrders(ctx, next) {
    const {page = 1, limit = 20, search = '', start = '', end = ''} = ctx.query
    let filters = {}
    if (start && end) {
      filters.createdAt = {$gt: start, '$lt': end}
    }
    try {
      const res = await api.payment.getOrders(filters, page, limit)
      const total = await api.payment.getOrdersCount(filters)
      ctx.body = {
        total: total,
        data: res,
        success: true
      }
    } catch (err) {
      console.log(err)
      ctx.body = {
        success: false
      }
    }
  }

  @get('/user/list')
  async fetchUserOrders(ctx, next) {
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
      let filters = {
        user: user._id
      }
      const res = await api.payment.getOrders(1, 100, filters)
      const total = await api.payment.getOrdersCount(filters)
      ctx.body = {
        total: total,
        data: res,
        success: true
      }
    } catch (err) {
      console.log(err)
      ctx.body = {
        success: false
      }
    }
  }

  @post('/del')
  @adminRole('admin')
  async delPay (ctx, next) {
    const data = ctx.request.body
    try {
      await api.payment.del(data)
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
