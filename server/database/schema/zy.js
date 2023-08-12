// 专业表
const mongoose = require('mongoose')
const { Schema } = mongoose

const ZySchema = new Schema({
  name: String // 专业名称
})

mongoose.model('Zy', ZySchema)