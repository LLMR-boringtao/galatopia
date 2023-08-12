const mongoose = require('mongoose')
const { Schema } = mongoose
const ObjectId = Schema.Types.ObjectId

const ZyfSchema = new Schema({
  year: String,
  bc: String, // 批次 当时写错了，应该是批次 但是已经写入数据库了，所以就不改了 本科提前批，本科批，艺体批，专科批
  pc: String, // 批次 本科提前批，本科批，艺体批，专科批
  pcmc: String, // 批次名称
  subject: String, // 科目
  subjectPy: String, // 科目拼音
  school: String, // 简称
  schoolId: {
    type: ObjectId,
    ref: 'School'
  },
  schoolNum: String,
  zyz: String, // 专业组
  zydm: String, // 专业代码
  zxkm: String, // 再选科目
  zymc: String, // 专业名称
  zybz: String, // 专业备注 22年的专业分有了专业备注和专业一起显示
  zy: {
    type: ObjectId,
    ref: 'Zy'
  },
  rs: String, // 人数
  zdf: Number, // 最低分
  mark: String, // 位次
  sf: String // 省
})

mongoose.model('Zyf', ZyfSchema)
