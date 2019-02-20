<template>
  <Layout class="lark-task-layout">
    <Header class="lark-task-header">
      <project-header/>
    </Header>
    <Content class="lark-task-content">
      <project-content/>
    </Content>
  </Layout>
</template>

<script>

  import ProjectHeader from '@/components/task/project/LarkProjectHeader'
  import ProjectContent from '@/components/task/project/LarkProjectContent'
  export default {
    name: 'LarkProjectMain',
    components: {
      ProjectHeader,
      ProjectContent
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  .lark-task-header {
    display: flex;
    height: 60px;
    padding: 0px;
    background: rgb(242, 242, 242);
    box-shadow: 0 1px 3px rgba(0, 21, 41, .15);
  }

  .lark-task-layout {
    flex: 1;
    /*.lark-task-content{*/
    /*background: #eceae8;*/
    /*}*/
  }

</style>
