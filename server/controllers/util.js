import config from '../config'
import randomToken from 'random-token'
const qiniu = require('qiniu')
const bucket = config.qiniu.bucket
const mac = new qiniu.auth.digest.Mac(config.qiniu.AK, config.qiniu.SK)
const cfg = new qiniu.conf.Config()
const options = {
  scope: bucket, // 你的七牛存储对象
  deadline: 7200
}
const putPolicy = new qiniu.rs.PutPolicy(options)
const uploadToken = putPolicy.uploadToken(mac)

// 图片上传
export async function upPic(file) {
  const key = `${randomToken(32)}.jpg`
  cfg.zone = qiniu.zone.Zone_z0
  const formUploader = new qiniu.form_up.FormUploader(cfg)
  const putExtra = new qiniu.form_up.PutExtra()
  // 文件上传
  return new Promise((resolved, reject) => {
    formUploader.putFile(uploadToken, key, file, putExtra, function (respErr, respBody, respInfo) {
      if (respErr) {
        console.log(respErr)
        resolved({
          success: false
        })
      }
      if (respInfo.statusCode === 200) {
        resolved({
          success: true,
          url: key
        })
      } else {
        resolved({
          success: false
        })
      }
    })
  })
}

export async function upUrl(url) {
	// 定义配置对象
	let config = new qiniu.conf.Config()
	//定义区域 （华东）；其它区域的定义可以查看七牛官方文档
	config.zone = qiniu.zone.Zone_z0
	let bucketManager = new qiniu.rs.BucketManager(mac, config)
  const key = `${randomToken(32)}.jpg`
  return new Promise((resolved, reject) => {
    bucketManager.fetch(url, bucket, key, function(
      err,
      respBody,
      respInfo
    ) {
      if (err) {
        console.log(err)
        resolved({
          success: false
        })
      } else {
        if (respInfo.statusCode == 200) {
          resolved({
            success: true,
            url: key
          })
          console.log(respBody.key);
          console.log(respBody.hash);
          console.log(respBody.fsize);
          console.log(respBody.mimeType);
        } else {
          resolved({
            success: false
          })
          console.log(respInfo.statusCode);
          console.log(respBody);
        }
      }
    })
  })
}

export async function getQiniuToken () {
  const mac = new qiniu.auth.digest.Mac(config.qiniu.AK, config.qiniu.SK)
  const options = {
    scope: bucket, // 你的七牛存储对象
    deadline: 7200
  }
  const putPolicy = new qiniu.rs.PutPolicy(options)
  const token = putPolicy.uploadToken(mac)
  const key = `${randomToken(32)}.jpeg`
  return {
    key: key,
    token: token
  }
}