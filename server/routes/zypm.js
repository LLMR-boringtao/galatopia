import api from '../api'
import { controller, get, post, del, put, adminRole } from '../decorator/router'
import xss from 'xss'
import XLSX from 'xlsx'

@controller('/zypm')
export class ZypmController {
  @get('api/list')
  @adminRole('admin')
  async fetchApiZypms (ctx, next) {
    let { page = 1, limit = 20, name = '' } = ctx.query
    let filter = {
      zyName: new RegExp(name + '.*', 'i')
    }
    try {
      const res = await api.zypm.getZypms(page, limit, filter)
      const total = await api.zypm.getCount(filter)
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
  async fetchZypms (ctx, next) {
    let {page = 1, limit = 20, school = '', subject = '', zdf = 0 , sf = '' , zymc = ''} = ctx.request.body
    let filter = {
      school: new RegExp(school + '.*', 'i')
    }
    try {
      const res = await api.zypm.getZypms(page, limit, filter)
      const total = await api.zypm.getCount(filter)
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
  async fetchZypmInfo (ctx, next) {
    const { id } = ctx.query
    if (!id) return (ctx.body = {succes: false, err: 'id is required'})
    try {
      let data = await api.zypm.getZypmInfo(id)
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

  @get('/info')
  async fetchZypm (ctx, next) {
    const { _id } = ctx.query
    if (!_id) return (ctx.body = {succes: false, err: '_id is required'})
    try {
      let data = await api.zypm.getZypm(_id)
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
  async saveZypm (ctx, next) {
    let zypm = ctx.request.body
    try {
      zypm.name = zypm.name
      zypm.content = zypm.content
      zypm.files = zypm.files
      zypm = await api.zypm.save(zypm)
      ctx.body = {
        success: true,
        data: zypm
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
  async updateZypm (ctx, next) {
    const body = ctx.request.body
    const { _id } = body
    if (!_id) {
      return (ctx.body = {succes: false, err: '_id is required'})
    }

    try {
      let zypm = await api.zypm.getZypm(_id)
      if (!zypm) {
        return (ctx.body = {
          succes: false,
          err: 'zypm not exist'
        })
      }
      zypm.title = xss(body.title)
      zypm.content = body.content
      zypm.files = body.files
      zypm.status = body.status
      zypm = await api.zypm.update(zypm)
      ctx.body = {
        data: zypm,
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
  async delZypms (ctx, next) {
    const data = ctx.request.body
    try {
      await api.zypm.del(data)
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
        let nameTag = item.name // 数据中带有专业二字
        let zypm = {
          bc: item.bc,
          schoolName: item.schoolName,
          pj: item.pj,
          pm: item.pm * 1
        }
        let name = nameTag.slice(0, -2) // 去掉专业二字
        console.log(name)
        zypm.zyName = name
        let zy = await api.zy.getByName(name.trim())
        if (!zy) {  
          zy = await api.zy.save({name: name.trim()})
        }
        zypm.zy = zy
        let schoolName = item.schoolName
        let school = await api.school.getByName(schoolName.trim())
        console.log(school)
        if (school) {
          zypm.school = school._id
        }
        zypm = await api.zypm.save(zypm)
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
