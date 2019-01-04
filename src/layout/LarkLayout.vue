<template>
  <div class="app-wrapper">
    <lark-sidebar class="sidebar-container"></lark-sidebar>
    <el-container class="main-container">
      <!-- <div class="main-container-background"></div> -->
      <el-header>
        <lark-navbar class="navbar-content"></lark-navbar>
      </el-header>
      <el-main class="main-content">Main</el-main>
    </el-container>
  </div>
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

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/style/mixin.scss";
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.main-container-background {
  z-index: -1;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #f0f2f5;
}
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  .sidebar-container {
    transition: width 0.28s ease-out;
    background-color: #001529;
    width: 80px;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    box-shadow: 1px 0 6px rgba(0, 21, 41, 0.35);
    z-index: 1001;
    overflow-x: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .main-container {
    min-width: 800px;
    min-height: 100%;
    transition: margin-left 0.28s ease-out;
    margin-left: 80px;
    background: #f0f2f5;
    .navbar-content {
      padding-right: 80px;
      width: 100%;
      height: 64px;
      // padding-right: 80px;
      position: fixed;
      top: 0;
      z-index: 1000;
      background-color: #f6f7f8;
    }
    .main-content {
      padding-top: 64px;
      overflow-x: hidden;
    }
    .el-header {
      padding: 0px;
    }
  }
}
</style>
