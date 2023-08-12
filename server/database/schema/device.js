const mongoose = require('mongoose')
const { Schema } = mongoose
const ObjectId = Schema.Types.ObjectId


const DeviceSchema = new Schema({
  mid: String,
  hospital: {
    type: ObjectId,
    ref: 'Hospital'
  }
})

mongoose.model('Device', DeviceSchema)