<template>
  <div class="lark-search-main">
    <lark-navbar/>
    <!--<vue-friendly-iframe :src="src" @load="onLoad" :style="iframeStyle"></vue-friendly-iframe>-->
    <iframe :src="src" ref="iframe" class="search-iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
  </div>
</template>

<script>
  import LarkNavbar from '@/layout/LarkNavbar'

  export default {
    components: {
      LarkNavbar
    },
    data () {
      return {
        src: 'https://www.baidu.com'
      }
    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

  .lark-search-main{
    height: 100%;
    width: 100%;
    flex-direction: column;
    display: flex;
    .search-iframe{
      width: 100%;
      height: 100%;
      flex: 1;
    }
  }
</style>
