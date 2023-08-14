const mongoose = require('mongoose')
const { Schema } = mongoose
const Mixed = Schema.Types.Mixed

const VideoSchema = new Schema({
  videoId: String,
  info: Mixed,
  ip: String,
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    }
  }
})

VideoSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createdAt = Date.now()
  }
  next()
})

mongoose.model('Video', VideoSchema)