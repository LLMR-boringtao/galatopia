<template lang="pug">
.page4-container
  .page4-frame4
    .page4-frame496
      .page4-frame479
        .page4-frame480
          img.page4-image1335(src="/external/image1335i652-xgp-200h.png", alt="image1335I652")
          span.page4-text
            span Tennis
        .page4-frame481
          img.page4-image133501(src="/external/image1335i652-pd3b-200h.png", alt="image1335I652")
          span.page4-text02
            span PingPong
        .page4-frame482
          img.page4-image133502(src="/external/image1335i652-5n6j-200h.png", alt="image1335I652")
          span.page4-text04
            span Squash
      .page4-frame4791
        .page4-frame486
          img.page4-image133503(src="/external/image1335i652-jobc-200h.png", alt="image1335I652")
          span.page4-text06
            span Bowling
        .page4-frame489
          img.page4-image133504(src="/external/image1335i652-io0b-200h.png", alt="image1335I652")
          span.page4-text08
            span Party
        .page4-frame487
          img.page4-image133505(src="/external/image1335i652-j59-200h.png", alt="image1335I652")
          span.page4-text10
            span Football
      .page4-frame4801
        .page4-frame490
          img.page4-image133506(src="/external/image1335i652-vdrl-200h.png", alt="image1335I652")
          span.page4-text12
            span 8-ball
        .page4-frame488
          img.page4-image133507(src="/external/image1335i652-wle-200h.png", alt="image1335I652")
          span.page4-text14
            span Cat
        .page4-frame4871
          img.page4-image133508(src="/external/image1335i652-z7r9-200h.png", alt="image1335I652")
          span.page4-text16
            span Gaming
      .page4-frame4792
        .page4-frame483
          img.page4-image133509(src="/external/image1335i652-4lxj-200h.png", alt="image1335I652")
          span.page4-text18
            span Photography
        .page4-frame484
          img.page4-image133510(src="/external/image1335i652-iaw-200h.png", alt="image1335I652")
          span.page4-text20
            span Cricket
        .page4-frame485
          img.page4-image133511(src="/external/image1335i652-mc3-200h.png", alt="image1335I652")
          span.page4-text22
            span Die
    span.page4-text24
      span
        span Pick up to 5 things you love. It'll help you
        br
        span match with people who love them too.
    .page4-group488
      .page4-group
        img.page4-vector(src="/external/vectori652-50gs.svg", alt="VectorI652")
        img.page4-vector1(src="/external/vectori652-mmsu.svg", alt="VectorI652")
        img.page4-vector2(src="/external/vectori652-ggbd.svg", alt="VectorI652")
        img.page4-vector3(src="/external/vectori652-v6ol.svg", alt="VectorI652")
        img.page4-vector4(src="/external/vectori652-n16.svg", alt="VectorI652")
        img.page4-vector5(src="/external/vectori652-qtoa.svg", alt="VectorI652")
      .page4-frame500
        span.page4-text29
          span Your
        span.page4-text31
          span interests
    .page4-frame502
      .page4-frame501
        span.page4-text33
          span 4/5 selected
        a.page4-group464(href="/userlogin")
          img.page4-star1(src="/external/star1i652-n9qw.svg", alt="Star1I652")
          img.page4-star2(src="/external/star2i652-a4q.svg", alt="Star2I652")
          .page4-arrow-right1
            .page4-group1
              .page4-group2
                .page4-iconly-bold-arrow-right
                  img.page4-arrow-right(src="/external/arrowrighti652-sc0i.svg", alt="ArrowRightI652")
      .page4-system-footer
        .page4-home-indicator
          img.page4-home-indicator1(src="/external/homeindicatori652-vlea-200h.png", alt="HomeIndicatorI652")
    .page4-frame4851
      .page4-system-status
        .page4-notch
        .page4-status-icons
          img.page4-network-signal-light(src="/external/networksignallighti652-5izp.svg", alt="NetworkSignalLightI652")
          img.page4-wi-fi-signal-light(src="/external/wifisignallighti652-pqxb.svg", alt="WiFiSignalLightI652")
          .page4-battery-light
            img.page4-rectangle23(src="/external/rectangle23i652-f3m.svg", alt="Rectangle23I652")
            img.page4-rectangle2-stroke(src="/external/rectangle21strokei652-txa.svg", alt="Rectangle21StrokeI652")
            img.page4-rectangle20(src="/external/rectangle20i652-2cf-200h.png", alt="Rectangle20I652")
        .page4-indicator
        .page4-time-light
          img.page4-svg941(src="/external/svg941i652-i6h.svg", alt="SVG941I652")
      .page4-progess-bar
        .page4-frame5
          .page4-frame51
          .page4-frame6
          .page4-frame7
          .page4-frame8
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import moment from 'moment'

