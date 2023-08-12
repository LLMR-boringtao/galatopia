const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SlideSchema = new Schema({
  pic: String,
  url: String
})

mongoose.model('Slide', SlideSchema)
