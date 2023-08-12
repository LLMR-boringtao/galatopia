import api from '../api'
import { controller, get, post, del, put, adminRole } from '../decorator/router'
import xss from 'xss'
import XLSX from 'xlsx'

// 截取（ 前的字符
function getStringBeforeSymbol(str, symbol) {
  const symbolIndex = str.indexOf(symbol);
  if (symbolIndex !== -1) {
    const substring = str.substring(0, symbolIndex);
    return substring;
  } else {
    return str;
  }
}

// 截取()中间的字符
function getStringInsideParentheses(str) {
  const regex = /\((.*?)\)/;
  const match = str.match(regex);
  if (match && match[1]) {
    return match[1];
  } else {
    return "";
  }
}

// 截取中文()中间的字符
function getStringInsideParenthesesCn(str) {
  const regex = /（([^）]*)）/;
  const match = str.match(regex);
  if (match && match[1]) {
    return match[1];
  } else {
    return "";
  }
}
// 取得空格前后的字符
function getCharactersAroundSpace(str) {
  const trimmedStr = str.trim();
  const splitArray = trimmedStr.split(" ");
  const characters = {
    before: splitArray[0],
    after: splitArray[1]
  };
  return characters;
}

// 取得两个空格前后的字符
function getCharactersAroundSpaces(str) {
  const regex = /(\S+)\s{2}(\S+)/;
  const match = str.match(regex);
  if (match && match.length === 3) {
    return [match[1], match[2]];
  }
  return [];
}


// 两个字符之间的字符串
function getStringBetweenChars(str, char1, char2) {
  const regex = new RegExp(`\\${char1}(.*?)\\${char2}`);
  const match = str.match(regex);
  if (match && match[1]) {
    return match[1];
  } else {
    return "";
  }
}

// 三个字符之间的字符串
function getCharactersAroundThreeSpaces(str) {
  const regex = /(\S+)\s{3}(\S+)/;
  const match = str.match(regex);
  if (match && match.length === 3) {
    return [match[1], match[2]];
  }
  return [];
}

// 多个字符对，截取两个之间的字符串
function getStringsBetweenChars(str, char1, char2) {
  const regex = new RegExp(`\\${char1}(.*?)\\${char2}`, "g");
  const matches = str.matchAll(regex);
  const result = [];
  for (const match of matches) {
    if (match[1]) {
      result.push(match[1]);
    }
  }
  return result;
}

// 截止到第一个"("之前的字符串
function getStringBeforeOpeningParenthesis(str) {
  const index = str.indexOf("(");
  if (index !== -1) {
    return str.substring(0, index);
  }
  return str;
}


