<template>
  <div class="lark-nav-style">
    <!-- <button class="button-default">
      <font-awesome-icon icon="thumbtack"/>
    </button>
    <button class="button-default">
      <font-awesome-icon icon="window-minimize"/>
    </button>
    <button class="button-default">
      <font-awesome-icon icon="window-maximize"/>
    </button>
    <button class="button-danger">
      <font-awesome-icon icon="window-close"/>
    </button>-->
    <Row type="flex" justify="center" align="top">
      <Button icon="md-disc" class="button-default"></Button>
      <Button icon="md-remove" class="button-default" @click="handleMinimize"></Button>
      <Button icon="md-square-outline" class="button-default" @click="handleMaximize"></Button>
      <Button icon="md-close" class="button-danger" @click="handleClose"></Button>
    </Row>
    <!-- <ButtonGroup>
        <Button icon="ios-color-wand-outline"></Button>
        <Button icon="ios-sunny-outline"></Button>
        <Button icon="ios-crop"></Button>
    </ButtonGroup>-->
    <!-- <Button class="lark-window" shape="circle" icon="md-remove" size="small" @click="handleMinimize"></Button>
    <Button class="lark-window" shape="circle" icon="md-add" size="small" @click="handleMaximize"></Button>
    <Button class="lark-window" type="error" shape="circle" icon="md-close" ghost size="small" @click="handleClose"></Button>-->
  </div>
</template>
<script>
import Shell from "nw.gui";
export default {
  name: "navbar",
  components: { Shell },
  data() {
    return {};
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
  float: right;
  .button-default,
  .button-danger {
    background-color: #f2f2f2;
    border: none;
    color: #929090;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    float: left;
    padding: 0;
    width: 40px;
    height: 32px;
    border-radius: 0%;
    -webkit-app-region: no-drag;
  }

  .button-default:hover {
    background-color: #d8d8d8;
  }
  .button-danger:hover {
    background-color: #db4040;
  }
}
</style>