<template lang="pug">
.page1-container
  .page1-frame1
    .page1-frame490
      span.page1-text
        span You won't be able to change this later.
      .page1-input
        .page1-input-frame82
          .page1-component-elements
            span.page1-text02
              span Type something...
    .page1-frame485
      .page1-system-status
        .page1-notch
        .page1-status-icons
          img.page1-network-signal-light(src="/external/networksignallighti652-4kze.svg", alt="NetworkSignalLightI652")
          img.page1-wi-fi-signal-light(src="/external/wifisignallighti652-xu9.svg", alt="WiFiSignalLightI652")
          .page1-battery-light
            img.page1-rectangle23(src="/external/rectangle23i652-lp5m.svg", alt="Rectangle23I652")
            img.page1-rectangle2-stroke(src="/external/rectangle21strokei652-tst.svg", alt="Rectangle21StrokeI652")
            img.page1-rectangle20(src="/external/rectangle20i652-6lq-200h.png", alt="Rectangle20I652")
        .page1-indicator
        .page1-time-light
          img.page1-svg941(src="/external/svg941i652-0nfb.svg", alt="SVG941I652")
      .page1-progess-bar
        .page1-frame5
          .page1-frame51
          .page1-frame6
          .page1-frame7
          .page1-frame8
    .page1-group487
      .page1-group
        img.page1-vector(src="/external/vectori652-stqc.svg", alt="VectorI652")
        img.page1-vector1(src="/external/vectori652-qy3i.svg", alt="VectorI652")
        img.page1-vector2(src="/external/vectori652-7tx2.svg", alt="VectorI652")
        img.page1-vector3(src="/external/vectori652-fmln.svg", alt="VectorI652")
        img.page1-vector4(src="/external/vectori652-rrw8.svg", alt="VectorI652")
        img.page1-vector5(src="/external/vectori652-sph.svg", alt="VectorI652")
      .page1-frame500
        span.page1-text04
          span What’s your
        span.page1-text06
          span Frist name?
    .page1-frame502
      .page1-frame501
        span.page1-text08
          span
            span This will be shown
            br
            span on your profile.
        a.page1-group464(href="/register/step2")
          img.page1-star1(src="/external/star1i652-tz6u.svg", alt="Star1I652")
          img.page1-star2(src="/external/star2i652-ggnf.svg", alt="Star2I652")
          .page1-arrow-right1
            .page1-group1
              .page1-group2
                .page1-iconly-bold-arrow-right
                  img.page1-arrow-right(src="/external/arrowrighti652-pmeh.svg", alt="ArrowRightI652")
      .page1-system-footer
        .page1-home-indicator
          img.page1-home-indicator1(src="/external/homeindicatori652-110s-200h.png", alt="HomeIndicatorI652")
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
.page1-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.page1-frame1 {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: var(--dl-color-dark_one-500);
}
.page1-frame490 {
  gap: 12px;
  top: 269px;
  left: 0px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 16px;
  position: absolute;
  align-items: center;
  flex-direction: column;
}
.page1-text {
  color: var(--dl-color-dark_element-1100);
  height: auto;
  opacity: 0.70;
  font-size: 16px;
  font-style: Medium;
  text-align: center;
  font-family: Aeonik;
  font-weight: 500;
  line-height: 22px;
  font-stretch: normal;
  text-decoration: none;
}
.page1-input {
  gap: 10px;
  width: 343px;
  height: 48px;
  display: flex;
  overflow: hidden;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05000000074505806) ;
  align-items: center;
  flex-shrink: 0;
  border-radius: 36px;
  flex-direction: column;
  justify-content: center;
}
.page1-input-frame82 {
  gap: 12px;
  display: flex;
  padding: 16px;
  align-self: stretch;
  box-sizing: content-box;
  align-items: center;
  flex-shrink: 0;
  border-color: rgba(28, 28, 28, 1);
  justify-content: center;
  background-color: var(--dl-color-dark_background-200);
}
.page1-component-elements {
  gap: 10px;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: center;
}
.page1-text02 {
  color: var(--dl-color-dark_element-700);
  height: auto;
  font-size: 16px;
  font-style: Medium;
  text-align: left;
  font-family: Aeonik;
  font-weight: 500;
  line-height: 22px;
  font-stretch: normal;
  text-decoration: none;
}
.page1-frame485 {
  gap: 16px;
  top: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  padding: 0 0 8px;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
}
.page1-system-status {
  width: 100%;
  height: 44px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page1-notch {
  gap: 14px;
  top: 0px;
  left: 0px;
  width: 375px;
  height: 30px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.page1-status-icons {
  gap: 4px;
  top: 16px;
  left: 292px;
  width: 69px;
  display: flex;
  position: absolute;
  align-items: center;
}
.page1-network-signal-light {
  width: 20px;
  height: 14px;
}
.page1-wi-fi-signal-light {
  width: 16px;
  height: 14px;
}
.page1-battery-light {
  width: 25px;
  height: 14px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page1-rectangle23 {
  top: 5px;
  left: 24px;
  width: 1px;
  height: 4px;
  opacity: 0.40;
  position: absolute;
}
.page1-rectangle2-stroke {
  top: 1px;
  left: 0px;
  width: 23px;
  height: 12px;
  opacity: 0.40;
  position: absolute;
}
.page1-rectangle20 {
  top: 3px;
  left: 2px;
  width: 19px;
  height: 8px;
  position: absolute;
  border-radius: 1px;
}
.page1-indicator {
  top: 8px;
  left: 298px;
  width: 6px;
  height: 6px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.page1-time-light {
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
.page1-svg941 {
  top: 3px;
  left: 11px;
  width: 33px;
  height: 15px;
  position: absolute;
}
.page1-progess-bar {
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
.page1-frame5 {
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
.page1-frame51 {
  gap: 10px;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 9px;
  justify-content: center;
  background-color: var(--dl-color-dark_one-400);
}
.page1-frame6 {
  gap: 10px;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 9px;
  justify-content: center;
  background-color: var(--dl-color-dark_background-300);
}
.page1-frame7 {
  gap: 10px;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 9px;
  justify-content: center;
  background-color: var(--dl-color-dark_background-300);
}
.page1-frame8 {
  gap: 10px;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 9px;
  justify-content: center;
  background-color: var(--dl-color-dark_background-300);
}
.page1-group487 {
  top: 127px;
  left: 16px;
  width: 343px;
  height: 96px;
  display: flex;
  position: absolute;
  align-items: center;
  flex-shrink: 1;
}
.page1-group {
  top: 0px;
  left: 31px;
  width: 282px;
  height: 96px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page1-vector {
  top: 0px;
  left: 49.880615234375px;
  width: 177px;
  height: 25px;
  opacity: 0.70;
  position: absolute;
}
.page1-vector1 {
  top: 1.575957179069519px;
  left: 0.021484375px;
  width: 227px;
  height: 57px;
  opacity: 0.70;
  position: absolute;
}
.page1-vector2 {
  top: 34.917152404785156px;
  left: 0px;
  width: 267px;
  height: 34px;
  opacity: 0.70;
  position: absolute;
}
.page1-vector3 {
  top: 43.863346099853516px;
  left: 25.198486328125px;
  width: 243px;
  height: 42px;
  opacity: 0.70;
  position: absolute;
}
.page1-vector4 {
  top: 57.27699279785156px;
  left: 56.549072265625px;
  width: 178px;
  height: 39px;
  opacity: 0.70;
  position: absolute;
}
.page1-vector5 {
  top: 16.287349700927734px;
  left: 108.38525390625px;
  width: 174px;
  height: 32px;
  opacity: 0.70;
  position: absolute;
}
.page1-frame500 {
  gap: 7px;
  top: 4px;
  left: 0px;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.page1-text04 {
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
.page1-text06 {
  color: var(--dl-color-dark_one-800);
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
.page1-frame502 {
  bottom: 0;
  left: 0px;
  width: 100%;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  background-color: var(--dl-color-dark_background-100);
}
.page1-frame501 {
  gap: 32px;
  width: 100%;
  display: flex;
  padding: 16px;
  align-items: center;
  flex-shrink: 0;
  box-sizing: border-box;
}
.page1-text08 {
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
.page1-group464 {
  width: 80px;
  height: 80px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page1-star1 {
  top: 0px;
  left: 0px;
  width: 80px;
  height: 80px;
  position: absolute;
}
.page1-star2 {
  top: 10px;
  left: 10px;
  width: 60px;
  height: 60px;
  position: absolute;
}
.page1-arrow-right1 {
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
.page1-group1 {
  top: 6px;
  left: 3px;
  width: 18.00002098083496px;
  height: 12px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page1-group2 {
  top: 0px;
  left: 0px;
  width: 18.00002098083496px;
  height: 12px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page1-iconly-bold-arrow-right {
  top: 0px;
  left: 0px;
  width: 18.00002098083496px;
  height: 12px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page1-arrow-right {
  top: 0px;
  left: 0px;
  width: 18px;
  height: 12px;
  position: absolute;
}
.page1-system-footer {
  width: 100%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.page1-home-indicator {
  width: 280%;
  height: 34px;
  display: flex;
  position: relative;
  align-items: center;
  flex-shrink: 0;
}
.page1-home-indicator1 {
  top: 15.5px;
  left: 148px;
  width: 80px;
  height: 3px;
  position: absolute;
  border-radius: 100px;
}

</style>