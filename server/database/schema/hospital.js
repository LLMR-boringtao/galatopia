const mongoose = require('mongoose')
const { Schema } = mongoose

const HospitalSchema = new Schema({
  nid: Number,
	name: String,
	province: String,
	city: String,
	district: String,
	phone: String,
	address: String,
  level: String,
  lat: String,
  lng: String
})

mongoose.model('Hospital', HospitalSchema)