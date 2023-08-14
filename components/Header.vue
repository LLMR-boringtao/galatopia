<template lang="pug">
header
  button.el-button.el-button--primary.is-round(type='button', @click='logout') 退出
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    methods: {
      async logout () {
        await this.$store.dispatch('logout')
        this.$router.push('/login')
      }
    },
    computed: mapState([
      'user'
    ])
  }
</script>

<style lang='sass'>
  header
    background-color: #f5f5f5
    line-height: 60px
    height: 60px
    text-align: right
    font-size: 12px
</style>
