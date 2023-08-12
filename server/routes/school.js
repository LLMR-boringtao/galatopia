import api from '../api'
import { controller, get, post, del, put, adminRole } from '../decorator/router'
import xss from 'xss'
import XLSX from 'xlsx'

@controller('/school')
export class SchoolController {
  @get('api/list')
  @adminRole('admin')
  async fetchApiSchools (ctx, next) {
    let { page = 1, limit = 20, name = '' } = ctx.query
    let filter = {
      name: new RegExp(name + '.*', 'i')
    }
    try {
      const res = await api.school.getSchools(page, limit, filter)
      const total = await api.school.getCount(filter)
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
  async fetchSchools (ctx, next) {
    let { page = 1, limit = 20, name = '', eyy, jbw, gzd, sf = '' } = ctx.request.body
    console.log(sf)
    let filter = {
      name: new RegExp(name + '.*', 'i')
    }
    if (eyy === true) {
      filter.eyy = eyy
    }
    if (jbw === true) {
      filter.jbw = jbw
    }
    if (gzd === true) {
      filter.gzd = gzd
    }
    if (sf) {
      filter.sf = sf
    }
    console.log(filter)
    try {
      const res = await api.school.getSchools(page, limit, filter)
      const total = await api.school.getCount(filter)
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
  async fetchSchoolInfo (ctx, next) {
    const { id } = ctx.query
    if (!id) return (ctx.body = {succes: false, err: 'id is required'})
    try {
      let data = await api.school.getSchoolInfo(id)
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
  async fetchSchool (ctx, next) {
    const { _id } = ctx.query
    console.log(_id, 'school')
    if (!_id) return (ctx.body = {succes: false, err: '_id is required'})
    try {
      let data = await api.school.getSchool(_id)
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

  @get('zsjz')
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
  async saveSchool (ctx, next) {
    let school = ctx.request.body
    try {
      school.title = school.title
      school.content = school.content
      school.files = school.files
      school = await api.school.save(school)
      ctx.body = {
        success: true,
        data: school
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
  async updateSchool (ctx, next) {
    const body = ctx.request.body
    const { _id } = body
    if (!_id) {
      return (ctx.body = {succes: false, err: '_id is required'})
    }

    try {
      let school = await api.school.getSchool(_id)
      if (!school) {
        return (ctx.body = {
          succes: false,
          err: 'school not exist'
        })
      }
      school.title = xss(body.title)
      school.content = body.content
      school.files = body.files
      school.status = body.status
      school = await api.school.update(school)
      ctx.body = {
        data: school,
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
  async delSchools (ctx, next) {
    const data = ctx.request.body
    try {
      await api.school.del(data)
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
        let name = item.name
        let school = await api.school.getByName(name.trim())
        let jbw = true
        if (item.jbw !== 1) {
          jbw = false
        }
        let eyy = true
        if (item.eyy !== 1) {
          eyy = false
        }
        let gzd = true
        if (item.gzd !== 1) {
          gzd = false
        }
        let sl = true
        if (item.sl !== 1) {
          sl = false
        }
        let ys = true
        if (item.ys !== 1) {
          sl = false
        }
        if (!school) {
          school = {
            name: name,
            pm: item.pm, // 排名
            jc: item.jc, // 简称
            nameEn: item.nameEn, // 英文名字
            xxdm: item.xxdm, // 学校代码
            sf: item.sf, // 所在省份
            cq: item.cq, // 所在城区
            cjsj: item.cjsj, // 创建时间
            wbl: item.wbl, // 女生比例
            mbl: item.mbl, // 男生比例
            zrlx: item.zrlx, // 自然类型
            xxlx: item.xxlx, // 学校类型
            ssjg: item.ssjg, // 所属机构
            jdbq: item.jdbq, // 简单标签
            ys: ys, // 是否艺术
            jbw: jbw, // 985
            eyy: eyy, // 211
            gzd: gzd, // 国重点
            sl: sl, // 私立
            sjpm: item.sjpm, // 世界排名
            pmhz: item.pmhz, // 报名汇总
            ssd: item.ssd, // 硕士点
            bsd: item.bsd, // 博士点
            sjyl: item.sjyl, // 世界一流
            yldx: item.yldx, // 一流大学
            tags: item.tags, // 标签汇总
            content: item.content, // 描述
            bk: item.bk, // 本科 专科
            phone: item.phone, // 招办电话
            email: item.email, // 电子邮箱
            address: item.address, // 通讯地址
            web: item.web, // 官网
            mr: item.mr, // 名人
            pgjg: item.pgjg, // 评估结果
            jyqk: item.jyqk, // 就业情况
            tjzy: item.tjzy.split('|')  // 推荐专业
          }
          console.log(school)
          school = await api.school.save(school)
        } else {
          school.pm = item.pm // 排名
          school.jc = item.jc // 简称
          school.nameEn = item.nameE // 英文名字
          school.xxdm = item.xxdm // 学校代码
          school.sf = item.sf // 所在省份
          school.cq = item.cq // 所在城区
          school.cjsj = item.cjsj // 创建时间
          school.wbl = item.wbl // 女生比例
          school.mbl = item.mbl // 男生比例
          school.zrlx = item.zrlx // 自然类型
          school.xxlx = item.xxlx // 学校类型
          school.ssjg = item.ssjg // 所属机构
          school.jdbq = item.jdbq // 简单标签
          school.ys = ys // 是否艺术
          school.jbw = jbw // 985
          school.eyy = eyy // 21
          school.gzd = gzd // 国重点
          school.sl = sl // 私立
          school.sjpm = item.sjpm // 世界排名
          school.pmhz = item.pmhz // 报名汇总
          school.ssd = item.ssd // 硕士点
          school.bsd = item.bsd // 博士点
          school.sjyl = item.sjyl // 世界一流
          school.yldx = item.yldx // 一流大学
          school.tags = item.tags // 标签汇总
          school.content = item.content // 描述
          school.bk = item.bk // 本科 专科
          school.phone = item.phone // 招办电话
          school.email = item.email // 电子邮箱
          school.address = item.address // 通讯地址
          school.web = item.web // 官网
          school.mr = item.mr // 名人
          school.pgjg = item.pgjg // 评估结果
          school.jyqk = item.jyqk // 就业情况
          school.tjzy = item.tjzy.split('|')  // 推荐专业
          school = await api.school.update(school)
        }
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
