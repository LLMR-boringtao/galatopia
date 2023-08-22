<template lang="pug">
.page6-container
  .page6-frame
    <vue-damp-fireworks v-if="showFireworks" :boxHeight="700" :boxWidth="500">
      <p>Fireworks Animation!</p>
    </vue-damp-fireworks>
    .page6-thumb-image
      img.page6-rectangle1(src="/external/zhouxiaonan_agent_pic_final.png", alt="Rectangle1I652")
    .page6-group492
      img.page6-rectangle11(src="/external/zhangxiaoyue_match_pic_final.png", alt="Rectangle1I652")
    .page6-group464
      img.page6-star1(src="/external/star1i652-enec.svg", alt="Star1I652")
      img.page6-star3(src="/external/star3i652-369r.svg", alt="Star3I652")
      img.page6-star2(src="/external/star2i652-1j8j.svg", alt="Star2I652")
      img.page6-star4(src="/external/star4i652-y0mv.svg", alt="Star4I652")
      img.page6-star5(src="/external/star5i652-br29.svg", alt="Star5I652")
      .page6-lovely1
        .page6-group
          .page6-group1
            img.page6-vector(src="/external/vectori652-f388.svg", alt="VectorI652")
            img.page6-vector1(src="/external/vectori652-3jk9.svg", alt="VectorI652")
    .page6-group486
      .page6-title
        .page6-group2
          img.page6-vector2(src="/external/vectori652-sfxg.svg", alt="VectorI652")
          img.page6-vector3(src="/external/vectori652-xtsl.svg", alt="VectorI652")
          img.page6-vector4(src="/external/vectori652-hkp.svg", alt="VectorI652")
          img.page6-vector5(src="/external/vectori652-o2yq.svg", alt="VectorI652")
          img.page6-vector6(src="/external/vectori652-dxij.svg", alt="VectorI652")
          img.page6-vector7(src="/external/vectori652-le2t.svg", alt="VectorI652")
        span.page6-text04
          span It’s a match
      .page6-navigation
        .page6-system-status
          .page6-notch
          .page6-status-icons
            img.page6-network-signal-light(src="/external/networksignallighti652-4qap.svg", alt="NetworkSignalLightI652")
            img.page6-wi-fi-signal-light(src="/external/wifisignallighti652-n26.svg", alt="WiFiSignalLightI652")
            .page6-battery-light
              img.page6-rectangle23(src="/external/rectangle23i652-5hue.svg", alt="Rectangle23I652")
              img.page6-rectangle2-stroke(src="/external/rectangle21strokei652-j6gb.svg", alt="Rectangle21StrokeI652")
              img.page6-rectangle20(src="/external/rectangle20i652-fjt-200h.png", alt="Rectangle20I652")
          .page6-indicator
          .page6-time-light
            img.page6-svg941(src="/external/svg941i652-v9z.svg", alt="SVG941I652")
        .page6-navigation1
          .page6-component-elements
            button.page6-button-icon(@click = 'onClickLeft')
              .page6-iconarrowleft
                .page6-arrow-left21
                  img.page6-stroke1(src="/external/stroke1i652-36gw.svg", alt="Stroke1I652")
    span.page6-text06.ButtonDefault
      span
        span 周小楠 和 张小悦 似乎聊得很愉快
        br
        span 为什么不亲自聊聊看呢？
    button.page6-button(@click='goPage("bot_chat_matched")')
      span.page6-text11.ButtonDefault_CH
        span 开始聊天
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import moment from 'moment'
import Vue from 'vue'
import VueFireworks from 'vue-damp-fireworks'

Vue.use(VueFireworks)

export default {
  middleware: 'user',
  layout: 'wechat',
  head() {
    return {
      title: 'Action page'
    }
  },

  data() {
    return {
      active: 'action',
      showNav: false,
      users: [
        { id: 1, name: "陈小昊", status: "online", img: "/img/avatar-1.jpg", msg: "Hey! there I'm available", url : 'https://3a9855754f28.ngrok.app'},
        { id: 2, name: "张小雯", status: "off", img: "/img/avatar-2.jpg", msg: "Offine", url : 'https://44c5f82f3fad.ngrok.app'},
        { id: 3, name: "吴小婷", status: "online", img: "/img/avatar-3.jpg", msg: "Hey! there I'm available", url:"https://5fa2c9364a47.ngrok.app"},
        { id: 4, name: "杨小刚", status: "online", img: "/img/avatar-4.jpg", msg: "Hey! there I'm available", url:"https://a324e4fd48c1.ngrok.app"},
        { id: 5, name: "黄小鹅", status: "online", img: "/img/avatar-5.jpg", msg: "Hey! there I'm available", url:"https://b26042a5c52f.ngrok.app"},
        { id: 6, name: "胡小花", status: "online", img: "/img/avatar-6.jpg", msg: "Hey! there I'm available", url:"https://c85eccdef31d.ngrok.ap"}
        // Add more users here...
      ],
      showFireworks: true
    }
  },

  computed: {
    ...mapState([
      'imageCDN', 'user'
    ])
  },
  components: {
    VueFireworks
  },
  methods: {
    onClickLeft() {
      // 返回上一页的逻辑
      this.$router.go(-1)
    },
    mounted() {
    },
    goPage (page) {
      if (page === 'user') {
        this.$router.push('/action/user')
      } else if (page === 'chat') {
        this.$router.push('/action/1')
      } else if (page === 'bot_chat_matched') {
        this.$router.push('/action/bot_chat_matched')
      }
    },

    handleSetting () {
      this.$router.push('/edit')
    },
    goToChat(user) {
      // Replace this with your navigation logic to the chat page for the selected user.
      console.log("Navigating to chat with user:", user.id);
      this.$router.push('/action/' + user.id)
    },

  },

  created() {
  },

  filters: {
    dateformat: function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
      return moment(dataStr).format(pattern)
    }
  }
}

