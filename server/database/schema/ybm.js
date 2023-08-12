const mongoose = require('mongoose')
const { Schema } = mongoose
const ObjectId = Schema.Types.ObjectId

const YbmSchema = new Schema({
  user: {
    type: ObjectId,
    ref: 'User'
  },
  subject: String,
  point: Number,
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

YbmSchema.pre('save', function (next) {
  if (this.isNew) {
    this.createdAt = Date.now()
  }

  next()
})

mongoose.model('Ybm', YbmSchema)
