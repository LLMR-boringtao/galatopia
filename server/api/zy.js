import mongoose from 'mongoose'
const Zy = mongoose.model('Zy')

export async function getZys(page, limit, filter) {
  const data = await Zy
    .find(filter)
    .limit(Number(limit))
    .skip(Number(limit) * Number(page - 1))
    .exec()
  return data
}

export async function getZy(_id) {
  const data = await Zy
    .findOne({
      _id: _id
    })
    .exec()
  return data
}

export async function getByName(name) {
  const data = await Zy
    .findOne({
      name: name
    })
    .exec()
  return data
}

export async function getCount(filter) {
  const data = await Zy
    .count(filter)
    .exec()
  return data
}

export async function save(zy) {
  zy = new Zy(zy)
  zy = await zy.save()
  return zy
}

export async function update(zy) {
  zy = await zy.save()
  return zy
}

export async function del(zy) {
  try {
    await zy.remove()
  } catch (e) {
    console.log(e)
  }
  return true
}
