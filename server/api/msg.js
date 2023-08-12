import mongoose from 'mongoose'

const Msg = mongoose.model('Msg')

export async function getMsg(_id) {
  const data = await Msg
    .findOne({_id: _id})
    .exec()
  return data
}

export async function getMsgs(page, limit, filter) {
  const data = await Msg
    .find(filter)
    .limit(Number(limit))
    .skip(Number(limit) * Number(page - 1))
    .populate('user')
    .sort({_id: -1})
    .exec()
  return data
}

export async function getCount(filter) {
  const data = await Msg
    .count(filter)
    .exec()
  return data
}

export async function save(msg) {
  msg = new Msg(msg)
  msg = await msg.save()
  return msg
}

export async function update(msg) {
  msg = await msg.save()
  return msg
}

export async function del(data) {
  try {
    for (let id of data) {
      await Msg
        .deleteMany({_id: id})
        .exec()
    }
  } catch (e) {
    console.log(e)
  }
  return true
}
