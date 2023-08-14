const mongoose = require('mongoose')
const { Schema } = mongoose
const ObjectId = Schema.Types.ObjectId

const CartSchema = new Schema({
  user: {
    type: ObjectId,
    ref: 'User'
  },
  product: {
    type: ObjectId,
    ref: 'Product'
  },
  shop: {
    type: ObjectId,
    ref: 'Shop'
	},
	num: Number
})

mongoose.model('Cart', CartSchema)