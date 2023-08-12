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

@controller('/point')
export class PointController {
  @get('/list')
  async fetchPoints (ctx, next) {
    let { page = 1, limit = 100, search = '', subject = '', year = '' } = ctx.query
    let filter = {}
    if (subject) {
      filter.subject = subject
    }
    if (year) {
      filter.year = year
    }
    try {
      const res = await api.point.getPoints(page, limit, filter)
      const total = await api.point.getCount(filter)
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
  async fetchPoint (ctx, next) {
    let { _id } = ctx.query
    console.log('id', _id)
    try {
      const res = await api.point.getPoint(_id)
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

  @post('/import')
  async fetchImport (ctx, next) {
    const { fileName } = ctx.request.body
    try {
      const workbook = XLSX.readFile(`./files/${fileName}`)
      const sheet_name_list = workbook.SheetNames
      const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
      for (let item of xlData) {
        console.log(item)
        let point = {
          fsd: item.fsd * 1,
          tf: item.tf * 1,
          rs: item.rs * 1,
          subject: item.subject,
          year: item.year
        }
        await api.point.save(point)
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

  @post('update/subject')
  @adminRole('admin')
  async updateSubject (ctx, next) {
    try {
      await api.point.updateSubject()
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

  @post('/save')
  @adminRole('admin')
  async postPoint (ctx, next) {
    let point = ctx.request.body
    try {
      point = await api.point.save(point)
      ctx.body = {
        success: true,
        data: point
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
  async updatePoint (ctx, next) {
    let body = ctx.request.body
    const { _id } = body

    if (!_id) {
      return (ctx.body = {succes: false, err: '_id is required'})
    }

    let point = await api.point.getPoint(_id)

    if (!point) {
      return (ctx.body = {
        succes: false,
        err: 'point not exist'
      })
    }

    point.title = xss(body.title)
    point.year = xss(body.year)
    point.exp = xss(body.exp)
    try {
      point = await api.point.update(point)
      ctx.body = {
        success: true,
        data: point
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
  async delPoint (ctx, next) {
    const params = ctx.params
    const { _id } = params

    if (!_id) {
      return (ctx.body = {success: false, err: '_id is required'})
    }

    let point = await api.point.getPoint(_id)

    if (!point) {
      return (ctx.body = {success: false, err: 'product not exist'})
    }

    try {
      await api.point.del(point)
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

  @get('ybm')
  async userYbm (ctx, next) {
    const session = ctx.session
    const {subject, point} = ctx.query
    // console.log(subject, point)
    // const thisYear = '2022'
    // const lastYear = '2021'
    try {
      // 判断有没有权限
      let user = await api.user.findUserByUnionId(session.user.unionid)
      if (!user) {
        ctx.body = {
          success: false,
          err: '没有权限'
        }
      }
      // 读取用户今年的排名 2022年
      // 获取低位成绩
      // const minPonit = await api.point.getPointMark(subject, point * 1, thisYear)
      // console.log('minPonit', minPonit)
      // if (!minPonit) {
      //   ctx.body = {
      //     success: false,
      //     err: '分数不满足要求' // 说明分数不存在
      //   }
      // }
      // const minMark = minPonit.rs
      // // 获取高位成绩
      // const maxPonit = await api.point.getPointMark(subject, point * 1 + 1, thisYear)
      // // maxMark 最大排名 1
      // let maxMark = 1
      // if (maxPonit) {
      //   maxMark = maxPonit.rs
      // }
      // // 高考名次为 maxMark ~ minMark
      // console.log(maxMark, minMark)
      // // 对应2021年排名的分数
      // const res = await api.point.getLastPoints(maxMark, minMark, subject, lastYear)
      // if (!res) {
      //   ctx.body = {
      //     success: false,
      //     err: '查询失败，请核实总分' // 说明分数不存在
      //   }
      // }
      // const lastPoint = res.fsd
      // console.log('lastPoint', lastPoint)
      // // 读取对应学校
      // let filter = {zdf: {$lte: lastPoint}, subject: subject, year: lastYear}
      // const schools = await api.zyf.getLastPointSchool(filter, 1, 10)
      // console.log('schools', schools)
      // if (schools.length <= 0) {
      //   ctx.body = {
      //     success: false,
      //     err: '查询失败，请核实总分' // 说明分数不存在
      //   }
      // }
      const ybmResult = await api.ybm.save({
        user: user._id,
        subject: subject,
        point: point
      })
      ctx.body = {
        success: true,
        data: ybmResult
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }
}
