import mongoose from 'mongoose'
import { getWechat, getOAuth } from '../wechat'

const User = mongoose.model('User')

const client = getWechat()

export async function getSignatureAsync (url) {
  const data = await client.fetchAccessToken()
  const token = data.access_token
  const ticketData = await client.fetchTicket(token)
  const ticket = ticketData.ticket
  console.log('url')
  console.log(url)
  let params = client.sign(ticket, url)
  params.appId = client.appID

  return params
}

export function getAuthorizeURL (...args) {
  const oauth = getOAuth()

  console.log(oauth)
  return oauth.getAuthorizeURL(...args)
}

export async function getUserByCode (code) {
  const oauth = getOAuth()
  const data = await oauth.fetchAccessToken(code)
  const user = await oauth.getUserInfo(data.access_token, data.unionid)
  // const user = await oauth.getUserInfo(data.access_token, data.openid)
  let existUser = await User.findOne({
    unionid: data.unionid
  }).exec()

  if (!existUser) {
    let newUser = new User({
      openid: [data.openid],
      unionid: data.unionid,
      nickname: user.nickname,
      province: user.province,
      country: user.country,
      city: user.city,
      headimgurl: user.headimgurl,
      sex: user.sex
    })

    existUser = await newUser.save()
  }

  return {
    openid: existUser.openid,
    nickname: existUser.nickname,
    province: existUser.province,
    country: existUser.country,
    city: existUser.city,
    unionid: user.unionid, // 保留原始的unionid
    role: existUser.role,
    headimgurl: existUser.headimgurl,
    sex: existUser.sex
  }
}


