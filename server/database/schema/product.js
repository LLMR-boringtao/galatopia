const mongoose = require('mongoose')
const { Schema } = mongoose
const Mixed = Schema.Types.Mixed
const ObjectId = Schema.Types.ObjectId

const ProductSchema = new Schema({
  price: String,
  title: String,
  intro: String,
  shops: [{
    type: ObjectId,
    ref: 'Shop'
  }],
  sellor: {
    type: ObjectId,
    ref: 'Sellor'
  },
  status: {
    type: Number,
    default: 1
  },
  images: [
    String
  ],
  parameters: [
    {
      key: String,
      value: String
    }
  ]
})

mongoose.model('Product', ProductSchema)