<template lang="pug">
.page3-container
  .page3-frame2
    .page3-group487
      .page3-group
        img.page3-vector(src="/external/vectori652-46kk.svg", alt="VectorI652")
        img.page3-vector1(src="/external/vectori652-3g6m.svg", alt="VectorI652")
        img.page3-vector2(src="/external/vectori652-vuy.svg", alt="VectorI652")
        img.page3-vector3(src="/external/vectori652-qaal.svg", alt="VectorI652")
        img.page3-vector4(src="/external/vectori652-xv7.svg", alt="VectorI652")
        img.page3-vector5(src="/external/vectori652-qnfs.svg", alt="VectorI652")
      .page3-frame500
        span.page3-text
          span When's your
        span.page3-text02
          span Birthday
    .page3-frame503
      .page3-frame493
        span.page3-text04
          span Month
        .page3-input
          .page3-input-frame82
            .page3-component-elements
              span.page3-text06
                span ...
      .page3-frame494
        span.page3-text08
          span Day
        .page3-input1
          .page3-input-frame821
            .page3-component-elements1
              span.page3-text10
                span ...
      .page3-frame495
        span.page3-text12
          span Year
        .page3-input2
          .page3-input-frame822
            .page3-component-elements2
              span.page3-text14
                span ...
    .page3-frame502
      .page3-frame501
        span.page3-text16
          span.
            
            We only show your age to potential matches, not your birthday.
            
        a.page3-group464(href="/register/step3")
          img.page3-star1(src="/external/star1i652-ivcj.svg", alt="Star1I652")
          img.page3-star2(src="/external/star2i652-cz2.svg", alt="Star2I652")
          .page3-arrow-right1
            .page3-group1
              .page3-group2
                .page3-iconly-bold-arrow-right
                  img.page3-arrow-right(src="/external/arrowrighti652-9w9b.svg", alt="ArrowRightI652")
      .page3-system-footer
        .page3-home-indicator
          img.page3-home-indicator1(src="/external/homeindicatori652-6oyz-200h.png", alt="HomeIndicatorI652")
    .page3-frame485
      .page3-system-status
        .page3-notch
        .page3-status-icons
          img.page3-network-signal-light(src="/external/networksignallighti652-z5m0l.svg", alt="NetworkSignalLightI652")
          img.page3-wi-fi-signal-light(src="/external/wifisignallighti652-tju.svg", alt="WiFiSignalLightI652")
          .page3-battery-light
            img.page3-rectangle23(src="/external/rectangle23i652-859a.svg", alt="Rectangle23I652")
            img.page3-rectangle2-stroke(src="/external/rectangle21strokei652-43c.svg", alt="Rectangle21StrokeI652")
            img.page3-rectangle20(src="/external/rectangle20i652-wuzk-200h.png", alt="Rectangle20I652")
        .page3-indicator
        .page3-time-light
          img.page3-svg941(src="/external/svg941i652-p07.svg", alt="SVG941I652")
      .page3-progess-bar
        .page3-frame5
          .page3-frame51
          .page3-frame6
          .page3-frame7
          .page3-frame8
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
.page3-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.page3-frame2 {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: var(--dl-color-dark_two-500);
}
.page3-group487 {
  top: 127px;
  left: 16px;
  width: 343px;
  height: 96px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page3-group {
  top: 0px;
  left: 31px;
  width: 282px;
  height: 96px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page3-vector {
  top: 0px;
  left: 49.880615234375px;
  width: 177px;
  height: 25px;
  opacity: 0.70;
  position: absolute;
}
.page3-vector1 {
  top: 1.575957179069519px;
  left: 0.021484375px;
  width: 227px;
  height: 57px;
  opacity: 0.70;
  position: absolute;
}
.page3-vector2 {
  top: 34.917152404785156px;
  left: 0px;
  width: 267px;
  height: 34px;
  opacity: 0.70;
  position: absolute;
}
.page3-vector3 {
  top: 43.863346099853516px;
  left: 25.198486328125px;
  width: 243px;
  height: 42px;
  opacity: 0.70;
  position: absolute;
}
.page3-vector4 {
  top: 57.27699279785156px;
  left: 56.549072265625px;
  width: 178px;
  height: 39px;
  opacity: 0.70;
  position: absolute;
}
.page3-vector5 {
  top: 16.287349700927734px;
  left: 108.38525390625px;
  width: 174px;
  height: 32px;
  opacity: 0.70;
  position: absolute;
}
.page3-frame500 {
  gap: 7px;
  top: 4px;
  left: 0px;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.page3-text {
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
.page3-text02 {
  color: var(--dl-color-dark_two-800);
  height: auto;
  font-size: 48px;
  align-self: stretch;
  font-style: Regular;
  text-align: center;
  font-family: Gochi Hand;
  font-weight: 400;
  line-height: 48px;
  font-stretch: normal;
  text-decoration: none;
}
.page3-frame503 {
  gap: 7px;
  top: 269px;
  left: 0px;
  width: 100%;
  display: flex;
  padding: 16px;
  position: absolute;
  align-items: center;
  flex-shrink: 0;
  justify-content: space-between;
  box-sizing: border-box;
}
.page3-frame493 {
  gap: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.page3-text04 {
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
.page3-input {
  gap: 10px;
  width: 110px;
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
.page3-input-frame82 {
  gap: 12px;
  display: flex;
  padding: 16px;
  flex-grow: 1;
  align-self: stretch;
  box-sizing: content-box;
  align-items: center;
  border-color: rgba(57, 57, 57, 1);
  justify-content: center;
  background-color: var(--dl-color-dark_background-200);
}
.page3-component-elements {
  gap: 10px;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
}
.page3-text06 {
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
.page3-frame494 {
  gap: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.page3-text08 {
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
.page3-input1 {
  gap: 10px;
  width: 110px;
  height: 48px;
  display: flex;
  overflow: hidden;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.10000000149011612) ;
  align-items: center;
  flex-shrink: 0;
  border-radius: 36px;
  flex-direction: column;
  justify-content: center;
}
.page3-input-frame821 {
  gap: 12px;
  display: flex;
  padding: 16px;
  flex-grow: 1;
  align-self: stretch;
  box-sizing: content-box;
  align-items: center;
  border-color: rgba(57, 57, 57, 1);
  justify-content: center;
  background-color: var(--dl-color-dark_background-200);
}
.page3-component-elements1 {
  gap: 10px;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
}
.page3-text10 {
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
.page3-frame495 {
  gap: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.page3-text12 {
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
.page3-input2 {
  gap: 10px;
  width: 110px;
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
.page3-input-frame822 {
  gap: 12px;
  display: flex;
  padding: 16px;
  flex-grow: 1;
  align-self: stretch;
  box-sizing: content-box;
  align-items: center;
  border-color: rgba(57, 57, 57, 1);
  justify-content: center;
  background-color: var(--dl-color-dark_background-200);
}
.page3-component-elements2 {
  gap: 10px;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
}
.page3-text14 {
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
.page3-frame502 {
  bottom: 0;
  left: 0px;
  width: 100%;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  background-color: var(--dl-color-dark_background-100);
  box-sizing: border-box;
}
.page3-frame501 {
  gap: 32px;
  width: 100%;
  display: flex;
  padding: 16px;
  align-items: center;
  flex-shrink: 0;
  box-sizing: border-box;
}
.page3-text16 {
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
.page3-group464 {
  width: 80px;
  height: 80px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page3-star1 {
  top: 0px;
  left: 0px;
  width: 80px;
  height: 80px;
  position: absolute;
}
.page3-star2 {
  top: 10px;
  left: 10px;
  width: 60px;
  height: 60px;
  position: absolute;
}
.page3-arrow-right1 {
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
.page3-group1 {
  top: 6px;
  left: 3px;
  width: 18.00002098083496px;
  height: 12px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page3-group2 {
  top: 0px;
  left: 0px;
  width: 18.00002098083496px;
  height: 12px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page3-iconly-bold-arrow-right {
  top: 0px;
  left: 0px;
  width: 18.00002098083496px;
  height: 12px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page3-arrow-right {
  top: 0px;
  left: 0px;
  width: 18px;
  height: 12px;
  position: absolute;
}
.page3-system-footer {
  width: 100%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.page3-home-indicator {
  width: 100%;
  height: 34px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page3-home-indicator1 {
  top: 15.5px;
  left: 148px;
  width: 80px;
  height: 3px;
  position: absolute;
  border-radius: 100px;
}
.page3-frame485 {
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
.page3-system-status {
  width: 100%;
  height: 44px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page3-notch {
  gap: 14px;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 30px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.page3-status-icons {
  gap: 4px;
  top: 16px;
  left: 292px;
  width: 69px;
  display: flex;
  position: absolute;
  align-items: center;
}
.page3-network-signal-light {
  width: 20px;
  height: 14px;
}
.page3-wi-fi-signal-light {
  width: 16px;
  height: 14px;
}
.page3-battery-light {
  width: 25px;
  height: 14px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page3-rectangle23 {
  top: 5px;
  left: 24px;
  width: 1px;
  height: 4px;
  opacity: 0.40;
  position: absolute;
}
.page3-rectangle2-stroke {
  top: 1px;
  left: 0px;
  width: 23px;
  height: 12px;
  opacity: 0.40;
  position: absolute;
}
.page3-rectangle20 {
  top: 3px;
  left: 2px;
  width: 19px;
  height: 8px;
  position: absolute;
  border-radius: 1px;
}
.page3-indicator {
  top: 8px;
  left: 298px;
  width: 6px;
  height: 6px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.page3-time-light {
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
.page3-svg941 {
  top: 3px;
  left: 11px;
  width: 33px;
  height: 15px;
  position: absolute;
}
.page3-progess-bar {
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
.page3-frame5 {
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
.page3-frame51 {
  gap: 10px;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 9px;
  justify-content: center;
  background-color: var(--dl-color-dark_two-400);
}
.page3-frame6 {
  gap: 10px;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 9px;
  justify-content: center;
  background-color: var(--dl-color-dark_two-400);
}
.page3-frame7 {
  gap: 10px;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 9px;
  justify-content: center;
  background-color: var(--dl-color-dark_background-300);
}
.page3-frame8 {
  gap: 10px;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 9px;
  justify-content: center;
  background-color: var(--dl-color-dark_background-300);
}


</style>