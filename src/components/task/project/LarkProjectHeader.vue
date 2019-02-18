<template>
  <Menu class="lark-task-menu" mode="horizontal" active-name="1">
    <MenuItem name="1">
      <Icon type="ios-paper"/>
      项目
    </MenuItem>
    <MenuItem name="2">
      <Icon type="ios-people"/>
      活动
    </MenuItem>
    <MenuItem name="3">
      <Icon type="ios-people"/>
      统计
    </MenuItem>
  </Menu>
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
