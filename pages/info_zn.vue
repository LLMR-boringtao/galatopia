<template lang="pug">
.page8-container
  .page8-frame1
    .page8-system-status
      .page8-notch
      .page8-status-icons
        img.page8-network-signal-light(src="/external/networksignallighti694-u7p.svg", alt="NetworkSignalLightI694")
        img.page8-wi-fi-signal-light(src="/external/wifisignallighti694-xhac.svg", alt="WiFiSignalLightI694")
        .page8-battery-light
          img.page8-rectangle23(src="/external/rectangle23i694-0srfi.svg", alt="Rectangle23I694")
          img.page8-rectangle2-stroke(src="/external/rectangle21strokei694-b8sp.svg", alt="Rectangle21StrokeI694")
          img.page8-rectangle20(src="/external/rectangle20i694-f5xc-200h.png", alt="Rectangle20I694")
      .page8-indicator
      .page8-time-light
        img.page8-svg941(src="/external/svg941i694-ukoq.svg", alt="SVG941I694")
    .interaction2-navigation1
      .interaction2-component-elements
        button.interaction2-button-icon(@click="onClickLeft")
          .interaction2-iconarrowleft
            img.interaction2-stroke1(src="/external/stroke1i652-gx98.svg", alt="Stroke1I652")
    .page8-frame512
      img.page8-rectangle1(src="/external/zhouxiaonan_profile2_big.png", alt="Rectangle1I694")
      .page8-frame5121
        .page8-progess-bar
          .page8-frame5
            .page8-frame51
            .page8-frame6
            .page8-frame7
            .page8-frame8
        .page8-navigation
          .page8-frame536
            img.page8-ellipse19(src="/external/ellipse19i694-sfvl-200h.png", alt="Ellipse19I694")
            .page8-frame535
              span.page8-text.ButtonDefault
                span ZhouNan
              span.page8-text2.ButtonMini
                span 12h ago
          .page8-component-elements
            button.page8-button-icon
              .page8-icon24px-star
                .page8-group
                  img.page8-vector(src="/external/vectori694-v5ff.svg", alt="VectorI694")
                  img.page8-vector1(src="/external/vectori694-g80p.svg", alt="VectorI694")
    .page8-bottom-input
      .page8-frame73
        button.page8-button-icon1
          .page8-share71
            .page8-export11
              .page8-group1
                .page8-group2
                  img.page8-vector2(src="/external/vectori694-lhy8.svg", alt="VectorI694")
                  img.page8-vector3(src="/external/vectori694-ycml.svg", alt="VectorI694")
                  img.page8-vector4(src="/external/vectori694-ex4l.svg", alt="VectorI694")
        .page8-input-frame82
          .page8-component-elements1
            span.page8-text4.BodySmall
              span Send Message...
        .page8-emojibeamingfacewithsmilingeyesemoji
          img.page8-beamingfacewithsmilingeyesemoji(src="/external/beamingfacewithsmilingeyesemojii694-vsss-200h.png", alt="beamingfacewithsmilingeyesemojiI694")
        .page8-emojiconfoundedfaceemoji
          img.page8-confoundedfaceemoji(src="/external/confoundedfaceemojii694-w2mh-200h.png", alt="confoundedfaceemojiI694")
        .page8-emojidistraughtfaceemoji
          img.page8-distraughtfaceemoji(src="/external/distraughtfaceemojii694-x7br-200h.png", alt="distraughtfaceemojiI694")
        .page8-emojifaceblowingakissemoji
          img.page8-faceblowingakissemoji(src="/external/faceblowingakissemojii694-89t-200w.png", alt="faceblowingakissemojiI694")
        .page8-emojifearfulfaceemoji
          img.page8-fearfulfaceemoji(src="/external/fearfulfaceemojii694-rbkq-200h.png", alt="fearfulfaceemojiI694")
        .page8-emojifrowningfacewithopenmouthemoji
          img.page8-frowningfacewithopenmouthemoji(src="/external/frowningfacewithopenmouthemojii694-1we-200h.png", alt="frowningfacewithopenmouthemojiI694")
        .page8-emojigrinningfacewithsweatemoji
          img.page8-grinningfacewithsweatemoji(src="/external/grinningfacewithsweatemojii694-2eob-200h.png", alt="grinningfacewithsweatemojiI694")
      .page8-system-footer
        .page8-home-indicator
          img.page8-home-indicator1(src="/external/homeindicatori694-my6l-200h.png", alt="HomeIndicatorI694")
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import randomToken from 'random-token'
import moment from 'moment'

