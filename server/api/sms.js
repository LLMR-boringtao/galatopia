import mongoose from 'mongoose'
import axios from 'axios'
import config from '../config'
const Sms = mongoose.model('Sms')

export async function getList (phone, page, limit) {
  const data = await Sms
    .find({phone: new RegExp(phone + '.*', 'i')})
    .skip(Number(page - 1) * Number(limit))
    .limit(Number(limit))
    .sort({_id: -1})
    .exec()
  return data
}

export async function getListCount (phone) {
  const data = await Sms
    
    .count({phone: new RegExp(phone + '.*', 'i')})
    .exec()
  return data
}


export async function getSms (doctor) {
  const data = await Sms
    .find({doctor: doctor})
    .exec()
  return data
}

export async function getSmsCount (doctor) {
  const data = await Sms
    .count({doctor: doctor})
    .exec()
  return data
}

export async function sendCoupneToSellor(phone, coupon) {
  const msg = '您在金榜有我的优惠码是' + coupon + ',请在金榜小程序中使用'
  const res = await axios({
    method: 'POST',
    url: config.sms.url,
    params: {
      apikey: config.sms.apikey,
      mobile: phone,
      text: '【骨松小助手】' + msg + ',祝您早日康复!'
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  })
  console.log(res.data)
  if (res.data.code === 0) {
    return true
  } else {
    return false
  }
}

export async function sendCouponToUser (phone, coupon) {
  const msg = '优惠码是' + coupon + ',请在金榜小程序中使用'
  const res = await axios({
    method: 'POST',
    url: config.sms.url,
    params: {
      apikey: config.sms.apikey,
      mobile: phone,
      text: '【骨松小助手】' + msg + ',祝您早日康复!'
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  })
  console.log(res.data)
  if (res.data.code === 0) {
    return true
  } else {
    return false
  }
}

export async function newMsg (phone, coupon) {
  const msg = '有新的用户留言。'
  const res = await axios({
    method: 'POST',
    url: config.sms.url,
    params: {
      apikey: config.sms.apikey,
      mobile: '18652211115',
      text: '【金榜有我】' + msg
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  })
  if (res.data.code === 0) {
    return true
  } else {
    return false
  }
}

export async function verifyCode (num, code) {
  console.log(config)
  const res = await axios({
    method: 'POST',
    url: config.sms.url,
    params: {
      apikey: config.sms.apikey,
      mobile: num,
      text: '【骨松小助手】您的验证码是' + code
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  })

  if (res.data.code === 0) {
    return true
  } else {
    return false
  }
}

export async function checkSms (patient, doctor, deviceType, result, checkTime) {
  let msg = '尊敬的' + patient.name
  if (patient.sex === '男') {
    msg = msg + '先生,'
  } else if (patient.sex === '男') {
    msg = msg + '女士,'
  } else {
    msg = msg + '女士/先生,'
  }
  const date = new Date(checkTime)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  let type = ''
  if (deviceType * 1 === 1) {
    type = '外周双能'
  } else {
    type = '超声'
  }
  msg = msg + '您' + year + '年' + month + '月' + day + '日做的' + type + '骨密度检测结果是:'
  let res = ''
  for (let item of result) {
    if (item.name === 'SOS' || item.name === 'Age') {
    } else {
      res = res + item.name + '=' + item.value + ','
    }
  }
  msg = msg + res + '具体结果的解读，还请咨询医师'
  // msg = msg + res + '具体结果的解读，还请咨询医师。如需完整的报告单电子版，可用此手机微信关注公众号“骨不松”，注册后，在“我的服务”里免费获得，并可免费获取更多骨松科普知识。(本短信免费)'
  // msg = msg + res + '具体结果的解读，还请咨询医师。如需完整的报告单电子版，可用此手机微信关注公众号“骨不松”，注册后，在“我的服务”里免费获得，并可免费获取更多骨松科普知识。(本短信免费)'
  const sms = await axios({
    method: 'POST',
    url: config.sms.url,
    params: {
      apikey: config.sms.apikey,
      mobile: patient.phone,
      text: '【骨松小助手】' + msg + ',祝您早日康复!'
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  })
  return sms.data
}

export async function mulSms (msg, phones) {
  console.log(config)
  const num = phones.join(',')
  const res = await axios({
    method: 'POST',
    url: 'https://sms.yunpian.com/v2/sms/batch_send.json',
    params: {
      apikey: config.sms.apikey,
      mobile: num,
      text: "【骨松小助手】" + msg + ",祝您早日康复!"
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  })
  return res.data
}

export async function sendSms (msg, phone) {
  const res = await axios({
    method:'POST',
    url: 'https://sms.yunpian.com/v2/sms/single_send.json',
    params: {
      apikey: config.sms.apikey,
      mobile: phone,
      text: "【骨松小助手】" + msg +",祝您早日康复!"
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  })
  
  return res.data
}

export async function saveSms (sms) {
  sms = new Sms(sms)
  sms = await sms.save()
  return sms
}