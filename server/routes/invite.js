import api from '../api'
import { controller, get, post, del, put, adminRole } from '../decorator/router'
import xss from 'xss'

@controller('/invite')
export class InviteController {
  @get('/invites')
  @adminRole('admin')
  async getInvites (ctx, next) {
    let { limit = 20, page = 1, search ='' } = ctx.query
    try {
      const res = await api.invite.getInvites(page, limit, search)
      ctx.body = {
        data: res,
        success: true
      }
    } catch (error) {
      console.log(error)
      ctx.body = {
        success: false
      }
    }
  }

  @get('/invites/count')
  @adminRole('admin')
  async getInvitesCount (ctx, next) {
    let { search = '' } = ctx.query
    try {
      const data = await api.invite.getInvitesCount(search)
      ctx.body = {
        data: data,
        success: true
      }
    } catch (error) {
      console.log(error)
      ctx.body = {
        success: false
      }
    }
  }

  @del('/invite/del/:_id')
  @adminRole('admin')
  async delInvite (ctx, next) {
    const params = ctx.params
    const { _id } = params
    if (!_id) {
      return (ctx.body = {success: false, err: '_id is required'})
    }
    let invite = await api.invite.getInvite(_id)

    if (!invite) {
      return (ctx.body = {success: false, err: 'cateogry not exist'})
    }
    try {
      await api.invite.delInvite(invite)
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

  @get('/import')
  @adminRole('admin')
  async importInvites (ctx, next) {
    await api.invite.importInvites()
    ctx.body = {
      success: true
    }
  }

  @post('accept/vip')
  @adminRole('admin')
  async acceptVip (ctx, next) {
    const body = ctx.request.body
    const { uid } = body
    const user = await api.user.findUserById(uid)
    if (!user) {
      return (ctx.body = {
        success: false,
        err: 'user not exist'
      })
    }
    try {
      user.role = 'vip'
      await user.save()
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

  @get('vip')
  async inviteVip (ctx, next) {
    const session = ctx.session
    try {
      let user = await api.user.findUserByUnionId(session.user.unionid)
      if (!user) {
        user = await api.user.saveFromSession(session)
      }
      let invite = await api.invite.getInviteByUser(user._id)
      if (!invite) {
        invite = {
          user: user
        }
        invite = await api.invite.saveInvite(invite)
      }
      ctx.body = {
        success: true,
        data: invite
      }
    } catch (e) {
      console.log(e)
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  @post('/invite')
  @adminRole('admin')
  async saveInvite (ctx, next) {
    let invite = ctx.request.body
    try {
      invite = {
        title: xss(invite.title)
      }
      invite = await api.invite.saveInvite(invite)
      ctx.body = {
        success: true,
        data: invite
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  @put('/invite')
  @adminRole('admin')
  async updateInvite (ctx, next) {
    let body = ctx.request.body
    const { _id } = body
    if (!_id) {
      return (ctx.body = {succes: false, err: '_id is required'})
    }

    let invite = await api.invite.getInvite(_id)
    if (!invite) {
      return (ctx.body = {
        succes: false,
        err: 'invite not exist'
      })
    }
    invite.title = xss(body.title)
    try {
      use = await api.invite.updateInvite(invite)
      ctx.body = {
        success: true,
        data: invite
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }
}
