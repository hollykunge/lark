<template>
  <div class="full-height">
    <lark-navbar/>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  import LarkNavbar from '@/layout/LarkNavbar'
  export default {
    components: {
      LarkNavbar
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .full-height{
    height: 100%;
    flex-direction: column;
    display: flex;
  }
</style>
