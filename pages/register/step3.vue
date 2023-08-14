<template lang="pug">
.page2-container
  .page2-frame3
    .page2-frame471
      .page2-input
        .page2-input-frame82
          .page2-component-elements
            span.page2-text
              span A relationship
          .page2-component-elements1
            .page2-radio
              img.page2-ellipse17(src="/external/ellipse17i652-amyl-200h.png", alt="Ellipse17I652")
      .page2-input1
        .page2-input-frame821
          .page2-component-elements2
            span.page2-text02
              span Something casual
          .page2-component-elements3
            .page2-radio1
              img.page2-ellipse171(src="/external/ellipse17i652-dwkj-200h.png", alt="Ellipse17I652")
              img.page2-ellipse18(src="/external/ellipse18i652-7c4p-200h.png", alt="Ellipse18I652")
      .page2-input2
        .page2-input-frame822
          .page2-component-elements4
            span.page2-text04
              span I'm not sure yet
          .page2-component-elements5
            .page2-radio2
              img.page2-ellipse172(src="/external/ellipse17i652-u5cm-200h.png", alt="Ellipse17I652")
      .page2-input3
        .page2-input-frame823
          .page2-component-elements6
            span.page2-text06
              span Prefer not to say
          .page2-component-elements7
            .page2-radio3
              img.page2-ellipse173(src="/external/ellipse17i652-botk-200h.png", alt="Ellipse17I652")
    span.page2-text08
      span.
        
        Honesty helps you and everyone on find what you're looking for.
        
    .page2-group487
      .page2-group
        img.page2-vector(src="/external/vectori652-4apm.svg", alt="VectorI652")
        img.page2-vector1(src="/external/vectori652-bbdc.svg", alt="VectorI652")
        img.page2-vector2(src="/external/vectori652-nvq.svg", alt="VectorI652")
        img.page2-vector3(src="/external/vectori652-2d9e.svg", alt="VectorI652")
        img.page2-vector4(src="/external/vectori652-6ui.svg", alt="VectorI652")
        img.page2-vector5(src="/external/vectori652-e66q.svg", alt="VectorI652")
      .page2-frame500
        span.page2-text10
          span When's your
        span.page2-text12
          span Hoping to find?
    .page2-frame502
      .page2-frame501
        span.page2-text14
          span.
            
            This will show on your profile unless you're unsure.
            
        a.page2-group464(href="/register/step4")
          img.page2-star1(src="/external/star1i652-xwfq.svg", alt="Star1I652")
          img.page2-star2(src="/external/star2i652-iuaa.svg", alt="Star2I652")
          .page2-arrow-right1
            .page2-group1
              .page2-group2
                .page2-iconly-bold-arrow-right
                  img.page2-arrow-right(src="/external/arrowrighti652-8sh8.svg", alt="ArrowRightI652")
      .page2-system-footer
        .page2-home-indicator
          img.page2-home-indicator1(src="/external/homeindicatori652-w538-200h.png", alt="HomeIndicatorI652")
    .page2-frame485
      .page2-system-status
        .page2-notch
        .page2-status-icons
          img.page2-network-signal-light(src="/external/networksignallighti652-vcwb.svg", alt="NetworkSignalLightI652")
          img.page2-wi-fi-signal-light(src="/external/wifisignallighti652-1p1.svg", alt="WiFiSignalLightI652")
          .page2-battery-light
            img.page2-rectangle23(src="/external/rectangle23i652-tw3emo.svg", alt="Rectangle23I652")
            img.page2-rectangle2-stroke(src="/external/rectangle21strokei652-vxi.svg", alt="Rectangle21StrokeI652")
            img.page2-rectangle20(src="/external/rectangle20i652-roup-200h.png", alt="Rectangle20I652")
        .page2-indicator
        .page2-time-light
          img.page2-svg941(src="/external/svg941i652-uoml.svg", alt="SVG941I652")
      .page2-progess-bar
        .page2-frame5
          .page2-frame51
          .page2-frame6
          .page2-frame7
          .page2-frame8
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
.page2-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.page2-frame3 {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: var(--dl-color-dark_three-500);
}
.page2-frame471 {
  gap: 12px;
  top: 315px;
  left: 0px;
  width: 100%;
  display: flex;
  padding: 16px;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
}
.page2-input {
  gap: 10px;
  width: 343px;
  height: 56px;
  display: flex;
  overflow: hidden;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05000000074505806) ;
  align-items: center;
  flex-shrink: 0;
  border-radius: 36px;
  flex-direction: column;
  justify-content: center;
}
.page2-input-frame82 {
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
.page2-component-elements {
  gap: 10px;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: center;
}
.page2-text {
  color: var(--dl-color-dark_element-500);
  height: auto;
  font-size: 16px;
  font-style: Regular;
  text-align: left;
  font-family: Aeonik;
  font-weight: 400;
  line-height: 24px;
  font-stretch: normal;
  text-decoration: none;
}
.page2-component-elements1 {
  width: 24px;
  height: 24px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page2-radio {
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
.page2-ellipse17 {
  top: 0px;
  left: 0px;
  width: 24px;
  height: 24px;
  position: absolute;
  border-color: rgba(85, 85, 85, 1);
  border-style: solid;
  border-width: 1.5px;
}
.page2-input1 {
  gap: 10px;
  width: 343px;
  height: 56px;
  display: flex;
  overflow: hidden;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05000000074505806) ;
  align-items: center;
  flex-shrink: 0;
  border-color: rgba(248, 168, 13, 1);
  border-style: solid;
  border-width: 3px;
  border-radius: 36px;
  flex-direction: column;
  justify-content: center;
}
.page2-input-frame821 {
  gap: 12px;
  display: flex;
  padding: 16px;
  flex-grow: 1;
  align-self: stretch;
  box-sizing: content-box;
  align-items: center;
  justify-content: center;
  background-color: var(--dl-color-dark_background-200);
}
.page2-component-elements2 {
  gap: 10px;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: center;
}
.page2-text02 {
  color: var(--dl-color-dark_element-100);
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
.page2-component-elements3 {
  width: 24px;
  height: 24px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page2-radio1 {
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
.page2-ellipse171 {
  top: 0px;
  left: 0px;
  width: 24px;
  height: 24px;
  position: absolute;
}
.page2-ellipse18 {
  top: 6px;
  left: 6px;
  width: 12px;
  height: 12px;
  position: absolute;
}
.page2-input2 {
  gap: 10px;
  width: 343px;
  height: 56px;
  display: flex;
  overflow: hidden;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05000000074505806) ;
  align-items: center;
  flex-shrink: 0;
  border-radius: 36px;
  flex-direction: column;
  justify-content: center;
}
.page2-input-frame822 {
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
.page2-component-elements4 {
  gap: 10px;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: center;
}
.page2-text04 {
  color: var(--dl-color-dark_element-500);
  height: auto;
  font-size: 16px;
  font-style: Regular;
  text-align: left;
  font-family: Aeonik;
  font-weight: 400;
  line-height: 24px;
  font-stretch: normal;
  text-decoration: none;
}
.page2-component-elements5 {
  width: 24px;
  height: 24px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page2-radio2 {
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
.page2-ellipse172 {
  top: 0px;
  left: 0px;
  width: 24px;
  height: 24px;
  position: absolute;
  border-color: rgba(85, 85, 85, 1);
  border-style: solid;
  border-width: 1.5px;
}
.page2-input3 {
  gap: 10px;
  width: 343px;
  height: 56px;
  display: flex;
  overflow: hidden;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05000000074505806) ;
  align-items: center;
  flex-shrink: 0;
  border-radius: 36px;
  flex-direction: column;
  justify-content: center;
}
.page2-input-frame823 {
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
.page2-component-elements6 {
  gap: 10px;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: center;
}
.page2-text06 {
  color: var(--dl-color-dark_element-500);
  height: auto;
  font-size: 16px;
  font-style: Regular;
  text-align: left;
  font-family: Aeonik;
  font-weight: 400;
  line-height: 24px;
  font-stretch: normal;
  text-decoration: none;
}
.page2-component-elements7 {
  width: 24px;
  height: 24px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page2-radio3 {
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
.page2-ellipse173 {
  top: 0px;
  left: 0px;
  width: 24px;
  height: 24px;
  position: absolute;
  border-color: rgba(85, 85, 85, 1);
  border-style: solid;
  border-width: 1.5px;
}
.page2-text08 {
  top: 265px;
  left: 54px;
  color: var(--dl-color-dark_element-1100);
  width: 258px;
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
.page2-group487 {
  top: 127px;
  left: 16px;
  width: 343px;
  height: 96px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page2-group {
  top: 0px;
  left: 31px;
  width: 282px;
  height: 96px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page2-vector {
  top: 0px;
  left: 49.880615234375px;
  width: 177px;
  height: 25px;
  opacity: 0.70;
  position: absolute;
}
.page2-vector1 {
  top: 1.575957179069519px;
  left: 0.021484375px;
  width: 227px;
  height: 57px;
  opacity: 0.70;
  position: absolute;
}
.page2-vector2 {
  top: 34.917152404785156px;
  left: 0px;
  width: 267px;
  height: 34px;
  opacity: 0.70;
  position: absolute;
}
.page2-vector3 {
  top: 43.863346099853516px;
  left: 25.198486328125px;
  width: 243px;
  height: 42px;
  opacity: 0.70;
  position: absolute;
}
.page2-vector4 {
  top: 57.27699279785156px;
  left: 56.549072265625px;
  width: 178px;
  height: 39px;
  opacity: 0.70;
  position: absolute;
}
.page2-vector5 {
  top: 16.287349700927734px;
  left: 108.38525390625px;
  width: 174px;
  height: 32px;
  opacity: 0.70;
  position: absolute;
}
.page2-frame500 {
  gap: 7px;
  top: 4px;
  left: 0px;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.page2-text10 {
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
.page2-text12 {
  color: var(--dl-color-dark_three-700);
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
.page2-frame502 {
  bottom: 0;
  left: 0px;
  width: 100%;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  background-color: var(--dl-color-dark_background-100);
}
.page2-frame501 {
  gap: 32px;
  width: 100%;
  display: flex;
  padding: 16px;
  align-items: center;
  flex-shrink: 0;
  box-sizing: border-box;
}
.page2-text14 {
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
.page2-group464 {
  width: 80px;
  height: 80px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page2-star1 {
  top: 0px;
  left: 0px;
  width: 80px;
  height: 80px;
  position: absolute;
}
.page2-star2 {
  top: 10px;
  left: 10px;
  width: 60px;
  height: 60px;
  position: absolute;
}
.page2-arrow-right1 {
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
.page2-group1 {
  top: 6px;
  left: 3px;
  width: 18.00002098083496px;
  height: 12px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page2-group2 {
  top: 0px;
  left: 0px;
  width: 18.00002098083496px;
  height: 12px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page2-iconly-bold-arrow-right {
  top: 0px;
  left: 0px;
  width: 18.00002098083496px;
  height: 12px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.page2-arrow-right {
  top: 0px;
  left: 0px;
  width: 18px;
  height: 12px;
  position: absolute;
}
.page2-system-footer {
  width: 100%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.page2-home-indicator {
  width: 100%;
  height: 34px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page2-home-indicator1 {
  top: 15.5px;
  left: 148px;
  width: 80px;
  height: 3px;
  position: absolute;
  border-radius: 100px;
}
.page2-frame485 {
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
.page2-system-status {
  width: 100%;
  height: 44px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page2-notch {
  gap: 14px;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 30px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.page2-status-icons {
  gap: 4px;
  top: 16px;
  left: 292px;
  width: 69px;
  display: flex;
  position: absolute;
  align-items: center;
}
.page2-network-signal-light {
  width: 20px;
  height: 14px;
}
.page2-wi-fi-signal-light {
  width: 16px;
  height: 14px;
}
.page2-battery-light {
  width: 25px;
  height: 14px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.page2-rectangle23 {
  top: 5px;
  left: 24px;
  width: 1px;
  height: 4px;
  opacity: 0.40;
  position: absolute;
}
.page2-rectangle2-stroke {
  top: 1px;
  left: 0px;
  width: 23px;
  height: 12px;
  opacity: 0.40;
  position: absolute;
}
.page2-rectangle20 {
  top: 3px;
  left: 2px;
  width: 19px;
  height: 8px;
  position: absolute;
  border-radius: 1px;
}
.page2-indicator {
  top: 8px;
  left: 298px;
  width: 6px;
  height: 6px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.page2-time-light {
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
.page2-svg941 {
  top: 3px;
  left: 11px;
  width: 33px;
  height: 15px;
  position: absolute;
}
.page2-progess-bar {
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
.page2-frame5 {
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
.page2-frame51 {
  gap: 10px;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 9px;
  justify-content: center;
  background-color: var(--dl-color-dark_three-400);
}
.page2-frame6 {
  gap: 10px;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 9px;
  justify-content: center;
  background-color: var(--dl-color-dark_three-400);
}
.page2-frame7 {
  gap: 10px;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 9px;
  justify-content: center;
  background-color: var(--dl-color-dark_three-400);
}
.page2-frame8 {
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