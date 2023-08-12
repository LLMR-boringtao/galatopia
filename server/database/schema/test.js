const mongoose = require('mongoose')
const { Schema } = mongoose
const Mixed = Schema.Types.Mixed
const ObjectId = Schema.Types.ObjectId

const TestSchema = new Schema({
  nid: String,
  title: String,
  max: Number,
  min: Number,
  unit: String,
  hospital: {
    type: ObjectId,
    ref: 'Hospital'
	},
  weight: {
    type: Number,
    default: 0
  }
})

mongoose.model('Test', TestSchema)