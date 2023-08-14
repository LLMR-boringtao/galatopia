import mongoose from 'mongoose'

const User = mongoose.model('User')

export async function login(email, password) {
  let match = false
  const user = await User.findOne({ email: email }).exec()
  if (user) {
    match = await user.comparePassword(password, user.password)
  }
  return {
    match,
    user
  }
}

export async function findUserByUnionId(unionid) {
  const user = await User.findOne({unionid: unionid}).exec()
  return user
}

export async function findUserById(id) {
  const user = await User.findOne({_id: id}).exec()
  return user
}

export async function findUserByPhone(phone) {
  const user = await User.findOne({phone: phone}).exec()
  return user
}

export async function saveFromSession(session) {
  console.log('save From Session')
  let user = new User({
    openid: [session.user.openid],
    unionid: session.user.unionid,
    nickname: session.user.nickname,
    address: session.user.address,
    province: session.user.province,
    country: session.user.country,
    city: session.user.city,
    sex: session.user.sex,
    headimgurl: session.user.headimgurl
  })

  user = await user.save()
  return user
}

export async function save(data) {
  let user = new User(data)
  user = await user.save()
  return user
}

export async function saveFromQr(data) {
  let user = new User(data)
  user = await user.save()
  return user
}

export async function updateUserRole(user) {
  user = await user.save()
  return user
}

export async function update(user) {
  user = await user.save()
  return user
}

export async function updateFromQr(user) {
  user = await user.save()
  return user
}

export async function findUsers(filter, page, limit) {
  const users = await User
    .find(filter, {password: 0})
    .skip((page - 1) * limit)
    .limit(Number(limit))
    .exec()
  return users
}

export async function findUsersCount(filter) {
  const data = await User
    .count(filter)
    .exec()
  return data
}

// 获取用户信息
export async function findUserInfo(id) {
  console.log(id)
  const data = await User.findOne({_id: id}).exec()
  console.log(data)
  return data
}
