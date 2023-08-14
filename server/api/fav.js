import mongoose from 'mongoose'
const Fav = mongoose.model('Fav')

export async function getUserFavs(filter, page, limit) {
  const data = await Fav
    .find(filter)
    .populate('school')
    .limit(Number(limit))
    .skip(Number(limit) * Number(page - 1))
    .sort({_id: -1})
    .exec()
  return data
}

export async function getUserFavsCount(filter) {
  const data = await Fav
    .count(filter)
    .exec()
  return data
}

export async function getFavs(page, limit) {
  const data = await Fav
    .find({})
    .populate('school')
    .limit(Number(limit))
    .skip(Number(limit) * Number(page - 1))
    .sort({_id: -1})
    .exec()
  return data
}

export async function getCount() {
  const data = await Fav
    .count()
    .exec()
  return data
}

export async function getFavById(_id) {
  const favs = await Fav.findOne({_id: _id}).exec()
  return favs
}

export async function minaList(filter) {
  const favs = await Fav.find(filter).exec()
  return favs
}

export async function getFav(filter) {
  const data = await Fav
    .findOne(filter)
    .exec()
  return data
}

export async function save(fav) {
  fav = new Fav(fav)
  fav = await fav.save()
  return fav
}

export async function update(fav) {
  fav = await fav.save()
  return fav
}

export async function del(fav) {
  try {
    await fav.remove()
  } catch (e) {
    console.log(e)
  }
  return true
}
