<template lang="pug">
.hasLogo
  .site-logo(@click='goHome')
    h3 后台管理
  el-scrollbar
    el-menu(
      :default-active='activeLink'
      text-color='#fff'
      style='min-height: 100vh'
      mode='vertical'
      router=true
      )
      el-menu-item(index='/admin/user') 用户列表
</template>
<script type="text/javascript">
import { mapState } from 'vuex'
export default {
  data () {
    return {
      activeIndex: '0',
      activeLink: null
    }
  },
  computed: {
    ...mapState([
      'user',
      'sidebarOpen'
    ])
  },
  watch: {
    $route (to, from) {
      this.activeLink = to.path;
    }
  },
  mounted: function(){
    this.activeLink = this.$route.path;
  },
  methods: {
    handleGo (item) {
      this.activeIndex = item.key
      this.$router.push(item.link)
    },
    goHome () {
      this.$router.push('/')
    }
  }
}

</script>

<style lang='sass'>
.el-aside
  background-color: #0f1048
.el-menu
  background: #0f1048
.el-menu-item
  &.is-active
    background: #0d0e40
    color: #409EFF
.site-logo
  border-right: solid 1px #e6e6e6
  text-align: center
  padding: 5px 0
  color: #fff
  background: #0d0e40
.el-submenu__title:hover
  background-color: #0d0e40
el-menu-item:focus, .el-menu-item:hover
  background-color: #0d0e40
.el-submenu 
  .el-menu-item
    min-width: auto
</style>
