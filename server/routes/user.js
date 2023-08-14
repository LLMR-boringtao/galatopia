import api from '../api'
import { controller, get, post, required, put, del, adminRole } from '../decorator/router'
import * as _ from 'lodash'
import axios from 'axios'

@controller('/user')
export class userController {
  @post('login')
  // @required({body: ['email', 'password']})
  async login(ctx, next) {
    const { email, password } = ctx.request.body
    console.log(email, password)
    const data = await api.user.login(email, password)
    const { user, match } = data
    console.log('user', user)
    if (match) {
      ctx.session.user = {
        _id: user._id,
        sex: user.sex,
        birthday: user.birthday,
        info: user.info,
        email: user.email,
        role: user.role,
        name: user.name,
        headimgurl: user.headimgurl,
        phone: user.phone
      }

      return (ctx.body = {
        success: true,
        data: {
          sex: user.sex,
          birthday: user.birthday,
          info: user.info,
          email: user.email,
          role: user.role,
          name: user.name,
          headimgurl: user.headimgurl,
          phone: user.phone
        }
      })
    }

    return (ctx.body = {
      success: false,
      err: '密码错误'
    })
  }

  @get('/list')
  async fetchUsers (ctx, next) {
    const {role = '', page = 1, limit = 20, name = ''} = ctx.query
    const filter = {
      name: new RegExp(name + '.*', 'i')
    }
    if (role) {
      filter.role = role
    }
    try {
      let users = await api.user.findUsers(filter, page, limit)
      let total = await api.user.findUsersCount(filter)
      ctx.body = {
        data: users,
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

  @put('/wechat/update')
  async updateUserPhone (ctx, next) {
    const session = ctx.session
    let body = ctx.request.body
    console.log(body)
    const { phone = '', testResult = 0 } = body
    try {
      let user = await api.user.findUserByUnionId(session.user.unionid)
      if (!user) {
        user = await api.user.saveFromSession(session)
      }
      user.phone = phone
      if (testResult > 0) {
        user.testResult = testResult
      }
      user = await api.user.update(user)
      ctx.session.user = {
        _id: user._id,
        sex: user.sex,
        birthday: user.birthday,
        info: user.info,
        email: user.email,
        role: user.role,
        name: user.name,
        headimgurl: user.headimgurl,
        phone: user.phone
      }

      return (ctx.body = {
        success: true,
        data: {
          sex: user.sex,
          birthday: user.birthday,
          info: user.info,
          email: user.email,
          role: user.role,
          name: user.name,
          headimgurl: user.headimgurl,
          phone: user.phone
        }
      })
    } catch (err) {
      ctx.body = {
        success: false,
        err: err
      }
    }
  }

  @post('/save')
  async userSave (ctx, next) {
    const session = ctx.session
    let user = ctx.request.body
    user.password = '999999'
    try {
      const data = await api.user.save(user)
      console.log(data)
      ctx.body = {
        success: true
      }
    } catch (err) {
      ctx.body = {
        success: false,
        err: err
      }
    }
  }

  @put('api/update')
  async apiUpdate (ctx, next) {
    const session = ctx.session
    let body = ctx.request.body
    console.log(body)
    try {
      let user = await api.user.findUserById(session.user._id)
      if (!user) {
        return (ctx.body = {
          success: false,
          err: '用户不存在'
        })
      }
      user.phone = body.phone
      user.sex = body.sex
      user.email = body.email
      user.name = body.name
      user.headimgurl = body.headimgurl
      user.address = body.address
      user.info = body.info
      user.birthday = body.birthday
      // _.extend(user, body)
      const data = await api.user.updateUserRole(user)
      console.log(data)
      ctx.body = {
        data: data,
        success: true
      }
    } catch (err) {
      ctx.body = {
        success: false,
        err: err
      }
    }
  }

  @put('update')
  async updateuserinfo (ctx, next) {
    let body = ctx.request.body
    try {
      let user = await api.user.findUserById(body._id)
      if (!user) {
        return ctx.body = {
          success: false,
          err: '用户不存在'
        }
      }
      user.phone = body.phone
      user.sex = body.sex
      user.email = body.email
      user.name = body.name
      user.headimgurl = body.headimgurl
      user.address = body.address
      user.info = body.info
      user.birthday = body.birthday
      // _.extend(user, body)
      const data = await api.user.updateUserRole(user)
      ctx.body = {
        data: data,
        success: true
      }
    } catch (err) {
      ctx.body = {
        success: false,
        err: err
      }
    }
  }

  @get('wechat/info')
  async userInfoWechat (ctx, next) {
    const session = ctx.session
    try {
      let user = await api.user.findUserByUnionId(session.user.unionid)
      if (user) {
        ctx.body = {
          data: user,
          success: true
        }
      } else {
        ctx.body = {
          success: false
        }
      }
    } catch (err) {
      ctx.body = {
        success: false
      }
    }
  }

  @get('ybm/total')
  async userYbmTotaal (ctx, next) {
    const session = ctx.session
    try {
      let user = await api.user.findUserByUnionId(session.user.unionid)
      if (user) {
        const filter = {
          user: user._id,
          createdAt: {
            $gte: new Date("2023-06-01T00:00:00Z")
          }
        }
        const total = await api.ybm.totalByUser(filter)
        console.log(total)
        ctx.body = {
          data: total,
          success: true
        }
      } else {
        ctx.body = {
          success: false
        }
      }
    } catch (err) {
      ctx.body = {
        success: false
      }
    }
  }

  // 更新用户数据
  @put('updateuser')
  async updateuser (ctx, next) {
    const session = ctx.session
    let body = ctx.request.body
    try {
      let user = await api.user.findUserByUnionId(session.user.unionid)
      if (!user) {
        user = await api.user.saveFromSession(session)
      }
      _.extend(user, body)
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
  // 保存商务申请码
  @post('invitcode')
  async invitcode (ctx, next) {
    let code = ctx.request.body
    try {
      code = await api.user.saveInviCode(code)
      console.log(code)
      ctx.body = {
        success: true,
        data: code
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  // 读取商务申请码
  @get('invitcodes')
  async invitcodes (ctx, next) {
    try {
      let codes = await api.user.getInvitCodes()
      ctx.body = {
        data: codes,
        success: true
      }
    } catch (err) {
      ctx.body = {
        success: false,
        err: err
      }
    }
  }
  // 删除申请码
  @del('invitcode-del/:_id')
  async invitcodedel (ctx, next) {
    const params = ctx.params
    const { _id } = params
    if (!_id) {
      return (ctx.body = {success: false, err: '_id is required'})
    }
    let code = await api.user.getInvitCodebyId(_id)
    if (!code) {
      return (ctx.body = {success: false, err: 'Code not exist'})
    }
    try {
      await api.user.invitCodeDel(code)
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
  // 销售医生列表
  @get('mydoctorslist')
  async mydoctors (ctx, next) {
    const session = ctx.session
    try {
      let user = await api.user.findUserByUnionId(session.user.unionid)
      if (!user) {
        user = await api.user.saveFromSession(session)
      }
      let doctors = await api.user.getMyDoctorsofSellor(user._id)
      ctx.body = {
        data: doctors,
        success: true
      }
    } catch (err) {
      ctx.body = {
        success: false,
        err: err
      }
    }
  }

  // 读取检查结果
  @get('check/results')
  async checkResults (ctx, next) {
    const { phone } = ctx.query
    console.log(phone)

    try {
      // const url = 'http://test.china-op.cn/api/check/results?phone=' + phone
      const url = 'http://app.china-op.cn/check/results?phone=' + phone
      const res = await axios.get(url)
      console.log(res)
      if (res.data.success) {
        return (ctx.body = {
          success: true,
          data: res.data.data
        })
      } else {
        return (ctx.body = {
          success: false
        })
      }
    } catch (e) {
      return (ctx.body = {
        success: false,
        err: e
      })
    }
  }

  // 读取检查结果
  @get('info')
  async userBindDoctor (ctx, next) {
    const session = ctx.session
    console.log(session.user)
    try {
      let user = await api.user.findUserById(session.user._id)
      if (!user) {
        return (ctx.body = {
          success: false,
          err: '用户不存在'
        })
      }
      ctx.body = {
        data: user,
        success: true
      }
    } catch (err) {
      ctx.body = {
        success: false,
        err: err
      }
    }
  }

  @post('chat')
  async chat (ctx, next) {
    let body = ctx.request.body
    console.log(body)
    try {
      const res = await axios({
        method: 'post',
        url: body.url,
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json'
        },
        data: body
      })
      console.log(res.data)
      ctx.body = {
        success: true,
        data: res.data
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }
}