export default {
  layout: 'wechat',
  head() {
    return {
      title: 'Register'
    }
  },

  data() {
    return {
      email: '',
      password: ''
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
    async login() {
      const data = {
        email: this.email,
        password: this.password
      }
      let res = await this.$store.dispatch('userlogin', data)
      console.log(res)
      if (res.success) {
        this.$router.replace('/')
      } else {
        this.$toast(res.err)
      }
    },

    getPageWidth() {
      const width = window.innerWidth
      this.picHeight = (width - 20) * 383 / 900
      this.pageWidth = window.innerWidth
    }
  },

  mounted() {
    window.addEventListener('resize', this.getPageWidth)
    this.getPageWidth()
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
.page4-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.page4-frame4 {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: var(--dl-color-dark_four-500);
}
.page4-frame496 {
  gap: 8px;
  top: 315px;
  left: 0px;
  width: 100%;
  height: 351px;
  display: flex;
  padding: 16px;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.page4-frame479 {
  gap: 4px;
  display: flex;
  align-items: flex-start;
}
.page4-frame480 {
  gap: 6px;
  display: flex;
  padding: 8px 24px;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05000000074505806) ;
  align-items: center;
  border-color: rgba(255, 248, 246, 1);
  border-style: solid;
  border-width: 3px;
  border-radius: 57px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-dark_background-200);
}
.page4-image1335 {
  width: 32px;
  height: 32px;
}
.page4-text {
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
.page4-frame481 {
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
  background-color: var(--dl-color-dark_background-200);
}
.page4-image133501 {
  width: 32px;
  height: 32px;
}
.page4-text02 {
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
.page4-frame482 {
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
  background-color: var(--dl-color-dark_background-200);
}
.page4-image133502 {
  width: 32px;
  height: 32px;
}
.page4-text04 {
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
.page4-frame4791 {
  gap: 4px;
  display: flex;
  align-items: flex-start;
}
.page4-frame486 {
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
  background-color: var(--dl-color-dark_background-200);
}
.page4-image133503 {
  width: 32px;
  height: 32px;
}
.page4-text06 {
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
.page4-frame489 {
  gap: 6px;
  display: flex;
  padding: 8px 24px;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05000000074505806) ;
  align-items: center;
  border-color: rgba(255, 248, 246, 1);
  border-style: solid;
  border-width: 3px;
  border-radius: 57px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-dark_background-200);
}
.page4-image133504 {
  width: 32px;
  height: 32px;
}
.page4-text08 {
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
.page4-frame487 {
  gap: 6px;
  display: flex;
  padding: 8px 24px;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05000000074505806) ;
  align-items: center;
  border-color: rgba(255, 248, 246, 1);
  border-style: solid;
  border-width: 3px;
  border-radius: 57px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-dark_background-200);
}
.page4-image133505 {
  width: 32px;
  height: 32px;
}
.page4-text10 {
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
.page4-frame4801 {
  gap: 4px;
  display: flex;
  align-items: flex-start;
}
.page4-frame490 {
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
  background-color: var(--dl-color-dark_background-200);
}
.page4-image133506 {
  width: 32px;
  height: 32px;
}
.page4-text12 {
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
.page4-frame488 {
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
  background-color: var(--dl-color-dark_background-200);
}
.page4-image133507 {
  width: 32px;
  height: 32px;
}
.page4-text14 {
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
.page4-frame4871 {
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
  background-color: var(--dl-color-dark_background-200);
}
.page4-image133508 {
  width: 32px;
  height: 32px;
}
.page4-text16 {
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
.page4-frame4792 {
  gap: 4px;
  display: flex;
  align-items: flex-start;
}
.page4-frame483 {
  gap: 6px;
  display: flex;
  padding: 8px 24px;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05000000074505806) ;
  align-items: center;
  border-color: rgba(255, 248, 246, 1);
  border-style: solid;
  border-width: 3px;
  border-radius: 57px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-dark_background-200);
}
.page4-image133509 {
  width: 32px;
  height: 32px;
}
.page4-text18 {
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
.page4-frame484 {
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
  background-color: var(--dl-color-dark_background-200);
}
.page4-image133510 {
  width: 32px;
  height: 32px;
}
.page4-text20 {
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
.page4-frame485 {
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
  background-color: var(--dl-color-dark_background-200);
}
.page4-image133511 {
  width: 32px;
  height: 32px;
}
.page4-text22 {
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
.page4-text24 {
  top: 265px;
  left: 42px;
  color: var(--dl-color-dark_element-1100);
  height: auto;
  opacity: 0.70;
  position: absolute;
  font-size: 16px;
  font-style: Medium;
  text-align: center;
  font-family: Aeonik;
  font-weight: 500;
  line-height: 22px;
  font-stretch: normal;
  text-decoration: none;
}
.page4-group488 {
  top: 127px;
  left: 16px;
  width: 343px;
  height: 96px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page4-group {
  top: 0px;
  left: 31px;
  width: 282px;
  height: 96px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page4-vector {
  top: 0px;
  left: 49.880615234375px;
  width: 177px;
  height: 25px;
  opacity: 0.70;
  position: absolute;
}
.page4-vector1 {
  top: 1.575957179069519px;
  left: 0.021484375px;
  width: 227px;
  height: 57px;
  opacity: 0.70;
  position: absolute;
}
.page4-vector2 {
  top: 34.917152404785156px;
  left: 0px;
  width: 267px;
  height: 34px;
  opacity: 0.70;
  position: absolute;
}
.page4-vector3 {
  top: 43.863346099853516px;
  left: 25.198486328125px;
  width: 243px;
  height: 42px;
  opacity: 0.70;
  position: absolute;
}
.page4-vector4 {
  top: 57.27699279785156px;
  left: 56.549072265625px;
  width: 178px;
  height: 39px;
  opacity: 0.70;
  position: absolute;
}
.page4-vector5 {
  top: 16.287349700927734px;
  left: 108.38525390625px;
  width: 174px;
  height: 32px;
  opacity: 0.70;
  position: absolute;
}
.page4-frame500 {
  gap: 7px;
  top: 4px;
  left: 0px;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.page4-text29 {
  color: var(--dl-color-dark_element-100);
  width: 343px;
  height: auto;
  font-size: 20px;
  font-style: Medium;
  text-align: center;
  font-family: Aeonik;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.page4-text31 {
  color: var(--dl-color-dark_four-700);
  height: auto;
  font-size: 48px;
  font-style: Regular;
  text-align: center;
  font-family: Gochi Hand;
  font-weight: 400;
  line-height: 48px;
  font-stretch: normal;
  text-decoration: none;
}
.page4-frame502 {
  bottom: 0;
  left: 0px;
  width: 100%;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  background-color: var(--dl-color-dark_background-100);
}
.page4-frame501 {
  gap: 32px;
  width: 100%;
  display: flex;
  padding: 16px;
  align-items: center;
  flex-shrink: 0;
  box-sizing: border-box;
}
.page4-text33 {
  color: var(--dl-color-dark_element-600);
  height: auto;
  flex-grow: 1;
  font-size: 16px;
  font-style: Medium;
  text-align: left;
  font-family: Aeonik;
  font-weight: 500;
  line-height: 22px;
  font-stretch: normal;
  text-decoration: none;
}
.page4-group464 {
  width: 80px;
  height: 80px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page4-star1 {
  top: 0px;
  left: 0px;
  width: 80px;
  height: 80px;
  position: absolute;
}
.page4-star2 {
  top: 10px;
  left: 10px;
  width: 60px;
  height: 60px;
  position: absolute;
}
.page4-arrow-right1 {
  top: 28px;
  left: 28px;
  width: 24px;
  height: 24px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.page4-group1 {
  top: 6px;
  left: 3px;
  width: 18.00002098083496px;
  height: 12px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page4-group2 {
  top: 0px;
  left: 0px;
  width: 18.00002098083496px;
  height: 12px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page4-iconly-bold-arrow-right {
  top: 0px;
  left: 0px;
  width: 18.00002098083496px;
  height: 12px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page4-arrow-right {
  top: 0px;
  left: 0px;
  width: 18px;
  height: 12px;
  position: absolute;
}
.page4-system-footer {
  width: 100%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.page4-home-indicator {
  width: 100%;
  height: 34px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page4-home-indicator1 {
  top: 15.5px;
  left: 148px;
  width: 80px;
  height: 3px;
  position: absolute;
  border-radius: 100px;
}
.page4-frame4851 {
  gap: 16px;
  top: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  padding: 0 0 8px;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  box-sizing: border-box;
}
.page4-system-status {
  width: 100%;
  height: 44px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page4-notch {
  gap: 14px;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 30px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.page4-status-icons {
  gap: 4px;
  top: 16px;
  left: 292px;
  width: 69px;
  display: flex;
  position: absolute;
  align-items: center;
}
.page4-network-signal-light {
  width: 20px;
  height: 14px;
}
.page4-wi-fi-signal-light {
  width: 16px;
  height: 14px;
}
.page4-battery-light {
  width: 25px;
  height: 14px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page4-rectangle23 {
  top: 5px;
  left: 24px;
  width: 1px;
  height: 4px;
  opacity: 0.40;
  position: absolute;
}
.page4-rectangle2-stroke {
  top: 1px;
  left: 0px;
  width: 23px;
  height: 12px;
  opacity: 0.40;
  position: absolute;
}
.page4-rectangle20 {
  top: 3px;
  left: 2px;
  width: 19px;
  height: 8px;
  position: absolute;
  border-radius: 1px;
}
.page4-indicator {
  top: 8px;
  left: 298px;
  width: 6px;
  height: 6px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.page4-time-light {
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
.page4-svg941 {
  top: 3px;
  left: 11px;
  width: 33px;
  height: 15px;
  position: absolute;
}
.page4-progess-bar {
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
.page4-frame5 {
  gap: 6px;
  display: flex;
  padding: 4px;
  overflow: hidden;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 32px;
  justify-content: center;
  background-color: var(--dl-color-dark_one-100);
}
.page4-frame51 {
  gap: 10px;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 9px;
  justify-content: center;
  background-color: var(--dl-color-dark_four-400);
}
.page4-frame6 {
  gap: 10px;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 9px;
  justify-content: center;
  background-color: var(--dl-color-dark_four-400);
}
.page4-frame7 {
  gap: 10px;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 9px;
  justify-content: center;
  background-color: var(--dl-color-dark_four-400);
}
.page4-frame8 {
  gap: 10px;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 9px;
  justify-content: center;
  background-color: var(--dl-color-dark_four-400);
}

</style>