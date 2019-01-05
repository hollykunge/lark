<template>

  <el-row class="lark-navbar" type="flex" justify="center" align="middle">
    <el-col :span="10">
      <lark-search></lark-search>
    </el-col>
    <el-col :span="6" :push="4">
      <div class="lark-navbar-operation">
        <el-button id="min" size="mini" icon="el-icon-minus" circle @click="handleMinimize"></el-button>
        <el-button id="max" size="mini" icon="el-icon-plus" circle @click="handleMaximize"></el-button>
        <el-button id="close" size="mini" type="danger" icon="el-icon-close" circle @click="handleClose"></el-button>
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
      let win = Shell.Window.get()
      win.minimize()
    },
    handleMaximize() {
      let win = Shell.Window.get()
      win.maximize()
    },
    handleClose() {
      Shell.App.quit()
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
</style>
