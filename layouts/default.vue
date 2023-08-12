<template lang="pug">
  .container
    MyHeader
    nuxt
    my-footer
</template>

<script>
import MyFooter from '../components/Footer.vue'
import MyHeader from '../components/Header.vue'

export default {
  components: {
    MyFooter,
    MyHeader
  }
}
</script>

<style>
.container
{
  margin: 0 auto;
  max-width: 1280px;
}
</style>
