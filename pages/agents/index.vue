<template lang="pug">
.my-agents-container
  .my-agents-my-agents
    .my-agents-thumb-image
      div(@click='isFlipped = !isFlipped' :class="{ flipped: isFlipped }")
        transition(name="flip")
          span.wrapper(v-if="!isFlipped")
            img.my-agents-rectangle11(src="/external/zhouxiaonan_agent_pic_final.png", alt="Rectangle1I652")
          span.wrapper(v-else)
            span.wrapper-text
              | 昵称：周小楠 
              br
              | 今日状态：兴奋
              br
              | 新增记忆：ChinaJoy
              br
              | 近期热词：奥本海默
              br
              | 更新日期：07.2023 
              br
              | 训练文本：3423对话

      .my-agents-frame12(@click = 'handleChat')
        span.my-agents-text04
          span 周小楠
        .my-agents-frame31
          .my-agents-frame13
            .my-agents-location21
              .my-agents-group02
                .my-agents-group03
                  img.my-agents-vector02(src="/external/vectori652-uzso.svg", alt="VectorI652")
                  img.my-agents-vector03(src="/external/vectori652-a7s.svg", alt="VectorI652")
            span.my-agents-text06
              span 聊会儿：你平时喜欢听啥乐队？
    .my-agents-bottom-tabbar
      .my-agents-tab
        .my-agents-component-tab-bar(@click='goPage("index")')
          .my-agents-discover1
            .my-agents-group06
              .my-agents-group07
                img.my-agents-vector06(src="/external/主页.svg", alt="VectorI652")
        .my-agents-component-tab-bar1(@click='goPage("action")')
          .my-agents-ticket1
            .my-agents-group08
              .my-agents-group09
                img.my-agents-vector08(src="/external/network.svg", alt="VectorI652")
        .my-agents-component-tab-bar2(@click='goPage("town")')
          .my-agents-messages11
            .my-agents-group10
              .my-agents-group11
                img.my-agents-vector12(src="/external/城镇.svg", alt="VectorI652")
        .my-agents-component-tab-bar3(@click='goPage("agents")')
          .my-agents-profilecircle2
            .my-agents-group12
              .my-agents-group13
                img.my-agents-vector15(src="/external/vectori652-xnj.svg", alt="VectorI652")
                img.my-agents-vector16(src="/external/vectori652-94qp.svg", alt="VectorI652")
                img.my-agents-vector17(src="/external/vectori652-750o.svg", alt="VectorI652")
      .my-agents-system-footer
        .my-agents-home-indicator
          img.my-agents-home-indicator1(src="/external/homeindicatori652-rmm-200h.png", alt="HomeIndicatorI652")
    .my-agents-group477
      .my-agents-group14
        img.my-agents-vector18(src="/external/vectori652-4fej.svg", alt="VectorI652")
        img.my-agents-vector19(src="/external/vectori652-ptuw.svg", alt="VectorI652")
        img.my-agents-vector20(src="/external/vectori652-5zw9.svg", alt="VectorI652")
        img.my-agents-vector21(src="/external/vectori652-sx9g.svg", alt="VectorI652")
        img.my-agents-vector22(src="/external/vectori652-kdmp.svg", alt="VectorI652")
        img.my-agents-vector23(src="/external/vectori652-ey2h.svg", alt="VectorI652")
      span.my-agents-text12
        span Agents
    .my-agents-navigation
      .my-agents-system-status
        .my-agents-notch
        .my-agents-status-icons
          img.my-agents-network-signal-light(src="/external/networksignallighti652-h5qe.svg", alt="NetworkSignalLightI652")
          img.my-agents-wi-fi-signal-light(src="/external/wifisignallighti652-r2hc.svg", alt="WiFiSignalLightI652")
          .my-agents-battery-light
            img.my-agents-rectangle23(src="/external/rectangle23i652-o5ia.svg", alt="Rectangle23I652")
            img.my-agents-rectangle2-stroke(src="/external/rectangle21strokei652-0x0n.svg", alt="Rectangle21StrokeI652")
            img.my-agents-rectangle20(src="/external/rectangle20i652-05w-200h.png", alt="Rectangle20I652")
        .my-agents-indicator
        .my-agents-time-light
          img.my-agents-svg941(src="/external/svg941i652-vnd2.svg", alt="SVG941I652")
      .my-agents-navigation1
        .my-agents-component-elements
          button.my-agents-button-icon
            .my-agents-setting21
              .my-agents-setting22
                .my-agents-group15
                  .my-agents-group16
                    img.interaction1-vector(src="/external/vectori652-ycl.svg", alt="VectorI652")
                    img.interaction1-vector01(src="/external/vectori652-djz.svg", alt="VectorI652")
                    img.interaction1-vector02(src="/external/vectori652-7jrq.svg", alt="VectorI652")
        .my-agents-component-elements2
          button.my-agents-button-icon1(@click='goPage("notify")')
            .my-agents-notificationbing1
              .my-agents-notificationbing2
                .my-agents-group17
                  .my-agents-group18
                    img.my-agents-vector26(src="/external/vectori652-68a.svg", alt="VectorI652")
                    img.my-agents-vector27(src="/external/vectori652-3ojn.svg", alt="VectorI652")
                    img.my-agents-vector28(src="/external/vectori652-lpfz.svg", alt="VectorI652")
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
      isFlipped: false
    };
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
      showNav: true,
      isFlipped: false
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
      } else if (page === 'notify') {
        this.$router.push({
          path: '/agents/notify'
        })
      } else if (page === 'agents') {
        this.$router.push({
          path: '/agents'
        })
      } else if (page === 'action') {
        this.$router.push({
          path: '/action'
        })
      } else if (page === 'town') {
        this.$router.push({
          path: '/town'
        })
      } 
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
.my-agents-thumb-image div {
  position: relative;
}

