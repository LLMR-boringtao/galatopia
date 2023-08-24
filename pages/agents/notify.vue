<template lang="pug">
.page-container
  .page-frame
    .page-frame516
      .page-frame531
        img.page-star1(src="/external/zhnagxiaoyue_icon.svg", alt="Star1I652")
        .page-frame464
          span.page-text.ButtonSmall
            span 张小悦 给你发送了真人聊天邀请。
          span.page-text04
            span.page-text05
            span • 今天 13：25
      .page-frame534
        img.page-star11(src="/external/aobenhaimo.svg", alt="Star1I652")
        .page-frame4641
          span.page-text07.ButtonSmall
            span 周小楠 刚刚参加了《奥本海默》电影首映礼！他觉得场景超级震撼，BOOM！
          span.page-text11
            span.page-text12
            span • 今天 10：00
      .page-frame532
        img.page-star12(src="/external/zhounan_icon.svg", alt="Star1I652")
        .page-frame4642
          span.page-text14.ButtonSmall
            span 今日总结：认识了20位新小伙伴，参加了城镇里3项活动，周小楠 想和你分享。
          span.page-text18
            span.page-text19
            span • 昨天 23：59
      .page-frame533
        img.page-star13(src="/external/zhounan_icon.svg", alt="Star1I652")
        .page-frame4643
          span.page-text21.ButtonSmall
            span 周小楠 突然对你的音乐爱好很感兴趣，你愿意介绍平时听什么歌吗？
              span.page-text21.ButtonSmall
                span 聊会儿：你平时喜欢听啥乐队？
          span.page-text25
            span.page-text26
            span • 昨天 21：00
      .page-frame535
        img.page-star14(src="/external/chinajoy_icon.svg", alt="Star1I652")
        .page-frame4644
          span.page-text28.ButtonSmall
            span
              span 今天在ChinaJoy活动上，周小楠 邂逅了 张小悦，发现彼此都很喜欢动漫《时光代理人》。
          span.page-text35
            span.page-text36
            span • 昨天 17：30
      .page-frame536
        img.page-star15(src="/external/cosplay.svg", alt="Star1I653")
        .page-frame4645
          span.page-text38.ButtonSmall
            span ChinaJoy！周小楠 在活动现场玩了一整天。
          span.page-text42
            span.page-text43
            span • 昨天 8：30
    .page-system-footer
      .page-home-indicator
        img.page-home-indicator1(src="/external/homeindicatori652-rmm-200h.png", alt="HomeIndicatorI652")
    .page-navigation
      .page-system-status
        .page-notch
        .page-status-icons
          img.page-network-signal-light(src="/external/networksignallighti652-h5qe.svg", alt="NetworkSignalLightI652")
          img.page-wi-fi-signal-light(src="/external/wifisignallighti652-r2hc.svg", alt="WiFiSignalLightI652")
          .page-battery-light
            img.page-rectangle23(src="/external/rectangle23i652-o5ia.svg", alt="Rectangle23I652")
            img.page-rectangle2-stroke(src="/external/rectangle21strokei652-0x0n.svg", alt="Rectangle21StrokeI652")
            img.page-rectangle20(src="/external/rectangle20i652-05w-200h.png", alt="Rectangle20I652")
        .page-indicator
        .page-time-light
          img.page-svg941(src="/external/svg941i652-vnd2.svg", alt="SVG941I652")
      .page-navigation1
        .page-component-elements
          button.page-button-icon(@click="goBack")
            .page-iconarrowleft
              img.page-stroke1(src="/external/arrow - left.png", alt="Stroke1I652")
        .page-component-elements1
          button.page-button-icon1
            .page-iconsearch
              .page-searchnormal11
                .page-group2
                  .page-group3
                    img.page-vector(src="/external/vectori652-3ojn.svg", alt="VectorI652")
                    img.page-vector1(src="/external/vectori652-lpfz.svg", alt="VectorI652")
    .page-title
      .page-group4
        img.page-vector2(src="/external/vectori652-4fej.svg", alt="VectorI652")
        img.page-vector3(src="/external/vectori652-ptuw.svg", alt="VectorI652")
        img.page-vector4(src="/external/vectori652-5zw9.svg", alt="VectorI652")
        img.page-vector5(src="/external/vectori652-sx9g.svg", alt="VectorI652")
        img.page-vector6(src="/external/vectori652-kdmp.svg", alt="VectorI652")
        img.page-vector7(src="/external/vectori652-ey2h.svg", alt="VectorI652")
      span.page-text45
        span Notify
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
      title: 'agents page'
    }
  },

  data() {
    return {
      active: 'agents',
      agents: [
        {
          name: 'Agents A',
          img: '/img/1.png'
        },
        {
          name: 'Agents B',
          img: '/img/2.png'
        },
        {
          name: 'Agents C',
          img: '/img/3.png'
        }
      ],
      showNav: false
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
    goPage(page) {
      if (page === 'index') {
        this.$router.push({
          path: '/'
        })
      }
    },
    goBack () {
      this.$router.go(-1)
    }, 
    handleSetting () {
      this.$router.push('/edit')
    },
    prevSlide() {
      console.log('left')
      this.$refs.swipe.prev();
    },
    nextSlide() {
      console.log('right')
      this.$refs.swipe.next();
    },
    handleChat () {
      this.$router.push('/agents/chat')
    },
    handleCfg () {
      this.$router.push('/agents/cfg')
    }
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
.page-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.page-frame {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: var(--dl-color-dark_background-200);
}
.page-frame516 {
  top: 241px;
  left: 16px;
  right: 16px;
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  border-radius: 24px;
  flex-direction: column;
  background-color: var(--dl-color-dark_background-100);
}
.page-frame531 {
  gap: 12px;
  width: 100%;
  display: flex;
  padding: 15px 16px;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: var(--dl-color-dark_background-100);
  box-sizing: border-box;
}
.page-star1 {
  width: 56px;
  height: 56px;
}
.page-frame464 {
  gap: 6px;
  width: 243px;
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.page-text {
  color: var(--dl-color-dark_element-100);
  height: auto;
  align-self: stretch;
  text-align: left;
  line-height: 18px;
}
.page-text02 {
  color: var(--dl-color-dark_element-600);
  height: auto;
  align-self: stretch;
  text-align: left;
  line-height: 18px;
}
.page-text04 {
  color: rgba(255, 81, 23, 1);
  height: auto;
  font-size: 12px;
  align-self: stretch;
  font-style: Medium;
  text-align: left;
  font-family: Aeonik;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.page-text05 {
  color: var(--dl-color-light_four-700);
}
.page-frame534 {
  gap: 12px;
  width: 343px;
  display: flex;
  padding: 15px 16px;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: var(--dl-color-dark_background-100);
}
.page-star11 {
  width: 56px;
  height: 56px;
}
.page-frame4641 {
  gap: 6px;
  width: 243px;
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.page-text07 {
  color: var(--dl-color-dark_element-100);
  height: auto;
  align-self: stretch;
  text-align: left;
  line-height: 18px;
}
.page-text09 {
  color: var(--dl-color-dark_element-600);
  height: auto;
  align-self: stretch;
  text-align: left;
  line-height: 18px;
}
.page-text11 {
  color: rgba(255, 81, 23, 1);
  height: auto;
  font-size: 12px;
  align-self: stretch;
  font-style: Medium;
  text-align: left;
  font-family: Aeonik;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.page-text12 {
  color: var(--dl-color-light_four-700);
}
.page-frame532 {
  gap: 12px;
  width: 343px;
  display: flex;
  padding: 15px 16px;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: var(--dl-color-dark_background-100);
}
.page-star12 {
  width: 56px;
  height: 56px;
}
.page-frame4642 {
  gap: 6px;
  width: 243px;
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.page-text14 {
  color: var(--dl-color-dark_element-100);
  height: auto;
  align-self: stretch;
  text-align: left;
  line-height: 18px;
}
.page-text16 {
  color: var(--dl-color-dark_element-600);
  height: auto;
  align-self: stretch;
  text-align: left;
  line-height: 18px;
}
.page-text18 {
  color: rgba(255, 81, 23, 1);
  height: auto;
  font-size: 12px;
  align-self: stretch;
  font-style: Medium;
  text-align: left;
  font-family: Aeonik;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.page-text19 {
  color: var(--dl-color-light_four-700);
}
.page-frame533 {
  gap: 12px;
  width: 343px;
  display: flex;
  padding: 15px 16px;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: var(--dl-color-dark_background-100);
}
.page-star13 {
  width: 56px;
  height: 56px;
}
.page-frame4643 {
  gap: 6px;
  width: 243px;
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.page-text21 {
  color: var(--dl-color-dark_element-100);
  height: auto;
  align-self: stretch;
  text-align: left;
  line-height: 18px;
}
.page-text23 {
  color: var(--dl-color-dark_element-600);
  height: auto;
  align-self: stretch;
  text-align: left;
  line-height: 18px;
}
.page-text25 {
  color: rgba(255, 81, 23, 1);
  height: auto;
  font-size: 12px;
  align-self: stretch;
  font-style: Medium;
  text-align: left;
  font-family: Aeonik;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.page-text26 {
  color: var(--dl-color-light_four-700);
}
.page-frame535 {
  gap: 12px;
  width: 343px;
  display: flex;
  padding: 15px 16px;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: var(--dl-color-dark_background-100);
}
.page-star14 {
  width: 56px;
  height: 56px;
}
.page-frame4644 {
  gap: 6px;
  width: 243px;
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.page-text28 {
  color: var(--dl-color-dark_element-100);
  height: auto;
  align-self: stretch;
  text-align: left;
  line-height: 18px;
}
.page-text33 {
  color: var(--dl-color-dark_element-500);
  height: auto;
  align-self: stretch;
  text-align: left;
  line-height: 18px;
}
.page-text35 {
  color: rgba(255, 81, 23, 1);
  height: auto;
  font-size: 12px;
  align-self: stretch;
  font-style: Medium;
  text-align: left;
  font-family: Aeonik;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.page-text36 {
  color: var(--dl-color-light_four-700);
}
.page-frame536 {
  gap: 12px;
  width: 343px;
  display: flex;
  padding: 15px 16px;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: var(--dl-color-dark_background-100);
}
.page-star15 {
  width: 56px;
  height: 56px;
}
.page-frame4645 {
  gap: 6px;
  width: 243px;
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.page-text38 {
  color: var(--dl-color-dark_element-100);
  height: auto;
  align-self: stretch;
  text-align: left;
  line-height: 18px;
}
.page-text40 {
  color: var(--dl-color-dark_element-500);
  height: auto;
  align-self: stretch;
  text-align: left;
  line-height: 18px;
}
.page-text42 {
  color: rgba(255, 81, 23, 1);
  height: auto;
  font-size: 12px;
  align-self: stretch;
  font-style: Medium;
  text-align: left;
  font-family: Aeonik;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.page-text43 {
  color: var(--dl-color-light_four-700);
}
.page-system-footer {
  bottom: 0;
  left: 0px;
  width: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.page-home-indicator {
  width: 375px;
  height: 34px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page-home-indicator1 {
  top: 15.5px;
  left: 148px;
  width: 80px;
  height: 3px;
  position: absolute;
  border-radius: 100px;
}
.page-navigation {
  top: 0px;
  left: 0px;
  width: 375px;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
}
.page-system-status {
  width: 375px;
  height: 44px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page-notch {
  gap: 14px;
  top: 0px;
  left: 0px;
  width: 375px;
  height: 30px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.page-status-icons {
  gap: 4px;
  top: 16px;
  left: 292px;
  width: 69px;
  display: flex;
  position: absolute;
  align-items: center;
}
.page-network-signal-light {
  width: 20px;
  height: 14px;
}
.page-wi-fi-signal-light {
  width: 16px;
  height: 14px;
}
.page-battery-light {
  width: 25px;
  height: 14px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page-rectangle23 {
  top: 5px;
  left: 24px;
  width: 1px;
  height: 4px;
  opacity: 0.40;
  position: absolute;
}
.page-rectangle2-stroke {
  top: 1px;
  left: 0px;
  width: 23px;
  height: 12px;
  opacity: 0.40;
  position: absolute;
}
.page-rectangle20 {
  top: 3px;
  left: 2px;
  width: 19px;
  height: 8px;
  position: absolute;
  border-radius: 1px;
}
.page-indicator {
  top: 8px;
  left: 298px;
  width: 6px;
  height: 6px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.page-time-light {
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
.page-svg941 {
  top: 3px;
  left: 11px;
  width: 33px;
  height: 15px;
  position: absolute;
}
.page-navigation1 {
  width: 375px;
  height: 56px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page-component-elements {
  gap: 10px;
  top: 8px;
  left: 16px;
  width: 40px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: center;
}
.page-button-icon {
  border: none;
  gap: 10px;
  display: flex;
  padding: 8px;
  align-items: center;
  border-radius: 48px;
  justify-content: center;
  background-color: var(--dl-color-dark_background-100);
}
.page-iconarrowleft {
  width: 24px;
  height: 24px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page-arrow-left21 {
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
.page-group {
  top: 5px;
  left: 8.5px;
  width: 7px;
  height: 14px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page-group1 {
  top: 0px;
  left: 0px;
  width: 7px;
  height: 14px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page-iconly-light-arrow-left2 {
  top: 0px;
  left: 0px;
  width: 7px;
  height: 14px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page-arrow-left2 {
  top: 0px;
  left: 7px;
  width: 14px;
  height: 7px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page-stroke1 {
  top: 0px;
  left: 0px;
  width: 24px;
  height: 24px;
  position: absolute;
}
.page-component-elements1 {
  gap: 10px;
  top: 8px;
  left: 319px;
  width: 40px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.page-button-icon1 {
  border: none;
  gap: 10px;
  display: flex;
  padding: 8px;
  align-items: center;
  border-radius: 48px;
  justify-content: center;
  background-color: var(--dl-color-dark_background-100);
}
.page-iconsearch {
  width: 24px;
  height: 24px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page-searchnormal11 {
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
.page-group2 {
  top: 1.25px;
  left: 1.25px;
  width: 21.497501373291016px;
  height: 21.5px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page-group3 {
  top: 0px;
  left: 0px;
  width: 21.497501373291016px;
  height: 21.5px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page-vector {
  top: 0px;
  left: 0px;
  width: 20px;
  height: 20px;
  position: absolute;
}
.page-vector1 {
  top: 18.002498626708984px;
  left: 18.00229835510254px;
  width: 3px;
  height: 3px;
  position: absolute;
}
.page-title {
  top: 100px;
  left: 0px;
  width: 375px;
  height: 100px;
  display: flex;
  padding: 40px 20px 20px;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  justify-content: center;
}
.page-group4 {
  top: 20px;
  left: 58px;
  width: 260.0000305175781px;
  height: 80.00016021728516px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page-vector2 {
  top: 0px;
  left: 45.98939514160156px;
  width: 164px;
  height: 21px;
  opacity: 0.70;
  position: absolute;
}
.page-vector3 {
  top: 1.3134765625px;
  left: 0.020044386386871338px;
  width: 209px;
  height: 48px;
  opacity: 0.70;
  position: absolute;
}
.page-vector4 {
  top: 29.09765625px;
  left: 0px;
  width: 247px;
  height: 29px;
  opacity: 0.70;
  position: absolute;
}
.page-vector5 {
  top: 36.552734375px;
  left: 23.232471466064453px;
  width: 224px;
  height: 35px;
  opacity: 0.70;
  position: absolute;
}
.page-vector6 {
  top: 47.73095703125px;
  left: 52.13780212402344px;
  width: 164px;
  height: 32px;
  opacity: 0.70;
  position: absolute;
}
.page-vector7 {
  top: 13.57275390625px;
  left: 99.92974853515625px;
  width: 160px;
  height: 27px;
  opacity: 0.70;
  position: absolute;
}
.page-text45 {
  top: 40px;
  left: 125px;
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
</style>