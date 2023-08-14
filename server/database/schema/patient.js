const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const PatientSchema = new Schema({
  name: String,
  phone: String,
  category: {
    type: ObjectId,
    ref: 'Category'
  },
  doctor: [{
    type: ObjectId,
    ref: 'Doctor'
  }],
  expert: [{
    type: ObjectId,
    ref: 'Doctor'
  }],
  qr: {
    type: String,
    default: ''
  },
  openid: [String],
  unionid: String,
  // 微信名
  nickname: String,
  address: String,
  province: String,
  district: String,
  city: String,
  sex: String,
  email: String,
  headimgurl: String,
  avatarUrl: String,
  testResult: Number,
  date: String,
  belong: Number,
  // 用户在骨松管理里的nid
  nid: [Number],
  status: {
    type: Number,
    default: 1
  },
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }
  }
})

PatientSchema.pre('save', function (next) {
  if (!this.isNew) {
    this.meta.updatedAt = Date.now()
  }
  next()
})

mongoose.model('Patient', PatientSchema)
