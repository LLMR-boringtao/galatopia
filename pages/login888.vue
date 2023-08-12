<template lang="pug">
.login.login-with-news-feed
  // BEGIN news-feed
  .news-feed
    .news-image(style='background-image: url(/img/login-bg-16.jpg)')
    .news-caption
  // END news-feed
  // BEGIN login-container
  .login-container
    // BEGIN login-header
    .login-header
      .brand
        span.logo
        b 管理系统
      //- small mona网站管理后台
      //- .icon
      //-   i.fa.fa-sign-in-alt
    // END login-header
    // BEGIN login-content
    .login-content
      el-form.login-form(:model='model', :rules='rules', ref='form', @submit.native.prevent='login')
        el-form-item(prop='name')
          el-input(v-model='model.phone', placeholder='用户名', prefix-icon='el-icon-user')
        el-form-item(prop='password')
          el-input(v-model='model.password', placeholder='密码', type='password', prefix-icon='el-icon-lock')
        el-form-item
          el-button.login-button(:loading='loading', type='primary', native-type='submit', block, style='width: 100%;') 登录
      hr
      p.text-bottom
        | © XiaoMei All Right Reserved 2021
    // END login-content
    // END login-container

</template>

<script>

export default {
  layout: 'login',
  data () {
    return {
      user: {},
			model: {
				phone: '',
				password: ''
			},
			loading: false,
      rules: {
        password: [
          { required: true, message: "缺少密码", trigger: "blur" }
        ]
      }
    }
  },

  methods: {
    resetPassword () {
      this.$router.push({
        path: '/password'
      })
    },
    async login () {
			let valid = await this.$refs.form.validate();
      if (!valid) {
        return;
      }
      let { phone, password } = this.model
      this.loading = true;
      let res = await this.$store.dispatch('login', this.model)
      const user = res.data
			this.loading = false;
      if (res.success) {
        if (user.role === 'admin') {
          this.$router.push('/admin')
        } else if (user.role === 'sellor') {
          this.$router.push('/sellor')
        }
			} else {
				this.$message({
          message: res.err,
					type: 'warning'
        })
			}
    }
  },

  components: {
    
  }
}
</script>
<style lang="sass" scoped>
.align-items-center 
  align-items: center!important
.d-flex 
  display: flex!important
.login.login-with-news-feed
  min-height: 100vh
  width: 100%
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  .news-feed
    position: fixed
    left: 0
    right: 500px
    top: 0
    bottom: 0
    overflow: hidden
    -webkit-transform: translateZ(0)
    -moz-transform: translateZ(0)
    -ms-transform: translateZ(0)
    -o-transform: translateZ(0)
    transform: translateZ(0)
    .news-image 
      position: absolute
      bottom: 0
      left: 0
      right: 0
      top: 0
      background-size: cover
      background-repeat: no-repeat
      background-position: center
    .news-caption 
      color: rgba(255,255,255,.85)
      position: absolute
      bottom: 0
      left: 0
      right: 0
      padding: 60px 60px 45px
      font-size: 18px
      letter-spacing: .25px
      z-index: 20
      font-weight: 300
      background: -webkit-linear-gradient(to bottom,rgba(0,0,0,0) 0,#000 100%)
      background: -moz-linear-gradient(to bottom,rgba(0,0,0,0) 0,#000 100%)
      background: -o-linear-gradient(to bottom,rgba(0,0,0,0) 0,#000 100%)
      background: linear-gradient(to bottom,rgba(0,0,0,0) 0,#000 100%)
  .login-container
    width: 500px
    background: #fff
    padding: 60px
    min-height: 100vh
    box-sizing: border-box
    margin-left: auto
    display: flex
    -webkit-box-orient: vertical
    -webkit-box-direction: normal
    -ms-flex-direction: column
    flex-direction: column
    -webkit-box-pack: center
    -ms-flex-pack: center
    justify-content: center
    .login-header
      position: relative
      .brand
        padding: 0
        font-size: 28px
        color: #151567
        .logo
          border: 14px solid transparent;
          border-color: transparent rgba(255,255,255,.15) rgba(255,255,255,.3)
          background-color: #0f1048
          width: 28px
          height: 28px
          position: relative
          font-size: 0
          margin-right: 10px
          top: -11px
          border-radius: 6px
    .login-content
      padding-top: 30px
      .text-bottom
        font-size: 12px
        text-align: center
</style>