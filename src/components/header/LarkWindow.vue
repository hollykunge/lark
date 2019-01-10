<template>
  <div class="lark-nav-style">
    <button class="button"><font-awesome-icon icon="window-minimize"/></button>
    <button class="button"><font-awesome-icon icon="window-maximize"/></button>
    <button class="button"><font-awesome-icon icon="window-close"/></button>
    <!-- <ButtonGroup>
        <Button icon="ios-color-wand-outline"></Button>
        <Button icon="ios-sunny-outline"></Button>
        <Button icon="ios-crop"></Button>
    </ButtonGroup> -->
    <!-- <Button class="lark-window" shape="circle" icon="md-remove" size="small" @click="handleMinimize"></Button>
    <Button class="lark-window" shape="circle" icon="md-add" size="small" @click="handleMaximize"></Button>
    <Button class="lark-window" type="error" shape="circle" icon="md-close" ghost size="small" @click="handleClose"></Button> -->
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
<style rel="stylesheet/scss" lang="scss" scoped>
.lark-nav-style {
  height: 32px;
  .button {
    background-color: #4caf50; /* Green */
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    float: left;
    width: 48px;
    height: 32px;
    -webkit-app-region: no-drag;
  }

  .button:hover {
    background-color: #3e8e41;
  }
}
</style>