@controller('/zyf')
export class ZyfController {
  @get('api/list')
  @adminRole('admin')
  async fetchApiZyfs (ctx, next) {
    let { page = 1, limit = 20, school = '', year = '', zymc = ''} = ctx.query
    console.log('school', school)
    let filter = {
      school: new RegExp(school + '.*', 'i'),
      zymc: new RegExp(zymc + '.*', 'i')
    }
    if (year) filter.year = year
    try {
      const res = await api.zyf.getZyfs(page, limit, filter)
      const total = await api.zyf.getCount(filter)
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
  async fetchZyfs (ctx, next) {
    let {page = 1, limit = 20, school = '', subject = '', bc = '', zymc = '', year = ''} = ctx.request.body
    let filter = {
      school: new RegExp(school + '.*', 'i'),
      zymc: new RegExp(zymc + '.*', 'i')
    }
    if (subject) filter.subject = subject
    if (year) filter.year = year
    if (bc) filter.bc = bc
    try {
      const res = await api.zyf.getZyfs(page, limit, filter)
      const total = await api.zyf.getCount(filter)
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
  async fetchZyfInfo (ctx, next) {
    const { id } = ctx.query
    if (!id) return (ctx.body = {succes: false, err: 'id is required'})
    try {
      let data = await api.zyf.getZyfInfo(id)
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

  @get('info')
  async fetchInfo (ctx, next) {
    const { _id } = ctx.query
    if (!_id) return (ctx.body = {succes: false, err: '_id is required'})
    try {
      let data = await api.zyf.getZyf(_id)
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

  @get('compare')
  async fetchZyf (ctx, next) {
    const { school = '' , zymc = '', bc = '', subject = '' } = ctx.query
    let filter = {
      school: school,
      zymc: zymc,
      bc: bc,
      subject: subject
    }
    try {
      const res = await api.zyf.getZyfs(1, 20, filter)
      ctx.body = {
        data: res,
        success: true
      } 
    } catch (error) {
      console.log(error)
      ctx.body = {
        success: false
      }
    }
  }


  // 获得专业组的专业
  @get('zyz/zys')
  async fetchZyzZys (ctx, next) {
    const { school = '' , zyz = '', bc = '' } = ctx.query
    let filter = {
      school: school,
      zyz: zyz,
      bc: bc
    }
    try {
      const res = await api.zyf.getZyfs(1, 50, filter)
      ctx.body = {
        data: res,
        success: true
      } 
    } catch (error) {
      console.log(error)
      ctx.body = {
        success: false
      }
    }
  }

  @post('/save')
  @adminRole('admin')
  async saveZyf (ctx, next) {
    let zyf = ctx.request.body
    try {
      zyf.title = zyf.title
      zyf.content = zyf.content
      zyf.files = zyf.files
      zyf = await api.zyf.save(zyf)
      ctx.body = {
        success: true,
        data: zyf
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
  async updateZyf (ctx, next) {
    const body = ctx.request.body
    const { _id } = body
    if (!_id) {
      return (ctx.body = {succes: false, err: '_id is required'})
    }

    try {
      let zyf = await api.zyf.getZyf(_id)
      if (!zyf) {
        return (ctx.body = {
          succes: false,
          err: 'zyf not exist'
        })
      }
      zyf.title = xss(body.title)
      zyf.content = body.content
      zyf.files = body.files
      zyf.status = body.status
      zyf = await api.zyf.update(zyf)
      ctx.body = {
        data: zyf,
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
  async delZyfs (ctx, next) {
    const data = ctx.request.body
    try {
      await api.zyf.del(data)
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
        let zyf = {}
        // 2021年的数据里，专业名称里面的数据包含专业备注，在括号里
        // 要把他们拿出来
        if (item.year === '2021') {
          // 专业
          const symbol = "("
          const zymc = getStringBeforeSymbol(item.zymc, symbol)
          const zybz = getStringInsideParentheses(item.zymc);
          zyf.zymc = zymc
          zyf.zybz = zybz
          let zy = await api.zy.getByName(zymc.trim())
          if (zy) {
            zyf.zy = zy._id
          }
          zyf.zydm = item.zydm

          // 科目
          zyf.subject = item.subject

          // 时间
          zyf.year = item.year

          // 批次
          zyf.bc = zyf.pc = item.bc

          // 学校
          zyf.school = item.school
          zyf.schoolNum = item.schoolNum
          let schoolName = item.school
          let school = await api.school.getByName(schoolName.trim())
          if (school) {
            zyf.schoolId = school._id
            zyf.sf = school.sf
          }

          zyf.zyz = item.zyz // 专业组
          zyf.zxkm = item.zxkm // 再选科目
          zyf.rs = item.rs * 1 // 人数
          zyf.zdf = item.zdf * 1 // 最低分
          zyf.mark = item.mark * 1 // 排位

        } else if (item.year === '2022') {
          // 2022来自老谢
          // 时间
          zyf.year = item.year
          // 批次和批次名称
          const result = getCharactersAroundSpaces(item.pcmc)
          console.log(result)
          const pcCode = result[0]
          zyf.pcmc = result[1]
          
          if (pcCode === '0' || pcCode === '1' || pcCode === 'm' || pcCode === 'n' || pcCode === 'p' || pcCode === 'q' || pcCode === 'r' || pcCode === 's' || pcCode === 't') {
            zyf.bc = zyf.pc = '本科提前批'
          } else if (pcCode === '2') {
            zyf.bc = zyf.pc = '本科批'
          } else if (pcCode === '5') {
            zyf.bc = zyf.pc = '专科批'
          } else if (pcCode === '7' || pcCode === '9' || pcCode === 'b' || pcCode === 'd' || pcCode === 'h' || pcCode === 'i') {
            zyf.bc = zyf.pc = '艺体批'
          } else {
            zyf.bc = zyf.pc = '其他'
          }

          // 科目
          const subject = getStringInsideParenthesesCn(item.klmc)
          console.log('subject', subject)
          if (subject === '历史等科目类') {
            zyf.subject = '历史'
            zyf.subjectPy = 'ls'
          } else if (subject === '物理等科目类') {
            zyf.subject = '物理'
            zyf.subjectPy = 'wl'
          }

          // 学校 中间两个空格
          const yxmc = getCharactersAroundSpaces(item.yxmc)
          zyf.schoolNum = yxmc[0]
          zyf.school = yxmc[1]
          let school = await api.school.getByName(zyf.school.trim())
          if (school) {
            zyf.schoolId = school._id
            zyf.sf = school.sf
          }

          // 专业组 和 再选科目
          const zyz = item.tddw
          zyf.zyz = getStringBetweenChars(zyz, " ", "(")
          zyf.zxkm = getStringBetweenChars(zyz, "(", ")")

          // 专业 和 专业备注 和 专业代码
          const res = getCharactersAroundThreeSpaces(item.zymc) // 专业代码 返回字符串
          zyf.zydm = res[0]
          let zymc = getStringBeforeOpeningParenthesis(res[1]) // 专业名称 
          zymc = zymc.replace(/★/g, "") // 去掉专业名称里的★
          zyf.zymc = zymc
          const zybzs = getStringsBetweenChars(item.zymc, "(", ")") // 专业备注 返回数组
          zyf.zybz = zybzs.join(',')
          let zy = await api.zy.getByName(zymc.trim()) // 专业ID
          if (zy) {
            zyf.zy = zy._id
          }
          // 人数
          zyf.rs = item.cnt_ksh

          // 最低分
          zyf.zdf = item.min_cj

          // 位次
          const wc = await api.point.getPointMark(zyf.subject, item.min_cj, '2022')
          if (wc !== null && wc.rs !== null) {
            // 访问 obj.rs 属性
            zyf.mark = wc.rs // 得到分段成绩的人数
          }
        
        }
        zyf = await api.zyf.save(zyf)
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
