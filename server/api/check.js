import mongoose from 'mongoose'
import xss from 'xss'

const Check = mongoose.model('Check')

export async function save(check) {
  check = new Check(check)
  check = await check.save()
  return check
}

export async function getAppChecks(id, page, limit) {
  const data = await Check
    .find({patient: id})
    .skip(Number(page - 1) * Number(limit))
    .limit(Number(limit))
    .populate('doctor patient')
    .sort({_id: -1})
    .exec()
  return data
}

export async function getAppChecksAll(id) {
  const data = await Check
    .find({patient: id})
    .sort({_id: -1})
    .exec()
  return data
}

export async function getAppChecksCount(id) {
  const data = await Check
    .count({patient: id})
    .exec()
  return data
}

export async function getChecks(page, limit, search) {
  const data = await Check
    .find()
    .skip(Number(page - 1) * Number(limit))
    .limit(Number(limit))
    .sort({_id: -1})
    .populate('doctor patient')
    .exec()
  return data
}

export async function getChecksBypatient(id) {
  const data = await Check
    .find({patient: id})
    .populate('doctor')
    .sort({_id: -1})
    .exec()
  return data
}

export async function getChecksCount() {
  const data = await Check
    .count()
    .exec()
  return data
}