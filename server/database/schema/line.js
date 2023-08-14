const mongoose = require('mongoose')
const { Schema } = mongoose

const LineSchema = new Schema({
  title: String,
  year: String,
  exp: String
})

mongoose.model('Line', LineSchema)
