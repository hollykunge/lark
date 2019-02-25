<template>
  <div class="lark-nav-style">
    <a-row type="flex"
         justify="center"
         align="top">
      <a-button icon="md-disc"
              class="button-default"
              @click="handleTray"></a-button>
      <a-button icon="md-remove"
              class="button-default"
              @click="handleMinimize"></a-button>
      <a-button icon="md-square-outline"
              class="button-default"
              @click="handleMaximize"></a-button>
      <a-button icon="md-close"
              class="button-danger"
              @click="handleClose"></a-button>
      <a-modal title="确认退出？"
             v-model="closeModel"
             :mask-closable="false">
      </a-modal>
    </a-row>
  </div>
</template>
<script>
import Shell from 'nw.gui'

export default {
  name: 'navbar',
  components: { Shell },
  data () {
    return {
      closeModel: false,
      chooseRadio: '最小化到托盘'
    }
  },
  methods: {
    handleTray () {
      let win = Shell.Window.get()
      win.hide()
    },
    handleMinimize () {
      let win = Shell.Window.get()
      win.removeAllListeners('minimize')
      win.minimize()
    },
    handleMaximize () {
      let win = Shell.Window.get()
      win.removeAllListeners('maximize')
      win.maximize()
    },
    handleClose () {
      this.$Modal.confirm({
        title: '确认退出？',

        onOk: () => {
          Shell.App.quit()
        },
        onCancel: () => {
          this.$Message.info('Clicked cancel')
        }
      })
    }
  }
}
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
