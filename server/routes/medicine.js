import api from '../api'
import { controller, get, post, del, put, adminRole } from '../decorator/router'
import xss from 'xss'

@controller('/medicine')
export class MedicineController {
  @post('/use')
  @adminRole('admin')
  async saveUse (ctx, next) {
    let use = ctx.request.body
    try {
      use = {
        name: xss(use.name)
      }
      use = await api.medicine.saveUse(use)
      ctx.body = {
        success: true,
        data: use
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  @put('/use')
  @adminRole('admin')
  async updateUse (ctx, next) {
    let body = ctx.request.body
    const { _id } = body
    if (!_id) {
      return (ctx.body = {succes: false, err: '_id is required'})
    }

    let use = await api.medicine.getUse(_id)

    if (!use) {
      return (ctx.body = {
        succes: false,
        err: 'use not exist'
      })
    }
    use.name = xss(body.name)
    try {
      use = await api.medicine.updateUse(use)
      ctx.body = {
        success: true,
        data: use
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  @get('/medicines')
  @adminRole('admin')
  async getMedicines (ctx, next) {
    let { limit = 20, page = 1, search = '' } = ctx.query
    try {
      const res = await api.medicine.getMedicines(page, limit, search)
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

  @get('/medicines/count')
  @adminRole('admin')
  async getMedicinesCount (ctx, next) {
    let { search = '' } = ctx.query
    try {
      const data = await api.medicine.getMedicinesCount(search)
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

  @del('/medicine/del/:_id')
  @adminRole('admin')
  async delMedicine (ctx, next) {
    const params = ctx.params
    const { _id } = params
    console.log(_id)
    if (!_id) {
      return (ctx.body = {success: false, err: '_id is required'})
    }
    let medicine = await api.medicine.getMedicine(_id)

    if (!medicine) {
      return (ctx.body = {success: false, err: 'cateogry not exist'})
    }
    try {
      await api.medicine.delMedicine(medicine)
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

  @get('/uses')
  @adminRole('admin')
  async getUses (ctx, next) {
    let { limit = 20, page } = ctx.query
    try {
      const res = await api.medicine.getUses(page, limit)
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

  @get('/uses/count')
  @adminRole('admin')
  async getUsesCount (ctx, next) {
    try {
      const data = await api.medicine.getUsesCount()
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

  @del('/use/del/:_id')
  @adminRole('admin')
  async delUse (ctx, next) {
    const params = ctx.params
    const { _id } = params
    console.log(_id)
    if (!_id) {
      return (ctx.body = {success: false, err: '_id is required'})
    }
    let use = await api.medicine.getUse(_id)

    if (!use) {
      return (ctx.body = {success: false, err: 'use use not exist'})
    }
    try {
      await api.medicine.delUse(use)
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

  @get('/import/uses')
  @adminRole('admin')
  async importUses (ctx, next) {
    await api.medicine.importUses()
    ctx.body = {
      success: true
    }
  }

  @get('/import/medicines')
  @adminRole('admin')
  async importMedicines (ctx, next) {
    await api.medicine.importMedicines()
    ctx.body = {
      success: true
    }
  }

  @post('/medicine')
  @adminRole('admin')
  async saveMedicine (ctx, next) {
    let medicine = ctx.request.body
    try {
      medicine = {
        title: xss(medicine.title),
        type: medicine.type,
        use: medicine.use
      }
      medicine = await api.medicine.saveMedicine(medicine)
      ctx.body = {
        success: true,
        data: medicine
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  @put('/medicine')
  @adminRole('admin')
  async updateMedicine (ctx, next) {
    let body = ctx.request.body
    const { _id } = body
    if (!_id) {
      return (ctx.body = {succes: false, err: '_id is required'})
    }

    let medicine = await api.medicine.getMedicine(_id)

    if (!medicine) {
      return (ctx.body = {
        succes: false,
        err: 'medicine not exist'
      })
    }
    medicine.title = xss(body.title)
    medicine.type = body.type
    medicine.use = body.use
    try {
      use = await api.medicine.updateMedicine(medicine)
      ctx.body = {
        success: true,
        data: medicine
      }
    } catch (e) {
      ctx.body = {
        success: false,
        err: e
      }
    }
  }

  // App Router
  @get('/app/medicines')
  async getAppMedicines (ctx, next) {
    try {
      const res = await api.medicine.getMedicinesByHospital()
      console.log(res)
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
