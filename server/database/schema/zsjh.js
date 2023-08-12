// 招生计划 
const mongoose = require('mongoose')
const { Schema } = mongoose
const ObjectId = Schema.Types.ObjectId

const ZsjhSchema = new Schema({
  schoolName: String, // 学校名称
  school: {
    type: ObjectId,
    ref: 'School'
  },
  schoolCode: String, // 学校代码
  zyName: String, // 专业名称
  zymc: String, // 专业名称
  zybz: String, // 专业备注
  zy: {
    type: ObjectId,
    ref: 'Zy'
  },  // 专业
  zyCode: String, // 专业代码
  zyzName: String, // 专业组名称
  zyzCode: String, // 专业组代码
  pc: String, // 批次
  subject: String, // 科类
  plan: Number, // 计划数
  year: String, // 年份
  fee: String, // 学费
  xz: String, // 学制
  zsdm: String, // 招生代码
  zxkm: String // 再选科目
})

mongoose.model('Zsjh', ZsjhSchema)