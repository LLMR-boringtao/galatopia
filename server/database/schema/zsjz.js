// 招生简章
const mongoose = require('mongoose')
const { Schema } = mongoose
const ObjectId = Schema.Types.ObjectId

const ZsjzSchema = new Schema({
  schoolName: String, // 学校名称
  school: {
    type: ObjectId,
    ref: 'School'
  },
  name: String, // 章程名称
  year: String, // 年份
  body: String, // 内容
  published: Date // 发布日期
})

mongoose.model('Zsjz', ZsjzSchema)
