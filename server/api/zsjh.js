import mongoose from 'mongoose'
const Zsjh = mongoose.model('Zsjh')

export async function getZsjhs(page, limit, filter) {
  const data = await Zsjh
    .find(filter)
    .limit(Number(limit))
    .skip(Number(limit) * Number(page - 1))
    .populate('school zy')
    .exec()
  return data
}

export async function getZySchools(_id, page, limit) {
  const data = await Zsjh
    .find({
      school: _id
    })
    .limit(Number(limit))
    .skip(Number(limit) * Number(page - 1))
    .populate('school zy')
    .exec()
  return data
}

export async function getZySchoolsCount (_id) {
  const data = await Zsjh
    .count({
      school: _id
    })
    .exec()
  return data
}

export async function getZsjh(_id) {
  const data = await Zsjh
    .findOne({
      _id: _id
    })
    .exec()
  return data
}

export async function getZsjhBySchool(school) {
  const data = await Zsjh
    .findOne({
      school: school
    })
    .exec()
  return data
}

export async function getByName(name) {
  const data = await Zsjh
    .findOne({
      name: name
    })
    .exec()
  return data
}

export async function getCount(filter) {
  const data = await Zsjh
    .count(filter)
    .exec()
  return data
}

export async function save(zsjh) {
  zsjh = new Zsjh(zsjh)
  zsjh = await zsjh.save()
  return zsjh
}

export async function update(zsjh) {
  zsjh = await zsjh.save()
  return zsjh
}

export async function del(data) {
  try {
    for (let id of data) {
      await Zsjh
        .deleteMany({_id: id})
        .exec()
    }
  } catch (e) {
    console.log(e)
  }
  return true
}
