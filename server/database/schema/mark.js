const mongoose = require('mongoose')
const { Schema } = mongoose
const Mixed = Schema.Types.Mixed
const ObjectId = Schema.Types.ObjectId

const MarkSchema = new Schema({
  line: {
    type: ObjectId,
    ref: 'Line'
  },
  school: {
    type: ObjectId,
    ref: 'School'
  },
  title: String,
  zyz: String,
  zxkm: String,
  zdf: {
    type: Number,
    default: 0
  },
  tfpx: Mixed,
  subject: String,
  year: String
})

mongoose.model('Mark', MarkSchema)
