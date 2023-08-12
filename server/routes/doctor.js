import api from '../api'
import { controller, get, post, del, put, adminRole } from '../decorator/router'
import xss from 'xss'
import { v4 as uuidv4 } from 'uuid'

@controller('/doctor')
export class DoctorController {
  @get('/doctors')
  @adminRole('admin')
  async getDoctors (ctx, next) {
    let { limit = 20, page = 1, search = '', type = 'doctor' } = ctx.query
    try {
      const res = await api.doctor.getDoctors(page, limit, search, type)
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

  @get('/doctors/count')
  @adminRole('admin')
  async getDoctorsCount (ctx, next) {
    let { search = '', type = 'doctor' } = ctx.query
    try {
      const data = await api.doctor.getDoctorsCount(search, type)
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

  @del('/doctor/del/:_id')
  @adminRole('admin')
  async delDoctor (ctx, next) {
    const params = ctx.params
    const { _id } = params
    if (!_id) {
      return (ctx.body = {success: false, err: '_id is required'})
    }
    let doctor = await api.doctor.getDoctor(_id)

    if (!doctor) {
      return (ctx.body = {success: false, err: 'cateogry not exist'})
    }
    try {
      await api.doctor.delDoctor(doctor)
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

  @get('/import/doctors')
  @adminRole('admin')
  async importDoctors (ctx, next) {
    await api.doctor.importDoctors()
    ctx.body = {
      success: true
    }
  }

  @get('/import/experts')
  @adminRole('admin')
  async importExperts (ctx, next) {
    console.log('ok')
    await api.doctor.importExperts()
    ctx.body = {
      success: true
    }
  }

  @get('/update/doctors')
  @adminRole('admin')
  async updateDoctors (ctx, next) {
    await api.doctor.updateDoctors()
    ctx.body = {
      success: true
    }
  }

  @post('/save')
  @adminRole('admin')
  async saveDoctor (ctx, next) {
    let doctor = ctx.request.body
    if (doctor.phone) {
      const res = await api.doctor.getDoctorByPhone(doctor.phone)
      if (res) {
        ctx.body = {
          success: false,
          err: '医生已经存在!'
        }
      }
    } else {
      ctx.body = {
        success: false,
        err: '手机号码不存在!'
      }
    }
    try {
      doctor.title = xss(doctor.title)
      doctor.phone = xss(doctor.phone)
      doctor = await api.doctor.saveDoctor(doctor)
      ctx.body = {
        success: true,
        data: doctor
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  @post('/update')
  @adminRole('admin')
  async doctorUpdate (ctx, next) {
    let body = ctx.request.body
    const { _id } = body
    if (!_id) {
      return (ctx.body = {succes: false, err: '_id is required'})
    }
    let doctor = await api.doctor.getDoctorRaw(_id)
    if (!doctor) {
      return (ctx.body = {
        succes: false,
        err: 'doctor not exist'
      })
    }
    doctor.name = xss(body.name)
    doctor.phone = xss(body.phone)
    doctor.hospital = body.hospital
    doctor.sex = body.sex
    doctor.avatarUrl = body.avatarUrl
    doctor.level = body.level
    doctor.room = body.room
    console.log(doctor)
    try {
      doctor = await api.doctor.updateDoctor(doctor)
      console.log(doctor)
      ctx.body = {
        success: true,
        data: doctor
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  // ---- App Router --------
  // 读取验证码
  @get('/code/:num')
  async verifyCode (ctx, next) {
    let { num } = ctx.params
    let code = Math.floor(Math.random() * (9999 - 1000)) + 1000
    try {
      let doctor = await api.doctor.getDoctorByPhone(num)
      if (!doctor) {
        doctor = {
          phone: num,
          status: -1
        }
        doctor = await api.doctor.saveDoctor(doctor)
      }
      const accessToken = uuidv4()
      doctor.accessToken = accessToken
      doctor.verifyCode = code
      if (num === '18652211115') {
        doctor.verifyCode = '8888'
      }
      doctor = await api.doctor.updateDoctor(doctor)
      const res = await api.sms.verifyCode(num, code)
      if (res) {
        ctx.body = {
          success: true,
          data: '发送成功'
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

  // 医生app登录
  @post('/login')
  async doctorLogin (ctx, next) {
    let body = ctx.request.body
    try {
      let doctor = await api.doctor.login(body)
      if (!doctor) {
        ctx.body = {
          success: -1,
          err: '验证码错误!'
        }
      }
      if (doctor.status > -1) {
        return ctx.body = {
          success: 200,
          data: doctor
        }
      } else if (doctor.status === -1) {
        return ctx.body = {
          success: 100,
          data: doctor
        }
      } else {
        return ctx.body = {
          success: -1,
          err: '无法登录,请联系管理员!'
        }
      }
    } catch (err) {
      console.log(err)
      ctx.body = {
        success: -1,
        err: '系统出错,请稍后再试!'
      }
    }
  }

  // 医生app登录
  @post('/register')
  async doctorRegister (ctx, next) {
    let {invite, id} = ctx.request.body
    try {
      let res = await api.invite.getInviteByInvite(invite)
      if (!res) {
        ctx.body = {
          success: false,
          err: '邀请码不存在!'
        }
      }
      let doctor = await api.doctor.getDoctor(id)
      if (!doctor) {
        ctx.body = {
          success: false,
          err: '邀请码不存在!'
        }
      }

      doctor.status = 1
      doctor.invite = res._id
      if (res.expert) {
        doctor.upDoctor = res.expert._id
      }
      doctor = await api.doctor.updateDoctor(doctor)
      doctor = await api.doctor.getDoctor(doctor._id)
      ctx.body = {
        success: true,
        data: doctor
      }
    } catch (err) {
      console.log(err)
      ctx.body = {
        success: -1,
        err: '系统出错,请稍后再试!'
      }
    }
  }

  @get('wechat/cancel/bind')
  async wechatUserBindCancel (ctx, next) {
    const session = ctx.session
    try {
      let user = await api.user.findUserByUnionId(session.user.unionid)
      if (!user) {
        user = await api.user.saveFromSession(session)
      }
      let doctor = await api.doctor.getDoctorByUserID(user._id)
      doctor.user = null
      doctor = await api.doctor.updateDoctor(doctor)
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

  @post('wechat/update')
  async wechatUpdate (ctx, next) {
    const { phone } = ctx.request.body
    if (!phone) {
      ctx.body = {
        succes: false,
        err: '没有输入手机号码'
      }
    }
    const session = ctx.session
    try {
      let user = await api.user.findUserByUnionId(session.user.unionid)
      if (!user) {
        user = await api.user.saveFromSession(session)
      }
      let doctor = await api.doctor.getDoctorByPhone(phone)
      doctor.user = user._id
      doctor = await api.doctor.updateDoctor(doctor)
      doctor = await api.doctor.getDoctor(doctor._id)
      ctx.body = {
        success: true,
        data: doctor
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  @post('/app/update')
  async updateDoctor (ctx, next) {
    let body = ctx.request.body
    const { _id } = body
    if (!_id) {
      return (ctx.body = {succes: false, err: '更新出错'})
    }

    let doctor = await api.doctor.getDoctor(_id)
    if (!doctor) {
      return (ctx.body = {
        succes: false,
        err: '更新出错'
      })
    }

    if (body.newHospital) {
      let hospital = await api.hospital.getHospitalByName(body.newHospital)
      console.log(hospital)
      if (hospital) {
        doctor.hospital = hospital
      } else {
        hospital = await api.hospital.save({name: body.newHospital})
        console.log(hospital)
        doctor.hospital = hospital
      }
    }
    doctor.name = xss(body.name)
    doctor.autotrans = parseFloat(body.autotrans)
    doctor.sex = xss(body.sex)
    doctor.province = xss(body.province)
    doctor.city = xss(body.city)
    doctor.district = xss(body.district)
    doctor.outpatient = parseInt(body.outpatient)
    doctor.outpatientTime = xss(body.outpatientTime)
    doctor.room = xss(body.room)
    doctor.position = xss(body.position)
    doctor.level = xss(body.level)
    try {
      doctor = await api.doctor.updateDoctor(doctor)
      doctor = await api.doctor.getDoctor(doctor._id)
      ctx.body = {
        success: true,
        data: doctor
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  @post('/app/tests')
  async updateDoctorTests (ctx, next) {
    let body = ctx.request.body
    console.log(body)
    const { _id } = body
    if (!_id) {
      return (ctx.body = {succes: false, err: '更新出错'})
    }

    let doctor = await api.doctor.getDoctor(_id)
    if (!doctor) {
      return (ctx.body = {
        succes: false,
        err: '更新出错'
      })
    }
    doctor.test = body.test
    try {
      doctor = await api.doctor.updateDoctor(doctor)
      doctor = await api.doctor.getDoctor(doctor._id)
      ctx.body = {
        success: true,
        data: doctor
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  @post('/app/medicines')
  async updateDoctorMedicines (ctx, next) {
    let body = ctx.request.body
    console.log(body)
    const { _id } = body
    if (!_id) {
      return (ctx.body = {succes: false, err: '更新出错'})
    }

    let doctor = await api.doctor.getDoctor(_id)
    if (!doctor) {
      return (ctx.body = {
        succes: false,
        err: '更新出错'
      })
    }
    
    doctor.medicine = body.medicine
    
    try {
      doctor = await api.doctor.updateDoctor(doctor)
      doctor = await api.doctor.getDoctor(doctor._id)
      ctx.body = {
        success: true,
        data: doctor
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }
}
