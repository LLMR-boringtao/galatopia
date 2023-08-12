import mongoose from 'mongoose'
import xss from 'xss'

const Content = mongoose.model('Content')

export async function save (content) {
  content = new Content(content)
  content = await content.save()
  return content
}

export async function update (content) {
  content = await content.save()
  return content
}

export async function findContents (page, limit, search) {
  const data = await Content
    .find({title: new RegExp(search + '.*', 'i')})
    .skip(Number(page - 1) * Number(limit))
    .limit(Number(limit))
    .sort({createdAt: -1})
    .exec()
  return data
}

export async function contentsCount (search) {
  const data = await Content
    .count({name: new RegExp(search + '.*', 'i')})
    .exec()
  return data
}

export async function getContent (_id) {
  const data = await Content
    .findOne({_id: _id})
    .exec()
  return data
}

export async function del (category) {
  try {
    await category.remove()
  } catch (e) {
    e
  }
  return true
}

export async function importHostitals () {
  for (let item of contents) {
    const res = await findContentbyNid(item.nid)
    if (!res) {
      console.log(item.city)
      let content = {}
      if (item.city === '徐州') {
        content = {
          nid: item.nid,
          province: '320',
          name: xss(item.name),
          city: '3203'
        }
      } else if (item.city === '广州') {
        content = {
          nid: item.nid,
          name: xss(item.name),
          province: '广东省',
          city: '广州市'
        }
      } else {
        content = {
          nid: item.nid,
          name: xss(item.name),
          city: xss(item.city)
        }
      }
      
      await save (content)
    }
  }
}

export async function findContentbyNid(nid) {
  const data = await Content
    .findOne({nid: nid})
    .exec()
  return data
}

export async function searchContents (search) {
  const data = await Content
    .find({name: new RegExp(search + '.*', 'i')})
    .exec()
  return data
}