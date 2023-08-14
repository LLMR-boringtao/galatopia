const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NewsSchema = new Schema({
  title: String,
  body: String,
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }
  }
})

NewsSchema.pre('save', function (next) {
  if (!this.isNew) {
    this.meta.updatedAt = Date.now()
  }
  next()
})

mongoose.model('News', NewsSchema)
