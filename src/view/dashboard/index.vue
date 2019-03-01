<template>
  <div>
    <lark-navbar/>
    <h2>主页</h2>
    <div>
      <a-button type="primary" @click="getData" long>点一下试试
        <font-awesome-icon icon="window-close"/>
      </a-button>
    </div>
    <img :src="img" alt style="margin-left: 40%; margin-top: 20%;">
  </div>
</template>

<script>
  import {testApi} from '@/api/test'
  import LarkNavbar from '@/components/header/LarkNavbar'

  export default {
    components: {
      LarkNavbar
    },
    data () {
      return {
        img: ''
      }
    },
    methods: {
      getData () {
        testApi().then(res => {
          this.img = res.data.test
        })
      }
    }
  }
</script>

<style>
</style>