.my-agents-thumb-image div span.wrapper {
  position: absolute;
  height: 468px;
  width: 264px;
  color: white;
}

.my-agents-thumb-image div span.wrapper span.wrapper-text {
  position: absolute;
  top: 30%;
  left: 60%;
  transform: translate(-50%, -50%);
  font-size: 22px;
  font-weight: bold;
  text-align: left;
  width: 100%;
}

img.my-agents-rectangle11 {
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.6s, visibility 0.6s;
  opacity: 1;
  visibility: visible;
}

.flipped img.my-agents-rectangle11:first-child {
  opacity: 1;
}






.my-agents-my-agents {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: var(--dl-color-dark_background-200);
}
.my-agents-group463 {
  top: 190.41571044921875px;
  left: -260px;
  width: 264px;
  height: 468px;
  display: flex;
  overflow: hidden;
  position: absolute;
  box-shadow: 0px 30px 40px 0px rgba(0, 0, 0, 0.15000000596046448) ;
  align-items: flex-start;
  flex-shrink: 0;
  border-style: solid;
  border-width: 2px;
  border-radius: 24px;
}
.my-agents-rectangle1 {
  top: 0px;
  left: 0px;
  width: 264px;
  height: 468px;
  position: absolute;
  flex-grow: 1;
  box-sizing: content-box;
}
.my-agents-frame1 {
  top: 382px;
  left: 0px;
  width: 264px;
  display: flex;
  padding: 12px 16px 12px 12px;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  background-color: var(--dl-color-default-overlay);
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6000000238418579) 100%);
}
.my-agents-text {
  color: var(--dl-color-light_element-1100);
  height: auto;
  font-size: 40px;
  align-self: stretch;
  font-style: Regular;
  text-align: left;
  font-family: Gochi Hand;
  font-weight: 400;
  line-height: 40px;
  font-stretch: normal;
  text-decoration: none;
}
.my-agents-frame3 {
  gap: 6px;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.my-agents-frame11 {
  gap: 8px;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.my-agents-location2 {
  width: 20px;
  height: 20px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.my-agents-group {
  top: 1.666664958000183px;
  left: 2.8143701553344727px;
  width: 14.371233940124512px;
  height: 16.662660598754883px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.my-agents-group01 {
  top: 0px;
  left: 0px;
  width: 14.371233940124512px;
  height: 16.662660598754883px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.my-agents-vector {
  top: 4.3250017166137695px;
  left: 4.585629940032959px;
  width: 5px;
  height: 5px;
  position: absolute;
}
.my-agents-vector01 {
  top: 0px;
  left: 0px;
  width: 14px;
  height: 17px;
  position: absolute;
}
.my-agents-text02 {
  color: var(--dl-color-light_element-1100);
  height: auto;
  flex-grow: 1;
  text-align: left;
  line-height: 22px;
}
.my-agents-thumb-image {
  top: 224px;
  left: 56.0029296875px;
  width: 264px;
  height: 468px;
  display: flex;
  overflow: hidden;
  position: absolute;
  box-shadow: 0px 30px 40px 0px rgba(0, 0, 0, 0.15000000596046448) ;
  align-items: flex-start;
  flex-shrink: 0;
  border-style: solid;
  border-width: 2px;
  border-radius: 24px;
}
.my-agents-rectangle11 {
  top: 0px;
  left: 0px;
  width: 264px;
  height: 468px;
  position: absolute;
  flex-grow: 1;
  box-sizing: content-box;
}
.my-agents-frame12 {
  top: 382px;
  left: 0px;
  width: 264px;
  display: flex;
  padding: 12px 16px 12px 12px;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  background-color: var(--dl-color-default-overlay);
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6000000238418579) 100%);
}
.my-agents-text04 {
  color: var(--dl-color-light_element-1100);
  height: auto;
  font-size: 30px;
  align-self: stretch;
  font-style: Regular;
  text-align: left;
  font-family: Noto Sans;
  font-weight: 400;
  line-height: 40px;
  font-stretch: normal;
  text-decoration: none;
}
.my-agents-frame31 {
  gap: 6px;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.my-agents-frame13 {
  gap: 8px;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.my-agents-location21 {
  width: 20px;
  height: 20px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.my-agents-group02 {
  top: 1.666664958000183px;
  left: 2.8143701553344727px;
  width: 14.371233940124512px;
  height: 16.662660598754883px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.my-agents-group03 {
  top: 0px;
  left: 0px;
  width: 14.371233940124512px;
  height: 16.662660598754883px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.my-agents-vector02 {
  top: 4.3250017166137695px;
  left: 4.585629940032959px;
  width: 5px;
  height: 5px;
  position: absolute;
}
.my-agents-vector03 {
  top: 0px;
  left: 0px;
  width: 14px;
  height: 17px;
  position: absolute;
}
.my-agents-text06 {
  color: var(--dl-color-light_element-1100);
  height: auto;
  flex-grow: 1;
  font-size: 16px;
  font-style: Medium;
  text-align: left;
  font-family: Noto Sans;
  font-weight: 500;
  line-height: 22px;
  font-stretch: normal;
  text-decoration: none;
}
.my-agents-group462 {
  top: 172.41571044921875px;
  left: 372.64892578125px;
  width: 264px;
  height: 468px;
  display: flex;
  overflow: hidden;
  position: absolute;
  box-shadow: 0px 30px 40px 0px rgba(0, 0, 0, 0.15000000596046448) ;
  align-items: flex-start;
  flex-shrink: 0;
  border-style: solid;
  border-width: 2px;
  border-radius: 24px;
}
.my-agents-rectangle12 {
  top: 0px;
  left: 0px;
  width: 264px;
  height: 468px;
  position: absolute;
  flex-grow: 1;
  box-sizing: content-box;
}
.my-agents-frame14 {
  top: 382px;
  left: 0px;
  width: 264px;
  display: flex;
  padding: 12px 16px 12px 12px;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  background-color: var(--dl-color-default-overlay);
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6000000238418579) 100%);
}
.my-agents-text08 {
  color: var(--dl-color-light_element-1100);
  height: auto;
  font-size: 40px;
  align-self: stretch;
  font-style: Regular;
  text-align: left;
  font-family: Gochi Hand;
  font-weight: 400;
  line-height: 40px;
  font-stretch: normal;
  text-decoration: none;
}
.my-agents-frame32 {
  gap: 6px;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.my-agents-frame15 {
  gap: 8px;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.my-agents-location22 {
  width: 20px;
  height: 20px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.my-agents-group04 {
  top: 1.666664958000183px;
  left: 2.8143701553344727px;
  width: 14.371233940124512px;
  height: 16.662660598754883px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.my-agents-group05 {
  top: 0px;
  left: 0px;
  width: 14.371233940124512px;
  height: 16.662660598754883px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.my-agents-vector04 {
  top: 4.3250017166137695px;
  left: 4.585629940032959px;
  width: 5px;
  height: 5px;
  position: absolute;
}
.my-agents-vector05 {
  top: 0px;
  left: 0px;
  width: 14px;
  height: 17px;
  position: absolute;
}
.my-agents-text10 {
  color: var(--dl-color-light_element-1100);
  height: auto;
  flex-grow: 1;
  text-align: left;
  line-height: 22px;
}
.my-agents-bottom-tabbar {
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
}
.my-agents-tab {
  gap: 11px;
  display: flex;
  padding: 0 32px;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
}
.my-agents-component-tab-bar {
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
.my-agents-discover1 {
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
.my-agents-group06 {
  top: 2.3362927436828613px;
  left: 2.3369152545928955px;
  width: 23.326168060302734px;
  height: 23.330371856689453px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.my-agents-group07 {
  top: 0px;
  left: 0px;
  width: 23.326168060302734px;
  height: 23.330371856689453px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.my-agents-vector06 {
  top: 0px;
  left: 0px;
  width: 25px;
  height: 25px;
  position: absolute;
  opacity: 0.40;
}
.my-agents-vector07 {
  top: 7.137040615081787px;
  left: 7.136417865753174px;
  width: 9px;
  height: 9px;
  position: absolute;
}
.my-agents-component-tab-bar1 {
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
.my-agents-ticket1 {
  top: 18px;
  left: 27px;
  width: 28px;
  height: 28px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.my-agents-group08 {
  top: 3.7916667461395264px;
  left: 1.4583332538604736px;
  width: 25.08333396911621px;
  height: 20.41666603088379px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.my-agents-group09 {
  top: 0px;
  left: 0px;
  width: 25.08333396911621px;
  height: 20.41666603088379px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.my-agents-vector08 {
  top: -2px;
  left: 0px;
  width: 25px;
  height: 25px;
  position: absolute;
  opacity: 0.40;
}
.my-agents-vector09 {
  top: 0px;
  left: 9.333333015441895px;
  width: 2px;
  height: 5px;
  position: absolute;
}
.my-agents-vector10 {
  top: 7.1866655349731445px;
  left: 9.333333015441895px;
  width: 2px;
  height: 6px;
  position: absolute;
}
.my-agents-vector11 {
  top: 15.750000953674316px;
  left: 9.333333015441895px;
  width: 2px;
  height: 5px;
  position: absolute;
}
.my-agents-component-tab-bar2 {
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
.my-agents-messages11 {
  top: 18px;
  left: 24px;
  width: 28px;
  height: 28px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.my-agents-group10 {
  top: 1.46999990940094px;
  left: 1.4583332538604736px;
  width: 25.08333396911621px;
  height: 25.071666717529297px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.my-agents-group11 {
  top: 0px;
  left: 0px;
  width: 25.08333396911621px;
  height: 25.071666717529297px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.my-agents-vector12 {
  top: 2px;
  left: 0px;
  width: 25px;
  height: 25px;
  position: absolute;
  opacity: 0.40;
}
.my-agents-vector13 {
  top: 4.748505115509033px;
  left: 7.65610408782959px;
  width: 17px;
  height: 20px;
  position: absolute;
}
.my-agents-vector14 {
  top: 8.154999732971191px;
  left: 5.8333330154418945px;
  width: 8px;
  height: 2px;
  position: absolute;
}
.my-agents-component-tab-bar3 {
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
.my-agents-profilecircle2 {
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
.my-agents-group12 {
  top: 1.4583332538604736px;
  left: 1.4583332538604736px;
  width: 25.08333396911621px;
  height: 25.083335876464844px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.my-agents-group13 {
  top: 0px;
  left: 0px;
  width: 25.08333396911621px;
  height: 25.083335876464844px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.my-agents-vector15 {
  top: 4.935000419616699px;
  left: 7.85166597366333px;
  width: 9px;
  height: 9px;
  position: absolute;
}
.my-agents-vector16 {
  top: 15.685833930969238px;
  left: 3.799034833908081px;
  width: 17px;
  height: 9px;
  position: absolute;
}
.my-agents-vector17 {
  top: 0px;
  left: 0px;
  width: 25px;
  height: 25px;
  position: absolute;
}
.my-agents-system-footer {
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.my-agents-home-indicator {
  width: 375px;
  height: 34px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.my-agents-home-indicator1 {
  top: 15.5px;
  left: 148px;
  width: 80px;
  height: 3px;
  position: absolute;
  border-radius: 100px;
}
.my-agents-group477 {
  top: 128px;
  left: 90px;
  width: 195.99990844726562px;
  height: 71.99967193603516px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.my-agents-group14 {
  top: 0px;
  left: 0px;
  width: 195.99990844726562px;
  height: 71.99967193603516px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.my-agents-vector18 {
  top: 0px;
  left: 34.6688346862793px;
  width: 123px;
  height: 19px;
  opacity: 0.70;
  position: absolute;
}
.my-agents-vector19 {
  top: 1.18212890625px;
  left: 0.015038604848086834px;
  width: 158px;
  height: 43px;
  opacity: 0.70;
  position: absolute;
}
.my-agents-vector20 {
  top: 26.18798828125px;
  left: 0px;
  width: 186px;
  height: 26px;
  opacity: 0.70;
  position: absolute;
}
.my-agents-vector21 {
  top: 32.8974609375px;
  left: 17.5139102935791px;
  width: 169px;
  height: 31px;
  opacity: 0.70;
  position: absolute;
}
.my-agents-vector22 {
  top: 42.95751953125px;
  left: 39.30363464355469px;
  width: 124px;
  height: 29px;
  opacity: 0.70;
  position: absolute;
}
.my-agents-vector23 {
  top: 12.21533203125px;
  left: 75.33152770996094px;
  width: 121px;
  height: 24px;
  opacity: 0.70;
  position: absolute;
}
.my-agents-text12 {
  top: 12px;
  left: 31px;
  color: var(--dl-color-dark_one-100);
  height: auto;
  position: absolute;
  font-size: 48px;
  font-style: Regular;
  text-align: center;
  font-family: Gochi Hand;
  font-weight: 400;
  line-height: 48px;
  font-stretch: normal;
  text-decoration: none;
}
.my-agents-navigation {
  top: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  position: fixed;
  align-items: flex-start;
  flex-direction: column;
}
.my-agents-system-status {
  width: 375px;
  height: 44px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.my-agents-notch {
  gap: 14px;
  top: 0px;
  left: 0px;
  width: 375px;
  height: 30px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.my-agents-status-icons {
  gap: 4px;
  top: 16px;
  left: 292px;
  width: 69px;
  display: flex;
  position: absolute;
  align-items: center;
}
.my-agents-network-signal-light {
  width: 20px;
  height: 14px;
}
.my-agents-wi-fi-signal-light {
  width: 16px;
  height: 14px;
}
.my-agents-battery-light {
  width: 25px;
  height: 14px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.my-agents-rectangle23 {
  top: 5px;
  left: 24px;
  width: 1px;
  height: 4px;
  opacity: 0.40;
  position: absolute;
}
.my-agents-rectangle2-stroke {
  top: 1px;
  left: 0px;
  width: 23px;
  height: 12px;
  opacity: 0.40;
  position: absolute;
}
.my-agents-rectangle20 {
  top: 3px;
  left: 2px;
  width: 19px;
  height: 8px;
  position: absolute;
  border-radius: 1px;
}
.my-agents-indicator {
  top: 8px;
  left: 298px;
  width: 6px;
  height: 6px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.my-agents-time-light {
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
.my-agents-svg941 {
  top: 3px;
  left: 11px;
  width: 33px;
  height: 15px;
  position: absolute;
}
.my-agents-navigation1 {
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
.my-agents-component-elements {
  gap: 10px;
  top: 8px;
  left: 16px;
  width: 40px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: center;
}
.my-agents-button-icon {
  border: none;
  gap: 10px;
  display: flex;
  padding: 8px;
  align-items: center;
  border-radius: 48px;
  justify-content: center;
  background-color: var(--dl-color-dark_background-100);
}
.my-agents-setting21 {
  width: 24px;
  height: 24px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.my-agents-setting22 {
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
.my-agents-group15 {
  top: 1.812213659286499px;
  left: 1.25px;
  width: 21.520000457763672px;
  height: 20.381864547729492px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.my-agents-group16 {
  top: 0px;
  left: 0px;
  width: 21.520000457763672px;
  height: 20.381864547729492px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.my-agents-vector24 {
  top: 6.437786102294922px;
  left: 7px;
  width: 7px;
  height: 7px;
  position: absolute;
}
.my-agents-vector25 {
  top: 0px;
  left: 0px;
  width: 22px;
  height: 20px;
  position: absolute;
}
.my-agents-component-elements1 {
  top: 8px;
  left: 70px;
  width: 235px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
}
.my-agents-segmented {
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
.my-agents-bar-segmented-variant3 {
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: flex-start;
  border-radius: 32px;
  background-color: var(--dl-color-dark_background-100);
}
.my-agents-button {
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
.my-agents-text14 {
  color: var(--dl-color-dark_element-1100);
  height: auto;
  text-align: center;
  line-height: 18px;
}
.my-agents-button1 {
  gap: 10px;
  display: flex;
  padding: 13px 32px;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  border-radius: 28px;
  justify-content: center;
}
.my-agents-text16 {
  color: var(--dl-color-dark_element-100);
  height: auto;
  text-align: center;
  line-height: 18px;
}
.my-agents-component-elements2 {
  top: 12px;
  right: 30px;
  width: 40px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.my-agents-button-icon1 {
  border: none;
  gap: 10px;
  display: flex;
  padding: 8px;
  align-items: center;
  border-radius: 48px;
  justify-content: center;
  background-color: var(--dl-color-dark_background-100);
}
.my-agents-notificationbing1 {
  width: 24px;
  height: 24px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.my-agents-notificationbing2 {
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
.my-agents-group17 {
  top: 1.2400000095367432px;
  left: 2.3507189750671387px;
  width: 19.304088592529297px;
  height: 21.65999984741211px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.my-agents-group18 {
  top: 0px;
  left: 0px;
  width: 19.304088592529297px;
  height: 21.65999984741211px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.my-agents-vector26 {
  top: 4.449999809265137px;
  left: 8.899280548095703px;
  width: 1px;
  height: 5px;
  position: absolute;
}
.my-agents-vector27 {
  top: 0px;
  left: 0px;
  width: 19px;
  height: 19px;
  position: absolute;
}
.my-agents-vector28 {
  top: 17.579999923706055px;
  left: 5.569281101226807px;
  width: 8px;
  height: 4px;
  position: absolute;
}

</style>