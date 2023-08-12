const mongoose = require('mongoose')
const { Schema } = mongoose
const ObjectId = Schema.Types.ObjectId

const FavSchema = new Schema({
  user: {
    type: ObjectId,
    ref: 'User'
  },
  school: {
    type: ObjectId,
    ref: 'School'
	},
  type: String
})

mongoose.model('Fav', FavSchema)