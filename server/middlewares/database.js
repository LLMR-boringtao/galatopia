import fs from 'fs'
import { resolve } from 'path'
import mongoose from 'mongoose'
import config from '../config'
import R from 'ramda'

const models = resolve(__dirname, '../database/schema')

fs.readdirSync(models)
  .filter(file => ~file.search(/^[^\.].*js$/))
  .forEach(file => require(resolve(models, file)))

const formatData = R.map(i => {
  i._id = i.nmId

  return i
})

// let wikiCharacters = require(resolve(__dirname, '../database/json/completeCharacters.json'))
// let wikiHouses = require(resolve(__dirname, '../database/json/completeHouses.json'))

// let province = require(resolve(__dirname, '../database/json/province.json'))
// let city = require(resolve(__dirname, '../database/json/city.json'))
// let district = require(resolve(__dirname, '../database/json/district.json'))

// wikiCharacters = formatData(wikiCharacters)

export const database = app => {
  mongoose.set('debug', true)

  mongoose.connect(config.db)

  mongoose.connection.on('disconnected', () => {
    mongoose.connect(config.db)
  })
  mongoose.connection.on('error', err => {
    console.error(err)
  })

  mongoose.connection.on('open', async () => {
    console.log('Connected to MongoDB ', config.db)
    const User = mongoose.model('User')

    let user = await User.findOne({
      phone: '888888'
    }).exec()

    if (!user) {
      console.log('写入管理员数据')
      user = new User({
        phone: '888888',
        password: 'Admin123456',
        role: 'admin'
      })

      await user.save()
    }
  })
}
