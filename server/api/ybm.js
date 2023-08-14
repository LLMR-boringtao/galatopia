import mongoose from 'mongoose'

const Ybm = mongoose.model('Ybm')

export async function getYbm(_id) {
  const data = await Ybm
    .findOne({_id: _id})
    .exec()
  return data
}

export async function getYbms(page, limit, filter) {
  const data = await Ybm
    .find(filter)
    .populate('user')
    .limit(Number(limit))
    .skip(Number(limit) * Number(page - 1))
    .sort({_id: -1})
    .exec()
  return data
}

export async function getCount(filter) {
  const data = await Ybm
    .count(filter)
    .exec()
  return data
}

export async function totalByUser (filter) {
  const data = await Ybm
    .count(filter)
    .exec()
  return data
}

export async function save(pybmItem) {
  pybmItem = new Ybm(pybmItem)
  pybmItem = await pybmItem.save()
  return pybmItem
}

export async function update(pybmItem) {
  pybmItem = await pybmItem.save()
  return pybmItem
}

export async function updateSubject () {
  await Ybm.updateMany(
    {subject: "ls"},
    {$set: { subject: "历史"} }
  )
  await Ybm.updateMany(
    {subject: "wl"},
    {$set: { subject: "物理"} }
  )
  return
}

export async function del(data) {
  try {
    for (let id of data) {
      await Ybm
        .deleteMany({_id: id})
        .exec()
    }
  } catch (e) {
    console.log(e)
  }
  return true
}
