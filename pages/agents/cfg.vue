<template lang="pug">
.weui-content
  van-nav-bar(left-text="返回", left-arrow, @click-left="onClickLeft")
  .swipe-container
    van-swipe(:autoplay="3000" ref="swipe")
      van-swipe-item(v-for="(item, index) in agents", :key="index")
        img.swipe-img(:src="item.img")
        .item-info
          .name Name: {{ item.name }}
          .Bio Bio: 
      template(#indicator)
        .custom-indicator
    .control-button.control-button-left(@click="prevSlide")
      i.van-icon.van-icon-arrow-left.van-icon-custom-color
    .control-button.control-button-right(@click="nextSlide")
      i.van-icon.van-icon-arrow.van-icon-custom-color
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
      showNav: false
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
<style lang='sass' scoped>
.swipe-container
  margin-top: 200px
.swipe-img
  height: 240px
  width: auto;
.weui-content
  display: flex;
  flex-direction: column;
  max-width: 640px;
  margin: 0 auto;
  height: 100vh
.item-info
  font-size: 30px
  font-weight: bold
  padding: 30px 0
  text-align: center
.nav-btn 
  padding-left: 50px
  padding-top: 30px
.swipe-container
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
.control-button
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  cursor: pointer;
.control-button-left
  left: 0
.control-button-right
  right: 0;
.van-icon-custom-color
  color: #999
  font-size: 20px
  font-weight: bold
.custom-indicator
  display: none;
.item-btns 
  display: flex;
  justify-content: center;
.item-btn
  margin: 5px
  background-color: #999
  border-color: #999
</style>