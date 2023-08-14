import api from '../api'
import { controller, get, post, del, put, adminRole } from '../decorator/router'
import xss from 'xss'

@controller('/test')
export class TestController {
  @get('/tests')
  @adminRole('admin')
  async getTests (ctx, next) {
    let { limit = 20, page, search } = ctx.query
    try {
      const res = await api.test.getTests(page, limit, search)
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

  @get('/tests/count')
  @adminRole('admin')
  async getTestsCount (ctx, next) {
    let { search = '' } = ctx.query
    try {
      const data = await api.test.getTestsCount(search)
      ctx.body = {
        data: data,
        success: true
      }
    } catch (error) {
      console.log(error)
      ctx.body = {
        success: false
      }
    }
  }

  @del('/test/del/:_id')
  @adminRole('admin')
  async delTest (ctx, next) {
    const params = ctx.params
    const { _id } = params
    if (!_id) {
      return (ctx.body = {success: false, err: '_id is required'})
    }
    let test = await api.test.getTest(_id)

    if (!test) {
      return (ctx.body = {success: false, err: 'cateogry not exist'})
    }
    try {
      await api.test.delTest(test)
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

  @get('/import')
  @adminRole('admin')
  async importTests (ctx, next) {
    await api.test.importTests()
    ctx.body = {
      success: true
    }
  }

  @post('/test')
  @adminRole('admin')
  async saveTest (ctx, next) {
    let test = ctx.request.body
    try {
      test = {
        title: xss(test.title),
        max: test.max,
        min: text.min,
        unit: xss(test.unit),
        hospital: text.hospital
      }
      test = await api.test.saveTest(test)
      ctx.body = {
        success: true,
        data: test
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  @put('/test')
  @adminRole('admin')
  async updateTest (ctx, next) {
    let body = ctx.request.body
    const { _id } = body
    if (!_id) {
      return (ctx.body = {succes: false, err: '_id is required'})
    }

    let test = await api.test.getTest(_id)
    if (!test) {
      return (ctx.body = {
        succes: false,
        err: 'test not exist'
      })
    }
    test.title = xss(body.title)
    test.max = body.max
    test.min = body.min
    test.unit = xss(body.unit)
    test.hospital = body.hospital
    try {
      use = await api.test.updateTest(test)
      ctx.body = {
        success: true,
        data: test
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  @get('/app/tests')
  async getAppTests (ctx, next) {
    let { id } = ctx.query
    try {
      const res = await api.test.getTestsByHospital(id)
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
}
