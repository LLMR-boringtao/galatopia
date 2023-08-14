export default {
  methods: {
    async wechatInit (url) {
      // 判断是ios 苹果电脑，url输入oath 路径
      if (window.__wxjs_is_wkwebview === true) {
        url = this.$store.state.iosUrl
      }
      const res = await this.$store.dispatch('getWechatSignature', encodeURIComponent(url))

      const { data, success } = res.data
      if (!success) throw new Error('不能成功获取服务器签名！')
      const wx = window.wx
      console.log(window)

      wx.config({
        // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        debug: false,
        appId: data.appId, // 必填，公众号的唯一标识
        timestamp: data.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.noncestr, // 必填，生成签名的随机串
        signature: data.signature, // 必填，签名，见附录1
        jsApiList: [
          'previewImage',
          'hideAllNonBaseMenuItem',
          'showMenuItems',
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'chooseWXPay',
          'getLocation',
          'openLocation',
          'showMenuItems'
        ] // 必填，需要使用的 JS 接口列表，所有JS接口列表见附录2
      })

      wx.ready(() => {
        // this.wechtSetMenu()
        // this.wechatShare({})
        wx.checkJsApi({
          jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'getLocation',
            'openLocation'
          ],
          success: function (res) {
          }
        })
      })

      wx.error(function (res) {
        console.log('err', res)
      })
    }
  }
}