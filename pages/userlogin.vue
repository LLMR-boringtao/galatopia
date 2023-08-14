<template lang="pug">
.frame1-container
  .frame1-frame1
    .frame1-frame490
      .frame1-input
        .frame1-input-frame82
          input.frame1-component-elements(v-model = 'email', name = 'email' type="text" placeholder="Type your email")
      .frame1-input
        .frame1-input-frame82
          input.frame1-component-elements(v-model = 'password', name = 'password' type="password" placeholder="Type your email")
      button.frame1-button(@click="login" type="button")
        span.frame1-text11.ButtonDefault
          span Login
      span.frame1-text
        a(href='/register/step1') Register Now.
    .frame1-frame485
      .frame1-system-status
        .frame1-notch
        .frame1-status-icons
          img.frame1-network-signal-light(alt="NetworkSignalLightI652", src="/external/networksignallighti652-9mhq.svg")
          img.frame1-wi-fi-signal-light(alt="WiFiSignalLightI652", src="/external/wifisignallighti652-nkx.svg")
          .frame1-battery-light
            img.frame1-rectangle23(alt="Rectangle23I652", src="/external/rectangle23i652-igg.svg")
            img.frame1-rectangle2-stroke(alt="Rectangle21StrokeI652", src="/external/rectangle21strokei652-yh4.svg")
            img.frame1-rectangle20(alt="Rectangle20I652", src="/external/rectangle20i652-wyz8-200h.png")
        .frame1-indicator
        .frame1-time-light
          img.frame1-svg941(alt="SVG941I652", src="/external/svg941i652-ncv.svg")
    .frame1-group487
      .frame1-group
        img.frame1-vector(alt="VectorI652", src="/external/vectori652-kba8.svg")
        img.frame1-vector1(alt="VectorI652", src="/external/vectori652-s2u8.svg")
        img.frame1-vector2(alt="VectorI652", src="/external/vectori652-x7m.svg")
        img.frame1-vector3(alt="VectorI652", src="/external/vectori652-em6d.svg")
        img.frame1-vector4(alt="VectorI652", src="/external/vectori652-ng9v.svg")
        img.frame1-vector5(alt="VectorI652", src="/external/vectori652-v45.svg")
      .frame1-frame500
        span.frame1-text04
          span GalatopAi
        span.frame1-text06
          span Login
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
      title: 'login'
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
body {
  font-weight: 400;
  font-style:normal;
  text-decoration: none;
  text-transform: none;
  letter-spacing: normal;
  line-height: 1.15;
  color: var(--dl-color-gray-black);
  background-color: var(--dl-color-gray-white);

}
.frame1-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.frame1-frame1 {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: var(--dl-color-dark_one-500);
}
.frame1-frame490 {
  gap: 12px;
  top: 269px;
  left: 0px;
  width: 100%;
  display: flex;
  padding: 16px;
  position: absolute;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
}
.frame1-text {
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
.frame1-input {
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
.frame1-input-frame82 {
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
.frame1-component-elements {
  gap: 10px;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: center;
  border: none;
  background-color: var(--dl-color-dark_background-200);
  box-shadow: none;
  color: var(--dl-color-dark_element-600);
}
input.frame1-component-elements:-internal-autofill-selected {
  -webkit-text-fill-color: #FFFFFF !important;
  transition: background-color 5000s ease-in-out 0s !important;
}
input.frame1-component-elements:-webkit-autofill {
  -webkit-text-fill-color: #fff !important;
  transition: background-color 50000s ease-in-out 0s !important;
}
input.frame1-component-elements:-internal-autofill-previewed,
input.frame1-component-elements:-internal-autofill-selected {
  -webkit-text-fill-color: #fff !important;
  transition: background-color 5000s ease-out 0.5s !important;
}
.frame1-text02 {
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
.frame1-frame485 {
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
.frame1-system-status {
  width: 100%;
  height: 44px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.frame1-notch {
  gap: 14px;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 30px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.frame1-status-icons {
  gap: 4px;
  top: 16px;
  left: 292px;
  width: 69px;
  display: flex;
  position: absolute;
  align-items: center;
}
.frame1-network-signal-light {
  width: 20px;
  height: 14px;
}
.frame1-wi-fi-signal-light {
  width: 16px;
  height: 14px;
}
.frame1-battery-light {
  width: 25px;
  height: 14px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.frame1-rectangle23 {
  top: 5px;
  left: 24px;
  width: 1px;
  height: 4px;
  opacity: 0.40;
  position: absolute;
}
.frame1-rectangle2-stroke {
  top: 1px;
  left: 0px;
  width: 23px;
  height: 12px;
  opacity: 0.40;
  position: absolute;
}
.frame1-rectangle20 {
  top: 3px;
  left: 2px;
  width: 19px;
  height: 8px;
  position: absolute;
  border-radius: 1px;
}
.frame1-indicator {
  top: 8px;
  left: 298px;
  width: 6px;
  height: 6px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.frame1-time-light {
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
.frame1-svg941 {
  top: 3px;
  left: 11px;
  width: 33px;
  height: 15px;
  position: absolute;
}
.frame1-progess-bar {
  gap: 10px;
  width: 100%;
  height: 12px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}
.frame1-frame5 {
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
.frame1-frame51 {
  gap: 10px;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 9px;
  justify-content: center;
  background-color: var(--dl-color-dark_one-400);
}
.frame1-frame6 {
  gap: 10px;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 9px;
  justify-content: center;
  background-color: var(--dl-color-dark_background-300);
}
.frame1-frame7 {
  gap: 10px;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 9px;
  justify-content: center;
  background-color: var(--dl-color-dark_background-300);
}
.frame1-frame8 {
  gap: 10px;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 9px;
  justify-content: center;
  background-color: var(--dl-color-dark_background-300);
}
.frame1-group487 {
  top: 127px;
  left: 16px;
  width: 343px;
  height: 96px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.frame1-group {
  top: 0px;
  left: 31px;
  width: 282px;
  height: 96px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.frame1-vector {
  top: 0px;
  left: 49.880615234100%;
  width: 177px;
  height: 25px;
  opacity: 0.70;
  position: absolute;
}
.frame1-vector1 {
  top: 1.575957179069519px;
  left: 0.021484100%;
  width: 227px;
  height: 57px;
  opacity: 0.70;
  position: absolute;
}
.frame1-vector2 {
  top: 34.917152404785156px;
  left: 0px;
  width: 267px;
  height: 34px;
  opacity: 0.70;
  position: absolute;
}
.frame1-vector3 {
  top: 43.863346099853516px;
  left: 25.198486328125px;
  width: 243px;
  height: 42px;
  opacity: 0.70;
  position: absolute;
}
.frame1-vector4 {
  top: 57.27699279785156px;
  left: 56.549072265625px;
  width: 178px;
  height: 39px;
  opacity: 0.70;
  position: absolute;
}
.frame1-vector5 {
  top: 16.287349700927734px;
  left: 108.38525390625px;
  width: 174px;
  height: 32px;
  opacity: 0.70;
  position: absolute;
}
.frame1-frame500 {
  gap: 7px;
  top: 4px;
  left: 0px;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.frame1-text04 {
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
.frame1-text06 {
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
.frame1-frame502 {
  top: 666px;
  left: 0px;
  width: 100%;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  background-color: var(--dl-color-dark_background-100);
}
.frame1-frame501 {
  gap: 32px;
  width: 100%;
  display: flex;
  padding: 16px;
  align-items: center;
  flex-shrink: 0;
}
.frame1-text08 {
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
.frame1-group464 {
  width: 80px;
  height: 80px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.frame1-star1 {
  top: 0px;
  left: 0px;
  width: 80px;
  height: 80px;
  position: absolute;
}
.frame1-star2 {
  top: 10px;
  left: 10px;
  width: 60px;
  height: 60px;
  position: absolute;
}
.frame1-arrow-right1 {
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
.frame1-group1 {
  top: 6px;
  left: 3px;
  width: 18.00002098083496px;
  height: 12px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.frame1-group2 {
  top: 0px;
  left: 0px;
  width: 18.00002098083496px;
  height: 12px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.frame1-iconly-bold-arrow-right {
  top: 0px;
  left: 0px;
  width: 18.00002098083496px;
  height: 12px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.frame1-arrow-right {
  top: 0px;
  left: 0px;
  width: 18px;
  height: 12px;
  position: absolute;
}
.frame1-system-footer {
  width: 100%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.frame1-home-indicator {
  width: 100%;
  height: 34px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.frame1-home-indicator1 {
  top: 15.5px;
  left: 148px;
  width: 80px;
  height: 3px;
  position: absolute;
  border-radius: 100px;
}
.frame1-button {
  gap: 10px;
  height: 53px;
  display: flex;
  padding: 16px 40px;
  flex-grow: 1;
  align-items: center;
  flex-shrink: 0;
  border-radius: 48px;
  justify-content: center;
  background-color: var(--dl-color-dark_element-1100);
  width: 343px;
  border: none;
}
.frame1-text11 {
  color: var(--dl-color-dark_element-100);
  height: auto;
  text-align: center;
  line-height: 22px;
}
.ButtonDefault {
  font-size: 16px;
  font-style: normal;
  font-family: Aeonik;
  font-stretch: normal;
}
</style>