export default {
  middleware: 'user',
  layout: 'wechat',
  head() {
    return {
      title: 'setting page'
    }
  },

  data() {
    return {
      active: 'setting',
      showNav: false,
      quillUpdateImg: false,
      fullscreenLoading: false,
      fileList: [],
      edited: {
        headimgurl: ''
      },
      domain: 'http://pic.china-op.cn/'
    }
  },

  computed: {
    ...mapState([
      'imageCDN', 'user', 'uploadUrl'
    ])
  },
  components: {

  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    async afterRead (file) {
      console.log(file)
      const key = new Date().getTime()  + "_" + file.file.name
      const token = await this.getUptoken(key)
      this.uploadImgToQiniu(token, file, key)
    },
    
    //上传图片到七牛， 使用的是axios
    uploadImgToQiniu(token,file, key){
      let that = this;
      const axiosInstance = axios.create({withCredentials: false});    //withCredentials 禁止携带cookie，带cookie在七牛上有可能出现跨域问题
      let data = new FormData();
      data.append('token', token);     //七牛需要的token，后台获取
      data.append('file', file["file"]); // 图片文件

      //  key 是上传到七牛的名字  例：原图是1.jpg,file.file.name的值为1.jpg
      
      data.append('key', key);
      axiosInstance({
          method: 'POST',
          url: 'https://upload.qiniup.com/',  //上传地址
          data: data,
          timeout:30000,      //超时时间，因为图片上传时间有可能比较长
          // onUploadProgress: (progressEvent)=> {
          //     //imgLoadPercent 是上传进度，可以用来添加进度条
          //     let imgLoadPercent = Math.round(progressEvent.loaded * 100 / progressEvent.total);
          // },
      }).then(res =>{
        if(res.status == 200){
          console.log(res)
          // 上传成功， 返回的res中会带上文件的名字 例：1.jpg  传入的key是什么返回的就是什么 
          const url = this.domain + res.data.key
          this.edited.headimgurl = url
          this.fileList = [{url: url}]
          console.log(url)
        }else{
          //上传失败
          console.log(res)
        }
      }).catch(function(err) {
          //上传失败
      });
    },


    async getUptoken (key) {
      let res = await axios.get('/qiniu/token', {
        params: {
          key: key
        }
      })
      return res.data.data.token
    },

    async beforeUpload(file){
      const isJPG = file.type === 'image/jpeg'
      const isPNG = file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG&&!isPNG) {
        this.$message.error('上传图片只能是 JPG/PNG 格式!')
        return false
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!')
        return false
      }

      //显示上传动画
      const key = randomToken(32)
      console.log(key)
      const token = await this.getUptoken(key)
      this.qiniuForm.key = key
      this.qiniuForm.token = token
      this.quillUpdateImg = true
      this.fullscreenLoading = true
    },

    async userSave () {
      let res = await this.$store.dispatch('userUpdate', this.edited)
      // const res = await axios.put('/user/api/update', this.edited) 
      if (res.data.success) {
        this.$toast.success('保存成功')
      } else {
        this.$toast.fail('保存失败')
      }
    }
  },

  async created() {
    const res = await axios.get('/user/info')
    console.log(res)
    if (res.data.success) {
      this.edited = res.data.data
      this.fileList = [{url: this.edited.headimgurl}]
    }
  },

  filters: {
    dateformat: function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
      return moment(dataStr).format(pattern)
    }
  }
}

