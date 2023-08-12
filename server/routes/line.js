import api from '../api'
import { controller, get, post, del, put, adminRole } from '../decorator/router'
import xss from 'xss'
import XLSX from 'xlsx'

const numCheck = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) >= '0' && str.charAt(i) <= '9') {
      return i
    }
  }
  return str.length
}

@controller('/line')
export class LineController {
  @get('/list')
  async fetchLines (ctx, next) {
    let { page = 1, limit = 20, search = '' } = ctx.query
    console.log(page)
    let filter = {
      title: new RegExp(search + '.*', 'i')
    }
    try {
      const res = await api.line.getLines(page, limit, filter)
      const total = await api.line.getCount(filter)
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

  @get('/info')
  async fetchLine (ctx, next) {
    let { _id } = ctx.query
    console.log('id', _id)
    try {
      const res = await api.line.getLine(_id)
      ctx.body = {
        data: res,
        success: true
      }
    } catch (err) {
      console.log(err)
      ctx.body = {
        success: false
      }
    }
  }

  @post('/import/ls')
  async fetchImportLs (ctx, next) {
    const { _id, fileName } = ctx.request.body
    try {
      const workbook = XLSX.readFile(`./files/${fileName}`)
      const sheet_name_list = workbook.SheetNames
      const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
      for (let item of xlData) {
        // let name = item.title
        // name = name.substr(0, name.indexOf('0'))
        // name = name.substr(0, numCheck(name))
        // console.log('name', name.trim())
        // let school = await api.school.getByName(name)
        // if (!school) {
        //   school = {
        //     num: item.num,
        //     name: name
        //   }
        //   school = await api.school.save(school)
        // }
        let mark = {
          line: _id,
          // school: school._id,
          title: item.title,
          zdf: item.tdzdf * 1,
          subject: item.subject,
          year: item.year,
          tfpx: {
            '语数成绩': item.yscj,
            '语数最高成绩': item.yszgcj,
            '外语成绩': item.wycj,
            '首选科目成绩': item.sxkmcj,
            '再选科目最高成绩': item.zxkmzgcj,
            '志愿号': item.zyh
          }
        }
        await api.mark.save(mark)
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

  @post('/save')
  @adminRole('admin')
  async postLine (ctx, next) {
    let line = ctx.request.body
    try {
      line = await api.line.save(line)
      ctx.body = {
        success: true,
        data: line
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  @put('/update')
  @adminRole('admin')
  async updateLine (ctx, next) {
    let body = ctx.request.body
    const { _id } = body

    if (!_id) {
      return (ctx.body = {succes: false, err: '_id is required'})
    }

    let line = await api.line.getLine(_id)

    if (!line) {
      return (ctx.body = {
        succes: false,
        err: 'line not exist'
      })
    }

    line.title = xss(body.title)
    line.year = xss(body.year)
    line.exp = xss(body.exp)
    try {
      line = await api.line.update(line)
      ctx.body = {
        success: true,
        data: line
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  @del('/del/:_id')
  @adminRole('admin')
  async delLine (ctx, next) {
    const params = ctx.params
    const { _id } = params

    if (!_id) {
      return (ctx.body = {success: false, err: '_id is required'})
    }

    let line = await api.line.getLine(_id)

    if (!line) {
      return (ctx.body = {success: false, err: 'product not exist'})
    }

    try {
      await api.line.del(line)
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
}
