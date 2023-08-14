import api from '../api'
import { controller, get, post, del, put, adminRole } from '../decorator/router'
import xss from 'xss'

@controller('/check')
export class CheckController {

  @get('/checks')
  @adminRole('admin')
  async fetchChecks (ctx, next) {
    const {search = '', page = 1, limit = 20} = ctx.query
    try {
      let checks = await api.check.getChecks(page, limit, search)
			ctx.body = {
				data: checks,
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

  @get('/count')
  @adminRole('admin')
  async checksCount (ctx, next) {
    const { search = ''} = ctx.query
		try {
      let res = await api.check.getChecksCount(search)
			ctx.body = {
				data: res,
				success: true
			}
		} catch (err) {
      ctx.body = {
        success: false,
        err: err
      }
    }
  }

  @get('/results')
  async fetchResults(ctx, next) {
    const { phone } = ctx.query
    try {
      let patient = await api.patient.getPatientByPhone(phone)
      if (!patient) {
        ctx.body = {
          err: '不存在患者',
          success: false
        }
      }
      let res = await api.check.getChecksBypatient(patient._id)
      ctx.body = {
        data: res,
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

  // ----------- app ----------------------

  @get('/app/list')
  async fetchAppChecks (ctx, next) {
    const { id, page = 1, limit = 10 } = ctx.query
    try {
      let checks = await api.check.getAppChecks(id, page, limit)
      let total = await api.check.getAppChecksCount(id)
      ctx.body = {
        data: checks,
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

  @get('/app/all')
  async fetchAppChecksAll (ctx, next) {
    const { id } = ctx.query
    try {
      let checks = await api.check.getAppChecksAll(id)
      ctx.body = {
        data: checks,
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
}
