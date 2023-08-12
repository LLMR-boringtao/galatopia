const mongoose = require('mongoose')
const { Schema } = mongoose
const ObjectId = Schema.Types.ObjectId

const ShopSchema = new Schema({
  name: String,
  intro: String,
  logo: String,
  manager: String,
  phone: String,
  address: String,
  detail: String,
  lat: String,
  lng: String,
  distance: Number,
  print_sn: String,
  print_num: String,
  status: {
    type: Boolean,
    default: true
  },
  qr: {
		type: String,
		default: ''
	},
  sellor: {
    type: ObjectId,
    ref: 'User'
  } 
})

mongoose.model('Shop', ShopSchema)