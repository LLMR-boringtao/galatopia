const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const Mixed = Schema.Types.Mixed

const CheckSchema = new Schema({
  nid: Number,
  device: {
    type: ObjectId,
    ref: 'Device'
  },
  doctor: {
    type: ObjectId,
    ref: 'Doctor'
  },
  deviceType: {
    type: Number,
    default: 1  // 用2代表超声BMD，用1代表双能DEXA
  },
  patient: {
    type: ObjectId,
    ref: 'Patient'
  },
  result: Mixed,
  img: [String],
  checkTime: {
    type: Date,
    default: Date.now()
  }
})

mongoose.model('Check', CheckSchema)
