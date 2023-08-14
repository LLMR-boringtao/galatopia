<template lang="pug">
.town-suncity-container
  .town-suncity-town-suncity
    img.town-suncity-rectangle1(src="/external/event_run_final_page.png", alt="Rectangle1I652")
    .town-suncity-frame521
      .town-suncity-frame506
        .town-suncity-title
          .town-suncity-group485
            .town-suncity-group
              img.town-suncity-vector(src="/external/vectori652-divo.svg", alt="VectorI652")
              img.town-suncity-vector01(src="/external/vectori652-0iza.svg", alt="VectorI652")
              img.town-suncity-vector02(src="/external/vectori652-2s6f.svg", alt="VectorI652")
              img.town-suncity-vector03(src="/external/vectori652-3cys.svg", alt="VectorI652")
              img.town-suncity-vector04(src="/external/vectori652-inml.svg", alt="VectorI652")
              img.town-suncity-vector05(src="/external/vectori652-r45i.svg", alt="VectorI652")
            span.town-suncity-text
              span Marathon
      .town-suncity-frame520
        .town-suncity-frame519
          .town-suncity-group474
            img.town-suncity-ellipse20(src="/external/ellipse20i652-avjr-200h.png", alt="Ellipse20I652")
            img.town-suncity-ellipse21(src="/external/ellipse21i652-ucm-200h.png", alt="Ellipse21I652")
            img.town-suncity-ellipse22(src="/external/ellipse22i652-6s8f-200h.png", alt="Ellipse22I652")
            img.town-suncity-ellipse23(src="/external/ellipse23i652-6oox-200h.png", alt="Ellipse23I652")
            .town-suncity-group499
              img.town-suncity-ellipse24(src="/external/ellipse24i652-i1u-200h.png", alt="Ellipse24I652")
              span.town-suncity-text02
                span +23
          span.town-suncity-text04
            span View All
        .town-suncity-frame512
          .town-suncity-frame487
            button.town-suncity-button-icon
              .town-suncity-walletmoney1
                .town-suncity-group1
                  .town-suncity-group2
                    img.town-suncity-vector06(src="/external/vectori652-cih.svg", alt="VectorI652")
                    img.town-suncity-vector07(src="/external/vectori652-y9q.svg", alt="VectorI652")
            .town-suncity-frame486
              span.town-suncity-text06
                span 价格
              span.town-suncity-text08
                span £18.00
          .town-suncity-frame488
            button.town-suncity-button-icon1
              .town-suncity-clock1
                .town-suncity-group3
                  .town-suncity-group4
                    img.town-suncity-vector08(src="/external/vectori652-w1pn.svg", alt="VectorI652")
            .town-suncity-frame4861
              span.town-suncity-text10
                span 时长
              span.town-suncity-text12
                span 4h ~ 6h
        .town-suncity-frame14
          span.town-suncity-text14
            span 介绍
          span.town-suncity-text16
            span.
              
              周日下午我们在摄政公园举办了夏季长跑活动，全长35公里，欢迎参加！
              
        .town-suncity-frame498
          img.town-suncity-rectangle71(src="/external/rectangle71i652-027h-200h.png", alt="Rectangle71I652")
          img.town-suncity-rectangle72(src="/external/rectangle72i652-xxsi-200h.png", alt="Rectangle72I652")
          img.town-suncity-rectangle73(src="/external/rectangle73i652-fwl8-200w.png", alt="Rectangle73I652")
          img.town-suncity-rectangle711(src="/external/rectangle71i652-pqp8-200h.png", alt="Rectangle71I652")
          img.town-suncity-rectangle721(src="/external/rectangle72i652-u5h-200h.png", alt="Rectangle72I652")
          img.town-suncity-rectangle731(src="/external/rectangle73i652-iin-200h.png", alt="Rectangle73I652")
    .town-suncity-navigation
      .town-suncity-system-status
        .town-suncity-notch
        .town-suncity-status-icons
          img.town-suncity-network-signal-light(src="/external/networksignallighti652-kroj.svg", alt="NetworkSignalLightI652")
          img.town-suncity-wi-fi-signal-light(src="/external/wifisignallighti652-e67m.svg", alt="WiFiSignalLightI652")
          .town-suncity-battery-light
            img.town-suncity-rectangle23(src="/external/rectangle23i652-szyo.svg", alt="Rectangle23I652")
            img.town-suncity-rectangle2-stroke(src="/external/rectangle21strokei652-5m72.svg", alt="Rectangle21StrokeI652")
            img.town-suncity-rectangle20(src="/external/rectangle20i652-gez-200h.png", alt="Rectangle20I652")
        .town-suncity-indicator
        .town-suncity-time-light
          img.town-suncity-svg941(src="/external/svg941i652-drk5.svg", alt="SVG941I652")
      .town-suncity-navigation1
        .town-suncity-component-elements
          button.town-suncity-button-icon2(@click="goPage('index')")
            .town-suncity-iconarrowleft
              img.town-suncity-stroke1(src="/external/stroke1i652-6mk.svg", alt="Stroke1I652")
    
    //- button.town-suncity-button
    //-   .town-suncity-group498
    //-     img.town-suncity-ellipse26(src="/external/ellipse26i652-a9b-200h.png", alt="Ellipse26I652")
    //-     .town-suncity-arrowright13
    //-       .town-suncity-arrowcircleright1
    //-         .town-suncity-group7
    //-           .town-suncity-group8
    //-             img.town-suncity-vector09(src="/external/vectori652-ffy6.svg", alt="VectorI652")
    //-             img.town-suncity-vector10(src="/external/vectori652-sgkj.svg", alt="VectorI652")
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
      this.$router.go(-1)
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
.town-suncity-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.town-suncity-town-suncity {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: var(--dl-color-dark_background-100);
}
.town-suncity-rectangle1 {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 500px;
  position: absolute;
}
.town-suncity-frame521 {
  gap: 24px;
  top: 100px;
  left: 0px;
  width: 100%;
  height: 712px;
  display: flex;
  padding: 80px 0 0;
  position: absolute;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.28778210282325745) 29%, rgba(0, 0, 0, 0.7054967284202576) 54%, rgba(0, 0, 0, 0.8581252098083496) 78%, rgba(0, 0, 0, 1) 100%);
}
.town-suncity-frame506 {
  gap: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.town-suncity-title {
  width: 375px;
  height: 80px;
  display: flex;
  padding: 40px 20px 20px;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  justify-content: center;
}
.town-suncity-group485 {
  top: 0px;
  left: 64px;
  width: 247.99993896484375px;
  height: 80.00016021728516px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-suncity-group {
  top: 0px;
  left: 0px;
  width: 247.99993896484375px;
  height: 80.00016021728516px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-suncity-vector {
  top: 9.094947017729282e-13px;
  left: 43.8668098449707px;
  width: 156px;
  height: 21px;
  opacity: 0.70;
  position: absolute;
}
.town-suncity-vector01 {
  top: 1.3134765625px;
  left: 0.019122079014778137px;
  width: 200px;
  height: 48px;
  opacity: 0.70;
  position: absolute;
}
.town-suncity-vector02 {
  top: 29.09765625px;
  left: 0px;
  width: 235px;
  height: 29px;
  opacity: 0.70;
  position: absolute;
}
.town-suncity-vector03 {
  top: 36.552734375px;
  left: 22.160486221313477px;
  width: 214px;
  height: 35px;
  opacity: 0.70;
  position: absolute;
}
.town-suncity-vector04 {
  top: 47.73095703125px;
  left: 49.731163024902344px;
  width: 156px;
  height: 32px;
  opacity: 0.70;
  position: absolute;
}
.town-suncity-vector05 {
  top: 13.57275390625px;
  left: 95.31761169433594px;
  width: 153px;
  height: 27px;
  opacity: 0.70;
  position: absolute;
}
.town-suncity-text {
  top: 20px;
  left: 31.000043869018555px;
  color: var(--dl-color-dark_element-1100);
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
.town-suncity-frame520 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.town-suncity-frame519 {
  gap: 149px;
  display: flex;
  padding: 12px 16px;
  align-items: center;
  justify-content: center;
}
.town-suncity-group474 {
  width: 144px;
  height: 40.000057220458984px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-suncity-ellipse20 {
  top: -0.00005610344305750914px;
  left: -0.000016426090951426886px;
  width: 40px;
  height: 40px;
  position: absolute;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 3px;
}
.town-suncity-ellipse21 {
  top: 0px;
  left: 26px;
  width: 40px;
  height: 40px;
  position: absolute;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 3px;
}
.town-suncity-ellipse22 {
  top: 0px;
  left: 52px;
  width: 40px;
  height: 40px;
  position: absolute;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 3px;
}
.town-suncity-ellipse23 {
  top: 0px;
  left: 78px;
  width: 40px;
  height: 40px;
  position: absolute;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 3px;
}
.town-suncity-group499 {
  top: 0px;
  left: 104px;
  width: 40px;
  height: 40px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-suncity-ellipse24 {
  top: 0px;
  left: 0px;
  width: 40px;
  height: 40px;
  position: absolute;
}
.town-suncity-text02 {
  top: 11px;
  left: 8px;
  color: var(--dl-color-dark_element-1100);
  height: auto;
  position: absolute;
  font-size: 14px;
  font-style: Medium;
  text-align: center;
  font-family: Aeonik;
  font-weight: 500;
  line-height: 18px;
  font-stretch: normal;
  text-decoration: none;
}
.town-suncity-text04 {
  color: var(--dl-color-dark_four-400);
  height: auto;
  font-size: 14px;
  font-style: Medium;
  text-align: left;
  font-family: Aeonik;
  font-weight: 500;
  line-height: 24px;
  font-stretch: normal;
  text-decoration: none;
}
.town-suncity-frame512 {
  gap: 16px;
  width: 375px;
  display: flex;
  padding: 8px 16px;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
}
.town-suncity-frame487 {
  gap: 12px;
  height: 64px;
  display: flex;
  padding: 10px;
  flex-grow: 1;
  align-items: center;
  flex-shrink: 0;
  border-radius: 49px;
  background-color: var(--dl-color-light_four-200);
}
.town-suncity-button-icon {
  gap: 10px;
  display: flex;
  padding: 12px;
  align-items: center;
  border-radius: 48px;
  justify-content: center;
  background-color: var(--dl-color-light_four-600);
  bottom: 10px;
}
.town-suncity-walletmoney1 {
  width: 24px;
  height: 24px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.town-suncity-group1 {
  top: 3.5px;
  left: 2px;
  width: 20px;
  height: 17px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-suncity-group2 {
  top: 0px;
  left: 0px;
  width: 20px;
  height: 17px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-suncity-vector06 {
  top: 0px;
  left: 0px;
  width: 19px;
  height: 17px;
  position: absolute;
}
.town-suncity-vector07 {
  top: 6.449999809265137px;
  left: 14.87087631225586px;
  width: 5px;
  height: 4px;
  position: absolute;
}
.town-suncity-frame486 {
  gap: 4px;
  width: 83.5px;
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.town-suncity-text06 {
  color: var(--dl-color-light_element-100);
  height: auto;
  opacity: 0.60;
  font-size: 12px;
  align-self: stretch;
  font-style: Regular;
  text-align: left;
  font-family: Aeonik;
  font-weight: 400;
  line-height: 18px;
  font-stretch: normal;
  text-decoration: none;
}
.town-suncity-text08 {
  color: var(--dl-color-light_element-100);
  height: auto;
  font-size: 16px;
  align-self: stretch;
  font-style: Medium;
  text-align: left;
  font-family: Aeonik;
  font-weight: 500;
  line-height: 22px;
  font-stretch: normal;
  text-decoration: none;
}
.town-suncity-frame488 {
  gap: 12px;
  height: 64px;
  display: flex;
  padding: 10px;
  flex-grow: 1;
  align-items: center;
  flex-shrink: 0;
  border-radius: 49px;
  background-color: var(--dl-color-light_three-200);
}
.town-suncity-button-icon1 {
  gap: 10px;
  display: flex;
  padding: 12px;
  align-items: center;
  border-radius: 48px;
  justify-content: center;
  background-color: var(--dl-color-light_three-600);
}
.town-suncity-clock1 {
  width: 24px;
  height: 24px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.town-suncity-group3 {
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-suncity-group4 {
  top: 0px;
  left: 0px;
  width: 20px;
  height: 20px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-suncity-vector08 {
  top: 0px;
  left: 0px;
  width: 20px;
  height: 20px;
  position: absolute;
}
.town-suncity-frame4861 {
  gap: 4px;
  width: 83.5px;
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.town-suncity-text10 {
  color: var(--dl-color-light_element-100);
  height: auto;
  opacity: 0.60;
  font-size: 12px;
  align-self: stretch;
  font-style: Regular;
  text-align: left;
  font-family: Aeonik;
  font-weight: 400;
  line-height: 18px;
  font-stretch: normal;
  text-decoration: none;
}
.town-suncity-text12 {
  color: var(--dl-color-light_element-100);
  height: auto;
  font-size: 16px;
  align-self: stretch;
  font-style: Medium;
  text-align: left;
  font-family: Aeonik;
  font-weight: 500;
  line-height: 22px;
  font-stretch: normal;
  text-decoration: none;
}
.town-suncity-frame14 {
  gap: 4px;
  display: flex;
  padding: 8px 16px;
  align-items: flex-start;
  flex-direction: column;
}
.town-suncity-text14 {
  color: var(--dl-color-dark_element-100);
  height: auto;
  font-size: 16px;
  font-style: Bold;
  text-align: left;
  font-family: Aeonik;
  font-weight: 700;
  line-height: 22px;
  font-stretch: normal;
  text-decoration: none;
}
.town-suncity-text16 {
  color: var(--dl-color-dark_element-500);
  width: 343px;
  height: auto;
  font-size: 14px;
  font-style: Regular;
  text-align: left;
  font-family: Aeonik;
  font-weight: 400;
  line-height: 22px;
  font-stretch: normal;
  text-decoration: none;
}
.town-suncity-frame498 {
  gap: 6px;
  width: 375px;
  height: 165px;
  display: flex;
  padding: 16px;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.15000000596046448) ;
  align-items: flex-start;
  flex-shrink: 0;
}
.town-suncity-rectangle71 {
  width: 140px;
  height: auto;
  align-self: stretch;
  box-sizing: content-box;
  border-radius: 12px;
}
.town-suncity-rectangle72 {
  width: 140px;
  height: auto;
  align-self: stretch;
  box-sizing: content-box;
  border-radius: 12px;
}
.town-suncity-rectangle73 {
  width: 140px;
  height: auto;
  align-self: stretch;
  box-sizing: content-box;
  border-radius: 12px;
}
.town-suncity-rectangle711 {
  width: 140px;
  height: auto;
  align-self: stretch;
  box-sizing: content-box;
  border-radius: 12px;
}
.town-suncity-rectangle721 {
  width: 140px;
  height: auto;
  align-self: stretch;
  box-sizing: content-box;
  border-radius: 12px;
}
.town-suncity-rectangle731 {
  width: 140px;
  height: auto;
  align-self: stretch;
  box-sizing: content-box;
  border-radius: 12px;
}
.town-suncity-navigation {
  top: 0px;
  left: 0px;
  width: 375px;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
}
.town-suncity-system-status {
  width: 375px;
  height: 44px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.town-suncity-notch {
  gap: 14px;
  top: 0px;
  left: 0px;
  width: 375px;
  height: 30px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.town-suncity-status-icons {
  gap: 4px;
  top: 16px;
  left: 292px;
  width: 69px;
  display: flex;
  position: absolute;
  align-items: center;
}
.town-suncity-network-signal-light {
  width: 20px;
  height: 14px;
}
.town-suncity-wi-fi-signal-light {
  width: 16px;
  height: 14px;
}
.town-suncity-battery-light {
  width: 25px;
  height: 14px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.town-suncity-rectangle23 {
  top: 5px;
  left: 24px;
  width: 1px;
  height: 4px;
  opacity: 0.40;
  position: absolute;
}
.town-suncity-rectangle2-stroke {
  top: 1px;
  left: 0px;
  width: 23px;
  height: 12px;
  opacity: 0.40;
  position: absolute;
}
.town-suncity-rectangle20 {
  top: 3px;
  left: 2px;
  width: 19px;
  height: 8px;
  position: absolute;
  border-radius: 1px;
}
.town-suncity-indicator {
  top: 8px;
  left: 298px;
  width: 6px;
  height: 6px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.town-suncity-time-light {
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
.town-suncity-svg941 {
  top: 3px;
  left: 11px;
  width: 33px;
  height: 15px;
  position: absolute;
}
.town-suncity-navigation1 {
  width: 375px;
  height: 56px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.town-suncity-component-elements {
  gap: 10px;
  top: 8px;
  left: 16px;
  width: 40px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: center;
}
.town-suncity-button-icon2 {
  border: none;
  gap: 10px;
  display: flex;
  padding: 8px;
  align-items: center;
  border-radius: 48px;
  justify-content: center;
  background-color: var(--dl-color-dark-blur);
}
.town-suncity-iconarrowleft {
  width: 24px;
  height: 24px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.town-suncity-arrow-left21 {
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
.town-suncity-group5 {
  top: 5px;
  left: 8.5px;
  width: 7px;
  height: 14px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-suncity-group6 {
  top: 0px;
  left: 0px;
  width: 7px;
  height: 14px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-suncity-iconly-light-arrow-left2 {
  top: 0px;
  left: 0px;
  width: 7px;
  height: 14px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-suncity-arrow-left2 {
  top: 0px;
  left: 7px;
  width: 14px;
  height: 7px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-suncity-stroke1 {
  top: 0px;
  left: 0px;
  width: 20px;
  height: 20px;
  position: absolute;
}
.town-suncity-bottom-button {
  top: 698px;
  left: 0px;
  width: 375px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
}
.town-suncity-frame73 {
  gap: 15px;
  width: 375px;
  height: 80px;
  display: flex;
  padding: 20px 16px 4px;
  overflow: hidden;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
}
.town-suncity-button {
  gap: 10px;
  width: 343px;
  height: 56px;
  display: flex;
  padding: 16px 40px 16px 8px;
  position: relative;
  flex-grow: 1;
  align-items: center;
  flex-shrink: 0;
  border-radius: 48px;
  background-color: var(--dl-color-dark_one-500);
}
.town-suncity-group498 {
  top: 8px;
  left: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-suncity-ellipse26 {
  top: 0px;
  left: 0px;
  width: 40px;
  height: 40px;
  position: absolute;
}
.town-suncity-arrowright13 {
  top: 8px;
  left: 8px;
  width: 24px;
  height: 24px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.town-suncity-arrowcircleright1 {
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
.town-suncity-group7 {
  top: 1px;
  left: 1px;
  width: 22px;
  height: 22px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-suncity-group8 {
  top: 0px;
  left: 0px;
  width: 22px;
  height: 22px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.town-suncity-vector09 {
  top: 0px;
  left: 0px;
  width: 22px;
  height: 22px;
  opacity: 0.40;
  position: absolute;
}
.town-suncity-vector10 {
  top: 6.294921875px;
  left: 8.791406631469727px;
  width: 6px;
  height: 9px;
  position: absolute;
}
.town-suncity-system-footer {
  width: 375px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.town-suncity-home-indicator {
  width: 375px;
  height: 34px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.town-suncity-home-indicator1 {
  top: 15.5px;
  left: 148px;
  width: 80px;
  height: 3px;
  position: absolute;
  border-radius: 100px;
}

</style>