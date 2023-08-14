import mongoose from 'mongoose'
import xss from 'xss'

const News = mongoose.model('News')

export async function save (news) {
  news = new News(news)
  news = await news.save()
  return news
}

export async function update (news) {
  news = await news.save()
  return news
}

export async function getNewsList (page, limit) {
  const data = await News
    .find()
    .skip(Number(page - 1) * Number(limit))
    .limit(Number(limit))
    .sort({_id: -1})
    .exec()
  return data
}

export async function getCount () {
  const data = await News
    .count()
    .exec()
  return data
}

export async function getNews (_id) {
  const data = await News
    .findOne({_id: _id})
    .exec()
  return data
}

export async function del (news) {
  try {
    await news.remove()
  } catch (e) {
    e
  }
  return true
}