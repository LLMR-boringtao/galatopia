import api from '../api'
import { controller, get, post, del, put, adminRole } from '../decorator/router'
import xss from 'xss'

@controller('/mark')
export class MarkController {
  @get('/list')
  async fetchMarks (ctx, next) {
    let { page = 1, limit = 20, search = '' } = ctx.query
    let filter = {
      title: new RegExp(search + '.*', 'i')
    }
    try {
      const res = await api.mark.getMarks(page, limit, filter)
      const total = await api.mark.getCount(filter)
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
  async fetchMarkInfo (ctx, next) {
    const { id } = ctx.query
    if (!id) return (ctx.body = {succes: false, err: 'id is required'})
    try {
      let data = await api.mark.getMarkInfo(id)
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
  async fetchMark (ctx, next) {
    const { _id } = ctx.query
    if (!_id) return (ctx.body = {succes: false, err: '_id is required'})
    try {
      let data = await api.mark.getMark(_id)
      const pre = await api.mark.getPre(_id)
      const next = await api.mark.getNext(_id)
      if (data) {
        data.pv = data.pv + 1
        data = await api.mark.update(data)
      }
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

  @post('/save')
  @adminRole('admin')
  async saveMark (ctx, next) {
    let mark = ctx.request.body
    try {
      mark.title = mark.title
      mark.content = mark.content
      mark.files = mark.files
      mark = await api.mark.save(mark)
      ctx.body = {
        success: true,
        data: mark
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
  async updateMark (ctx, next) {
    const body = ctx.request.body
    const { _id } = body
    if (!_id) {
      return (ctx.body = {succes: false, err: '_id is required'})
    }

    try {
      let mark = await api.mark.getMark(_id)
      if (!mark) {
        return (ctx.body = {
          succes: false,
          err: 'mark not exist'
        })
      }
      mark.title = xss(body.title)
      mark.content = body.content
      mark.files = body.files
      mark.status = body.status
      mark = await api.mark.update(mark)
      ctx.body = {
        data: mark,
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
  async delMarks (ctx, next) {
    const data = ctx.request.body
    try {
      await api.mark.del(data)
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
