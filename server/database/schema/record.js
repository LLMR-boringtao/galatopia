const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const Mixed = Schema.Types.Mixed

const RecordSchema = new Schema({
  place: String,
  patient: {
    type: ObjectId,
    ref: 'Patient'
  },
  hospital: {
    type: ObjectId,
    ref: 'Hospital'
  },
  doctor: {
    type: ObjectId,
    ref: 'Doctor'
  },
  next: {
    type: Date,
    default: Date.now()
  },
  nextCheck: [String],
  pic: [String],
  tests: Mixed,
  medicines: Mixed, 
  nid: Number,
  status: {
    type: Number,
    default: 1
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

mongoose.model('Record', RecordSchema)
