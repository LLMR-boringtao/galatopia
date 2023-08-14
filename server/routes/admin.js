import api from '../api'
import { controller, get, post, required, put, adminRole } from '../decorator/router'
import xss from 'xss'

@controller('/admin')
export class adminController {
  @post('login')
  @required({body: ['phone', 'password']})
  async login(ctx, next) {
    const { phone, password } = ctx.request.body
    const data = await api.admin.login(phone, password)
    const { user, match } = data

    if (match) {
      if (user.role === 'user') {
        return (ctx.body = {
          success: false,
          err: '来错地方了'
        })
      }

      ctx.session.user = {
        _id: user._id,
        email: user.email,
        role: user.role,
        nickname: user.nickname,
        headimgurl: user.headimgurl,
        phone: user.phone
      }

      return (ctx.body = {
        success: true,
        data: {
          email: user.email,
          nickname: user.nickname,
          headimgurl: user.headimgurl,
          phone: user.phone,
          role: user.role
        }
      })
    }

    return (ctx.body = {
      success: false,
      err: '密码错误'
    })
  }

  @post('logout')
  async logout(ctx, next) {
    ctx.session = null
    ctx.body = {
      success: true
    }
  }

  @get('payments')
  async getPayments(ctx, next) {
    let { start, end, success, limit = 10, page = 1 } = ctx.query
    let filters = {}
    if (start && end) {
      filters = {
        'meta.createdAt' : {
          '$gte': start,
          '$lte': end
        }
      }
    }
    if (success) {
      filters.success = Number(success)
    }

    if (sellor) {
      filters.sellor = sellor
    }
    const data = await api.payment.fetchPayments(filters, page, limit)
    ctx.body = {
      success: true,
      data: data
    }
  }

  @get('sellorpayments')
  async sellorPayments(ctx, next) {
    let session = ctx.session
    let { start, end, success, limit, page } = ctx.query
    let filters = {}
    if (start && end) {
      filters = {
        'meta.createdAt' : {
          '$gte': start,
          '$lte': end
        }
      }
    }
    if (success) {
      filters.success = Number(success)
    }
    let user = session.user
    if (!user._id) {
      user = await api.user.findUserByUnionId(session.user.unionid)
      if (!user) {
        user = await api.user.saveFromSession(session)
      }
    }

    filters.sellor = user._id

    page = page || 1

    limit = limit || 10
    const data = await api.payment.fetchPayments(filters, page, limit)

    ctx.body = {
      success: true,
      data: data
    }
  }

  // 重置密码
  @post('resetpassword')
  async resetPassword(ctx, next) {
    let user = ctx.request.body
    try {
      let data = await api.user.findUserByPhone(user.phone)
      data.password = xss(user.password) || 'Admin123456'
      data = await api.user.updateUserRole(data)
      console.log(data)
      ctx.body = {
        data: data,
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

  @post('user/update/role')
  @adminRole('admin')
  async userRole (ctx, next) {
    console.log('ok')
    let body = ctx.request.body
    const _id = body._id
    const role = body.role
    try {
      // let user = await User.findOne({unionid: session.user.unionid}).exec()
      let user = await api.user.findUserById(_id)
      user.role = role
      const data = await api.user.updateUserRole(user)
      ctx.body = {
        data: data,
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
}
