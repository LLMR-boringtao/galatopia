<template lang="pug">
van-tabbar(route='', v-model='active', active-color='#f44')
  van-tabbar-item(replace='', to='/', icon='home-o')
    | 首页
  van-tabbar-item(replace='', to='/cart', icon='cart-o')
    | 购物车
  van-tabbar-item(replace='', to='/user', icon='manager-o')
    | 我的
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      active: 0,
      cartCount: 0
    }
  },

  computed: {
    ...mapState({
      
    })
  },

  async mounted () {
    
  },

  computed: {
    
  }
}
</script>