import api from '../api'
import {
  controller,
  get,
  post,
  del,
  put,
  adminRole
} from '../decorator/router'

@controller('/fav')
export class FavController {
  @get('/list')
  @adminRole('admin')
  async fetchFavs(ctx, next) {
    let { page = 1, limit = 100, search = '' } = ctx.query
    try {
      const res = await api.fav.getFavs(page, limit)
      const total = await api.fav.getCount()
      ctx.body = {
        success: true,
        data: res,
        total: total
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  @get('/user/list')
  async userFavs(ctx, next) {
    const {type} = ctx.query
    const session = ctx.session
    let user = session.user
    try {
      user = await api.user.findUserByUnionId(session.user.unionid)
      if (!user) {
        return (
          ctx.body = {
            success: false,
            err: 500 // 用户没有登录
          }
        )
      }
      let filter = {
        user: user._id,
        type: type
      }
      const res = await api.fav.getUserFavs(filter, 500)
      ctx.body = {
        success: true,
        data: res
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  @post('school/list')
  async schoolFavs(ctx, next) {
    const {type, page=1, limit=10} = ctx.request.body
    const session = ctx.session
    let user = session.user
    try {
      user = await api.user.findUserByUnionId(session.user.unionid)
      if (!user) {
        return (
          ctx.body = {
            success: false,
            err: 500 // 用户没有登录
          }
        )
      }
      let filter = {
        user: user._id,
        type: type
      }
      const res = await api.fav.getUserFavs(filter, page, limit)
      const total = await api.fav.getUserFavsCount(filter)
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

  @get('check')
  async checkFav (ctx, next) {
    const {type, school} = ctx.query
    const session = ctx.session
    let user = session.user
    if (!school || !type) {
      return (
        ctx.body = {
          success: false,
          err: '数据不完整'
        }
      )
    }
    try {
      user = await api.user.findUserByUnionId(session.user.unionid)
      if (!user) {
        return (
          ctx.body = {
            success: false,
            err: 500 // 用户没有登录
          }
        )
      }
      let filter = {
        user: user._id
      }
      filter.school = school
      filter.type = type

      let res = await api.fav.getFav(filter)
      if (res) {
        ctx.body = {
          success: true
        }
      } else {
        ctx.body = {
          success: false,
          err: '没有'
        }
      }
    } catch (error) {
      ctx.body = {
        success: false,
        err: error
      }
    }
  }

  @post('save')
  async postFav (ctx, next) {
    const session = ctx.session
    let user = session.user
    user = await api.user.findUserByUnionId(session.user.unionid)
    if (!user) {
      return (
        ctx.body = {
          success: false,
          err: 500 // 用户没有登录
        }
      )
    }
    let fav = ctx.request.body
    if (!fav.school || !fav.type) {
      return (
        ctx.body = {
          success: false,
          err: '数据不完整'
        }
      )
    }
    let filter = {
      user: user._id
    }
    filter.school = fav.school
    filter.type = fav.type
    let res = await api.fav.getFav(filter)
    if (res) {
      return (
        ctx.body = {
          success: false,
          err: '已经收藏了'
        }
      )
    }
    fav.user = user._id
    try {
      fav = await api.fav.save(fav)
      ctx.body = {
        success: true,
        data: fav
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
  async updateFav(ctx, next) {
    let body = ctx.request.body
    const {
      _id
    } = body

    if (!_id) {
      return (ctx.body = {
        succes: false,
        err: '_id is required'
      })
    }

    let fav = await api.fav.getFav(_id)

    if (!fav) {
      return (ctx.body = {
        succes: false,
        err: 'fav not exist'
      })
    }

    try {
      fav = await api.fav.update(fav)
      ctx.body = {
        success: true,
        data: fav
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  @del('/del/:_id')
  @adminRole('admin')
  async delFav(ctx, next) {
    const params = ctx.params
    const {
      _id
    } = params

    if (!_id) {
      return (ctx.body = {
        success: false,
        err: '_id is required'
      })
    }

    let fav = await api.fav.getFav(_id)

    if (!fav) {
      return (ctx.body = {
        success: false,
        err: 'product not exist'
      })
    }

    try {
      await api.fav.del(fav)
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

  @del('user/del/:_id')
  async delUserFav(ctx, next) {
    const session = ctx.session
    let user = session.user
    if (!user) {
      return (
        ctx.body = {
          success: false,
          err: 500 // 用户没有登录
        }
      )
    }
    const params = ctx.params
    const {
      _id
    } = params

    if (!_id) {
      return (ctx.body = {
        success: false,
        err: '_id is required'
      })
    }

    let fav = await api.fav.getFavById(_id)
    if (!fav) {
      return (ctx.body = {
        success: false,
        err: 'fav not exist'
      })
    }

    try {
      await api.fav.del(fav)
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
}
