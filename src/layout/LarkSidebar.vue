<template>
  <div>
    <div class="logo-con">
      <a-badge dot>
        <a-avatar shape="square"
                  size="large"
                  style="color: #f56a00;background-color: #fde3cf">杜
        </a-avatar>
      </a-badge>
    </div>
    <a-menu>
      <a-menu-item name="home"
                  to="home"
                  class="lark-item-home">
        <a-tooltip content="主页"
                   placement="right">
          <div class="icon-style">
            <span class="iconfont icon-logo"></span>
          </div>
        </a-tooltip>
      </a-menu-item>
      <a-menu-item name="chat"
                  to="chat"
                  class="lark-menu-item">
        <a-tooltip content="研讨"
                   placement="right">
          <div class="icon-style">
            <!-- <a-badge :count="messageUnreadCount"> -->
            <font-awesome-icon icon="comment"
                               size="2x"/>
            <!-- </a-badge> -->
          </div>
        </a-tooltip>
      </a-menu-item>
      <a-menu-item name="task"
                  to="task"
                  class="lark-menu-item">
        <a-tooltip content="任务"
                   placement="right">
          <div class="icon-style">
            <font-awesome-icon icon="tasks"
                               size="2x"/>
          </div>
        </a-tooltip>
      </a-menu-item>
      <a-menu-item name="data"
                  to="data"
                  class="lark-menu-item">
        <a-tooltip content="数据"
                   placement="right">
          <div class="icon-style">
            <font-awesome-icon icon="table"
                               size="2x"/>
          </div>
        </a-tooltip>
      </a-menu-item>
      <a-menu-item name="tool"
                  to="tool"
                  class="lark-menu-item">
        <a-tooltip content="工具"
                   placement="right">
          <div class="icon-style">
            <font-awesome-icon icon="toolbox"
                               size="2x"/>
          </div>
        </a-tooltip>
      </a-menu-item>
      <a-menu-item name="knowledge"
                  to="knowledge"
                  class="lark-menu-item">
        <a-tooltip content="知识"
                   placement="right">
          <div class="icon-style">
            <font-awesome-icon icon="book-reader"
                               size="2x"/>
          </div>
        </a-tooltip>
      </a-menu-item>
      <a-menu-item name="search"
                  to="search"
                  class="lark-menu-item">
        <a-tooltip content="搜索"
                   placement="right">
          <div class="icon-style">
            <font-awesome-icon icon="search"
                               size="2x"/>
          </div>
        </a-tooltip>
      </a-menu-item>

      <a-menu-item name="setup"
                  to="setup"
                  class="lark-menu-item menu-item-setup">
        <a-tooltip content="设置"
                   placement="right">
          <div class="icon-style">
            <font-awesome-icon icon="cog"
                               size="2x"/>
          </div>
        </a-tooltip>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        collapsed: false
      }
    },
    computed: {
    },
    methods: {
      toggleCollapsed () {
        this.collapsed = !this.collapsed
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
  .logo-con {
    height: 64px;
    text-align: center;
    transition: all 0.3s;
    background: rgb(1, 68, 168);
    padding-top: 12px;

    img {
      padding: 8px;
      margin-top: 6px;
      height: 50px;
      width: auto;
    }
  }

  .ivu-menu-dark {
    background-color: rgb(1, 68, 168) !important;
  }

  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu),
  .ivu-menu-dark.ivu-menu-vertical
  .ivu-menu-item-active:not(.ivu-menu-submenu):hover,
  .ivu-menu-dark.ivu-menu-vertical
  .ivu-menu-submenu-title-active:not(.ivu-menu-submenu),
  .ivu-menu-dark.ivu-menu-vertical
  .ivu-menu-submenu-title-active:not(.ivu-menu-submenu):hover {
    background: rgb(1, 68, 168);
    border-radius: 0%;
  }

  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item:hover,
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title:hover {
    color: #fff;
    background: rgb(1, 68, 168);
    border-radius: 0%;
  }

  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu),
  .ivu-menu-dark.ivu-menu-vertical
  .ivu-menu-submenu-title-active:not(.ivu-menu-submenu) {
    color: #ff9900;
  }

  .lark-menu-item {
    padding: 14px 18px !important;
  }

  .lark-item-home {
    padding: 14px 14px !important;
  }

  .menu-item-setup {
    position: fixed !important;
    bottom: 0;
  }
</style>
