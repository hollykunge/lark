<template>
  <div class="lark-nav-style">
    <Row type="flex" justify="center" align="top">
      <Button icon="md-disc" class="button-default"></Button>
      <Button icon="md-remove" class="button-default" @click="handleMinimize"></Button>
      <Button icon="md-square-outline" class="button-default" @click="handleMaximize"></Button>
      <Button icon="md-close" class="button-danger" @click="handleClose"></Button>
      <!-- <Modal title="确认退出？" v-model="closeModel" :mask-closable="false">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
      </Modal>-->
    </Row>
  </div>
</template>
<script>
import Shell from "nw.gui";
export default {
  name: "navbar",
  components: { Shell },
  data() {
    return {
      closeModel: false,
      chooseRadio: "最小化到托盘"
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

      this.$Modal.confirm({
        title: "确认退出？",
        render: h => {
          return h("RadioGroup", [
            h("Radio", {
              props: {
                label: "最小化至托盘",
                value: 0
              },
              on: {
                input: val => {
                  this.value = val;
                  console.log(value);
                }
              }
            }),
            h("Radio", {
              props: {
                label: "直接退出",
                value: 1
              },
              on: {
                input: val => {
                  this.value = val;
                }
              }
            })
          ]);
        },
        onOk: () => {
          Shell.App.quit();
        },
        onCancel: () => {
          this.$Message.info("Clicked cancel");
        }
      });
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
    padding: 0;
    width: 40px;
    height: 32px;
    border-radius: 0px;
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
