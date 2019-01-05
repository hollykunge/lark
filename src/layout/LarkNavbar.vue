<template>
  <div>
    <Row>
      <Col span="14" :offset="1">
        <lark-search></lark-search>
      </Col>
      <Col span="1">
        <lark-notice></lark-notice>
      </Col>
      <Col span="4">
        <lark-avatar></lark-avatar>
      </Col>
      <Col span="1">
        <Divider type="vertical"/>
      </Col>
      <Col span="3">
        <lark-window></lark-window>
      </Col>
    </Row>
  </div>
</template>

<script>
import Shell from "nw.gui";
import LarkSearch from "@/components/search/LarkSearch";
import LarkNotice from "@/components/header/LarkNotice";
import LarkWindow from "@/components/header/LarkWindow";
import LarkAvatar from "@/components/header/LarkAvatar";
export default {
  name: "navbar",
  components: { Shell, LarkSearch, LarkNotice, LarkWindow, LarkAvatar },
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
.lark-navbar-operation {
  border-left: 1px solid #c2c2c2;
}
</style>
