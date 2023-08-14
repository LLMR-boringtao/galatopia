import mongoose from 'mongoose'
const Zyf = mongoose.model('Zyf')

export async function getZyfs(page, limit, filter) {
  const data = await Zyf
    .find(filter)
    .limit(Number(limit))
    .skip(Number(limit) * Number(page - 1))
    .populate('schoolId')
    .sort({mark: -1})
    .exec()
  return data
}

export async function getZyf(_id) {
  const data = await Zyf
    .findOne({
      _id: _id
    })
    .exec()
  return data
}

export async function getByName(school) {
  const data = await Zyf
    .findOne({
      school: school
    })
    .exec()
  return data
}

export async function getCount(filter) {
  const data = await Zyf
    .count(filter)
    .exec()
  return data
}

export async function save(zyf) {
  zyf = new Zyf(zyf)
  zyf = await zyf.save()
  return zyf
}

export async function update(zyf) {
  zyf = await zyf.save()
  return zyf
}

export async function del(zyf) {
  try {
    await zyf.remove()
  } catch (e) {
    console.log(e)
  }
  return true
}

export async function getLastPointSchool(filter, page, limit) {
  const data = await Zyf
    .find(filter)
    .limit(Number(limit))
    .skip(Number(limit) * Number(page - 1))
    .sort({zdf: -1})
    .exec()
  return data
}
