import api from '../api'
import { controller, get, post, del, put, adminRole } from '../decorator/router'
import xss from 'xss'

@controller('/slide')
export class SlideController {
  @get('/list')
  async fetchSlides (ctx, next) {
    try {
      const res = await api.slide.getSlides()
      ctx.body = {
        success: true,
        data: res
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  @post('/save')
  @adminRole('admin')
  async postSlide (ctx, next) {
    let slide = ctx.request.body
    slide = {
      pic: xss(slide.pic),
      url: xss(slide.url)
    }
    try {
      slide = await api.slide.save(slide)
      ctx.body = {
        success: true,
        data: slide
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
  async updateSlide (ctx, next) {
    let body = ctx.request.body
    const { _id } = body

    if (!_id) {
      return (ctx.body = {succes: false, err: '_id is required'})
    }

    let slide = await api.slide.getSlide(_id)

    if (!slide) {
      return (ctx.body = {
        succes: false,
        err: 'slide not exist'
      })
    }

    slide.url = xss(body.url)
    slide.pic = xss(body.pic)

    try {
      slide = await api.slide.update(slide)
      ctx.body = {
        success: true,
        data: slide
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
  async delSlide (ctx, next) {
    const params = ctx.params
    const { _id } = params

    if (!_id) {
      return (ctx.body = {success: false, err: '_id is required'})
    }

    let slide = await api.slide.getSlide(_id)

    if (!slide) {
      return (ctx.body = {success: false, err: 'product not exist'})
    }

    try {
      await api.slide.del(slide)
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
