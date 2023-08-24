<template lang="pug">
.news-container
  .news-news
    .news-frame13
      .news-frame10
        .news-thumb-image
          img.news-rectangle1(src="/external/rectangle1i652-fr6-200w.png", alt="Rectangle1I652")
          .news-frame9
            span.news-text
              span 张小悦，她想请你一杯冰拿铁！
            .news-frame2
              img.news-ellipse1(src="/external/ellipse1i652-9t0w-200h.png", alt="Ellipse1I652")
              span.news-status
                span 社交
        .news-group3
          img.news-rectangle11(src="/external/aobenhaimo_poster_final.png", alt="Rectangle1I652")
          .news-frame9
            span.news-text
              span 伦敦《奥本海默》电影首映BOOM！
            .news-frame2
              img.news-ellipse1(src="/external/ellipse1i652-9t0w-200h.png", alt="Ellipse1I652")
              span.news-status
                span 活动
      .news-frame11
        .news-thumb-image1
          img.news-rectangle12(src="/external/chinajoy_cos_final.png", alt="Rectangle1I652")
          .news-frame9
            span.news-text
              span ChinaJoy 2023!
            .news-frame2
              img.news-ellipse1(src="/external/ellipse1i652-9t0w-200h.png", alt="Ellipse1I652")
              span.news-status
                span 活动

        .news-group31
          img.news-rectangle12(src="/external/zhouxiaonan_agent_pic_new.png", alt="Rectangle1I652")
          .news-frame9_summary
            span.news-text
              span 今天遇到16位有趣的人，参加5场活动。
            .news-frame2
              img.news-ellipse1(src="/external/ellipse1i652-9t0w-200h.png", alt="Ellipse1I652")
              span.news-status
                span 今日总结

      .news-frame12
        .news-thumb-image2
          img.news-rectangle14(src="/external/event_food_news.png", alt="Rectangle1I652")
          .news-frame94
            span.news-text16
              span Hailey, 21
            .news-frame24
              img.news-ellipse14(src="/external/ellipse1i652-1nnn-200h.png", alt="Ellipse1I652")
              span.news-text18.ButtonTiny
                span Active
        .news-group32
          img.news-rectangle15(src="/external/event_club_news.png", alt="Rectangle1I652")
          .news-frame95
            span.news-text20
              span Hailey, 21
            .news-frame25
              img.news-ellipse15(src="/external/ellipse1i652-x4z8-200h.png", alt="Ellipse1I652")
              span.news-text22.ButtonTiny
                span Active
    .news-navigation
      .news-system-status
        .news-notch
        .news-status-icons
          img.news-network-signal-light(src="/external/networksignallighti652-vx8j.svg", alt="NetworkSignalLightI652")
          img.news-wi-fi-signal-light(src="/external/wifisignallighti652-xa3o.svg", alt="WiFiSignalLightI652")
          .news-battery-light
            img.news-rectangle23(src="/external/rectangle23i652-d7z7.svg", alt="Rectangle23I652")
            img.news-rectangle2-stroke(src="/external/rectangle21strokei652-wya.svg", alt="Rectangle21StrokeI652")
            img.news-rectangle20(src="/external/rectangle20i652-ajn-200h.png", alt="Rectangle20I652")
        .news-indicator
        .news-time-light
          img.news-svg941(src="/external/svg941i652-ph7.svg", alt="SVG941I652")
      .news-navigation1
        .news-component-elements
          button.news-button-icon(@click = "goPage('edit')")
            .news-setting21
              .news-setting22
                .news-group
                  .news-group01
                    img.news-vector(src="/external/vectori652-f7bt.svg", alt="VectorI652")
                    img.news-vector01(src="/external/vectori652-z4r.svg", alt="VectorI652")
        .news-component-elements2
          button.news-button-icon1(@click="goPage('notify')")
            .news-notificationbing1
              .news-notificationbing2
                .news-group02
                  .news-group03
                    img.news-vector02(src="/external/vectori652-dyq.svg", alt="VectorI652")
                    img.news-vector03(src="/external/vectori652-2oq3.svg", alt="VectorI652")
                    img.news-vector04(src="/external/vectori652-i4mp.svg", alt="VectorI652")
    .news-bottom-tabbar
      .news-tab
        .news-component-tab-bar(@click="goPage('index')")
          .news-discover1
            .news-group04
              .news-group05
                img.news-vector05(src="/external/主页.svg", alt="VectorI652")
        .news-component-tab-bar1(@click="goPage('action')")
          .news-ticket1
            .news-group06
              .news-group07
                img.news-vector07(src="/external/network.svg", alt="VectorI652")
        .news-component-tab-bar2(@click="goPage('town')")
          .news-messages11
            .news-group08
              .news-group09
                img.news-vector11(src="/external/搜索_G.svg", alt="VectorI652")
        .news-component-tab-bar3(@click="goPage('agents')")
          .news-profilecircle2
            .news-group10
              .news-group11
                img.news-vector14(src="/external/vectori652-mh1.svg", alt="VectorI652")
                img.news-vector15(src="/external/vectori652-y1vt.svg", alt="VectorI652")
                img.news-vector16(src="/external/vectori652-xbsf.svg", alt="VectorI652")
      .news-system-footer
        .news-home-indicator
          img.news-home-indicator1(src="/external/homeindicatori652-ybg-200h.png", alt="HomeIndicatorI652")
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
      active: 'home',
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
      console.log(page)
      if (page === 'index') {
        this.$router.push('/')
      } else if (page === 'notify') {
        this.$router.push('/agents/notify')
      } else if (page === 'agents') {
        this.$router.push('/agents')
      } else if (page === 'action') {
        this.$router.push('/action')
      } else if (page === 'town') {
        this.$router.push('/town')
      } else if (page === 'edit') {
        this.$router.push('/edit')
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
.news-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.news-news {
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: var(--dl-color-dark_background-200);
}
.news-frame13 {
  gap: 16px;
  top: 100px;
  left: 0px;
  width: 100%;
  display: flex;
  padding: 16px;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  overflow-y: scroll;
}
.news-frame10 {
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.news-thumb-image {
  width: 164px;
  height: 254px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: rgba(0, 0, 0, 0.10000000149011612);
  border-style: solid;
  border-width: 1px;
  border-radius: 24px;
}
.news-rectangle1 {
  top: 0px;
  left: 0px;
  width: 164px;
  height: 254px;
  position: absolute;
  flex-grow: 1;
  box-sizing: content-box;
}
.news-frame9 {
  top: 180px;
  bottom: 0px;
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
.news-frame9_summary {
  top: 180px;
  bottom: 0px;
  left: 0px;
  width: 150px;
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
.news-text {
  color: var(--dl-color-light_element-1100);
  height: auto;
  font-size: 15px;
  font-style: Regular;
  text-align: left;
  font-family: Noto Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.news-frame2 {
  gap: 6px;
  display: flex;
  align-items: center;
}
.news-ellipse1 {
  width: 4px;
  height: 4px;
}
.news-text02 {
  color: var(--dl-color-light_element-1100);
  height: auto;
  text-align: left;
  line-height: 16px;
}
.news-group3 {
  width: 164px;
  height: 254px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: rgba(0, 0, 0, 0.10000000149011612);
  border-style: solid;
  border-width: 1px;
  border-radius: 24px;
}
.news-rectangle11 {
  top: 0px;
  left: 0px;
  width: 164px;
  height: 254px;
  position: absolute;
  flex-grow: 1;
  box-sizing: content-box;
}
.news-frame91 {
  top: 194px;
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
.news-status {
  color: var(--dl-color-light_element-1100);
  height: auto;
  font-size: 13px;
  font-style: Regular;
  text-align: left;
  font-family: Noto Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.news-frame21 {
  gap: 6px;
  display: flex;
  align-items: center;
}
.news-ellipse11 {
  width: 4px;
  height: 4px;
}
.news-text06 {
  color: var(--dl-color-light_element-1100);
  height: auto;
  text-align: left;
  line-height: 16px;
}
.news-frame11 {
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.news-thumb-image1 {
  width: 164px;
  height: 254px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: rgba(0, 0, 0, 0.10000000149011612);
  border-style: solid;
  border-width: 1px;
  border-radius: 24px;
}
.news-rectangle12 {
  top: 0px;
  left: 0px;
  width: 164px;
  height: 254px;
  position: absolute;
}
.news-frame92 {
  top: 194px;
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
.news-text08 {
  color: var(--dl-color-light_element-1100);
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
.news-frame22 {
  gap: 6px;
  display: flex;
  align-items: center;
}
.news-ellipse12 {
  width: 4px;
  height: 4px;
}
.news-text10 {
  color: var(--dl-color-light_element-1100);
  height: auto;
  text-align: left;
  line-height: 16px;
}
.news-group31 {
  width: 164px;
  height: 254px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: rgba(0, 0, 0, 0.10000000149011612);
  border-style: solid;
  border-width: 1px;
  border-radius: 24px;
}
.news-rectangle13 {
  top: 0px;
  left: 0px;
  width: 164px;
  height: 254px;
  position: absolute;
  flex-grow: 1;
  box-sizing: content-box;
}
.news-frame93 {
  top: 194px;
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
.news-text12 {
  color: var(--dl-color-light_element-1100);
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
.news-frame23 {
  gap: 6px;
  display: flex;
  align-items: center;
}
.news-ellipse13 {
  width: 4px;
  height: 4px;
}
.news-text14 {
  color: var(--dl-color-light_element-1100);
  height: auto;
  text-align: left;
  line-height: 16px;
}
.news-frame12 {
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.news-thumb-image2 {
  width: 164px;
  height: 254px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: rgba(0, 0, 0, 0.10000000149011612);
  border-style: solid;
  border-width: 1px;
  border-radius: 24px;
}
.news-rectangle14 {
  top: 0px;
  left: 0px;
  width: 164px;
  height: 254px;
  position: absolute;
  flex-grow: 1;
  box-sizing: content-box;
}
.news-frame94 {
  top: 194px;
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
.news-text16 {
  color: var(--dl-color-light_element-1100);
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
.news-frame24 {
  gap: 6px;
  display: flex;
  align-items: center;
}
.news-ellipse14 {
  width: 4px;
  height: 4px;
}
.news-text18 {
  color: var(--dl-color-light_element-1100);
  height: auto;
  text-align: left;
  line-height: 16px;
}
.news-group32 {
  width: 164px;
  height: 254px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: rgba(0, 0, 0, 0.10000000149011612);
  border-style: solid;
  border-width: 1px;
  border-radius: 24px;
}
.news-rectangle15 {
  top: 0px;
  left: 0px;
  width: 164px;
  height: 254px;
  position: absolute;
  flex-grow: 1;
  box-sizing: content-box;
}
.news-frame95 {
  top: 194px;
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
.news-text20 {
  color: var(--dl-color-light_element-1100);
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
.news-frame25 {
  gap: 6px;
  display: flex;
  align-items: center;
}
.news-ellipse15 {
  width: 4px;
  height: 4px;
}
.news-text22 {
  color: var(--dl-color-light_element-1100);
  height: auto;
  text-align: left;
  line-height: 16px;
}
.news-navigation {
  top: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  position: fixed;
  align-items: flex-start;
  flex-direction: column;
}
.news-system-status {
  width: 100%;
  height: 44px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.news-notch {
  gap: 14px;
  top: 0px;
  left: 0px;
  width: 375px;
  height: 30px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.news-status-icons {
  gap: 4px;
  top: 16px;
  left: 292px;
  width: 69px;
  display: flex;
  position: absolute;
  align-items: center;
}
.news-network-signal-light {
  width: 20px;
  height: 14px;
}
.news-wi-fi-signal-light {
  width: 16px;
  height: 14px;
}
.news-battery-light {
  width: 25px;
  height: 14px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.news-rectangle23 {
  top: 5px;
  left: 24px;
  width: 1px;
  height: 4px;
  opacity: 0.40;
  position: absolute;
}
.news-rectangle2-stroke {
  top: 1px;
  left: 0px;
  width: 23px;
  height: 12px;
  opacity: 0.40;
  position: absolute;
}
.news-rectangle20 {
  top: 3px;
  left: 2px;
  width: 19px;
  height: 8px;
  position: absolute;
  border-radius: 1px;
}
.news-indicator {
  top: 8px;
  left: 298px;
  width: 6px;
  height: 6px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.news-time-light {
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
.news-svg941 {
  top: 3px;
  left: 11px;
  width: 33px;
  height: 15px;
  position: absolute;
}
.news-navigation1 {
  gap: 122px;
  width: 375px;
  height: 56px;
  display: flex;
  padding: 15px 16px;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  justify-content: space-between;
}
.news-component-elements {
  gap: 10px;
  top: 8px;
  left: 16px;
  width: 40px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: center;
}
.news-button-icon {
  gap: 10px;
  display: flex;
  padding: 8px;
  align-items: center;
  border-radius: 48px;
  justify-content: center;
  background-color: var(--dl-color-dark_background-100);
  border: none;
}
.news-setting21 {
  width: 24px;
  height: 24px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.news-setting22 {
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
.news-group {
  top: 1.812213659286499px;
  left: 1.25px;
  width: 21.520000457763672px;
  height: 20.381864547729492px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.news-group01 {
  top: 0px;
  left: 0px;
  width: 21.520000457763672px;
  height: 20.381864547729492px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.news-vector {
  top: 6.437786102294922px;
  left: 7px;
  width: 7px;
  height: 7px;
  position: absolute;
}
.news-vector01 {
  top: 0px;
  left: 0px;
  width: 22px;
  height: 20px;
  position: absolute;
}
.news-component-elements1 {
  top: 8px;
  left: 70px;
  width: 235px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
}
.news-segmented {
  gap: 10px;
  width: 235px;
  height: 40px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  border-radius: 48px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-dark_background-100);
}
.news-bar-segmented-variant3 {
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: flex-start;
  border-radius: 32px;
  background-color: var(--dl-color-dark_background-100);
}
.news-button {
  gap: 10px;
  display: flex;
  padding: 13px 32px;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 39px;
  justify-content: center;
  background-color: var(--dl-color-dark_element-200);
}
.news-text24 {
  color: var(--dl-color-dark_element-1100);
  height: auto;
  text-align: center;
  line-height: 18px;
}
.news-button1 {
  gap: 10px;
  display: flex;
  padding: 13px 32px;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 28px;
  justify-content: center;
}
.news-text26 {
  color: var(--dl-color-dark_element-100);
  height: auto;
  text-align: center;
  line-height: 18px;
}
.news-component-elements2 {
  top: 8px;
  left: 319px;
  width: 40px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.news-button-icon1 {
  gap: 10px;
  display: flex;
  padding: 8px;
  align-items: center;
  border-radius: 48px;
  justify-content: center;
  background-color: var(--dl-color-dark_background-100);
  border: none;
}
.news-notificationbing1 {
  width: 24px;
  height: 24px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.news-notificationbing2 {
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
.news-group02 {
  top: 1.2400000095367432px;
  left: 2.3507189750671387px;
  width: 19.304088592529297px;
  height: 21.65999984741211px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.news-group03 {
  top: 0px;
  left: 0px;
  width: 19.304088592529297px;
  height: 21.65999984741211px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.news-vector02 {
  top: 4.449999809265137px;
  left: 8.899280548095703px;
  width: 1px;
  height: 5px;
  position: absolute;
}
.news-vector03 {
  top: 0px;
  left: 0px;
  width: 19px;
  height: 19px;
  position: absolute;
}
.news-vector04 {
  top: 17.579999923706055px;
  left: 5.569281101226807px;
  width: 8px;
  height: 4px;
  position: absolute;
}
.news-bottom-tabbar {
  bottom: 0;
  left: 0px;
  width: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-dark_background-100);
  box-sizing: border-box;
}
.news-tab {
  gap: 11px;
  display: flex;
  padding: 0 32px;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
}
.news-component-tab-bar {
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
.news-discover1 {
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
.news-group04 {
  top: 2.3362927436828613px;
  left: 2.3369152545928955px;
  width: 23.326168060302734px;
  height: 23.330371856689453px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.news-group05 {
  top: 0px;
  left: 0px;
  width: 23.326168060302734px;
  height: 23.330371856689453px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.news-vector05 {
  top: 0px;
  left: 0px;
  width: 25px;
  height: 25px;
  opacity: 0.40;
  position: absolute;
}
.news-vector06 {
  top: 7.137040615081787px;
  left: 7.136417865753174px;
  width: 9px;
  height: 9px;
  position: absolute;
}
.news-component-tab-bar1 {
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
.news-ticket1 {
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
.news-group06 {
  top: 3.7916667461395264px;
  left: 1.4583332538604736px;
  width: 25.08333396911621px;
  height: 20.41666603088379px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.news-group07 {
  top: 0px;
  left: 0px;
  width: 25.08333396911621px;
  height: 20.41666603088379px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.news-vector07 {
  top: -3px;
  left: 2px;
  width: 25px;
  height: 25px;
  position: absolute;
}
.news-vector08 {
  top: 0px;
  left: 9.333333015441895px;
  width: 2px;
  height: 5px;
  position: absolute;
}
.news-vector09 {
  top: 7.1866655349731445px;
  left: 9.333333015441895px;
  width: 2px;
  height: 6px;
  position: absolute;
}
.news-vector10 {
  top: 15.750000953674316px;
  left: 9.333333015441895px;
  width: 2px;
  height: 5px;
  position: absolute;
}
.news-component-tab-bar2 {
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
.news-messages11 {
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
.news-group08 {
  top: 1.46999990940094px;
  left: 1.4583332538604736px;
  width: 25.08333396911621px;
  height: 25.071666717529297px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.news-group09 {
  top: 0px;
  left: 0px;
  width: 25.08333396911621px;
  height: 25.071666717529297px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.news-vector11 {
  top: 1px;
  left: 0px;
  width: 25px;
  height: 25px;
  position: absolute;
}
.news-vector12 {
  top: 4.748505115509033px;
  left: 7.65610408782959px;
  width: 17px;
  height: 20px;
  position: absolute;
}
.news-vector13 {
  top: 8.154999732971191px;
  left: 5.8333330154418945px;
  width: 8px;
  height: 2px;
  position: absolute;
}
.news-component-tab-bar3 {
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
.news-profilecircle2 {
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
.news-group10 {
  top: 1.4583332538604736px;
  left: 1.4583332538604736px;
  width: 25.08333396911621px;
  height: 25.083335876464844px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.news-group11 {
  top: 0px;
  left: 0px;
  width: 25.08333396911621px;
  height: 25.083335876464844px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.news-vector14 {
  top: 4.935000419616699px;
  left: 7.85166597366333px;
  width: 9px;
  height: 9px;
  position: absolute;
}
.news-vector15 {
  top: 15.685833930969238px;
  left: 3.799034833908081px;
  width: 17px;
  height: 9px;
  position: absolute;
}
.news-vector16 {
  top: 0px;
  left: 0px;
  width: 25px;
  height: 25px;
  position: absolute;
}
.news-system-footer {
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.news-home-indicator {
  width: 375px;
  height: 34px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.news-home-indicator1 {
  top: 15.5px;
  left: 148px;
  width: 80px;
  height: 3px;
  position: absolute;
  border-radius: 100px;
}
</style>