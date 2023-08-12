import mongoose from 'mongoose'
import xss from 'xss'
const Category = mongoose.model('Category')
import categories from '../database/json/category.json'

export async function importData () {
  for (let item of categories) {
    const res = await getCategoryByTid(item.tid)
    if (!res) {
      const category = {
        title: xss(item.title),
        tid: item.tid
      }   
      await save(category)
    }
  }
}

export async function save(category) {
  category = new Category(category)
  category = await category.save()
  return category
}

export async function update(category) {
  category = await category.save()
  return category
}

export async function findCategories() {
  const data = await Category
    .find()
    .exec()
  return data
}

export async function getCategory(_id) {
  const data = await Category
    .findOne({_id: _id})
    .exec()
  return data
}

export async function getCategoryByTid(tid) {
  const data = await Category
    .findOne({tid: tid})
    .exec()
  return data
}

export async function del(category) {
  try {
    await category.remove()
  } catch (e) {
    e
  }
  return true
}