</script>
<style scoped>
.page8-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.page8-frame1 {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: var(--dl-color-dark_background-100);
}
.page8-system-status {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 44px;
  display: flex;
  overflow: hidden;
  align-items: flex-start;
  flex-shrink: 0;
}
.page8-notch {
  gap: 14px;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 30px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.page8-status-icons {
  gap: 4px;
  top: 16px;
  left: 292px;
  width: 69px;
  display: flex;
  position: absolute;
  align-items: center;
}
.page8-network-signal-light {
  width: 20px;
  height: 14px;
}
.page8-wi-fi-signal-light {
  width: 16px;
  height: 14px;
}
.page8-battery-light {
  width: 25px;
  height: 14px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page8-rectangle23 {
  top: 5px;
  left: 24px;
  width: 1px;
  height: 4px;
  opacity: 0.40;
  position: absolute;
}
.page8-rectangle2-stroke {
  top: 1px;
  left: 0px;
  width: 23px;
  height: 12px;
  opacity: 0.40;
  position: absolute;
}
.page8-rectangle20 {
  top: 3px;
  left: 2px;
  width: 19px;
  height: 8px;
  position: absolute;
  border-radius: 1px;
}
.page8-indicator {
  top: 8px;
  left: 298px;
  width: 6px;
  height: 6px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.page8-time-light {
  top: 12px;
  left: 21px;
  width: 54px;
  height: 21px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 20px;
}
.page8-svg941 {
  top: 3px;
  left: 11px;
  width: 33px;
  height: 15px;
  position: absolute;
}
.page8-frame512 {
  top: 84px;
  left: 0px;
  width: 100%;
  height: 667px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 24px;
}
.page8-rectangle1 {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 667px;
  position: absolute;
  border-color: rgba(0, 0, 0, 0.10000000149011612);
  border-style: solid;
  border-width: 1px;
}
.page8-frame5121 {
  gap: 6px;
  top: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  padding: 12px 0 0;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
}
.page8-progess-bar {
  gap: 10px;
  width: 100%;
  height: 12px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
}
.page8-frame5 {
  gap: 6px;
  display: flex;
  padding: 4px;
  overflow: hidden;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 32px;
  justify-content: center;
  background-color: var(--dl-color-light-blur);
}
.page8-frame51 {
  gap: 10px;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 9px;
  justify-content: center;
  background-color: var(--dl-color-dark_background-100);
}
.page8-frame6 {
  gap: 6px;
  display: flex;
  padding: 4px;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 32px;
  justify-content: center;
  background-color: var(--dl-color-light-blur);
}
.page8-frame7 {
  gap: 6px;
  display: flex;
  padding: 4px;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 32px;
  justify-content: center;
  background-color: var(--dl-color-light-blur);
}
.page8-frame8 {
  gap: 6px;
  display: flex;
  padding: 4px;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 32px;
  justify-content: center;
  background-color: var(--dl-color-light-blur);
}
.page8-navigation {
  gap: 122px;
  width: 100%;
  height: 56px;
  display: flex;
  padding: 15px 16px;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  justify-content: space-between;
}
.page8-frame536 {
  gap: 8px;
  top: 8px;
  left: 16px;
  width: 90px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.page8-ellipse19 {
  width: 40px;
  height: 40px;
  border-color: rgba(255, 255, 255, 1);
  border-style: solid;
  border-width: 2px;
  border-radius: 50%;
}
.page8-frame535 {
  gap: 2px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.page8-text {
  color: var(--dl-color-light_element-1100);
  height: auto;
  text-align: left;
  line-height: 22px;
}
.page8-text2 {
  color: var(--dl-color-light_element-1100);
  height: auto;
  text-align: left;
  line-height: 16px;
}
.page8-component-elements {
  top: 8px;
  left: 319px;
  width: 40px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.page8-button-icon {
  gap: 10px;
  display: flex;
  padding: 8px;
  align-items: center;
  border-radius: 48px;
  justify-content: center;
  background-color: var(--dl-color-dark-blur);
  border: none;
}
.page8-icon24px-star {
  width: 24px;
  height: 24px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page8-group {
  top: 2px;
  left: 1.9596136808395386px;
  width: 20.070772171020508px;
  height: 19.924516677856445px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page8-vector {
  top: 0px;
  left: 0px;
  width: 14px;
  height: 16px;
  position: absolute;
}
.page8-vector1 {
  top: 6.203274726867676px;
  left: 3.090386390686035px;
  width: 17px;
  height: 14px;
  position: absolute;
}
.page8-bottom-input {
  bottom: 0;
  left: 0px;
  width: 100%;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
}
.page8-frame73 {
  gap: 8px;
  width: 100%;
  display: flex;
  padding: 8px 16px;
  overflow: hidden;
  align-items: flex-start;
  flex-shrink: 0;
  box-sizing: border-box;
}
.page8-button-icon1 {
  border: none;
  gap: 10px;
  width: 40px;
  display: flex;
  padding: 8px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 48px;
  justify-content: center;
  background-color: var(--dl-color-dark_background-200);
}
.page8-share71 {
  width: 24px;
  height: 24px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page8-export11 {
  top: 0px;
  left: 0px;
  width: 24px;
  height: 24px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.page8-group1 {
  top: 1.752500057220459px;
  left: 1.7300000190734863px;
  width: 20.540000915527344px;
  height: 20.497499465942383px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page8-group2 {
  top: 0px;
  left: 0px;
  width: 20.540000915527344px;
  height: 20.497499465942383px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page8-vector2 {
  top: 6.405433177947998px;
  left: 0px;
  width: 21px;
  height: 14px;
  position: absolute;
}
.page8-vector3 {
  top: 1.117499828338623px;
  left: 9.520000457763672px;
  width: 1px;
  height: 13px;
  position: absolute;
}
.page8-vector4 {
  top: 0px;
  left: 6.172298431396484px;
  width: 8px;
  height: 5px;
  position: absolute;
}
.page8-input-frame82 {
  gap: 12px;
  width: 148px;
  height: 40px;
  display: flex;
  padding: 2px 16px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 38px;
  background-color: var(--dl-color-dark_background-200);
}
.page8-component-elements1 {
  gap: 10px;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: center;
}
.page8-text4 {
  color: var(--dl-color-dark_element-700);
  height: auto;
  text-align: left;
  line-height: 22px;
}
.page8-emojibeamingfacewithsmilingeyesemoji {
  width: 40px;
  height: 40px;
  display: flex;
  position: relative;
  box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.10000000149011612) ;
  align-items: flex-start;
  flex-shrink: 0;
}
.page8-beamingfacewithsmilingeyesemoji {
  top: 0px;
  left: 0px;
  width: 40px;
  height: 40px;
  position: absolute;
}
.page8-emojiconfoundedfaceemoji {
  width: 40px;
  height: 40px;
  display: flex;
  position: relative;
  box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.10000000149011612) ;
  align-items: flex-start;
  flex-shrink: 0;
}
.page8-confoundedfaceemoji {
  top: 0px;
  left: 0px;
  width: 40px;
  height: 40px;
  position: absolute;
}
.page8-emojidistraughtfaceemoji {
  width: 40px;
  height: 40px;
  display: flex;
  position: relative;
  box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.10000000149011612) ;
  align-items: flex-start;
  flex-shrink: 0;
}
.page8-distraughtfaceemoji {
  top: 0px;
  left: 0px;
  width: 40px;
  height: 40px;
  position: absolute;
}
.page8-emojifaceblowingakissemoji {
  width: 40px;
  height: 40px;
  display: flex;
  position: relative;
  box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.10000000149011612) ;
  align-items: flex-start;
  flex-shrink: 0;
}
.page8-faceblowingakissemoji {
  top: 0px;
  left: 0px;
  width: 40px;
  height: 40px;
  position: absolute;
}
.page8-emojifearfulfaceemoji {
  width: 40px;
  height: 40px;
  display: flex;
  position: relative;
  box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.10000000149011612) ;
  align-items: flex-start;
  flex-shrink: 0;
}
.page8-fearfulfaceemoji {
  top: 0px;
  left: 0px;
  width: 40px;
  height: 40px;
  position: absolute;
}
.page8-emojifrowningfacewithopenmouthemoji {
  width: 40px;
  height: 40px;
  display: flex;
  position: relative;
  box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.10000000149011612) ;
  align-items: flex-start;
  flex-shrink: 0;
}
.page8-frowningfacewithopenmouthemoji {
  top: 0px;
  left: 0px;
  width: 40px;
  height: 40px;
  position: absolute;
}
.page8-emojigrinningfacewithsweatemoji {
  width: 40px;
  height: 40px;
  display: flex;
  position: relative;
  box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.10000000149011612) ;
  align-items: flex-start;
  flex-shrink: 0;
}
.page8-grinningfacewithsweatemoji {
  top: 0px;
  left: 0px;
  width: 40px;
  height: 40px;
  position: absolute;
}
.page8-system-footer {
  width: 100%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.page8-home-indicator {
  width: 100%;
  height: 34px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page8-home-indicator1 {
  top: 15.5px;
  left: 148px;
  width: 80px;
  height: 3px;
  position: absolute;
  border-radius: 100px;
}
.interaction2-navigation1 {
  top: 30px;
  gap: 122px;
  width: 100%;
  height: 56px;
  display: flex;
  padding: 15px 16px;
  overflow: hidden;
  position: absolute;
  align-items: center;
  flex-shrink: 0;
  justify-content: space-between;
  box-sizing: border-box;
}
.interaction2-component-elements {
  gap: 10px;
  top: 8px;
  left: 16px;
  width: 40px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: center;
}
.interaction2-button-icon {
  border: none;
  gap: 10px;
  display: flex;
  padding: 8px;
  align-items: center;
  border-radius: 48px;
  justify-content: center;
  background-color: var(--dl-color-dark_background-200);
}
.interaction2-iconarrowleft {
  width: 24px;
  height: 24px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.interaction2-arrow-left21 {
  top: 0px;
  left: 0px;
  width: 24px;
  height: 24px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.interaction2-group02 {
  top: 5px;
  left: 8.5px;
  width: 7px;
  height: 14px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.interaction2-group03 {
  top: 0px;
  left: 0px;
  width: 7px;
  height: 14px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.interaction2-iconly-light-arrow-left2 {
  top: 0px;
  left: 0px;
  width: 7px;
  height: 14px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.interaction2-arrow-left2 {
  top: 0px;
  left: 7px;
  width: 14px;
  height: 7px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.interaction2-stroke1 {
  top: 0px;
  left: 0px;
  width: 20px;
  height: 20px;
  position: absolute;
}
</style>