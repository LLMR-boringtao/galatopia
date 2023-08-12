const mongoose = require('mongoose')
const { Schema } = mongoose

const FdtjSchema = new Schema({
  fsd: Number, // 分数段
  tf: Number, // 同分
  rs: Number, // 人数
  subject: String,  // 科目
  year: String  // 年份
})

mongoose.model('Fdtj', FdtjSchema)
