<template>
  <div>
    <div class="logo-con">
      <router-link to="/">
        <img src="static/logo.png">
      </router-link>
    </div>
    <Menu :active-name="$route.name" theme="dark" width="auto" :class="menuitemClasses">
      <Tooltip content="主页" placement="right">
        <MenuItem name="dashboard" to="/dashboard">
          <div class="icon-style">
            <font-awesome-icon icon="dove" size="2x"/>
          </div>
        </MenuItem>
      </Tooltip>
      <Tooltip content="研讨" placement="right">
        <MenuItem name="chat" to="/chat">
          <div class="icon-style">
            <font-awesome-icon icon="comment" size="2x"/>
          </div>
        </MenuItem>
      </Tooltip>
      <Tooltip content="任务" placement="right">
        <MenuItem name="task" to="/task">
          <div class="icon-style">
            <font-awesome-icon icon="tasks" size="2x"/>
          </div>
        </MenuItem>
      </Tooltip>
      <Tooltip content="数据" placement="right">
        <MenuItem name="data" to="/data">
          <div class="icon-style">
            <font-awesome-icon icon="table" size="2x"/>
          </div>
        </MenuItem>
      </Tooltip>
      <Tooltip content="工具" placement="right">
        <MenuItem name="tool" to="/tool">
          <div class="icon-style">
            <font-awesome-icon icon="toolbox" size="2x"/>
          </div>
        </MenuItem>
      </Tooltip>
      <Tooltip content="知识" placement="right">
        <MenuItem name="knowledge" to="/knowledge">
          <div class="icon-style">
            <font-awesome-icon icon="book-reader" size="2x"/>
          </div>
        </MenuItem>
      </Tooltip>
    </Menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapsed: true
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
.logo-con {
  height: 64px;
  text-align: center;
  transition: all 0.3s;
  background: rgb(1, 68, 168);
  img {
    padding: 8px;
    margin-top: 6px;
    height: 50px;
    width: auto;
  }
}
.lark-sidebar {
  border-right: solid 0px #e6e6e6 !important;
  height: 100%;
  width: 80px;
  .lark-sidebar-item {
    height: 64px;
    .icon-style {
      padding-left: 3px;
    }
  }
}
.ivu-menu-dark {
  background-color: rgb(1, 68, 168) !important;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu), .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):hover, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu), .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu):hover {
    background: rgb(1, 68, 168);
    border-radius: 0%;
}
// .lark-sidebar-item:hover {
//   background: #002852;
// }
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item:hover, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title:hover {
    color: #fff;
    background: rgb(1, 68, 168);
    border-radius: 0%;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu), .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu) {
    color: #ff9900;
}
</style>
