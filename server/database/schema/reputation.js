const mongoose = require('mongoose')
const { Schema } = mongoose
const ObjectId = Schema.Types.ObjectId

const ReputationSchema = new Schema({
  user: {
    type: ObjectId,
    ref: 'User'
	},
	order: {
    type: ObjectId,
    ref: 'Payment'
  },
  products: [{
    type: ObjectId,
    ref: 'Product'
	}],
  rate: Number,
  remark: String,
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    }
  }
})

ReputationSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createdAt = Date.now()
  }
  next()
})

mongoose.model('Reputation', ReputationSchema)