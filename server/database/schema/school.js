const mongoose = require('mongoose')
const { Schema } = mongoose

const SchoolSchema = new Schema({
  name: String,
  num: String,
  pm: String, // 排名
  pmNum: Number, // 数字格式
  jc: String, // 简称
  nameEn: String, // 英文名字
  xxdm: String, // 学校代码
  sf: String, // 所在省份
  cq: String, // 所在城区
  cjsj: String, // 创建时间
  wbl: String, // 女生比例
  mbl: String, // 男生比例
  zrlx: String, // 自然类型
  xxlx: String, // 学校类型
  ssjg: String, // 所属机构
  jdbq: String, // 简单标签
  ys: Boolean, // 是否艺术
  jbw: Boolean, // 985
  eyy: Boolean, // 211
  gzd: Boolean, // 国重点
  sl: Boolean, // 私立
  sjpm: String, // 世界排名
  pmhz: String, // 报名汇总
  ssd: String, // 硕士点
  bsd: String, // 博士点
  sjyl: String, // 世界一流
  yldx: String, // 一流大学
  tags: String, // 标签汇总
  content: String, // 描述
  bk: String, // 本科 专科
  phone: String, // 招办电话
  email: String, // 电子邮箱
  address: String, // 通讯地址
  web: String, // 官网
  mr: String, // 名人
  pgjg: String, // 评估结果
  jyqk: String, // 就业情况
  tjzy: [String]  // 推荐专业
})

mongoose.model('School', SchoolSchema)
