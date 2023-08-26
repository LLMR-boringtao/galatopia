<template lang="pug">
.town-container
  .town-town
    .town-frame518
      .town-segmented
        .town-bar-segmented-variant3
          button.town-button
            span.town-text.ButtonSmall
              span 活动列表
          button.town-button1
            span.town-text.ButtonSmall
              span 我已参加
      .town-frame517(@click="goPage('suncity')")
        .town-list
          .town-frame465
            .town-frame461
              span.town-text04.ButtonMini
                span Oct
              span.town-text06.ButtonLarge
                span 20
            .town-frame463
              span.town-text08.ButtonLarge
                span 伦敦夏日长跑！
              .town-group446
                .town-frame462
                  .town-location2
                    .town-group
                      .town-group01
                        img.town-vector(src="/external/vectori652-uzs.svg", alt="VectorI652")
                        img.town-vector01(src="/external/vectori652-y7cc.svg", alt="VectorI652")
                  span.town-text10.ButtonSmall
                    span 距离 1km
          .town-group488
            .town-frame475
              .town-frame492
                span.town-text12.ButtonSmall
                  span 13:00PM
              .town-frame491
                span.town-text14.ButtonSmall
                  span 18:00PM
            .town-group474
              img.town-ellipse20(src="/external/ellipse20i652-vqkn-200h.png", alt="Ellipse20I652")
              img.town-ellipse21(src="/external/ellipse21i652-q4mf-200h.png", alt="Ellipse21I652")
              img.town-ellipse22(src="/external/ellipse22i652-5ow7-200h.png", alt="Ellipse22I652")
          img.town-rectangle83(src="/external/event_run_final.png", alt="Rectangle83I652")
        .town-group476
          .town-frame4651
            .town-frame4611
              span.town-text16
                span Oct
              span.town-text18
                span 25
            .town-frame4631
              span.town-text20
                span 天气热到🔥想去海边！
              .town-group4461
                .town-frame4621
                  .town-location21
                    .town-group02
                      .town-group03
                        img.town-vector02(src="/external/vectori652-iszw.svg", alt="VectorI652")
                        img.town-vector03(src="/external/vectori652-r9mu.svg", alt="VectorI652")
                  span.town-text22
                    span 距离 2km
          .town-group4881
            .town-frame4751
              .town-frame4921
                span.town-text24
                  span 09:00AM
              .town-frame4911
                span.town-text26
                  span 20:00PM
            .town-group4741
              img.town-ellipse201(src="/external/ellipse20i652-5mnk-200h.png", alt="Ellipse20I652")
              img.town-ellipse211(src="/external/ellipse21i652-6et4-200h.png", alt="Ellipse21I652")
              img.town-ellipse221(src="/external/ellipse22i652-z02-200h.png", alt="Ellipse22I652")
          img.town-rectangle831(src="/external/白崖_final.png", alt="Rectangle83I652")
    .town-title
      .town-group04
        img.town-vector04(src="/external/vectori652-9uk.svg", alt="VectorI652")
        img.town-vector05(src="/external/vectori652-ztki.svg", alt="VectorI652")
        img.town-vector06(src="/external/vectori652-6g0g.svg", alt="VectorI652")
        img.town-vector07(src="/external/vectori652-igmi.svg", alt="VectorI652")
        img.town-vector08(src="/external/vectori652-2msq.svg", alt="VectorI652")
        img.town-vector09(src="/external/vectori652-ese.svg", alt="VectorI652")
      span.town-text28
        span Events
    .town-navigation
      .town-system-status
        .town-notch
        .town-status-icons
          img.town-network-signal-light(src="/external/networksignallighti652-duz.svg", alt="NetworkSignalLightI652")
          img.town-wi-fi-signal-light(src="/external/wifisignallighti652-z168.svg", alt="WiFiSignalLightI652")
          .town-battery-light
            img.town-rectangle23(src="/external/rectangle23i652-x2o5.svg", alt="Rectangle23I652")
            img.town-rectangle2-stroke(src="/external/rectangle21strokei652-q1js.svg", alt="Rectangle21StrokeI652")
            img.town-rectangle20(src="/external/rectangle20i652-kder-200h.png", alt="Rectangle20I652")
        .town-indicator
        .town-time-light
          img.town-svg941(src="/external/svg941i652-rokf.svg", alt="SVG941I652")
      .town-navigation1
        .town-component-elements1
            button.town-button-icon
              .town-group05
                .town-group06
                  img.interaction1-vector(src="/external/vectori652-ycl.svg", alt="VectorI652")
                  img.interaction1-vector01(src="/external/vectori652-djz.svg", alt="VectorI652")
                  img.interaction1-vector02(src="/external/vectori652-7jrq.svg", alt="VectorI652")
        .town-component-elements
          button.town-button-icon
            .town-iconsearch
              .town-searchnormal11
                .town-group05
                  .town-group06
                    img.town-vector10(src="/external/vectori652-bdx.svg", alt="VectorI652")
                    img.town-vector11(src="/external/vectori652-uf5a.svg", alt="VectorI652")
    .town-bottom-tabbar
      .town-tab
        .town-component-tab-bar(@click = "goPage('index')")
          .town-discover11
            .town-group07
              .town-group08
                img.town-vector12(src="/external/主页.svg", alt="VectorI652")
        .town-component-tab-bar2(@click = "goPage('action')")
          .town-messages11
            .town-group11
              .town-group12
                img.town-vector16(src="/external/network.svg", alt="VectorI652")
        .town-component-tab-bar1(@click = "goPage('town')")
          .town-ticketstar1
            .town-ticket2
              .town-group09
                .town-group10
                  img.town-vector14(src="/external/城镇.svg", alt="VectorI652")
        .town-component-tab-bar3(@click = "goPage('agents')")
          .town-profilecircle2
            .town-group13
              .town-group14
                img.interaction1-vector20(src="/external/vectori652-fn1o.svg", alt="VectorI652")
                img.interaction1-vector21(src="/external/vectori652-1ymg.svg", alt="VectorI652")
                img.interaction1-vector22(src="/external/vectori652-5jl.svg", alt="VectorI652")
      .town-system-footer
        .town-home-indicator
          img.town-home-indicator1(src="/external/homeindicatori652-qx0k-200h.png", alt="HomeIndicatorI652")
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
      title: 'home page'
    }
  },

  data() {
    return {
      active: 'town',
      showNav: false,
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
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
    handleSetting () {
      this.$router.push('/edit')
    },
    goPage (page) {
      if (page === 'index') {
        this.$router.push('/')
      } else if (page === 'agents') {
        this.$router.push('/agents')
      } else if ( page === 'action') {
        this.$router.push('/action')
      } else if ( page === 'suncity') {
        this.$router.push('/suncity')
      }
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
.interaction1-vector {
  top: 0px;
  left: 1.0019667148590088px;
  width: 18px;
  height: 18px;
  position: absolute;
}
.interaction1-vector01 {
  top: 2.875688076019287px;
  left: 8.901907920837402px;
  width: 7px;
  height: 7px;
  position: absolute;
}
.interaction1-vector02 {
  top: 19.823780059814453px;
  left: 0px;
  width: 19px;
  height: 1px;
  position: absolute;
}
.town-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.town-town {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: var(--dl-color-dark_background-200);
}
.town-frame518 {
  top: 224px;
  left: 0px;
  width: 100%;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
}
.town-segmented {
  box-sizing: border-box;
  gap: 10px;
  width: 100%;
  height: 56px;
  display: flex;
  padding: 8px 16px;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}
.town-bar-segmented-variant3 {
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: flex-start;
  border-radius: 32px;
  background-color: var(--dl-color-dark_background-100);
}
.town-button {
  gap: 10px;
  display: flex;
  padding: 13px 32px;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 28px;
  justify-content: center;
  background-color: var(--dl-color-dark_element-100);
}
.town-text {
  color: var(--dl-color-dark_element-1100);
  height: auto;
  text-align: center;
  line-height: 18px;
}
.town-button1 {
  gap: 10px;
  display: flex;
  padding: 13px 32px;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 28px;
  justify-content: center;
}
.town-text02 {
  color: var(--dl-color-dark_element-100);
  height: auto;
  text-align: center;
  line-height: 18px;
}
.town-frame517 {
  gap: 12px;
  display: flex;
  padding: 16px;
  align-items: flex-start;
  flex-direction: column;
}
.town-list {
  gap: 16px;
  width: 329px;
  display: flex;
  padding: 16px;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 28px;
  flex-direction: column;
  background-color: var(--dl-color-dark_background-100);
}
.town-frame465 {
  gap: 12px;
  display: flex;
  align-items: center;
}
.town-frame461 {
  width: 56px;
  height: 56px;
  display: flex;
  padding: 2px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 44px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-dark_two-300);
}
.town-text04 {
  color: var(--dl-color-dark_background-1100);
  height: auto;
  align-self: stretch;
  text-align: center;
  line-height: 16px;
}
.town-text06 {
  color: var(--dl-color-dark_background-1100);
  height: auto;
  align-self: stretch;
  text-align: center;
  line-height: 24px;
}
.town-frame463 {
  gap: 4px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.town-text08 {
  color: var(--dl-color-dark_background-1100);
  height: auto;
  text-align: center;
  line-height: 24px;
}
.town-group446 {
  width: 121px;
  height: 18px;
  display: flex;
  opacity: 0.50;
  position: relative;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-frame462 {
  gap: 8px;
  top: 0px;
  left: 0px;
  display: flex;
  position: absolute;
  align-items: center;
}
.town-location2 {
  width: 16px;
  height: 16px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.town-group {
  top: 1.3333319425582886px;
  left: 2.2514960765838623px;
  width: 11.496986389160156px;
  height: 13.330127716064453px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-group01 {
  top: 0px;
  left: 0px;
  width: 11.496986389160156px;
  height: 13.330127716064453px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-vector {
  top: 3.460001230239868px;
  left: 3.668503999710083px;
  width: 4px;
  height: 4px;
  position: absolute;
}
.town-vector01 {
  top: 0px;
  left: 0px;
  width: 11px;
  height: 13px;
  position: absolute;
}
.town-text10 {
  color: var(--dl-color-dark_element-100);
  height: auto;
  text-align: left;
  line-height: 18px;
}
.town-group488 {
  width: 310px;
  height: 32.00000762939453px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-frame475 {
  gap: 6px;
  top: 1px;
  left: 136px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.town-frame492 {
  gap: 10px;
  display: flex;
  padding: 6px 12px;
  align-items: center;
  border-radius: 29px;
  justify-content: center;
  background-color: var(--dl-color-dark_background-1100);
}
.town-text12 {
  color: var(--dl-color-dark_element-1100);
  height: auto;
  text-align: left;
  line-height: 18px;
}
.town-frame491 {
  gap: 10px;
  display: flex;
  padding: 6px 12px;
  align-items: center;
  border-radius: 29px;
  justify-content: center;
  background-color: var(--dl-color-dark_background-1100);
}
.town-text14 {
  color: var(--dl-color-dark_element-1100);
  height: auto;
  text-align: left;
  line-height: 18px;
}
.town-group474 {
  top: 0px;
  left: 0px;
  width: 73.59991455078125px;
  height: 32.00000762939453px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-ellipse20 {
  top: 0px;
  left: 0px;
  width: 32px;
  height: 32px;
  position: absolute;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 3px;
}
.town-ellipse21 {
  top: 0.00005340576171875px;
  left: 20.79998779296875px;
  width: 32px;
  height: 32px;
  position: absolute;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 3px;
}
.town-ellipse22 {
  top: 0.00005340576171875px;
  left: 41.59995651245117px;
  width: 32px;
  height: 32px;
  position: absolute;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 3px;
}
.town-rectangle83 {
  width: auto;
  height: 96px;
  align-self: stretch;
  border-radius: 16px;
}
.town-group476 {
  gap: 16px;
  width: 329px;
  display: flex;
  padding: 16px;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 28px;
  flex-direction: column;
  background-color: var(--dl-color-dark_background-100);
}
.town-frame4651 {
  gap: 12px;
  display: flex;
  align-items: center;
}
.town-frame4611 {
  width: 56px;
  height: 56px;
  display: flex;
  padding: 2px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 44px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-dark_four-300);
}
.town-text16 {
  color: var(--dl-color-dark_background-1100);
  height: auto;
  font-size: 12px;
  align-self: stretch;
  font-style: Medium;
  text-align: center;
  font-family: Aeonik;
  font-weight: 500;
  line-height: 16px;
  font-stretch: normal;
  text-decoration: none;
}
.town-text18 {
  color: var(--dl-color-dark_background-1100);
  height: auto;
  font-size: 18px;
  align-self: stretch;
  font-style: Medium;
  text-align: center;
  font-family: Aeonik;
  font-weight: 500;
  line-height: 24px;
  font-stretch: normal;
  text-decoration: none;
}
.town-frame4631 {
  gap: 4px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.town-text20 {
  color: var(--dl-color-dark_background-1100);
  height: auto;
  font-size: 18px;
  font-style: Medium;
  text-align: center;
  font-family: Aeonik;
  font-weight: 500;
  line-height: 24px;
  font-stretch: normal;
  text-decoration: none;
}
.town-group4461 {
  width: 121px;
  height: 18px;
  display: flex;
  opacity: 0.50;
  position: relative;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-frame4621 {
  gap: 8px;
  top: 0px;
  left: 0px;
  display: flex;
  position: absolute;
  align-items: center;
}
.town-location21 {
  width: 16px;
  height: 16px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.town-group02 {
  top: 1.3333319425582886px;
  left: 2.2514960765838623px;
  width: 11.496986389160156px;
  height: 13.330127716064453px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-group03 {
  top: 0px;
  left: 0px;
  width: 11.496986389160156px;
  height: 13.330127716064453px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-vector02 {
  top: 3.460001230239868px;
  left: 3.668503999710083px;
  width: 4px;
  height: 4px;
  position: absolute;
}
.town-vector03 {
  top: 0px;
  left: 0px;
  width: 11px;
  height: 13px;
  position: absolute;
}
.town-text22 {
  color: var(--dl-color-dark_element-100);
  height: auto;
  font-size: 14px;
  font-style: Medium;
  text-align: left;
  font-family: Aeonik;
  font-weight: 500;
  line-height: 18px;
  font-stretch: normal;
  text-decoration: none;
}
.town-group4881 {
  width: 310px;
  height: 32.00000762939453px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-frame4751 {
  gap: 6px;
  top: 1px;
  left: 136px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.town-frame4921 {
  gap: 10px;
  display: flex;
  padding: 6px 12px;
  align-items: center;
  border-radius: 29px;
  justify-content: center;
  background-color: var(--dl-color-dark_background-1100);
}
.town-text24 {
  color: var(--dl-color-dark_element-1100);
  height: auto;
  font-size: 14px;
  font-style: Medium;
  text-align: left;
  font-family: Aeonik;
  font-weight: 500;
  line-height: 18px;
  font-stretch: normal;
  text-decoration: none;
}
.town-frame4911 {
  gap: 10px;
  display: flex;
  padding: 6px 12px;
  align-items: center;
  border-radius: 29px;
  justify-content: center;
  background-color: var(--dl-color-dark_background-1100);
}
.town-text26 {
  color: var(--dl-color-dark_element-1100);
  height: auto;
  font-size: 14px;
  font-style: Medium;
  text-align: left;
  font-family: Aeonik;
  font-weight: 500;
  line-height: 18px;
  font-stretch: normal;
  text-decoration: none;
}
.town-group4741 {
  top: 0px;
  left: 0px;
  width: 73.59991455078125px;
  height: 32.00000762939453px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-ellipse201 {
  top: 0px;
  left: 0px;
  width: 32px;
  height: 32px;
  position: absolute;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 3px;
}
.town-ellipse211 {
  top: 0.00005340576171875px;
  left: 20.79998779296875px;
  width: 32px;
  height: 32px;
  position: absolute;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 3px;
}
.town-ellipse221 {
  top: 0.00005340576171875px;
  left: 41.59995651245117px;
  width: 32px;
  height: 32px;
  position: absolute;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 3px;
}
.town-rectangle831 {
  width: auto;
  height: 96px;
  align-self: stretch;
  border-radius: 16px;
}
.town-title {
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
}
.town-group04 {
  top: 20px;
  left: 80px;
  width: 216.00006103515625px;
  height: 80.00016021728516px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-vector04 {
  top: 0px;
  left: 38.20662307739258px;
  width: 136px;
  height: 21px;
  opacity: 0.70;
  position: absolute;
}
.town-vector05 {
  top: 1.3134765625px;
  left: 0.016708118841052055px;
  width: 174px;
  height: 48px;
  opacity: 0.70;
  position: absolute;
}
.town-vector06 {
  top: 29.09765625px;
  left: 0px;
  width: 205px;
  height: 29px;
  opacity: 0.70;
  position: absolute;
}
.town-vector07 {
  top: 36.552734100%;
  left: 19.301025390625px;
  width: 186px;
  height: 35px;
  opacity: 0.70;
  position: absolute;
}
.town-vector08 {
  top: 47.73095703125px;
  left: 43.31422424316406px;
  width: 136px;
  height: 32px;
  opacity: 0.70;
  position: absolute;
}
.town-vector09 {
  top: 13.57275390625px;
  left: 83.01852416992188px;
  width: 133px;
  height: 27px;
  opacity: 0.70;
  position: absolute;
}
.town-text28 {
  top: 40px;
  left: 119px;
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
.town-navigation {
  top: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
}
.town-system-status {
  width: 100%;
  height: 44px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.town-notch {
  gap: 14px;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 30px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.town-status-icons {
  gap: 4px;
  top: 16px;
  left: 292px;
  width: 69px;
  display: flex;
  position: absolute;
  align-items: center;
}
.town-network-signal-light {
  width: 20px;
  height: 14px;
}
.town-wi-fi-signal-light {
  width: 16px;
  height: 14px;
}
.town-battery-light {
  width: 25px;
  height: 14px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.town-rectangle23 {
  top: 5px;
  left: 24px;
  width: 1px;
  height: 4px;
  opacity: 0.40;
  position: absolute;
}
.town-rectangle2-stroke {
  top: 1px;
  left: 0px;
  width: 23px;
  height: 12px;
  opacity: 0.40;
  position: absolute;
}
.town-rectangle20 {
  top: 3px;
  left: 2px;
  width: 19px;
  height: 8px;
  position: absolute;
  border-radius: 1px;
}
.town-indicator {
  top: 8px;
  left: 298px;
  width: 6px;
  height: 6px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.town-time-light {
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
.town-svg941 {
  top: 3px;
  left: 11px;
  width: 33px;
  height: 15px;
  position: absolute;
}
.town-navigation1 {
  width: 100%;
  height: 56px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.town-component-elements {
  gap: 10px;
  top: 8px;
  left: 336px;
  width: 40px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.town-component-elements1 {
  gap: 10px;
  top: 8px;
  left: 30px;
  width: 40px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.town-button-icon {
  border: none;
  gap: 10px;
  display: flex;
  padding: 8px;
  align-items: center;
  border-radius: 48px;
  justify-content: center;
  background-color: var(--dl-color-dark_background-100);
}
.town-iconsearch {
  width: 24px;
  height: 24px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.town-searchnormal11 {
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
.town-group05 {
  top: 1.25px;
  left: 1.25px;
  width: 21.497501373291016px;
  height: 21.5px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-group06 {
  top: 0px;
  left: 0px;
  width: 21.497501373291016px;
  height: 21.5px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-vector10 {
  top: 0px;
  left: 0px;
  width: 20px;
  height: 20px;
  position: absolute;
}

.interaction1-vector20 {
  top: 4.935000419616699px;
  left: 7.85166597366333px;
  width: 9px;
  height: 9px;
  position: absolute;
  opacity: 0.40;
}
.interaction1-vector21 {
  top: 15.685833930969238px;
  left: 3.799034833908081px;
  width: 17px;
  height: 9px;
  position: absolute;
  opacity: 0.40;
}
.interaction1-vector22 {
  top: 0px;
  left: 0px;
  width: 25px;
  height: 25px;
  position: absolute;
  opacity: 0.40;
}
.town-vector200 {
  top: 10px;
  left: 0px;
  width: 20px;
  height: 20px;
  position: absolute;
}
.town-vector11 {
  top: 18.002498626708984px;
  left: 18.00229835510254px;
  width: 3px;
  height: 3px;
  position: absolute;
}
.town-bottom-tabbar {
  bottom: 0;
  left: 0px;
  width: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-dark_background-100);
}
.town-tab {
  gap: 11px;
  display: flex;
  padding: 0 32px;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
}
.town-component-tab-bar {
  gap: 8px;
  width: 28px;
  height: 28px;
  display: flex;
  padding: 23px;
  position: relative;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  justify-content: center;
}
.town-discover11 {
  top: 18px;
  left: 21px;
  width: 28px;
  height: 28px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.town-group07 {
  top: 1.3982183933258057px;
  left: 1.374885082244873px;
  width: 25.226896286010742px;
  height: 25.225114822387695px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-group08 {
  top: 0px;
  left: 0px;
  width: 25.226896286010742px;
  height: 25.225114822387695px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-vector12 {
  top: 0px;
  left: 0px;
  width: 25px;
  height: 25px;
  position: absolute;
  opacity: 0.40;
}
.town-vector13 {
  top: 7.6434478759765625px;
  left: 7.666780948638916px;
  width: 10px;
  height: 10px;
  position: absolute;
}
.town-component-tab-bar1 {
  gap: 10px;
  width: 28px;
  height: 28px;
  display: flex;
  padding: 22px 20px;
  position: relative;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  justify-content: center;
}
.town-ticketstar1 {
  top: 17px;
  left: 18px;
  width: 28px;
  height: 28px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.town-ticket2 {
  top: 0px;
  left: 0px;
  width: 28px;
  height: 28px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.town-group09 {
  top: 3.7916667461395264px;
  left: 1.4583332538604736px;
  width: 25.08333396911621px;
  height: 20.41666603088379px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-group10 {
  top: 0px;
  left: 0px;
  width: 25.08333396911621px;
  height: 20.41666603088379px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-vector14 {
  top: 0px;
  left: -1px;
  width: 25px;
  height: 25px;
  position: absolute;
}
.town-vector15 {
  top: 0px;
  left: 10.208333015441895px;
  width: 15px;
  height: 20px;
  position: absolute;
}
.town-component-tab-bar2 {
  gap: 8px;
  width: 28px;
  height: 28px;
  display: flex;
  padding: 23px;
  position: relative;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  justify-content: center;
}
.town-messages11 {
  top: 18px;
  left: 21px;
  width: 28px;
  height: 28px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.town-group11 {
  top: 1.46999990940094px;
  left: 1.4583332538604736px;
  width: 25.08333396911621px;
  height: 25.071666717529297px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-group12 {
  top: 0px;
  left: 0px;
  width: 25.08333396911621px;
  height: 25.071666717529297px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-vector16 {
  top: 0px;
  left: 0px;
  width: 25px;
  height: 25px;
  position: absolute;
  opacity: 0.40;
}
.town-vector17 {
  top: 4.748505115509033px;
  left: 7.65610408782959px;
  width: 17px;
  height: 20px;
  position: absolute;
}
.town-vector18 {
  top: 8.154999732971191px;
  left: 5.8333330154418945px;
  width: 8px;
  height: 2px;
  position: absolute;
}
.town-component-tab-bar3 {
  gap: 8px;
  width: 28px;
  height: 28px;
  display: flex;
  padding: 23px;
  position: relative;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  justify-content: center;
}
.town-profilecircle2 {
  top: 18px;
  left: 21px;
  width: 28px;
  height: 28px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.town-group13 {
  top: 1.4583332538604736px;
  left: 1.4583332538604736px;
  width: 25.08333396911621px;
  height: 25.083335876464844px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-group14 {
  top: 0px;
  left: 0px;
  width: 25.08333396911621px;
  height: 25.083335876464844px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-vector19 {
  top: 4.935000419616699px;
  left: 7.85166597366333px;
  width: 9px;
  height: 9px;
  position: absolute;
}
.town-vector20 {
  top: 15.685833930969238px;
  left: 3.799034833908081px;
  width: 17px;
  height: 9px;
  position: absolute;
  opacity: 0.40;
}
.town-vector21 {
  top: 0px;
  left: 0px;
  width: 25px;
  height: 25px;
  position: absolute;
  opacity: 0.40;
}
.town-system-footer {
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.town-home-indicator {
  width: 100%;
  height: 34px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.town-home-indicator1 {
  top: 15.5px;
  left: 148px;
  width: 80px;
  height: 3px;
  position: absolute;
  border-radius: 100px;
}

</style>