
import api from '../api'

let wel = "<a href='http://kbt.nodefu.net/gk'>《金榜有我》提供2023江苏高考报名的相关数据和服务，您可以在这里查询专业分，高考计划和院校信息等数据，我们会根据往年数据和您的考分智能为您提供高考志愿预填报，最后祝您金榜有我！</a> \n"
export default async (ctx) => {
  const message = ctx.weixin
  console.log('message', message)
  let mp = require('../wechat')
  let client = mp.getWechat()
  const tokenData = await client.fetchAccessToken()
  // console.log(await client.handle('getUserInfo', message.FromUserName, tokenData.access_token))
  const userInfo = await client.handle('getUserInfo', message.FromUserName, tokenData.access_token)
  if (message.MsgType === 'event') {
    // 扫描图片
    if (message.Event === 'SCAN'){
      console.log('扫描图片')
      if (message.EventKey === '101') {
        console.log('扫描图片101')
        const user = await api.user.findUserByUnionId(userInfo.unionid)
        console.log(user)
        const res = await api.invite.saveInvite({user: user._id})
        ctx.body = 'Vip 认证已经发出，我们会尽快认证!'
      } else {
        ctx.body = wel
      }
    }
    // 如果是新关注用户
    if (message.Event === 'subscribe') {
      console.log('subscribe')
      console.log(userInfo)
      let user = await api.user.findUserByUnionId(userInfo.unionid)
      // 扫描Vip二维码
      if (userInfo.qr_scene === 101) {
        console.log('扫描Vip二维码')
        const res = await api.invite.saveInvite({user: user._id})
        ctx.body = 'Vip 认证已经发出，我们会尽快认证。'
      } else {
        ctx.body = wel
      }
    } else if (message.Event === 'unsubscribe') {
      console.log('取关了')
    } else if (message.Event === 'LOCATION') {
      ctx.body = message.Latitude + ' : ' + message.Longitude
    } else if (message.Event === 'view') {
      ctx.body = message.EventKey + message.MenuId
    } else if (message.Event === 'pic_sysphoto') {
      ctx.body = message.Count + ' photos sent'
    }
  } else if (message.MsgType === 'text') {
    let reply = ''
    reply = reply + "<a href='http://kbt.nodefu.net/gk'>《金榜有我》提供2023江苏高考报名的相关数据和服务，您可以在这里查询专业分，高考计划和院校信息等数据，我们会根据往年数据和您的考分智能为您提供高考志愿预填报，最后祝您金榜有我！</a> \n"
    if (message.Content === '1') {
      // const data = await client.handle('createTag', 'VueSSR')
      // const data = await client.handle('fetchTags')
      // const data = await client.handle('batchTag', ['oW4nAvpSgoLKfVDdtK_VvGutDako'], 100)
      const data = await client.handle('getTagList', 'oW4nAvpSgoLKfVDdtK_VvGutDako')
      console.log(data)
    } else if (message.Content === '2') {
      const menu = require('./menu').default
      console.log(menu)
      await client.handle('delMenu')
      const menuData = await client.handle('createMenu', menu)

      console.log(menuData)
    } else if (message.Content === '15') {
      console.log('get qrcode')
      let tempQrData = {
        expire_seconds: 4000000,
        action_name: 'QR_SCENE',
        action_info: {
          scene: {
            scene_id: 101
          }
        }
      }
      let tempTicketData = await client.handle('createQrcode', tempQrData)
      console.log(tempTicketData)
      let tempQr = client.showQrcode(tempTicketData.ticket)
      // let qrData = {
      //   action_name: 'QR_SCENE',
      //   action_info: {
      //     scene: {
      //       scene_str: 'fasfasdfjlaksdfjals'
      //     }
      //   }
      // }
      // let ticketData = await client.handle('createQrcode', qrData)
      // console.log('ticketData')
      // console.log(ticketData)
      // let qr = client.showQrcode(ticketData.ticket)

      reply = tempQr
    }

    ctx.body = reply
  } else if (message.MsgType === 'image') {
    ctx.body = {
      type: 'image',
      mediaId: message.MediaId
    }
  } else if (message.MsgType === 'voice') {
    ctx.body = {
      type: 'voice',
      mediaId: message.MediaId
    }
  } else if (message.MsgType === 'video') {
    ctx.body = {
      type: 'video',
      mediaId: message.MediaId
    }
  }
}
