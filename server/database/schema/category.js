const mongoose = require('mongoose')
const { Schema } = mongoose

const CategorySchema = new Schema({
  title: String,
  tid: Number
})

mongoose.model('Category', CategorySchema)