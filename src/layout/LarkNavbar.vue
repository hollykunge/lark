<template>
  <div>
    <lark-window></lark-window>
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
</style>
