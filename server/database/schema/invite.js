const mongoose = require('mongoose')
const { Schema } = mongoose
const ObjectId = Schema.Types.ObjectId

const InviteSchema = new Schema({
  user: {
    type: ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

InviteSchema.pre('save', function (next) {
  if (this.isNew) {
    this.createdAt = Date.now()
  } 
  next()
})

mongoose.model('Invite', InviteSchema)
