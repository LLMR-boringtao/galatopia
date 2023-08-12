import api from '../api'
import { controller, get, post, del, put, adminRole } from '../decorator/router'
import xss from 'xss'

@controller('/content')
export class ProductController {
  @get('/list')
  async fetchcontents(ctx, next) {
    const {search = '', page = 1, limit = 20} = ctx.query
    try {
      let contents = await api.content.findContents(page, limit, search)
      let total = await api.content.contentsCount(search)
      ctx.body = {
        data: contents,
        total: total,
        success: true
      }
    } catch (err) {
      console.log(err)
      ctx.body = {
        success: false,
        err: err
      }
    }
  }

  @get('info')
  async fetchZsjhInfo (ctx, next) {
    const { id } = ctx.query
    if (!id) return (ctx.body = {succes: false, err: 'id is required'})
    try {
      let data = await api.content.getContent(id)
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
  async saveContent(ctx, next) {
    let content = ctx.request.body
    try {
      content = {
        title: xss(content.title),
        body: xss(content.body),
        cover: content.cover,
        video: content.video
      }
      content = await api.content.save(content)
      ctx.body = {
        success: true,
        data: content
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
  async updateContent(ctx, next) {
    let body = ctx.request.body
    console.log(body)
    const { _id } = body
    if (!_id) {
      return (ctx.body = {succes: false, err: '_id is required'})
    }

    let content = await api.content.getContent(_id)

    if (!content) {
      return (ctx.body = {
        succes: false,
        err: 'content not exist'
      })
    }
    content.title = xss(body.title)
    content.body = xss(body.body)
    content.cover = body.cover
    content.video = body.video
    try {
      content = await api.content.update(content)
      ctx.body = {
        success: true,
        data: content
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
  async delContent (ctx, next) {
    const params = ctx.params
    const { _id } = params
    if (!_id) {
      return (ctx.body = {success: false, err: '_id is required'})
    }
    let content = await api.content.getContent(_id)

    if (!content) {
      return (ctx.body = {success: false, err: 'content not exist'})
    }
    try {
      await api.content.del(content)
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

  @get('/app/content')
  async appContent(ctx, next) {
    const { id } = ctx.query
    console.log(id)
    try {
      let content = await api.content.getContent(id)
      ctx.body = {
        data: content,
        success: true
      }
    } catch (err) {
      ctx.body = {
        success: false,
        err: err
      }
    }
  }
}
