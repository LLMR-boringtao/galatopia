const mongoose = require('mongoose')
const { Schema } = mongoose
const Mixed = Schema.Types.Mixed
const ObjectId = Schema.Types.ObjectId

const PaymentSchema = new Schema({
  user: {
    type: ObjectId,
    ref: 'User'
  },
  payType: String,
  totalFee: Number,
  order: Mixed,
  tradeId: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

PaymentSchema.pre('save', function (next) {
  if (this.isNew) {
    this.createdAt = Date.now()
  } 
  next()
})

mongoose.model('Payment', PaymentSchema)