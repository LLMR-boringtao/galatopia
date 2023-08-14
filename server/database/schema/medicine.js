const mongoose = require('mongoose')
const { Schema } = mongoose

const MedicineSchema = new Schema({
  nid: String,
  title: String,
  type: String,
  info: String,
  use: [],
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    }
  }
})

MedicineSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createdAt = Date.now()
  }
  next()
})

mongoose.model('Medicine', MedicineSchema)