import qiniu from 'qiniu'
import config from '../config'
import { exec } from 'shelljs'

const bucket = 'oppic'

qiniu.conf.ACCESS_KEY = config.qiniu.AK
qiniu.conf.SECRET_KEY = config.qiniu.SK
// var mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
// var config = new qiniu.conf.Config()
// config.useHttpsDomain = true
// config.zone = qiniu.zone.Zone_z2
// var bucketManager = new qiniu.rs.BucketManager(mac, config)

export const uptoken = (key) => {
  const mac = new qiniu.auth.digest.Mac(config.qiniu.AK, config.qiniu.SK)
  const options = {
    scope: config.qiniu.bucket, // 你的七牛存储对象
    deadline: 7200
  }
  const putPolicy = new qiniu.rs.PutPolicy(options)
  const uploadToken = putPolicy.uploadToken(mac)
  return uploadToken
}

export const fetchImage = async (url, key) => {
  // const client = new qiniu.rs.Client()

  return new Promise((resolve, reject) => {
    // client.fetch(url, bucket, key, (err, ret) => {
    //   if (err) reject(err)
    //   else resolve(ret)
    // })

    const bash = `qshell fetch ${url} ${bucket} [-k ${key}]`
    const child = exec(bash, {async: true})

    child.stdout.on('data', data => {
      console.log(data)
      resolve(data)
    })
  })
}
