import api from '../api'
import { controller, get, post, del, put, adminRole } from '../decorator/router'
import xss from 'xss'
import {sms} from '../config'

@controller('/api')
export class ProductController {
  @get('/products')
  async getProducts (ctx, next) {
    let { limit = 50, status} = ctx.query
    let filters = {}
    if(status) {
      filters.status = status
    }
    const data = await api.product.getProducts(filters, limit)
    ctx.body = {
      data: data,
      success: true
    }
  }

  // 分类列表
  @get('/categories')
  async categories (ctx, next) {
		try {
      let categories = await api.category.findCategories()
			ctx.body = {
				data: categories,
				success: true
			}
		} catch (err) {
      ctx.body = {
        success: false,
        err: err
      }
    }
  }

  // 新建分类
  @post('/category')
  async saveCategory (ctx, next) {
    let category = ctx.request.body
    try {
      category = {
        title: xss(category.title)
      }
      category = await api.category.save(category)
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

  // 分类更新
  @put('/category')
  async updateCategory (ctx, next) {
    let body = ctx.request.body
    const { _id } = body
    if (!_id) {
      return (ctx.body = {succes: false, err: '_id is required'})
    }

    let category = await api.category.getCategory(_id)

    if (!category) {
      return (ctx.body = {
        succes: false,
        err: 'category not exist'
      })
    }
    category.title = xss(body.title)
    try {
      category = await api.category.update(category)
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

  // 分类删除
  @del('/cateogry/:_id')
  async delCateogry (ctx, next) {
    const params = ctx.params
    const { _id } = params
    console.log(_id)
    if (!_id) {
      return (ctx.body = {success: false, err: '_id is required'})
    }
    let category = await api.category.getCategory(_id)

    if (!category) {
      return (ctx.body = {success: false, err: 'cateogry not exist'})
    }

    try {
      await api.category.del(category)
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

  // 医院读取
  @get('/hospitals')
  async hospitals (ctx, next) {
    const { search = '', page = 1, limit = 20} = ctx.query
    console.log(search)
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
  async hospitalsCount (ctx, next) {
    const { search = ''} = ctx.query
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
    console.log('import')
    await api.category.importData()
    ctx.body = {
      success: true
    }
  }

  // 新建医院
  @post('/hospital')
  async saveHospital (ctx, next) {
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
  async updateHospital (ctx, next) {
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

  @get('/userandorders')
  async userandorders (ctx, next) {
    const session = ctx.session
    try {
      // let user = await User.findOne({unionid: session.user.unionid}).exec()
      let user = await api.user.findUserByUnionId(session.user.unionid)
      if (!user) {
        user = await api.user.saveFromSession(session)
      }
      const orders = await api.payment.fetchAllOrders(user)
      console.log(orders)
      ctx.body = {
        data: {user, orders},
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
