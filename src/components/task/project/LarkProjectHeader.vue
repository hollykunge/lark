<template>
  <a-menu class="lark-task-menu" mode="horizontal" active-name="1">
    <a-menuitem name="1">
      <a-icon type="ios-paper"/>
      项目
    </a-menuitem>
    <a-menuitem name="2">
      <a-icon type="ios-people"/>
      活动
    </a-menuitem>
    <a-menuitem name="3">
      <a-icon type="ios-people"/>
      统计
    </a-menuitem>
  </a-menu>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.lark-task-menu{
  margin: auto;
    background: rgb(242, 242, 242);
}
</style>
