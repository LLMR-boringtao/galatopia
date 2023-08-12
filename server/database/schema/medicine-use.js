const mongoose = require('mongoose')
const { Schema } = mongoose

const MedicineUseSchema = new Schema({
  tid: String,
  name: String
})

mongoose.model('MedicineUse', MedicineUseSchema)