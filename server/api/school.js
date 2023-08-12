import mongoose from 'mongoose'
const School = mongoose.model('School')

export async function getSchools(page, limit, filter) {
  const data = await School
    .find(filter)
    .limit(Number(limit))
    .skip(Number(limit) * Number(page - 1))
    .collation({"locale":"zh", "numericOrdering":true}) // 把排名设置为数值型，进行排序。
    .sort({pm : 1 })
    .exec()
  return data
}

export async function getSchool(_id) {
  const data = await School
    .findOne({
      _id: _id
    })
    .exec()
  return data
}

export async function getByName(name) {
  const data = await School
    .findOne({
      name: name
    })
    .exec()
  return data
}

export async function getByNum(num) {
  const data = await School
    .findOne({
      num: num
    })
    .exec()
  return data
}

export async function getCount(filter) {
  const data = await School
    .count(filter)
    .exec()
  return data
}

export async function save(school) {
  school = new School(school)
  school = await school.save()
  return school
}

export async function update(school) {
  school = await school.save()
  return school
}

export async function del(school) {
  try {
    await school.remove()
  } catch (e) {
    console.log(e)
  }
  return true
}
