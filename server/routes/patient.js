import api from '../api'
import { controller, get, post, del, put, adminRole } from '../decorator/router'
import xss from 'xss'

@controller('/patient')
export class PatientController {
  @get('/import/data')
  @adminRole('admin')
  async importData(ctx, next) {
    await api.patient.importData()
    ctx.body = {
      success: true
    }
  }

  @get('/patients')
  @adminRole('admin')
  async fetchPatients (ctx, next) {
    const {search = '', page = 1, limit = 20} = ctx.query
    try {
      let patients = await api.patient.getPatients(page, limit, search)
      console.log(patients)
      ctx.body = {
        data: patients,
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

  @get('/patients/count')
  @adminRole('admin')
  async patientsCount (ctx, next) {
    const {search = ''} = ctx.query
    try {
      let res = await api.patient.getPatientsCount(search)
      ctx.body = {
        data: res,
        success: true
      }
    } catch (err) {
      ctx.body = {
        success: false,
        err: err
      }
    }
  }

  @post('/patient')
  async savePatient (ctx, next) {
    let patient = ctx.request.body
    try {
      patient = {
        name: xss(patient.name),
        province: xss(patient.province),
        city: xss(patient.city),
        district: xss(patient.district),
        phone: xss(patient.phone),
        address: xss(patient.address),
        level: xss(patient.level),
        lat: xss(patient.lat),
        lng: xss(patient.lng)
      }
      patient = await api.patient.save(patient)
      ctx.body = {
        success: true,
        data: patient
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  @put('/patient')
  async updatePatient (ctx, next) {
    let body = ctx.request.body
    const { _id } = body
    if (!_id) {
      return (ctx.body = {succes: false, err: '_id is required'})
    }

    let patient = await api.patient.getPatient(_id)

    if (!patient) {
      return (ctx.body = {
        succes: false,
        err: 'patient not exist'
      })
    }
    patient.name = xss(body.name)
    patient.province = xss(body.province)
    patient.city = xss(body.city)
    patient.district = xss(body.district)
    patient.phone = xss(body.phone)
    patient.address = xss(body.address)
    patient.level = xss(body.level)
    patient.lat = xss(body.lat)
    patient.lng = xss(body.lng)
    try {
      patient = await api.patient.update(patient)
      ctx.body = {
        success: true,
        data: patient
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  // ------------ App Router ---------------------
  @get('/app/patients')
  async appPatients (ctx, next) {
    console.log(ctx.query)
    const { since = '', page = 1, limit = 10, doctor, expert, name = '', phone = '' } = ctx.query
    try {
      let filters = {}
      if (since === 'daily') {
        let timeStamp = new Date(new Date().setHours(0, 0, 0, 0))
        filters = {
          'meta.createdAt' : {$gte: timeStamp}
        }
      }

      if (since === 'weekly') {
        filters.meta = {}

        // 按周日为一周的最后一天计算
        let date = new Date()
        // 今天是这周的第几天
        let today = date.getDay()
        // 上周日距离今天的天数（负数表示）
        let stepSunDay = -today + 1
        // 如果今天是周日
        if (today == 0) {
          stepSunDay = -7
        }
        let time = date.getTime()
        let monday = new Date(time + stepSunDay * 24 * 3600 * 1000)
        filters = {
          'meta.createdAt' : {$gte: monday}
        }
      }

      if (since === 'monthly') {
        filters.meta = {}
        let start = new Date()
        start.setDate(1)
        filters = {
          'meta.createdAt': {$gte: start}
        }
      }

      if (name) {
        filters.name = new RegExp(name + '.*', 'i')
      }

      if (phone) {
        filters.phone = new RegExp(phone + '.*', 'i')
      }
      if (doctor) {
        filters.doctor = doctor
      }
      if (expert) {
        filters.expert = expert
      }

      filters.status = {$gte: 1}

      let patients = await api.patient.getAppPatients(filters, page, limit)
      let total = await api.patient.getAppPatientsCount(filters)
      ctx.body = {
        data: patients,
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

  @get('/app/categories')
  async getCategories (ctx, next) {
    try {
      let categories = await api.category.findCategories()
      ctx.body = {
        data: categories,
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

  @get('/app/patient')
  async getPatient (ctx, next) {
    const { id } = ctx.query
    try {
      let patient = await api.patient.getPatient(id)
      ctx.body = {
        data: patient,
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

  @post('/app/save')
  async patientSave (ctx, next) {
    let body = ctx.request.body
    const {_id, phone, belong, expert, doctor} = body
    try {
      if (_id) {
        let patient = await api.patient.getPatient(_id)
        patient.phone = xss(body.phone)
        patient.name = xss(body.name)
        patient.sex = xss(body.sex)
        patient.province = xss(body.province)
        patient.city = xss(body.city)
        patient.district = xss(body.district)
        patient.date = new Date(body.date)
        patient.category = body.category
        patient.testResult = body.testResult
        patient = await api.patient.updatePatient(patient)
        ctx.body = {
          data: patient,
          success: true
        }
      } else {
        let patient = await api.patient.getPatientByPhone(phone)
        if (patient) {
          if (expert) {
            if (patient.expert.indexOf(expert[0]) > -1) {
              ctx.body = {
                err: '患者已存在!',
                success: false
              }
            } else {
              patient.expert.push(expert)
              patient = await api.patient.updatePatient(patient)
              ctx.body = {
                data: patient,
                success: true
              }
            }
          } else if (doctor) {
            if (patient.doctor.indexOf(doctor[0]) > -1) {
              ctx.body = {
                err: '手机号码已存在!',
                success: false
              }
            } else {
              patient.doctor.push(doctor[0])
              patient = await api.patient.updatePatient(patient)
              ctx.body = {
                data: patient,
                success: true
              }
            }
          }
        } else {
          body.phone = xss(body.phone)
          patient = await api.patient.savePatient(body)
          ctx.body = {
            data: patient,
            success: true
          }
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
}
