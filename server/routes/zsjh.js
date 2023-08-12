import api from '../api'
import { controller, get, post, del, put, adminRole } from '../decorator/router'
import xss from 'xss'
import XLSX from 'xlsx'

@controller('/zsjh')
export class ZsjhController {
  @get('api/list')
  @adminRole('admin')
  async fetchApiZsjhs (ctx, next) {
    let { page = 1, limit = 20, name = '' } = ctx.query
    let filter = {
      schoolName: new RegExp(name + '.*', 'i')
    }
    try {
      const res = await api.zsjh.getZsjhs(page, limit, filter)
      const total = await api.zsjh.getCount(filter)
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
  async fetchZsjhs (ctx, next) {
    let {page = 1, limit = 20, schoolName = '', zyName = '', subject = '', pc = '', year = '2023'} = ctx.request.body
    let filter = {
      year: year,
      schoolName: new RegExp(schoolName + '.*', 'i'),
      zyName: new RegExp(zyName + '.*', 'i')
    }
    if (subject) filter.subject = subject
    if (pc) filter.pc = pc
    try {
      const res = await api.zsjh.getZsjhs(page, limit, filter)
      const total = await api.zsjh.getCount(filter)
      console.log(res)
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
  async fetchZsjhInfo (ctx, next) {
    const { id } = ctx.query
    if (!id) return (ctx.body = {succes: false, err: 'id is required'})
    try {
      let data = await api.zsjh.getZsjhInfo(id)
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

  @get('/zsjh')
  async fetchZsjh (ctx, next) {
    const { _id } = ctx.query
    if (!_id) return (ctx.body = {succes: false, err: '_id is required'})
    try {
      let data = await api.zsjh.getZsjhBySchool(_id)
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
  async saveZsjh (ctx, next) {
    let zsjh = ctx.request.body
    try {
      zsjh.name = zsjh.name
      zsjh.content = zsjh.content
      zsjh.files = zsjh.files
      zsjh = await api.zsjh.save(zsjh)
      ctx.body = {
        success: true,
        data: zsjh
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
  async updateZsjh (ctx, next) {
    const body = ctx.request.body
    const { _id } = body
    if (!_id) {
      return (ctx.body = {succes: false, err: '_id is required'})
    }

    try {
      let zsjh = await api.zsjh.getZsjh(_id)
      if (!zsjh) {
        return (ctx.body = {
          succes: false,
          err: 'zsjh not exist'
        })
      }
      zsjh.title = xss(body.title)
      zsjh.content = body.content
      zsjh.files = body.files
      zsjh.status = body.status
      zsjh = await api.zsjh.update(zsjh)
      ctx.body = {
        data: zsjh,
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
  async delZsjhs (ctx, next) {
    const data = ctx.request.body
    try {
      await api.zsjh.del(data)
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
        let zsjh = {
          year: item.year,
          schoolName: item.schoolName,
          schoolCode: item.schoolCode,
          zyName: item.zyName,
          zymc: item.zyName,
          zybz: item.zybz,
          zyCode: item.zyCode,
          zyzCode: item.zyzCode,
          zyzName: item.zyzName,
          pc: item.pc,
          subject: item.subject,
          plan: item.plan,
          xz: item.xz,
          fee: item.fee,
          pc: item.pc,
          zxkm: item.zxkm,
          zsdm: item.zsdm
        }
        
        let schoolName = item.schoolName
        let school = await api.school.getByName(schoolName.trim())
        if (school) {
          zsjh.school = school._id
        }

        if (item.zyName) {
          let zyName = item.zyName
          let zy = await api.zy.getByName(zyName.trim())
          console.log(zy, zyName, 'zy')
          if (zy) {
            zsjh.zy = zy._id
          }
        }

        zsjh = await api.zsjh.save(zsjh)
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
