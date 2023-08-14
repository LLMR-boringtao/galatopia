import mongoose from 'mongoose'

const User = mongoose.model('User')

export async function login(phone, password) {
  let match = false
  const user = await User.findOne({ phone: phone }).exec()
  if (user) {
    match = await user.comparePassword(password, user.password)
  }
  return {
    match,
    user
  }
}
