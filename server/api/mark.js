import mongoose from 'mongoose'

const Mark = mongoose.model('Mark')

export async function getMark(_id) {
  const data = await Mark
    .findOne({_id: _id})
    .populate('school line')
    .exec()
  return data
}

export async function getMarks(page, limit, filter) {
  const data = await Mark
    .find(filter)
    .populate('school line')
    .limit(Number(limit))
    .skip(Number(limit) * Number(page - 1))
    .exec()
  return data
}

export async function getCount(filter) {
  const data = await Mark
    .count(filter)
    .exec()
  return data
}

export async function save(pmarkItem) {
  pmarkItem = new Mark(pmarkItem)
  pmarkItem = await pmarkItem.save()
  return pmarkItem
}

export async function update(pmarkItem) {
  pmarkItem = await pmarkItem.save()
  return pmarkItem
}

export async function del(data) {
  try {
    for (let id of data) {
      await Mark
        .deleteMany({_id: id})
        .exec()
    }
  } catch (e) {
    console.log(e)
  }
  return true
}

export async function getLastPointSchool(point, subject, year, page, limit) {
  const data = await Mark
    .find({zdf: {$lte: point}, subject: subject, year: year})
    .populate('school line')
    .limit(Number(limit))
    .skip(Number(limit) * Number(page - 1))
    .sort({zdf: -1})
    .exec()
  return data
}
