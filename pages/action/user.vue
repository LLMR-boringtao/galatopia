<template lang="pug">
.message-container
  .message-message
    img.message-rectangle1(src="/external/rectangle1i652-ch9h-400w.png", alt="Rectangle1I652")
    .message-navigation
      .message-system-status
        .message-notch
        .message-status-icons
          img.message-network-signal-light(src="/external/networksignallighti652-b244.svg", alt="NetworkSignalLightI652")
          img.message-wi-fi-signal-light(src="/external/wifisignallighti652-o2k5.svg", alt="WiFiSignalLightI652")
          .message-battery-light
            img.message-rectangle23(src="/external/rectangle23i652-hpbl.svg", alt="Rectangle23I652")
            img.message-rectangle2-stroke(src="/external/rectangle21strokei652-zpps.svg", alt="Rectangle21StrokeI652")
            img.message-rectangle20(src="/external/rectangle20i652-spnm-200h.png", alt="Rectangle20I652")
        .message-indicator
        .message-time-light
          img.message-svg941(src="/external/svg941i652-pk3d.svg", alt="SVG941I652")
    .message-navigation1
      .message-system-status1
        .message-notch1
        .message-status-icons1
          img.message-network-signal-light1(src="/external/networksignallighti652-3bn5.svg", alt="NetworkSignalLightI652")
          img.message-wi-fi-signal-light1(src="/external/wifisignallighti652-nd6c.svg", alt="WiFiSignalLightI652")
          .message-battery-light1
            img.message-rectangle231(src="/external/rectangle23i652-p0ec.svg", alt="Rectangle23I652")
            img.message-rectangle2-stroke1(src="/external/rectangle21strokei652-o3e.svg", alt="Rectangle21StrokeI652")
            img.message-rectangle201(src="/external/rectangle20i652-2h4-200h.png", alt="Rectangle20I652")
        .message-indicator1
        .message-time-light1
          img.message-svg9411(src="/external/svg941i652-u5w9.svg", alt="SVG941I652")
      .message-navigation2
        .message-component-elements
          button.message-button-icon(@click='onClickLeft')
            .message-iconarrowleft
              .message-arrow-left2
                img.message-stroke1(src="/external/stroke1i652-9hcr.svg", alt="Stroke1I652")
    .message-frame513
      .message-title
        .message-group485
          .message-group2
            img.message-vector(src="/external/vectori652-6zon.svg", alt="VectorI652")
            img.message-vector1(src="/external/vectori652-0u5t.svg", alt="VectorI652")
            img.message-vector2(src="/external/vectori652-eu1.svg", alt="VectorI652")
            img.message-vector3(src="/external/vectori652-yzso.svg", alt="VectorI652")
            img.message-vector4(src="/external/vectori652-o2q.svg", alt="VectorI652")
            img.message-vector5(src="/external/vectori652-py3.svg", alt="VectorI652")
          span.message-text
            span Hailey, 21
      .message-frame14
        span.message-text02.HeadlineHeadline6
          span About
        .message-group490
          span.message-text04.BodySmall
            span.
              
              My name is Madeline and I enjoy meet new people and finding ways to help them have an uplifting...
              
          span.message-text06.ButtonSmall
            span More
      .message-frame498(@click="goPage('info')")
        img.message-rectangle71(src="/external/rectangle71i652-odnq-200h.png", alt="Rectangle71I652")
        img.message-rectangle72(src="/external/rectangle72i652-g0lp-200w.png", alt="Rectangle72I652")
        img.message-rectangle73(src="/external/rectangle73i652-xks6-200w.png", alt="Rectangle73I652")
        img.message-rectangle711(src="/external/rectangle71i652-5idi-200w.png", alt="Rectangle71I652")
        img.message-rectangle721(src="/external/rectangle72i652-hkx49-200w.png", alt="Rectangle72I652")
        img.message-rectangle731(src="/external/rectangle73i652-zycn-200h.png", alt="Rectangle73I652")
      .message-frame507
        span.message-text08.HeadlineHeadline6
          span Interests
        .message-group495
          .message-frame479
            .message-frame486
              img.message-image1335(src="/external/image1335i652-kdbs-200h.png", alt="image1335I652")
              span.message-text10.ButtonSmall
                span Bowling
            .message-frame489
              img.message-image13351(src="/external/image1335i652-u3w-200h.png", alt="image1335I652")
              span.message-text12.ButtonSmall
                span Party
            .message-frame487
              img.message-image13352(src="/external/image1335i652-a4m5-200h.png", alt="image1335I652")
              span.message-text14.ButtonSmall
                span Football
          .message-frame480
            .message-frame490
              img.message-image13353(src="/external/image1335i652-qwwt-200h.png", alt="image1335I652")
              span.message-text16.ButtonSmall
                span 8-ball
            .message-frame488
              img.message-image13354(src="/external/image1335i652-0ucb-200h.png", alt="image1335I652")
              span.message-text18.ButtonSmall
                span Cat
            .message-frame4871
              img.message-image13355(src="/external/image1335i652-1vp6-200h.png", alt="image1335I652")
              span.message-text20.ButtonSmall
                span Gaming
    .message-system-footer
      .message-home-indicator
        img.message-home-indicator1(src="/external/homeindicatori652-vt8-200h.png", alt="HomeIndicatorI652")
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import moment from 'moment'

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
      ]
    }
  },

  computed: {
    ...mapState([
      'imageCDN', 'user'
    ])
  },
  components: {

  },
  methods: {
    onClickLeft() {
      // 返回上一页的逻辑
      this.$router.go(-1)
    },

    goPage (page) {
      if (page === 'info') {
        this.$router.push('/info')
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
.message-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.message-message {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: var(--dl-color-dark_background-100);
}
.message-rectangle1 {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 500px;
  position: absolute;
}
.message-navigation {
  top: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
}
.message-system-status {
  width: 100%;
  height: 44px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.message-notch {
  gap: 14px;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 30px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.message-status-icons {
  gap: 4px;
  top: 16px;
  left: 292px;
  width: 69px;
  display: flex;
  position: absolute;
  align-items: center;
}
.message-network-signal-light {
  width: 20px;
  height: 14px;
}
.message-wi-fi-signal-light {
  width: 16px;
  height: 14px;
}
.message-battery-light {
  width: 25px;
  height: 14px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.message-rectangle23 {
  top: 5px;
  left: 24px;
  width: 1px;
  height: 4px;
  opacity: 0.40;
  position: absolute;
}
.message-rectangle2-stroke {
  top: 1px;
  left: 0px;
  width: 23px;
  height: 12px;
  opacity: 0.40;
  position: absolute;
}
.message-rectangle20 {
  top: 3px;
  left: 2px;
  width: 19px;
  height: 8px;
  position: absolute;
  border-radius: 1px;
}
.message-indicator {
  top: 8px;
  left: 298px;
  width: 6px;
  height: 6px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.message-time-light {
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
.message-svg941 {
  top: 3px;
  left: 11px;
  width: 33px;
  height: 15px;
  position: absolute;
}
.message-navigation1 {
  top: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
}
.message-system-status1 {
  width: 100%;
  height: 44px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.message-notch1 {
  gap: 14px;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 30px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.message-status-icons1 {
  gap: 4px;
  top: 16px;
  left: 292px;
  width: 69px;
  display: flex;
  position: absolute;
  align-items: center;
}
.message-network-signal-light1 {
  width: 20px;
  height: 14px;
}
.message-wi-fi-signal-light1 {
  width: 16px;
  height: 14px;
}
.message-battery-light1 {
  width: 25px;
  height: 14px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.message-rectangle231 {
  top: 5px;
  left: 24px;
  width: 1px;
  height: 4px;
  opacity: 0.40;
  position: absolute;
}
.message-rectangle2-stroke1 {
  top: 1px;
  left: 0px;
  width: 23px;
  height: 12px;
  opacity: 0.40;
  position: absolute;
}
.message-rectangle201 {
  top: 3px;
  left: 2px;
  width: 19px;
  height: 8px;
  position: absolute;
  border-radius: 1px;
}
.message-indicator1 {
  top: 8px;
  left: 298px;
  width: 6px;
  height: 6px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.message-time-light1 {
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
.message-svg9411 {
  top: 3px;
  left: 11px;
  width: 33px;
  height: 15px;
  position: absolute;
}
.message-navigation2 {
  gap: 122px;
  width: 100%;
  height: 56px;
  display: flex;
  padding: 15px 16px;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-shrink: 0;
}
.message-component-elements {
  gap: 10px;
  top: 8px;
  left: 16px;
  width: 40px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: center;
}
.message-button-icon {
  border: none;
  gap: 10px;
  display: flex;
  padding: 8px;
  align-items: center;
  border-radius: 48px;
  justify-content: center;
  background-color: var(--dl-color-dark-blur);
}
.message-iconarrowleft {
  width: 24px;
  height: 24px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.message-arrow-left21 {
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
.message-group {
  top: 5px;
  left: 8.5px;
  width: 7px;
  height: 14px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.message-group1 {
  top: 0px;
  left: 0px;
  width: 7px;
  height: 14px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.message-iconly-light-arrow-left2 {
  top: 0px;
  left: 0px;
  width: 7px;
  height: 14px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.message-arrow-left2 {
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.message-stroke1 {
  top: 0px;
  left: 0px;
  width: 20px;
  height: 20px;
  position: absolute;
}
.message-frame513 {
  top: 120px;
  left: 0px;
  width: 100%;
  display: flex;
  padding: 80px 0 0;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.28778210282325745) 29%, rgba(0, 0, 0, 0.7054967284202576) 54%, rgba(0, 0, 0, 0.8581252098083496) 78%, rgba(0, 0, 0, 1) 100%);
}
.message-title {
  width: 100%;
  height: 80px;
  display: flex;
  padding: 40px 20px 20px;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  justify-content: center;
}
.message-group485 {
  top: 0px;
  left: 64px;
  width: 247.99993896484375px;
  height: 80.00016021728516px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.message-group2 {
  top: 0px;
  left: 0px;
  width: 247.99993896484375px;
  height: 80.00016021728516px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.message-vector {
  top: 9.094947017729282e-13px;
  left: 43.8668098449707px;
  width: 156px;
  height: 21px;
  opacity: 0.70;
  position: absolute;
}
.message-vector1 {
  top: 1.3134765625px;
  left: 0.019122079014778137px;
  width: 200px;
  height: 48px;
  opacity: 0.70;
  position: absolute;
}
.message-vector2 {
  top: 29.09765625px;
  left: 0px;
  width: 235px;
  height: 29px;
  opacity: 0.70;
  position: absolute;
}
.message-vector3 {
  top: 36.552734375px;
  left: 22.160486221313477px;
  width: 214px;
  height: 35px;
  opacity: 0.70;
  position: absolute;
}
.message-vector4 {
  top: 47.73095703125px;
  left: 49.731163024902344px;
  width: 156px;
  height: 32px;
  opacity: 0.70;
  position: absolute;
}
.message-vector5 {
  top: 13.57275390625px;
  left: 95.31761169433594px;
  width: 153px;
  height: 27px;
  opacity: 0.70;
  position: absolute;
}
.message-text {
  top: 20px;
  left: 31.000043869018555px;
  color: var(--dl-color-dark_background-100);
  width: 185px;
  height: auto;
  position: absolute;
  font-size: 40px;
  align-self: stretch;
  font-style: Regular;
  text-align: center;
  font-family: Gochi Hand;
  font-weight: 400;
  line-height: 40px;
  font-stretch: normal;
  text-decoration: none;
}
.message-frame14 {
  gap: 8px;
  display: flex;
  padding: 16px;
  align-items: flex-start;
  flex-direction: column;
}
.message-text02 {
  color: var(--dl-color-dark_element-100);
  height: auto;
  text-align: left;
  line-height: 22px;
}
.message-group490 {
  width: 343px;
  height: 44px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 1;
}
.message-text04 {
  color: var(--dl-color-dark_element-500);
  width: 343px;
  height: auto;
  position: absolute;
  text-align: left;
  line-height: 22px;
}
.message-text06 {
  top: 24px;
  left: 276px;
  color: var(--dl-color-dark_four-700);
  height: auto;
  position: absolute;
  text-align: left;
  line-height: 18px;
}
.message-frame498 {
  gap: 8px;
  width: 100%;
  display: flex;
  padding: 8px 0;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.10000000149011612) ;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
}
.message-rectangle71 {
  width: 140px;
  height: 192px;
  box-sizing: content-box;
  border-radius: 12px;
}
.message-rectangle72 {
  width: 140px;
  height: 192px;
  box-sizing: content-box;
  border-radius: 12px;
}
.message-rectangle73 {
  width: 140px;
  height: 192px;
  box-sizing: content-box;
  border-radius: 12px;
}
.message-rectangle711 {
  width: 140px;
  height: 192px;
  box-sizing: content-box;
  border-radius: 12px;
}
.message-rectangle721 {
  width: 140px;
  height: 192px;
  box-sizing: content-box;
  border-radius: 12px;
}
.message-rectangle731 {
  width: 140px;
  height: 192px;
  box-sizing: content-box;
  border-radius: 12px;
}
.message-frame507 {
  gap: 12px;
  width: 100%;
  display: flex;
  padding: 16px;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  box-sizing: border-box;
}
.message-text08 {
  color: var(--dl-color-dark_element-100);
  height: auto;
  text-align: left;
  line-height: 22px;
}
.message-group495 {
  width: 316px;
  height: 152px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 1;
}
.message-frame479 {
  gap: 8px;
  top: 0px;
  left: 0px;
  width: 316.203125px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.message-frame486 {
  gap: 6px;
  display: flex;
  padding: 8px 24px;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05000000074505806) ;
  align-items: center;
  border-color: rgba(28, 28, 28, 1);
  border-style: solid;
  border-width: 2px;
  border-radius: 57px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-dark_background-100);
}
.message-image1335 {
  width: 32px;
  height: 32px;
}
.message-text10 {
  color: var(--dl-color-dark_element-100);
  height: auto;
  text-align: left;
  line-height: 18px;
}
.message-frame489 {
  gap: 6px;
  display: flex;
  padding: 8px 24px;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05000000074505806) ;
  align-items: center;
  border-color: rgba(28, 28, 28, 1);
  border-style: solid;
  border-width: 2px;
  border-radius: 57px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-dark_background-100);
}
.message-image13351 {
  width: 32px;
  height: 32px;
}
.message-text12 {
  color: var(--dl-color-dark_element-100);
  height: auto;
  text-align: left;
  line-height: 18px;
}
.message-frame487 {
  gap: 6px;
  display: flex;
  padding: 8px 24px;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05000000074505806) ;
  align-items: center;
  border-color: rgba(28, 28, 28, 1);
  border-style: solid;
  border-width: 2px;
  border-radius: 57px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-dark_background-100);
}
.message-image13352 {
  width: 32px;
  height: 32px;
}
.message-text14 {
  color: var(--dl-color-dark_element-100);
  height: auto;
  text-align: left;
  line-height: 18px;
}
.message-frame480 {
  gap: 8px;
  top: 80px;
  left: 0px;
  width: 299.0531311035156px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.message-frame490 {
  gap: 6px;
  display: flex;
  padding: 8px 24px;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05000000074505806) ;
  align-items: center;
  border-color: rgba(28, 28, 28, 1);
  border-style: solid;
  border-width: 2px;
  border-radius: 57px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-dark_background-100);
}
.message-image13353 {
  width: 32px;
  height: 32px;
}
.message-text16 {
  color: var(--dl-color-dark_element-100);
  height: auto;
  text-align: left;
  line-height: 18px;
}
.message-frame488 {
  gap: 6px;
  display: flex;
  padding: 8px 24px;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05000000074505806) ;
  align-items: center;
  border-color: rgba(28, 28, 28, 1);
  border-style: solid;
  border-width: 2px;
  border-radius: 57px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-dark_background-100);
}
.message-image13354 {
  width: 32px;
  height: 32px;
}
.message-text18 {
  color: var(--dl-color-dark_element-100);
  height: auto;
  text-align: left;
  line-height: 18px;
}
.message-frame4871 {
  gap: 6px;
  display: flex;
  padding: 8px 24px;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05000000074505806) ;
  align-items: center;
  border-color: rgba(28, 28, 28, 1);
  border-style: solid;
  border-width: 2px;
  border-radius: 57px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-dark_background-100);
}
.message-image13355 {
  width: 32px;
  height: 32px;
}
.message-text20 {
  color: var(--dl-color-dark_element-100);
  height: auto;
  text-align: left;
  line-height: 18px;
}
.message-system-footer {
  top: 778px;
  left: 0px;
  width: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.message-home-indicator {
  width: 100%;
  height: 34px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.message-home-indicator1 {
  top: 15.5px;
  left: 148px;
  width: 80px;
  height: 3px;
  position: absolute;
  border-radius: 100px;
}
</style>