<template lang="pug">
.content
  h3 没有访问权限
</template>
<script>
import { mapState } from 'vuex'
export default {
  // middleware: 'auth',
  layout: 'admin',
  head () {
    return {
      title: '后台管理首页'
    }
  },
  computed: mapState([
    'user'
  ])
}
</script>
