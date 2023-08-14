import mongoose from 'mongoose'
const Zsjz = mongoose.model('Zsjz')

export async function getZsjzs(page, limit, filter) {
  const data = await Zsjz
    .find(filter)
    .limit(Number(limit))
    .skip(Number(limit) * Number(page - 1))
    .populate('school')
    .exec()
  return data
}

export async function getZySchools(_id, page, limit) {
  const data = await Zsjz
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
  const data = await Zsjz
    .count({
      zy: _id
    })
    .exec()
  return data
}

export async function getZsjzInfo(_id) {
  const data = await Zsjz
    .findOne({
      _id: _id
    })
    .exec()
  return data
}

export async function getZsjzBySchool(school) {
  const data = await Zsjz
    .findOne({
      school: school
    })
    .exec()
  return data
}

export async function getByName(name) {
  const data = await Zsjz
    .findOne({
      name: name
    })
    .exec()
  return data
}

export async function getCount(filter) {
  const data = await Zsjz
    .count(filter)
    .exec()
  return data
}

export async function save(zsjz) {
  zsjz = new Zsjz(zsjz)
  zsjz = await zsjz.save()
  return zsjz
}

export async function update(zsjz) {
  zsjz = await zsjz.save()
  return zsjz
}

export async function del(data) {
  try {
    for (let id of data) {
      await Zsjz
        .deleteMany({_id: id})
        .exec()
    }
  } catch (e) {
    console.log(e)
  }
  return true
}
