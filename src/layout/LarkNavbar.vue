<template>
  <el-row class="lark-navbar" type="flex" justify="center" align="middle" :gutter="24">
    <el-col :span="9" :push="1">
      <lark-search></lark-search>
    </el-col>
    <el-col :span="10" :push="6">
      <a href>
        <font-awesome-icon icon="bell" size="lg"/>
      </a>
    </el-col>
    <el-col :span="4" :push="1" class="lark-navbar-operation">
      <div>
        <el-button id="min" size="mini" icon="el-icon-minus" circle @click="handleMinimize"></el-button>
        <el-button id="max" size="mini" icon="el-icon-plus" circle @click="handleMaximize"></el-button>
        <el-button
          id="close"
          size="mini"
          type="danger"
          icon="el-icon-close"
          circle
          @click="handleClose"
        ></el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Shell from "nw.gui";
import LarkSearch from "./LarkSearch";
export default {
  name: "navbar",
  components: { Shell, LarkSearch },
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
    },
    handleMinimize() {
      let win = Shell.Window.get();
      win.minimize();
    },
    handleMaximize() {
      let win = Shell.Window.get();
      win.maximize();
    },
    handleClose() {
      Shell.App.quit();
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.lark-navbar {
  -webkit-app-region: drag;
  &-operation {
    float: right;
    .el-button {
      -webkit-app-region: no-drag;
      margin-left: 0%;
    }
  }
}
.lark-navbar-operation {
  border-left: 1px solid #918f8f;
}
</style>
