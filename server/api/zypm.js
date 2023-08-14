import mongoose from 'mongoose'
const Zypm = mongoose.model('Zypm')

export async function getZypms(page, limit, filter) {
  const data = await Zypm
    .find(filter)
    .limit(Number(limit))
    .skip(Number(limit) * Number(page - 1))
    .populate('zy school')
    .exec()
  return data
}

export async function getZySchools(_id, page, limit) {
  const data = await Zypm
    .find({
      zy: _id
    })
    .limit(Number(limit))
    .skip(Number(limit) * Number(page - 1))
    .populate('school')
    .exec()
  return data
}

export async function getZySchoolsCount (_id) {
  const data = await Zypm
    .count({
      zy: _id
    })
    .exec()
  return data
}

export async function getZypm(_id) {
  const data = await Zypm
    .findOne({
      _id: _id
    })
    .exec()
  return data
}

export async function getByName(name) {
  const data = await Zypm
    .findOne({
      name: name
    })
    .exec()
  return data
}

export async function getCount(filter) {
  const data = await Zypm
    .count(filter)
    .exec()
  return data
}

export async function save(zypm) {
  zypm = new Zypm(zypm)
  zypm = await zypm.save()
  return zypm
}

export async function update(zypm) {
  zypm = await zypm.save()
  return zypm
}

export async function del(zypm) {
  try {
    await zypm.remove()
  } catch (e) {
    console.log(e)
  }
  return true
}
