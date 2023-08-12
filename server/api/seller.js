import mongoose from 'mongoose'
import xss from 'xss'

const Seller = mongoose.model('Seller')

export async function save (seller) {
  seller = new Seller(seller)
  seller = await seller.save()
  return seller
}

export async function getByCode (code) {
  const data = await Seller
    .findOne({code: code})
    .exec()
  return data 
}

export async function update (seller) {
  seller = await seller.save()
  return seller
}

export async function getSellerList (filter, page, limit) {
  const data = await Seller
    .find(filter)
    .skip(Number(page - 1) * Number(limit))
    .limit(Number(limit))
    .sort({_id: -1})
    .exec()
  return data
}

export async function getCouponByPhone (phone) {
  const data = await Seller
    .findOne({phone: phone})
    .exec()
  return data
}

export async function getCount (filter) {
  const data = await Seller
    .count(filter)
    .exec()
  return data
}

export async function getSeller (_id) {
  const data = await Seller
    .findOne({_id: _id})
    .exec()
  return data
}

export async function del (seller) {
  try {
    await seller.remove()
  } catch (e) {
    e
  }
  return true
}