<template>
  <div>
    <lark-navbar/>
    <Layout>
      <Header class="lark-task-header">
        <project-header/>
      </Header>
      <Content>
        <project-content/>
      </Content>
    </Layout>
  </div>
</template>

<script>
  import LarkNavbar from '@/layout/LarkNavbar'
  import ProjectHeader from '@/components/task/project/LarkProjectHeader'
  import ProjectContent from '@/components/task/project/LarkProjectContent'

  export default {
    components: {
      LarkNavbar,
      ProjectHeader,
      ProjectContent
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .lark-task-header {
    display: flex;
    height: 60px;
    padding: 0px;
    background: rgb(242, 242, 242);
    box-shadow: 0 2px 3px rgba(0, 21, 41, .15);
  }
</style>
