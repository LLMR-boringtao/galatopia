import api from '../api'
import { controller, get, post, del, put, adminRole } from '../decorator/router'
import xss from 'xss'

@controller('/record')
export class RecordController {
  @get('/import/data')
  @adminRole('admin')
  async importData(ctx, next) {
    await api.record.importData()
    ctx.body = {
      success: true
    }
  }

  @get('/wechat/list')
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
      let filters = {
        patient: patient._id,
        status: {$gte: 1}
      }
      let res = await api.record.getAppRecords(filters, 1, 1000)
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

  @get('/records')
  @adminRole('admin')
  async fetchRecords(ctx, next) {
    const {search = '', page = 1, limit = 20} = ctx.query
    try {
      let records = await api.record.getRecords(page, limit, search)
      ctx.body = {
        data: records,
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
  async recordsCount(ctx, next) {
    const { search = ''} = ctx.query
		try {
      let res = await api.record.getRecordsCount(search)
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

  // ------------ App Router ---------------------
  @get('/app/records')
  async appRecords(ctx, next) {
    console.log(ctx.query)
    const { id, page = 1, limit = 10 } = ctx.query
    try {
      let filters = {
        patient: id,
        status: {$gte: 1}
      }
      let records = await api.record.getAppRecords(filters, page, limit)
      let total = await api.record.getAppRecordsCount(filters)
      ctx.body = {
        data: records,
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

  @get('/app/categories')
  async getCategories(ctx, next) {
    try {
      let categories = await api.category.findCategories()
      ctx.body = {
        data: categories,
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

  @get('/app/record')
  async getRecord(ctx, next) {
    const { id } = ctx.query
    try {
      let record = await api.record.getRecord(id)
      ctx.body = {
        data: record,
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

  @post('/app/save')
  async recordSave(ctx, next) {
    let body = ctx.request.body
    try {
      let record = {
        place: body.place,
        patient: body.patient,
        hospital: body.hospital,
        doctor: body.doctor,
        tests: body.tests,
        medicines: body.medicines,
        createAt: body.createAt,
        next: body.next,
        nextCheck: body.nextCheck,
        pic: body.pic
      }
      record = await api.record.saveRecord(record)
      let patient = await api.patient.getPatient(body.patient)
      await api.patient.updatePatient(patient)
      ctx.body = {
        success: true,
        body: record
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
