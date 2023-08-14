import api from '../api'
import { controller, get, post, del, put, adminRole } from '../decorator/router'
import xss from 'xss'
import XLSX from 'xlsx'

@controller('/zy')
export class ZyController {
  @get('api/list')
  @adminRole('admin')
  async fetchApiZys (ctx, next) {
    let { page = 1, limit = 20, search = '' } = ctx.query
    let filter = {
      name: new RegExp(search + '.*', 'i')
    }
    try {
      const res = await api.zy.getZys(page, limit, filter)
      const total = await api.zy.getCount(filter)
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

  @post('wechat/list')
  async fetchZys (ctx, next) {
    let {page = 1, limit = 20, name = ''} = ctx.request.body
    console.log(name)
    let filter = {
      name: new RegExp(name + '.*', 'i')
    }
    try {
      const res = await api.zy.getZys(page, limit, filter)
      console.log(res)
      const total = await api.zy.getCount(filter)
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

  @get('get/info')
  async fetchZyInfo (ctx, next) {
    const { id } = ctx.query
    if (!id) return (ctx.body = {succes: false, err: 'id is required'})
    try {
      let data = await api.zy.getZyInfo(id)
      const pre = await api.product.getPre(id)
      const next = await api.product.getNext(id)
      ctx.body = {
        data: data,
        pre: pre,
        next: next,
        success: true
      }
    } catch (err) {
      console.log(err)
      ctx.body = {
        success: false
      }
    }
  }

  @get('schools')
  async fetchZySchools (ctx, next) {
    const { _id, page = 1, limit = 10 } = ctx.query
    if (!_id) return (ctx.body = {succes: false, err: 'id is required'})
    try {
      let data = await api.zypm.getZySchools(_id, page, limit)
      let total = await api.zypm.getZySchoolsCount(_id)
      ctx.body = {
        data: data,
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

  @get('/info')
  async fetchZy (ctx, next) {
    const { _id } = ctx.query
    if (!_id) return (ctx.body = {succes: false, err: '_id is required'})
    try {
      let data = await api.zy.getZy(_id)
      ctx.body = {
        data: data,
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
  @adminRole('admin')
  async saveZy (ctx, next) {
    let zy = ctx.request.body
    try {
      zy.name = zy.name
      zy.content = zy.content
      zy.files = zy.files
      zy = await api.zy.save(zy)
      ctx.body = {
        success: true,
        data: zy
      }
    } catch (e) {
      console.log(e)
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  @put('/update')
  @adminRole('admin')
  async updateZy (ctx, next) {
    const body = ctx.request.body
    const { _id } = body
    if (!_id) {
      return (ctx.body = {succes: false, err: '_id is required'})
    }

    try {
      let zy = await api.zy.getZy(_id)
      if (!zy) {
        return (ctx.body = {
          succes: false,
          err: 'zy not exist'
        })
      }
      zy.title = xss(body.title)
      zy.content = body.content
      zy.files = body.files
      zy.status = body.status
      zy = await api.zy.update(zy)
      ctx.body = {
        data: zy,
        success: true
      }
    } catch (error) {
      ctx.body = {
        success: false
      }
    }
  }

  @post('/del')
  @adminRole('admin')
  async delZys (ctx, next) {
    const data = ctx.request.body
    try {
      await api.zy.del(data)
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
