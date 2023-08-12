import api from '../api'
import { controller, get, post, del, put, adminRole } from '../decorator/router'
import xss from 'xss'
import XLSX from 'xlsx'

@controller('/zsjz')
export class ZsjzController {
  @get('api/list')
  @adminRole('admin')
  async fetchApiZsjzs (ctx, next) {
    let { page = 1, limit = 20, name = '' } = ctx.query
    let filter = {
      schoolName: new RegExp(name + '.*', 'i')
    }
    try {
      const res = await api.zsjz.getZsjzs(page, limit, filter)
      const total = await api.zsjz.getCount(filter)
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
  async fetchZsjzs (ctx, next) {
    let {page = 1, limit = 20, name = ''} = ctx.request.body
    let filter = {
      schoolName: new RegExp(name + '.*', 'i')
    }
    try {
      const res = await api.zsjz.getZsjzs(page, limit, filter)
      const total = await api.zsjz.getCount(filter)
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

  @get('info')
  async fetchZsjzInfo (ctx, next) {
    const { id } = ctx.query
    if (!id) return (ctx.body = {succes: false, err: 'id is required'})
    try {
      let data = await api.zsjz.getZsjzInfo(id)
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

  @get('/zsjz')
  async fetchZsjz (ctx, next) {
    const { _id } = ctx.query
    if (!_id) return (ctx.body = {succes: false, err: '_id is required'})
    try {
      let data = await api.zsjz.getZsjzBySchool(_id)
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
  async saveZsjz (ctx, next) {
    let zsjz = ctx.request.body
    try {
      zsjz.name = zsjz.name
      zsjz.content = zsjz.content
      zsjz.files = zsjz.files
      zsjz = await api.zsjz.save(zsjz)
      ctx.body = {
        success: true,
        data: zsjz
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
  async updateZsjz (ctx, next) {
    const body = ctx.request.body
    const { _id } = body
    if (!_id) {
      return (ctx.body = {succes: false, err: '_id is required'})
    }

    try {
      let zsjz = await api.zsjz.getZsjz(_id)
      if (!zsjz) {
        return (ctx.body = {
          succes: false,
          err: 'zsjz not exist'
        })
      }
      zsjz.title = xss(body.title)
      zsjz.content = body.content
      zsjz.files = body.files
      zsjz.status = body.status
      zsjz = await api.zsjz.update(zsjz)
      ctx.body = {
        data: zsjz,
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
  async delZsjzs (ctx, next) {
    const data = ctx.request.body
    try {
      await api.zsjz.del(data)
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

  @post('/import')
  async fetchImport (ctx, next) {
    const { fileName } = ctx.request.body
    try {
      const workbook = XLSX.readFile(`./files/${fileName}`)
      const sheet_name_list = workbook.SheetNames
      const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
      for (let item of xlData) {
        let zsjz = {
          year: item.year,
          schoolName: item.schoolName,
          body: item.body,
          name: item.name,
          publised: new Date(item.publised)
        }
        let schoolName = item.schoolName
        let school = await api.school.getByName(schoolName.trim())
        console.log(school)
        if (school) {
          zsjz.school = school._id
        }
        zsjz = await api.zsjz.save(zsjz)
      }
      ctx.body = {
        success: true
      }
    } catch (err) {
      console.log(err)
      ctx.body = {
        success: false
      }
    }
  }
}
