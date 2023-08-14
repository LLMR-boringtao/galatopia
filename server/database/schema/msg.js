const mongoose = require('mongoose')
const { Schema } = mongoose
const ObjectId = Schema.Types.ObjectId

const MsgSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  title: String,
  msg: String,
  ip: String,
  type: String,
  reply: String,
  user: {
    type: ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date
  }
})

MsgSchema.pre('save', function (next) {
  if (this.isNew) {
    this.createdAt = Date.now()
  }
  next()
})

mongoose.model('Msg', MsgSchema)
