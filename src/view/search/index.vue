<template>
  <div style="height: 100%">
    <lark-navbar/>
    <Row type="flex" align="middle">
      <Col span="12" offset="6">
        <div style="height: 360px">
          <Input search enter-button size="large" placeholder="输入搜索内容..."/>
        </div>
      </Col>
    </Row>
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

</style>
