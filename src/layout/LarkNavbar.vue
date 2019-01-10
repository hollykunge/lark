<template>
  <div class="lark-nav-style">
    <Row>
      <!-- <Col span="12" :offset="1">
      </Col>
      <Col span="1">
        <lark-notice></lark-notice>
      </Col>
      <Col span="1">
        <lark-setup></lark-setup>
      </Col>
      <Col span="4">
        <Poptip trigger="hover" title="我的账户" content="content" width="240">
          <lark-avatar></lark-avatar>
          <div class="api" slot="content">
            <lark-my-account></lark-my-account>
          </div>
        </Poptip>
      </Col>
      <Col span="1">
        <Divider type="vertical"/>
      </Col>-->
      <Col span="4" :offset="20">
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
import LarkMyAccount from "@/components/header/personal/LarkMyAccount";
import LarkSetup from "@/components/header/LarkSetup";
export default {
  name: "navbar",
  components: {
    Shell,
    LarkSearch,
    LarkNotice,
    LarkWindow,
    LarkAvatar,
    LarkMyAccount,
    LarkSetup
  },
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
