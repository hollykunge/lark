<template>
  <el-row class="lark-navbar" justify="end" :gutter="20">
    <!-- <lark-search></lark-search> -->
    <el-col :span="6" :offset="12">
      <el-button id="min" size="mini" icon="el-icon-minus" circle @click="handleMinimize"></el-button>
      <el-button id="max" size="mini" icon="el-icon-plus" circle></el-button>
      <el-button id="close" size="mini" type="danger" icon="el-icon-close" circle></el-button>
    </el-col>
  </el-row>
</template>

<script>
import { Shell } from "nw.gui";
import { LarkSearch } from "@/components/index";
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
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.lark-navbar {
  -webkit-app-region: drag;
}
#min {
  -webkit-app-region: no-drag;
  margin-left: 0px;
}
#max {
  -webkit-app-region: no-drag;
  margin-left: 0px;
}
#close {
  -webkit-app-region: no-drag;
  margin-left: 0px;
}
</style>
