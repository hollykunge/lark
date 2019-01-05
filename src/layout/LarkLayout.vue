<template>
  <el-container class="app-wrapper">
    <el-aside width="80px">
      <lark-sidebar></lark-sidebar>
    </el-aside>
    <el-container class="main-container">
      <el-header height="64px">
        <lark-navbar></lark-navbar>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
import LarkNavbar from "./LarkNavbar"
import LarkSidebar from "./LarkSidebar"

export default {
  name: "layout",
  components: { LarkNavbar, LarkSidebar },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
@import "src/style/mixin.scss";
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.app-wrapper {
  height: 100%;
  width: 100%;
}
.main-container {
  min-width: 800px;
  min-height: 100%;
  transition: margin-left 0.28s ease-out;
}
.el-header {
  background-color: #0561eb;
  width: 100%;
  padding: 0px !important;
  z-index: 1000;
  line-height: 64px;
}

.el-aside {
  background-color: #001529;
  text-align: center;
  transition: width 0.28s ease-out;
  height: 100%;
  box-shadow: 1px 0 6px rgba(0, 21, 41, 0.35);
  z-index: 1001;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  background-color: #f0f2f5;
  height: 100%;
  min-width: 800px;
}
</style>
