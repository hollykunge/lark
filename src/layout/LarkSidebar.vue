<template>
  <div class="sidebar-container">
    <div class="logo-con">
      <router-link to="/">
        <!-- <img v-show="!isCollapse" src="../../../static/images/logo.svg" key="max-logo" />
        <img v-show="isCollapse" src="../../../static/images/logo-min.svg" key="min-logo" />-->
      </router-link>
    </div>
    <el-menu
      default-active="1-4-1"
      class="lark-sidebar"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#002140"
      text-color="#D3D3D3"
      active-text-color="#FF8700"
    >
      <el-menu-item index="2" class="lark-sidebar-item">
        <div class="icon-style">
          <font-awesome-icon icon="home" size="2x"/>
        </div>
        <span slot="title">主页</span>
      </el-menu-item>
      <el-menu-item index="3" class="lark-sidebar-item">
        <div class="icon-style">
          <font-awesome-icon icon="comment" size="2x"/>
        </div>
        <span slot="title">研讨</span>
      </el-menu-item>
      <el-menu-item index="3" class="lark-sidebar-item">
        <div class="icon-style">
          <font-awesome-icon icon="tasks" size="2x"/>
        </div>
        <span slot="title">任务</span>
      </el-menu-item>
      <el-menu-item index="3" class="lark-sidebar-item">
        <div class="icon-style">
          <font-awesome-icon icon="database" size="2x"/>
        </div>
        <span slot="title">数据</span>
      </el-menu-item>
      <el-menu-item index="4" class="lark-sidebar-item">
        <div class="icon-style">
          <font-awesome-icon icon="toolbox" size="2x"/>
        </div>
        <span slot="title">工具</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
.sidebar-container {
  height: 100%;
}
.logo-con {
  height: 64px;
  text-align: center;
  transition: all 0.3s;
  background: #002140;
  img {
    padding: 8px;
    height: 64px;
    width: auto;
  }
}
.lark-sidebar {
  border-right: solid 0px #e6e6e6 !important;
  height: 100%;
  width: 80px;
  .lark-sidebar-item {
    height: 64px;
    .icon-style {
      padding-left: 3px;
    }
  }
}
</style>

