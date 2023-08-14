import api from '../api'
import { controller, get, post, del, put, adminRole } from '../decorator/router'
import xss from 'xss'


@controller('/hospital')
export class ProductController {
  // 医院读取
  @get('/hospitals')
  async hospitals(ctx, next) {
    const {search = '', page = 1, limit = 20} = ctx.query
    try {
      let hospitals = await api.hospital.findHospitals(page, limit, search)
      ctx.body = {
        data: hospitals,
        success: true
      }
    } catch (err) {
      ctx.body = {
        success: false,
        err: err
      }
    }
  }

  // 医院读取
  @get('/list')
  async fetchHospitals(ctx, next) {
    const {search = '', page = 1, limit = 20} = ctx.query
    try {
      let hospitals = await api.hospital.findHospitals(page, limit, search)
      ctx.body = {
        data: hospitals,
        success: true
      }
    } catch (err) {
      ctx.body = {
        success: false,
        err: err
      }
    }
  }

  @get('/hospitals/count')
  async hospitalsCount(ctx, next) {
    const {search = ''} = ctx.query
    try {
      let res = await api.hospital.hospitalsCount(search)
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

  @get('/importhospitaldata')
  @adminRole('admin')
  async importHostitals(ctx, next) {
    api.hospital.importHostitals()
    ctx.body = {
      success: true
    }
  }

  @get('/import/categories')
  @adminRole('admin')
  async importCategories(ctx, next) {
    await api.category.importData()
    ctx.body = {
      success: true
    }
  }

  // 新建医院
  @post('/hospital')
  async saveHospital(ctx, next) {
    let hospital = ctx.request.body
    try {
      hospital = {
        name: xss(hospital.name),
        province: xss(hospital.province),
        city: xss(hospital.city),
        district: xss(hospital.district),
        phone: xss(hospital.phone),
        address: xss(hospital.address),
        level: xss(hospital.level),
        lat: xss(hospital.lat),
        lng: xss(hospital.lng)
      }
      hospital = await api.hospital.save(hospital)
      ctx.body = {
        success: true,
        data: category
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  // 医院更新
  @put('/hospital')
  async updateHospital(ctx, next) {
    let body = ctx.request.body
    console.log(body)
    const { _id } = body
    if (!_id) {
      return (ctx.body = {succes: false, err: '_id is required'})
    }

    let hospital = await api.hospital.getHospital(_id)

    if (!hospital) {
      return (ctx.body = {
        succes: false,
        err: 'hospital not exist'
      })
    }
    hospital.name = xss(body.name)
    hospital.province = xss(body.province)
    hospital.city = xss(body.city)
    hospital.district = xss(body.district)
    hospital.phone = xss(body.phone)
    hospital.address = xss(body.address)
    hospital.level = xss(body.level)
    hospital.lat = xss(body.lat)
    hospital.lng = xss(body.lng)
    try {
      hospital = await api.hospital.update(hospital)
      ctx.body = {
        success: true,
        data: hospital
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  // App Routers
  @get('/app/hospital')
  async appHospital(ctx, next) {
    const { id } = ctx.query
    console.log(id)
    try {
      let hospital = await api.hospital.getHospital(id)
      ctx.body = {
        data: hospital,
        success: true
      }
    } catch (err) {
      ctx.body = {
        success: false,
        err: err
      }
    }
  }

  @get('/app/search')
  async hospitalSearch(ctx, next) {
    const { search } = ctx.query
    try {
      let res = await api.hospital.searchHospitals(search)
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

}
