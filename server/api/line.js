import mongoose from 'mongoose'
const Line = mongoose.model('Line')

export async function getLines(page, limit, filter) {
  const lines = await Line
    .find(filter)
    .skip(Number(page - 1) * Number(limit))
    .limit(Number(limit))
    .exec()
  return lines
}

export async function getCount(filter) {
  const data = await Line
    .count(filter)
    .exec()
  return data
}

export async function getLine(_id) {
  const data = await Line
    .findOne({
      _id: _id
    })
    .exec()
  return data
}

export async function save(line) {
  line = new Line(line)
  line = await line.save()
  return line
}

export async function update(line) {
  line = await line.save()
  return line
}

export async function del(line) {
  try {
    await line.remove()
  } catch (e) {
    console.log(e)
  }
  return true
}
