import mongoose from 'mongoose'

const Product = mongoose.model('Product')
const Msg = mongoose.model('Msg')

export async function findProduct (_id) {
  const data = await Product
    .find({_id: _id})
    .exec()

  return data
}

export async function getProducts (filters, limit = 50) {
  const data = await Product
    .find(filters)
    .limit(Number(limit))
    .exec()

  return data
}

export async function sellorProducts (filters) {
  const data = await Product
    .find(filters)
    .exec()
  return data
}

export async function shopProducts (filters) {
  const data = await Product
    .find(filters)
    .exec()
  return data
}

export async function getProduct (_id) {
  const data = await Product
    .findOne({
      _id: _id
    })
    .exec()

  return data
}

export async function save (msg) {
  msg = new Msg(msg)
  msg = await msg.save()
  return msg
}

export async function update (product) {
  product = await product.save()
  return product
}

export async function del (product) {
  try {
    await product.remove()
  } catch (e) {
    e
  }
  return true
}
