const mongoose = require('mongoose')
const { Schema } = mongoose

const ContentSchema = new Schema({
	title: String,
	body: {
		type: String,
		default: ''
	},
	video: String,
	cover: String,
  pv: {
    type: Number,
    default: 0
  },
	createdAt: {
		type: Date,
		default: Date.now()
	}
})

ContentSchema.pre('save', function (next) {
  if (this.isNew) {
    this.createdAt = Date.now()
  }
  next()
})

mongoose.model('Content', ContentSchema)