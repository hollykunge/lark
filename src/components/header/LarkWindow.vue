<template>
  <div>
    <Button shape="circle" icon="md-remove" size="small" @click="handleMinimize"></Button>
    <Button shape="circle" icon="md-add" size="small" @click="handleMaximize"></Button>
    <Button type="error" shape="circle" icon="md-close" ghost size="small" @click="handleClose"></Button>
  </div>
</template>
<script>
import Shell from "nw.gui";
export default {
  name: "navbar",
  components: { Shell },
  data() {
    return {
    };
  },
  methods: {
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