</script>
<style scoped>
.vue-damp-fireworks {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999999;
    /* background-color: rgba(0, 0, 0, 0.7); */
}
.interaction2-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  z-index: 0;
}
.hidden-content {
    opacity: 0;
    pointer-events: none;  /* Prevent interaction with the hidden content */
}

.page6-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.page6-frame {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: var(--dl-color-dark_background-200);
}
.page6-thumb-image {
  top: 259px;
  left: 25px;
  width: 164px;
  height: 254px;
  display: flex;
  overflow: hidden;
  position: absolute;
  box-shadow: 0px 30px 40px 0px rgba(0, 0, 0, 0.15000000596046448) ;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: rgba(255, 255, 255, 0.30000001192092896);
  border-style: solid;
  border-width: 2px;
  border-radius: 24px;
}
.page6-rectangle1 {
  top: 0px;
  left: 0px;
  width: 164px;
  height: 254px;
  position: absolute;
  flex-grow: 1;
  box-sizing: content-box;
}
.page6-frame9 {
  top: 210px;
  left: 0px;
  width: 164px;
  display: flex;
  padding: 8px 12px 12px;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-default-overlay);
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6000000238418579) 100%);
}
.page6-text {
  color: var(--dl-color-dark_element-1100);
  height: auto;
  font-size: 20px;
  font-style: Regular;
  text-align: left;
  font-family: Gochi Hand;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.page6-group492 {
  top: 278px;
  left: 189.06640625px;
  width: 164px;
  height: 254px;
  display: flex;
  overflow: hidden;
  position: absolute;
  box-shadow: 0px 30px 40px 0px rgba(0, 0, 0, 0.15000000596046448) ;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: rgba(255, 255, 255, 0.30000001192092896);
  border-style: solid;
  border-width: 2px;
  border-radius: 24px;
}
.page6-rectangle11 {
  top: 0px;
  left: 0px;
  width: 164px;
  height: 254px;
  position: absolute;
  box-sizing: content-box;
}
.page6-frame91 {
  top: 210px;
  left: 0px;
  width: 164px;
  display: flex;
  padding: 8px 12px 12px;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-default-overlay);
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6000000238418579) 100%);
}
.page6-text02 {
  color: var(--dl-color-dark_element-1100);
  height: auto;
  font-size: 20px;
  font-style: Regular;
  text-align: left;
  font-family: Gochi Hand;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.page6-group464 {
  top: 439px;
  left: 129px;
  width: 80px;
  height: 80px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.page6-star1 {
  top: 0px;
  left: 0px;
  width: 80px;
  height: 80px;
  position: absolute;
}
.page6-star3 {
  top: 3px;
  left: 3px;
  width: 74px;
  height: 74px;
  opacity: 0.40;
  position: absolute;
}
.page6-star2 {
  top: 7px;
  left: 7px;
  width: 66px;
  height: 66px;
  opacity: 0.40;
  position: absolute;
}
.page6-star4 {
  top: 11px;
  left: 11px;
  width: 58px;
  height: 58px;
  opacity: 0.40;
  position: absolute;
}
.page6-star5 {
  top: 15px;
  left: 15px;
  width: 50px;
  height: 50px;
  position: absolute;
}
.page6-lovely1 {
  top: 24px;
  left: 24px;
  width: 32px;
  height: 32px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.page6-group {
  top: 4.133333206176758px;
  left: 2.6666667461395264px;
  width: 25.733333587646484px;
  height: 22.736665725708008px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page6-group1 {
  top: 0px;
  left: 0px;
  width: 25.733333587646484px;
  height: 22.736665725708008px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page6-vector {
  top: 0px;
  left: 0px;
  width: 24px;
  height: 21px;
  opacity: 0.40;
  position: absolute;
}
.page6-vector1 {
  top: 8.65333366394043px;
  left: 9.893333435058594px;
  width: 16px;
  height: 14px;
  position: absolute;
}
.page6-group486 {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 200px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page6-title {
  top: 100px;
  left: 0px;
  width: 100%;
  height: 100px;
  display: flex;
  padding: 40px 20px 20px;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  justify-content: center;
  box-sizing: border-box;
}
.page6-group2 {
  top: 20px;
  left: 47px;
  width: 281.99993896484100%;
  height: 80.00016021728516px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page6-vector2 {
  top: 0px;
  left: 49.88067626953125px;
  width: 177px;
  height: 21px;
  opacity: 0.70;
  position: absolute;
}
.page6-vector3 {
  top: 1.3134765625px;
  left: 0.021744003519415855px;
  width: 227px;
  height: 48px;
  opacity: 0.70;
  position: absolute;
}
.page6-vector4 {
  top: 29.09765625px;
  left: 0px;
  width: 267px;
  height: 29px;
  opacity: 0.70;
  position: absolute;
}
.page6-vector5 {
  top: 36.552734100%;
  left: 25.198266983032227px;
  width: 243px;
  height: 35px;
  opacity: 0.70;
  position: absolute;
}
.page6-vector6 {
  top: 47.73095703125px;
  left: 56.54936599731445px;
  width: 178px;
  height: 32px;
  opacity: 0.70;
  position: absolute;
}
.page6-vector7 {
  top: 13.57275390625px;
  left: 108.38528442382812px;
  width: 174px;
  height: 27px;
  opacity: 0.70;
  position: absolute;
}
.page6-text04 {
  top: 40px;
  left: 69px;
  color: var(--dl-color-dark_element-1100);
  height: auto;
  position: absolute;
  font-size: 48px;
  font-style: Regular;
  text-align: center;
  font-family: Gochi Hand;
  font-weight: 400;
  line-height: 40px;
  font-stretch: normal;
  text-decoration: none;
}
.page6-navigation {
  width: 100%;
  top: 0px;
  left: 0px;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
}
.page6-system-status {
  width: 100%;
  height: 44px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page6-notch {
  gap: 14px;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 30px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.page6-status-icons {
  gap: 4px;
  top: 16px;
  left: 292px;
  width: 69px;
  display: flex;
  position: absolute;
  align-items: center;
}
.page6-network-signal-light {
  width: 20px;
  height: 14px;
}
.page6-wi-fi-signal-light {
  width: 16px;
  height: 14px;
}
.page6-battery-light {
  width: 25px;
  height: 14px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page6-rectangle23 {
  top: 5px;
  left: 24px;
  width: 1px;
  height: 4px;
  opacity: 0.40;
  position: absolute;
}
.page6-rectangle2-stroke {
  top: 1px;
  left: 0px;
  width: 23px;
  height: 12px;
  opacity: 0.40;
  position: absolute;
}
.page6-rectangle20 {
  top: 3px;
  left: 2px;
  width: 19px;
  height: 8px;
  position: absolute;
  border-radius: 1px;
}
.page6-indicator {
  top: 8px;
  left: 298px;
  width: 6px;
  height: 6px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.page6-time-light {
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
.page6-svg941 {
  top: 3px;
  left: 11px;
  width: 33px;
  height: 15px;
  position: absolute;
}
.page6-navigation1 {
  width: 100%;
  height: 56px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page6-component-elements {
  border: none;
  gap: 10px;
  top: 8px;
  left: 16px;
  width: 40px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: center;
}
.page6-button-icon {
  border: none;
  gap: 10px;
  display: flex;
  padding: 8px;
  align-items: center;
  border-radius: 48px;
  justify-content: center;
  background-color: var(--dl-color-dark_background-200);
}
.page6-iconarrowleft {
  width: 24px;
  height: 24px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page6-arrow-left21 {
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
.page6-group3 {
  top: 5px;
  left: 8.5px;
  width: 7px;
  height: 14px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page6-group4 {
  top: 0px;
  left: 0px;
  width: 7px;
  height: 14px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page6-iconly-light-arrow-left2 {
  top: 0px;
  left: 0px;
  width: 7px;
  height: 14px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page6-arrow-left2 {
  top: 0px;
  left: 7px;
  width: 14px;
  height: 7px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page6-stroke1 {
  top: 0px;
  left: 0px;
  width: 20px;
  height: 20px;
  position: absolute;
}
.page6-text06 {
  top: 603px;
  left: 61px;
  color: var(--dl-color-dark_element-100);
  height: auto;
  opacity: 0.70;
  position: absolute;
  text-align: center;
  line-height: 22px;
}
.page6-bottom-button {
  top: 698px;
  left: 0px;
  width: 100%;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
}
.page6-frame73 {
  gap: 15px;
  width: 100%;
  height: 80px;
  display: flex;
  padding: 20px 16px 4px;
  overflow: hidden;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
}
.page6-button {
  border: none;
  position: absolute;
  bottom: 100px;
  left: 120px;
  gap: 10px;
  height: 56px;
  display: flex;
  padding: 16px 40px;
  flex-grow: 1;
  align-items: center;
  flex-shrink: 0;
  border-radius: 48px;
  justify-content: center;
  background-color: var(--dl-color-dark_element-1100);
}
.page6-text11 {
  color: var(--dl-color-dark_element-100);
  height: auto;
  text-align: center;
  line-height: 22px;
}
.page6-system-footer {
  width: 100%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.page6-home-indicator {
  width: 100%;
  height: 34px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page6-home-indicator1 {
  top: 15.5px;
  left: 148px;
  width: 80px;
  height: 3px;
  position: absolute;
  border-radius: 100px;
}

</style>