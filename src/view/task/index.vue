<template>
  <div>
    <lark-navbar/>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
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

<style>

</style>
