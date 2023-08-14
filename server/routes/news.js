import api from '../api'
import { controller, get, post, del, put, adminRole } from '../decorator/router'
import xss from 'xss'

@controller('/news')
export class NewsController {
  @post('/save')
  @adminRole('admin')
  async saveNews (ctx, next) {
    console.log('save')
    let news = ctx.request.body
    console.log(news)
    try {
      news = {
        title: xss(news.title),
        body: xss(news.body)
      }
      news = await api.news.save(news)
      ctx.body = {
        success: true,
        data: news
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
  async updateNews (ctx, next) {
    let body = ctx.request.body
    const { _id } = body
    if (!_id) {
      return (ctx.body = {succes: false, err: '_id is required'})
    }

    let news = await api.news.getNews(_id)

    if (!news) {
      return (ctx.body = {
        succes: false,
        err: 'news not exist'
      })
    }
    news.title = xss(body.title)
    news.body = xss(body.body)
    try {
      news = await api.news.update(news)
      ctx.body = {
        success: true,
        data: news
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  @get('/list')
  @adminRole('admin')
  async getNewsList (ctx, next) {
    let { limit = 20, page = 1 } = ctx.query
    try {
      const res = await api.news.getNewsList(page, limit)
      const data = await api.news.getCount()
      ctx.body = {
        data: res,
        count: data,
        success: true
      }
    } catch (error) {
      console.log(error)
      ctx.body = {
        success: false
      }
    }
  }

  @del('/del/:_id')
  @adminRole('admin')
  async delNews (ctx, next) {
    const params = ctx.params
    const { _id } = params
    if (!_id) {
      return (ctx.body = {success: false, err: '_id is required'})
    }
    let news = await api.news.getNews(_id)

    if (!news) {
      return (ctx.body = {success: false, err: 'news not exist'})
    }
    try {
      await api.news.del(news)
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

  @get('/:_id')
  @adminRole('admin')
  async getNews (ctx, next) {
    const { _id } = ctx.query
    if (!_id) {
      return (ctx.body = {succes: false, err: '_id is required'})
    }
    try {
      let news = await api.news.getNews(_id)
      ctx.body = {
        success: true,
        body: news
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  // App Router
  @get('/app/list')
  async getAppList (ctx, next) {
    let { limit = 20, page = 1 } = ctx.query
    try {
      const res = await api.news.getNewsList(page, limit)
      const data = await api.news.getCount()
      ctx.body = {
        data: res,
        total: data,
        success: true
      }
    } catch (error) {
      console.log(error)
      ctx.body = {
        success: false
      }
    }
  }

  // App Router
  @get('/app/detail')
  async getAppNews (ctx, next) {
    const { _id } = ctx.query
    if (!_id) {
      return (ctx.body = {succes: false, err: '_id is required'})
    }
    try {
      let news = await api.news.getNews(_id)
      ctx.body = {
        success: true,
        data: news
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }
}
