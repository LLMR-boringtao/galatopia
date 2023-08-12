const mongoose = require('mongoose')
const { Schema } = mongoose
const ObjectId = Schema.Types.ObjectId

const SmsSchema = new Schema({
  msg: String,
  user: {
    type: ObjectId,
    ref: 'User'
  },
  type: {
    type: String // 考生优惠码，教师服务码
  },
  phone: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

SmsSchema.pre('save', function (next) {
  if (this.isNew) {
    this.createdAt = Date.now()
  }
  next()
})


mongoose.model('Sms', SmsSchema)