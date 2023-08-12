import mongoose from 'mongoose'
// Fdtj 分段统计
const Point = mongoose.model('Fdtj')

export async function getPoint(_id) {
  const data = await Point
    .findOne({_id: _id})
    .exec()
  return data
}

export async function getPoints(page, limit, filter) {
  const data = await Point
    .find(filter)
    .limit(Number(limit))
    .skip(Number(limit) * Number(page - 1))
    .exec()
  return data
}

export async function getPointMark(subject, point, year) {
  const data = await Point
    .findOne({subject: subject, fsd: point, year: year})
    .exec()
  return data
}

export async function getLastYearMaxMark(mark, subject, year) {
  const data = await Point
    .findOne({subject: subject, rs: {$lte: mark}, year: year})
    .sort({fsd: 1})
    .exec()
  return data
}

export async function getLastYearMinMark(mark, subject, year) {
  const data = await Point
    .findOne({subject: subject, rs: {$gte: mark}, year: year})
    .exec()
  return data
}

export async function getCount(filter) {
  const data = await Point
    .count(filter)
    .exec()
  return data
}

export async function save(point) {
  point = new Point(point)
  point = await point.save()
  return point
}

export async function update(point) {
  point = await point.save()
  return point
}

export async function updateSubject () {
  await Point.updateMany(
    {subject: "ls"},
    {$set: { subject: "历史"} }
  )
  await Point.updateMany(
    {subject: "wl"},
    {$set: { subject: "物理"} }
  )
  return
}

export async function del(data) {
  try {
    for (let id of data) {
      await Point
        .deleteMany({_id: id})
        .exec()
    }
  } catch (e) {
    console.log(e)
  }
  return true
}

export async function getLastPoints (max, min, subject, year) {
  const data = await Point
    .find({rs: {$gte: max, $lte: min}, subject: subject, year: year})
    .exec()
  return data
}
