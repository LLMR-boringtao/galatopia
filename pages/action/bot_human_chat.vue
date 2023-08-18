<template lang="pug">
.interaction2-container
  .interaction2-interaction2
    img.interaction2-rectangle84(src="/external/rectangle84i652-gzhi-400w.png", alt="Rectangle84I652")
    .chats
      .cents
        .interaction2-image(@click="goPage('user')")
          img.interaction2-rectangle26(src="/external/rectangle26i652-g2u2-200h.png", alt="Rectangle26I652")
        .interaction2-frame498
          .interaction2-frame432
            span.interaction2-text.ButtonSmall
              span
                span Start conversation!
    .interaction2-navigation
      .interaction2-system-status
        .interaction2-notch
        .interaction2-status-icons
          img.interaction2-network-signal-light(src="/external/networksignallighti652-wkxo.svg", alt="NetworkSignalLightI652")
          img.interaction2-wi-fi-signal-light(src="/external/wifisignallighti652-84z.svg", alt="WiFiSignalLightI652")
          .interaction2-battery-light
            img.interaction2-rectangle23(src="/external/rectangle23i652-ysm8.svg", alt="Rectangle23I652")
            img.interaction2-rectangle2-stroke(src="/external/rectangle21strokei652-q2qk.svg", alt="Rectangle21StrokeI652")
            img.interaction2-rectangle20(src="/external/rectangle20i652-2ibo-200h.png", alt="Rectangle20I652")
        .interaction2-indicator
        .interaction2-time-light
          img.interaction2-svg941(src="/external/svg941i652-xhab.svg", alt="SVG941I652")
      .interaction2-navigation1
        .interaction2-component-elements
          button.interaction2-button-icon(@click="goPage('index_matched')")
            .interaction2-iconarrowleft
              img.interaction2-stroke1(src="/external/stroke1i652-gx98.svg", alt="Stroke1I652")
        //- .interaction2-component-elements1
        //-   span.interaction2-text09.ButtonLarge
        //-     span Eleanor Pena
        .interaction2-component-elements2
          button.interaction2-button-icon1
            .interaction2-call1
              .interaction2-group04
                .interaction2-group05
                  .interaction2-iconly-curved-call
                    .interaction2-call
                      img.interaction2-stroke-stroke(src="/external/stroke1strokei652-ag5f.svg", alt="Stroke1StrokeI652")
          //- .interaction2-component3
          //-   .interaction2-video2
          //-     img.interaction2-union(src="/external/unioni652-88vi.svg", alt="UnionI652")

    .interaction2-bottom-input
      .interaction2-frame4361
        .interaction2-emojibeamingfacewithsmilingeyesemoji
          img.interaction2-beamingfacewithsmilingeyesemoji(src="/external/beamingfacewithsmilingeyesemojii652-y3id-200h.png", alt="beamingfacewithsmilingeyesemojiI652")
        .interaction2-emojiconfoundedfaceemoji
          img.interaction2-confoundedfaceemoji(src="/external/confoundedfaceemojii652-kfh8-200h.png", alt="confoundedfaceemojiI652")
        .interaction2-emojidistraughtfaceemoji
          img.interaction2-distraughtfaceemoji(src="/external/distraughtfaceemojii652-ubi-200h.png", alt="distraughtfaceemojiI652")
        .interaction2-emojifaceblowingakissemoji
          img.interaction2-faceblowingakissemoji(src="/external/faceblowingakissemojii652-n7q-200h.png", alt="faceblowingakissemojiI652")
        .interaction2-emojifearfulfaceemoji
          img.interaction2-fearfulfaceemoji(src="/external/fearfulfaceemojii652-b2kw-200h.png", alt="fearfulfaceemojiI652")
        .interaction2-emojifrowningfacewithopenmouthemoji
          img.interaction2-frowningfacewithopenmouthemoji(src="/external/frowningfacewithopenmouthemojii652-h5yl-200h.png", alt="frowningfacewithopenmouthemojiI652")
        .interaction2-emojigrinningfacewithsweatemoji
          img.interaction2-grinningfacewithsweatemoji(src="/external/grinningfacewithsweatemojii652-vn9p-200h.png", alt="grinningfacewithsweatemojiI652")
      .interaction2-frame73
        .interaction2-input-frame82
          input.chat-input(type='text', placeholder='Type a message...', v-model="composedMessage")
        button.send-btn(@click="sendMessage")
          .interaction2-send21
            .interaction2-group08
              .interaction2-group09
                img.interaction2-vector5(src="/external/vectori652-hgl.svg", alt="VectorI652")
      .interaction2-system-footer
        .interaction2-home-indicator
          img.interaction2-home-indicator1(src="/external/homeindicatori652-rawd-200h.png", alt="HomeIndicatorI652")

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
      title: 'Action page'
    }
  },

  data() {
    return {
      messages: [],
      composedMessage: "",
      history: []
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
    onClickLeft() {
      // 返回上一页的逻辑
      this.$router.go(-1)
    },
    goPage (page, userID=1) {
      if (page === 'user') {
        this.$router.push('/action/user')
      } else if (page === 'chat') {
        this.$router.push('/action/' + userID)
      } else if (page === 'bot_chat') {
        this.$router.push('/action/bot_chat')
      } else if (page === 'match') {
        this.$router.push('/action/match')
      } else if (page === 'edit') {
        this.$router.push('/edit')
      } else if (page ==='index') {
        this.$router.push('/')
      } else if (page === 'action') {
        this.$router.push('/action')
      } else if (page === 'agent') {
        this.$router.push('/agents')
      } else if (page === 'town') {
        this.$router.push('/town')
      } else if (page === 'index_matched') {
        this.$router.push('/action/index_matched')
      }
    },
    async sendMessage() {
      const user = this.$store.state.user
      if (this.composedMessage.trim() !== "") {
        const res = await axios({
          url: '/user/chat',
          method: 'post',
          data: {
            question: user.name + ':' + this.composedMessage,
            history: this.history,
            url: 'https://3a9855754f28.ngrok.app/chat'
          }
        })
        console.log(res)
        if (res.data.success) {
          this.messages = []
          this.history = res.data.data.history
          const history =  res.data.data.history
          for (let item of history) {
            this.messages.push({ type: "sent", content: item[0] });
            this.messages.push({ type: "received", content: item[1] });
          }
          this.composedMessage = ""
        }
        // this.messages.push({ type: "sent", content: this.composedMessage });
        // this.composedMessage = "";
      }
    },
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
.interaction2-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.interaction2-interaction2 {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: var(--dl-color-dark_background-100);
}

.chat-input {
  width: 100%;
}
.interaction2-rectangle84 {
  top: 100px;
  left: 0px;
  width: 100%;
  height: 566px;
  opacity: 0.80;
  position: absolute;
  border-radius: 24px;
}
/* .chats {
  gap: 20px;
  top: 120px;
  left: 0px;
  width: 100%;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
} */

.chats {
  gap: 20px;
  top: 120px;
  left: 0px;
  width: 100%;
  height: calc(100vh - 140px); /* Assuming a top offset of 120px and 20px for bottom spacing */
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  overflow-y: auto;
}
.cents {
  gap: 6px;
  width: 100%;
  display: flex;
  padding: 0 16px;
  align-items: flex-start;
  flex-shrink: 0;
  box-sizing: border-box;
}
.interaction2-image {
  width: 32px;
  height: 32px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: rgba(243, 243, 243, 1);
  border-style: solid;
  border-width: 2px;
  border-radius: 32px;
}
.interaction2-rectangle26 {
  top: 0px;
  left: 0px;
  width: 32px;
  height: 32px;
  position: absolute;
  border-radius: 8px;
}
.interaction2-frame498 {
  gap: 8px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-end;
}
.interaction2-frame432 {
  gap: 12px;
  width: 230px;
  display: flex;
  padding: 16px;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 4px 32px 32px;
  flex-direction: column;
  background-color: rgba(255, 156, 203, 1);
}

.interaction2-frame432 img {
  width: 100%;
  padding-top: 10px;
}

.interaction2-text {
  color: var(--dl-color-light_element-1100);
  height: auto;
  align-self: stretch;
  text-align: left;
  line-height: 18px;
}
.interaction2-frame436 {
  gap: 8px;
  height: 115px;
  display: flex;
  align-self: stretch;
  box-sizing: content-box;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 16px;
  flex-direction: column;
}
.interaction2-frame458 {
  gap: 8px;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.interaction2-frame4981 {
  gap: 12px;
  width: 64px;
  height: 40px;
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
}
.interaction2-frame494 {
  gap: 6px;
  display: flex;
  padding: 8px 24px;
  flex-grow: 1;
  align-self: stretch;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05000000074505806) ;
  align-items: center;
  border-radius: 57px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-light_background-100);
}
.interaction2-image1335 {
  width: 32px;
  height: 32px;
}
.receive {
  gap: 6px;
  width: 100%;
  display: flex;
  padding: 0 16px;
  align-items: flex-start;
  flex-shrink: 0;
  justify-content: flex-end;
  box-sizing: border-box;
}
.interaction2-frame4321 {
  gap: 10px;
  width: 230px;
  display: flex;
  padding: 16px;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 32px 4px 32px 32px;
  flex-direction: column;
  background-color: var(--dl-color-dark_background-100);
}
.interaction2-text05 {
  color: var(--dl-color-dark_element-200);
  height: auto;
  align-self: stretch;
  text-align: left;
  line-height: 18px;
}
.interaction2-image1 {
  width: 32px;
  height: 32px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 2px;
  border-radius: 32px;
}
.interaction2-rectangle261 {
  top: 0px;
  left: 0px;
  width: 32px;
  height: 32px;
  position: absolute;
  flex-grow: 1;
  box-sizing: content-box;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 2px;
}
.interaction2-frame443 {
  gap: 6px;
  width: 100%;
  display: flex;
  padding: 0 16px;
  align-items: flex-start;
  flex-shrink: 0;
}
.interaction2-image2 {
  width: 40px;
  height: 40px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: rgba(243, 243, 243, 1);
  border-style: solid;
  border-width: 2px;
  border-radius: 32px;
}
.interaction2-rectangle262 {
  top: 0px;
  left: 0px;
  width: 40px;
  height: 40px;
  position: absolute;
  border-radius: 8px;
}
.interaction2-frame4322 {
  gap: 10px;
  width: 230px;
  height: 68px;
  display: flex;
  padding: 16px;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 4px 32px 32px;
  background-color: rgba(255, 156, 203, 1);
}
.interaction2-group515 {
  top: 12px;
  left: 12px;
  width: 44px;
  height: 44px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.interaction2-ellipse25 {
  top: 0px;
  left: 0px;
  width: 44px;
  height: 44px;
  position: absolute;
}
.interaction2-pause1 {
  top: 12px;
  left: 12px;
  width: 20px;
  height: 20px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.interaction2-group {
  top: 2.5px;
  left: 2.5px;
  width: 15.001667022705078px;
  height: 15px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.interaction2-group01 {
  top: 0px;
  left: 0px;
  width: 15.001667022705078px;
  height: 15px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.interaction2-vector {
  top: 0px;
  left: 0px;
  width: 6px;
  height: 15px;
  position: absolute;
}
.interaction2-vector1 {
  top: 0px;
  left: 8.626666069030762px;
  width: 6px;
  height: 15px;
  position: absolute;
}
.interaction2-frame4982 {
  gap: 3px;
  top: 21px;
  left: 68px;
  width: 142px;
  display: flex;
  position: absolute;
  align-items: center;
}
.interaction2-rectangle91 {
  width: 2px;
  height: 25px;
  border-radius: 17px;
}
.interaction2-rectangle92 {
  width: 2px;
  height: 13px;
  border-radius: 17px;
}
.interaction2-rectangle93 {
  width: 2px;
  height: 17px;
  border-radius: 17px;
}
.interaction2-rectangle94 {
  width: 2px;
  height: 11px;
  border-radius: 17px;
}
.interaction2-rectangle96 {
  width: 2px;
  height: 25px;
  border-radius: 17px;
}
.interaction2-rectangle97 {
  width: 2px;
  height: 25px;
  border-radius: 17px;
}
.interaction2-rectangle98 {
  width: 2px;
  height: 20px;
  border-radius: 17px;
}
.interaction2-rectangle99 {
  width: 2px;
  height: 25px;
  border-radius: 17px;
}
.interaction2-rectangle100 {
  width: 2px;
  height: 25px;
  border-radius: 17px;
}
.interaction2-rectangle101 {
  width: 2px;
  height: 13px;
  border-radius: 17px;
}
.interaction2-rectangle102 {
  width: 2px;
  height: 19px;
  border-radius: 17px;
}
.interaction2-rectangle103 {
  width: 2px;
  height: 15px;
  border-radius: 17px;
}
.interaction2-rectangle104 {
  width: 2px;
  height: 25px;
  border-radius: 17px;
}
.interaction2-rectangle105 {
  width: 2px;
  height: 17px;
  border-radius: 17px;
}
.interaction2-rectangle106 {
  width: 2px;
  height: 18px;
  opacity: 0.30;
  border-radius: 17px;
}
.interaction2-rectangle107 {
  width: 2px;
  height: 19px;
  opacity: 0.30;
  border-radius: 17px;
}
.interaction2-rectangle108 {
  width: 2px;
  height: 25px;
  opacity: 0.30;
  border-radius: 17px;
}
.interaction2-rectangle109 {
  width: 2px;
  height: 17px;
  opacity: 0.30;
  border-radius: 17px;
}
.interaction2-rectangle114 {
  width: 2px;
  height: 17px;
  opacity: 0.30;
  border-radius: 17px;
}
.interaction2-rectangle110 {
  width: 2px;
  height: 25px;
  opacity: 0.30;
  border-radius: 17px;
}
.interaction2-rectangle115 {
  width: 2px;
  height: 25px;
  opacity: 0.30;
  border-radius: 17px;
}
.interaction2-rectangle111 {
  width: 2px;
  height: 15px;
  opacity: 0.30;
  border-radius: 17px;
}
.interaction2-rectangle116 {
  width: 2px;
  height: 15px;
  opacity: 0.30;
  border-radius: 17px;
}
.interaction2-rectangle112 {
  width: 2px;
  height: 20px;
  opacity: 0.30;
  border-radius: 17px;
}
.interaction2-rectangle117 {
  width: 2px;
  height: 20px;
  opacity: 0.30;
  border-radius: 17px;
}
.interaction2-rectangle113 {
  width: 2px;
  height: 20px;
  opacity: 0.30;
  border-radius: 17px;
}
.interaction2-rectangle118 {
  width: 2px;
  height: 20px;
  opacity: 0.30;
  border-radius: 17px;
}
.interaction2-rectangle95 {
  width: 2px;
  height: 25px;
  opacity: 0.30;
  border-radius: 17px;
}
.interaction2-rectangle119 {
  width: 2px;
  height: 25px;
  opacity: 0.30;
  border-radius: 17px;
}
.interaction2-frame444 {
  gap: 6px;
  width: 100%;
  display: flex;
  padding: 0 16px;
  align-items: flex-start;
  flex-shrink: 0;
  justify-content: flex-end;
}
.interaction2-frame4323 {
  gap: 10px;
  width: 230px;
  display: flex;
  padding: 16px;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 32px 4px 32px 32px;
  flex-direction: column;
  background-color: var(--dl-color-dark_background-100);
}
.interaction2-text07 {
  color: var(--dl-color-dark_element-200);
  height: auto;
  align-self: stretch;
  text-align: left;
  line-height: 18px;
}
.interaction2-image3 {
  width: 32px;
  height: 32px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 2px;
  border-radius: 32px;
}
.interaction2-rectangle263 {
  top: 0px;
  left: 0px;
  width: 32px;
  height: 32px;
  position: absolute;
  flex-grow: 1;
  box-sizing: content-box;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 2px;
}
.interaction2-navigation {
  top: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
}
.interaction2-system-status {
  width: 100%;
  height: 44px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.interaction2-notch {
  gap: 14px;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 30px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.interaction2-status-icons {
  gap: 4px;
  top: 16px;
  left: 292px;
  width: 69px;
  display: flex;
  position: absolute;
  align-items: center;
}
.interaction2-network-signal-light {
  width: 20px;
  height: 14px;
}
.interaction2-wi-fi-signal-light {
  width: 16px;
  height: 14px;
}
.interaction2-battery-light {
  width: 25px;
  height: 14px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.interaction2-rectangle23 {
  top: 5px;
  left: 24px;
  width: 1px;
  height: 4px;
  opacity: 0.40;
  position: absolute;
}
.interaction2-rectangle2-stroke {
  top: 1px;
  left: 0px;
  width: 23px;
  height: 12px;
  opacity: 0.40;
  position: absolute;
}
.interaction2-rectangle20 {
  top: 3px;
  left: 2px;
  width: 19px;
  height: 8px;
  position: absolute;
  border-radius: 1px;
}
.interaction2-indicator {
  top: 8px;
  left: 298px;
  width: 6px;
  height: 6px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.interaction2-time-light {
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
.interaction2-svg941 {
  top: 3px;
  left: 11px;
  width: 33px;
  height: 15px;
  position: absolute;
}
.interaction2-navigation1 {
  gap: 122px;
  width: 100%;
  height: 56px;
  display: flex;
  padding: 15px 16px;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  justify-content: space-between;
  box-sizing: border-box;
}
.interaction2-component-elements {
  gap: 10px;
  top: 8px;
  left: 16px;
  width: 40px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: center;
}
.interaction2-button-icon {
  border: none;
  gap: 10px;
  display: flex;
  padding: 8px;
  align-items: center;
  border-radius: 48px;
  justify-content: center;
  background-color: var(--dl-color-dark_background-200);
}
.interaction2-iconarrowleft {
  width: 24px;
  height: 24px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.interaction2-arrow-left21 {
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
.interaction2-group02 {
  top: 5px;
  left: 8.5px;
  width: 7px;
  height: 14px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.interaction2-group03 {
  top: 0px;
  left: 0px;
  width: 7px;
  height: 14px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.interaction2-iconly-light-arrow-left2 {
  top: 0px;
  left: 0px;
  width: 7px;
  height: 14px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.interaction2-arrow-left2 {
  top: 0px;
  left: 7px;
  width: 14px;
  height: 7px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.interaction2-stroke1 {
  top: 0px;
  left: 0px;
  width: 20px;
  height: 20px;
  position: absolute;
}
.interaction2-component-elements1 {
  gap: 10px;
  top: 16px;
  left: 134px;
  width: 107px;
  display: flex;
  position: absolute;
  align-items: center;
}
.interaction2-text09 {
  color: var(--dl-color-dark_element-100);
  height: auto;
  text-align: left;
  line-height: 24px;
}
.interaction2-component-elements2 {
  gap: 8px;
  top: 8px;
  right: 16px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.interaction2-button-icon1 {
  border: none;
  gap: 10px;
  display: flex;
  padding: 8px;
  align-items: center;
  border-radius: 48px;
  justify-content: center;
  background-color: var(--dl-color-dark_background-200);
}
.interaction2-call1 {
  width: 24px;
  height: 24px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.interaction2-group04 {
  top: 1.7501673698425293px;
  left: 1.7498594522476196px;
  width: 20.501102447509766px;
  height: 20.49985694885254px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.interaction2-group05 {
  top: 0px;
  left: 0px;
  width: 20.501102447509766px;
  height: 20.49985694885254px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.interaction2-iconly-curved-call {
  top: 0px;
  left: 0px;
  width: 20.501102447509766px;
  height: 20.49985694885254px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.interaction2-call {
  top: 0px;
  left: 0px;
  width: 20.501102447509766px;
  height: 20.49985694885254px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.interaction2-stroke-stroke {
  top: 0px;
  left: 0px;
  width: 21px;
  height: 20px;
  position: absolute;
}
.interaction2-component3 {
  gap: 10px;
  display: flex;
  padding: 8px;
  align-items: center;
  border-radius: 48px;
  justify-content: center;
  background-color: var(--dl-color-dark_background-200);
}
.interaction2-video2 {
  width: 24px;
  height: 24px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.interaction2-union {
  top: 2.830078125px;
  left: 1.25px;
  width: 21px;
  height: 18px;
  position: absolute;
}
.interaction2-bottom-input {
  bottom: 0;
  left: 0px;
  width: 100%;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  background-color: var(--dl-color-dark_background-100);
}
.interaction2-frame4361 {
  gap: 18px;
  width: 100%;
  display: flex;
  padding: 12px 19px 12px 20px;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
  background-color: var(--dl-color-dark_background-100);
  box-sizing: border-box;
}
.interaction2-emojibeamingfacewithsmilingeyesemoji {
  width: 32px;
  height: 32px;
  display: flex;
  position: relative;
  box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.10000000149011612) ;
  align-items: flex-start;
  flex-shrink: 0;
}
.interaction2-beamingfacewithsmilingeyesemoji {
  top: 0px;
  left: 0px;
  width: 32px;
  height: 32px;
  position: absolute;
}
.interaction2-emojiconfoundedfaceemoji {
  width: 32px;
  height: 32px;
  display: flex;
  position: relative;
  box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.10000000149011612) ;
  align-items: flex-start;
  flex-shrink: 0;
}
.interaction2-confoundedfaceemoji {
  top: 0px;
  left: 0px;
  width: 32px;
  height: 32px;
  position: absolute;
}
.interaction2-emojidistraughtfaceemoji {
  width: 32px;
  height: 32px;
  display: flex;
  position: relative;
  box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.10000000149011612) ;
  align-items: flex-start;
  flex-shrink: 0;
}
.interaction2-distraughtfaceemoji {
  top: 0px;
  left: 0px;
  width: 32px;
  height: 32px;
  position: absolute;
}
.interaction2-emojifaceblowingakissemoji {
  width: 32px;
  height: 32px;
  display: flex;
  position: relative;
  box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.10000000149011612) ;
  align-items: flex-start;
  flex-shrink: 0;
}
.interaction2-faceblowingakissemoji {
  top: 0px;
  left: 0px;
  width: 32px;
  height: 32px;
  position: absolute;
}
.interaction2-emojifearfulfaceemoji {
  width: 32px;
  height: 32px;
  display: flex;
  position: relative;
  box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.10000000149011612) ;
  align-items: flex-start;
  flex-shrink: 0;
}
.interaction2-fearfulfaceemoji {
  top: 0px;
  left: 0px;
  width: 32px;
  height: 32px;
  position: absolute;
}
.interaction2-emojifrowningfacewithopenmouthemoji {
  width: 32px;
  height: 32px;
  display: flex;
  position: relative;
  box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.10000000149011612) ;
  align-items: flex-start;
  flex-shrink: 0;
}
.interaction2-frowningfacewithopenmouthemoji {
  top: 0px;
  left: 0px;
  width: 32px;
  height: 32px;
  position: absolute;
}
.interaction2-emojigrinningfacewithsweatemoji {
  width: 32px;
  height: 32px;
  display: flex;
  position: relative;
  box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.10000000149011612) ;
  align-items: flex-start;
  flex-shrink: 0;
}
.interaction2-grinningfacewithsweatemoji {
  top: 0px;
  left: 0px;
  width: 32px;
  height: 32px;
  position: absolute;
}
.interaction2-frame73 {
  gap: 12px;
  width: 100%;
  display: flex;
  padding: 8px 16px;
  overflow: hidden;
  align-items: flex-start;
  flex-shrink: 0;
  box-sizing: border-box;
}
.interaction2-input-frame82 {
  gap: 12px;
  height: 40px;
  display: flex;
  padding: 10px 16px;
  flex-grow: 1;
  align-items: center;
  flex-shrink: 0;
  border-radius: 38px;
  background-color: var(--dl-color-dark_background-200);
}
.interaction2-component-elements3 {
  gap: 10px;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: center;
}
.interaction2-text11 {
  color: var(--dl-color-dark_element-400);
  height: auto;
  text-align: left;
  line-height: 22px;
}

.interaction2-component-elements4 {
  gap: 10px;
  display: flex;
  align-items: flex-start;
}

.interaction2-ghost1 {
  width: 24px;
  height: 24px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.interaction2-group06 {
  top: 1.25px;
  left: 1.2400000095367432px;
  width: 21.5px;
  height: 21.50375747680664px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.interaction2-group07 {
  top: 0px;
  left: 0px;
  width: 21.5px;
  height: 21.50375747680664px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.interaction2-vector2 {
  top: 0px;
  left: 0px;
  width: 21px;
  height: 22px;
  position: absolute;
}
.interaction2-vector3 {
  top: 11.99999713897705px;
  left: 6.009997367858887px;
  width: 10px;
  height: 3px;
  position: absolute;
}
.interaction2-vector4 {
  top: 5px;
  left: 8.010000228881836px;
  width: 5px;
  height: 5px;
  position: absolute;
}
.send-btn {
  margin-top: 10px;
  border: none;
  gap: 10px;
  width: 40px;
  display: flex;
  padding: 8px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 48px;
  justify-content: center;
  background-color: rgba(255, 74, 161, 1);
}
.interaction2-send21 {
  width: 24px;
  height: 24px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.interaction2-group08 {
  top: 3.5634765625px;
  left: 1.5576171875px;
  width: 18.885236740112305px;
  height: 18.879066467285156px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.interaction2-group09 {
  top: 0px;
  left: 0px;
  width: 18.885236740112305px;
  height: 18.879066467285156px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.interaction2-vector5 {
  top: 0px;
  left: 0px;
  width: 19px;
  height: 19px;
  position: absolute;
}
.interaction2-system-footer {
  width: 100%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.interaction2-home-indicator {
  width: 100%;
  height: 34px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.interaction2-home-indicator1 {
  top: 15.5px;
  left: 148px;
  width: 80px;
  height: 3px;
  position: absolute;
  border-radius: 100px;
}
.chat-input {
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
input.chat-input:-internal-autofill-selected {
  -webkit-text-fill-color: #FFFFFF !important;
  transition: background-color 5000s ease-in-out 0s !important;
}
input.chat-input:-webkit-autofill {
  -webkit-text-fill-color: #fff !important;
  transition: background-color 50000s ease-in-out 0s !important;
}
input.chat-input:-internal-autofill-previewed,
input.chat-input:-internal-autofill-selected {
  -webkit-text-fill-color: #fff !important;
  transition: background-color 5000s ease-out 0.5s !important;
}

</style>