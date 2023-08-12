const mongoose = require('mongoose')
const { Schema } = mongoose
const ObjectId = Schema.Types.ObjectId

const ZypmSchema = new Schema({
  zy: { 
    type: ObjectId,
    ref: 'Zy'
  },
  zyName: String, // 专业名称
  schoolName: String, // 学校名称
  school: {
    type: ObjectId,
    ref: 'School'
  },
  pm: Number, // 排名
  pj: String // 评级
})

mongoose.model('Zypm', ZypmSchema)
