import { ConnectionStates } from 'mongoose'
import api from '../api'
import { controller, get, post, del, put, adminRole } from '../decorator/router'
import xss from 'xss'
import { compareSync } from 'bcrypt'

@controller('/ybm')
export class YbmController {
  @get('/list')
  @adminRole('admin')
  async fetchYbms (ctx, next) {
    let { page = 1, limit = 100, subject = '', year = '' } = ctx.query
    let filter = {}
    if (subject) {
      filter.subject = subject
    }
    if (year) {
      filter.year = year
    }
    try {
      const res = await api.ybm.getYbms(page, limit, filter)
      const total = await api.ybm.getCount(filter)
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

  @get('/my/list')
  async fetchMyYbms (ctx, next) {
    const session = ctx.session
    let {page = 1, limit = 10} = ctx.query
    try {
      let user = await api.user.findUserByUnionId(session.user.unionid)
      if (!user) {
        ctx.body = {
          success: false,
          err: '没有权限'
        }
      }

      // 时间是6月1号后的
      let filter = {
        user: user._id,
        createdAt: {
          $gte: new Date("2023-06-01T00:00:00Z")
        }
      }

      // 普通用户只返回三条记录
      if (user.role === 'user') {
        page = 1
        limit = 2
      }
      const res = await api.ybm.getYbms(page, limit, filter)
      let total = await api.ybm.getCount(filter)
      // 普通用户只返回三条记录
      if (user.role === 'user') {
        total = 2
      }
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

  @del('/del/:_id')
  @adminRole('admin')
  async delYbm (ctx, next) {
    const params = ctx.params
    const { _id } = params
    if (!_id) {
      return (ctx.body = {success: false, err: '_id is required'})
    }

    let ybm = await api.ybm.getYbm(_id)

    if (!ybm) {
      return (ctx.body = {success: false, err: 'product not exist'})
    }

    try {
      await api.ybm.del(ybm)
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

  @post('update/subject')
  @adminRole('admin')
  async updateYbm (ctx, next) {
    try {
      await api.ybm.updateSubject()
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

  这个的得到去年的数据
  @post('info')
  async userYbm (ctx, next) {
    let {_id, school = '', bc = '', zxkm = '', zymc = '', sf = '', schoolNum = '', page = 1, limit = 20} = ctx.request.body
    // const session = ctx.session
    const thisYear = '2023'
    const lastYear = '2022'
    try {
      let result = await api.ybm.getYbm(_id)
      if (!result) {
        return (ctx.body = {
          success: false,
          err: '没有对应的预报名信息!'
        })
      }
      const {subject, point} = result
      console.log(subject, point)

      let minMark
      let maxMark

      let max = 750
      let min = 0

      const maxPoint = await api.point.getPointMark(subject, point * 1 + 1, thisYear)
      if (maxPoint) {
        maxMark = maxPoint.rs
        console.log('maxMark', maxMark)
        const res = await api.point.getLastYearMaxMark(maxMark, subject, lastYear)
        console.log('max', res)
        if (res) {
          max = res.fsd * 1 // 最高分
        } else {
          max = point + 2
        }
      } else{
        max = point + 2
      }

      const minPoint = await api.point.getPointMark(subject, point * 1 - 1, thisYear)
      if (minPoint) {
        minMark = minPoint.rs
        console.log('minMark', minMark)
        const res = await api.point.getLastYearMinMark(minMark, subject, lastYear)
        console.log('min', res)
        if (res) {
          min = res.fsd * 1 // 最低分
        } else {
          min = point - 2
        }
      } else {
        min = point - 2
      }

    
      // if (lastMaxMark || lastMinMark) {
       
      //   // 对应2022年排名的分数
      //   const res = await api.point.getLastPoints(maxMark, minMark, subject, lastYear)
      //   if (!res) {
      //     ctx.body = {
      //       success: false,
      //       err: '查询失败，请核实总分' // 说明分数不存在
      //     }
      //   }
      //   console.log('2022分数段', res)
      //   let points = []
      //   // 如果对应的2022的统计结果存在
      //   if (res && res.length > 0) {
      //     for(let i = 0; i < res.length; i++) {
      //       points.push(res[i].fsd * 1)
      //     }
      //     console.log('points', points)
      //     // 数组排序
      //     points.sort((a, b) => a - b)
      //     // 最小分数
      //     min = points[0] - 1
      //     // 最大分数
      //     max = points[points.length - 1] + 1
      //   } else {
      //     max = point * 1 + 2
      //     min = point * 1 - 2
      //   }
      // } else {
      //   console.log('ok', minPonit)
      //   max = point * 1 + 2
      //   min = point * 1 - 2
      //   minMark = maxMark = '未知'
      // }
      console.log('min', min, 'max', max)
      
      // 查询对应的学校
      let filter = {zdf: {$lte: max, $gte: min}, subject: subject, year: lastYear}
      filter.school = new RegExp(school + '.*', 'i')
      filter.zymc = new RegExp(zymc + '.*', 'i')
      filter.schoolNum = new RegExp(schoolNum + '.*', 'i')
      if (bc) {
        filter.bc = bc
      }
      if (sf) {
        filter.sf = sf
      }
      const schools = await api.zyf.getLastPointSchool(filter, page, limit)
      // console.log('schools', schools)
      const total = await api.zyf.getCount(filter)
      if (schools.length <= 0) {
        ctx.body = {
          success: false,
          err: '查询失败，请核实总分' // 说明分数不存在
        }
      }
      ctx.body = {
        success: true,
        ybm: result,
        maxMark: maxMark,
        minMark: minMark,
        max: max,
        min: min,
        schools: schools,
        total: total
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: '错误'
      }
    }
  }

  // // 在没有2023年分段成绩的情况下，得到2022年的数据
  // @post('info')
  // async userYbm (ctx, next) {
  //   let {_id, school = '', bc = '', zxkm = '', zymc = '', sf = '', max, min, schoolNum = '', page = 1, limit = 20} = ctx.request.body
  //   // const session = ctx.session
  //   const thisYear = '2022'
  //   const lastYear = '2021'
  //   try {
  //     let result = await api.ybm.getYbm(_id)
  //     if (!result) {
  //       return (ctx.body = {
  //         success: false,
  //         err: '没有对应的预报名信息!'
  //       })
  //     }
  //     const {subject, point} = result
  //     console.log(subject, point)

  //     const minPonit = await api.point.getPointMark(subject, point * 1, thisYear)
  //     console.log('minPonit', minPonit)
  //     if (!minPonit) {
  //       ctx.body = {
  //         success: false,
  //         err: '查询失败，请核实总分' // 说明分数不存在
  //       }
  //     }
  //     const minMark = minPonit.rs
  //     // 获取高位成绩
  //     const maxPonit = await api.point.getPointMark(subject, point * 1 + 1, thisYear)
  //     // maxMark 最大排名 1
  //     let maxMark = 1
  //     if (maxPonit) {
  //       maxMark = maxPonit.rs
  //     }
  //     // 高考名次为 maxMark ~ minMark
  //     console.log(maxMark, minMark)
  //     // 对应2022年排名的分数
  //     const res = await api.point.getLastPoints(maxMark, minMark, subject, lastYear)
  //     if (!res) {
  //       ctx.body = {
  //         success: false,
  //         err: '查询失败，请核实总分' // 说明分数不存在
  //       }
  //     }
  //     const lastPoint = res.fsd
  //     // 读取对应学校
  //     console.log(typeof (max))
  //     // 根据老谢说的 最高和最低 只去两分的差距
  //     if (max === 0) {
  //       max = point + 2
  //     }

  //     if (min === 0) {
  //       min = point - 2
  //     }
  //     let filter = {zdf: {$lte: max, $gte: min}, subject: subject, year: thisYear}
  //     filter.school = new RegExp(school + '.*', 'i')
  //     filter.zymc = new RegExp(zymc + '.*', 'i')
  //     filter.schoolNum = new RegExp(schoolNum + '.*', 'i')
  //     if (bc) {
  //       filter.bc = bc
  //     }
  //     if (sf) {
  //       filter.sf = sf
  //     }
  //     const schools = await api.zyf.getLastPointSchool(filter, page, limit)
  //     const total = await api.zyf.getCount(filter)
  //     if (schools.length <= 0) {
  //       ctx.body = {
  //         success: false,
  //         err: '查询失败，请核实总分' // 说明分数不存在
  //       }
  //     }
  //     ctx.body = {
  //       success: true,
  //       ybm: result,
  //       maxMark: maxMark,
  //       minMark: minMark,
  //       lastPoint: point, // 2022年的分数
  //       schools: schools,
  //       total: total
  //     }
  //   } catch (e) {
  //     ctx.body = {
  //       success: false,
  //       err: '错误'
  //     }
  //   }
  // }
}
