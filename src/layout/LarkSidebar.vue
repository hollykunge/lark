<template>
  <div>
    <div class="logo-con">
      <Poptip title="Title"
              content="content"
              placement="right-start">
        <Badge dot>
          <Avatar shape="square"
                  size="large"
                  style="color: #f56a00;background-color: #fde3cf">杜</Avatar>
        </Badge>
      </Poptip>
    </div>
    <Menu :active-name="$route.name"
          theme="dark"
          width="auto"
          :class="menuitemClasses">

      <MenuItem name="home"
                to="home"
                class="lark-item-home">
      <Tooltip content="主页"
               placement="right">
        <div class="icon-style">
          <span class="iconfont icon-logo"></span>
        </div>
      </Tooltip>
      </MenuItem>
      <MenuItem name="chat"
                to="chat"
                class="lark-menu-item">
      <Tooltip content="研讨"
               placement="right">
        <div class="icon-style">
          <Badge :count="100">
            <font-awesome-icon icon="comment"
                               size="2x" />
          </Badge>
        </div>
      </Tooltip>
      </MenuItem>
      <MenuItem name="task"
                to="task"
                class="lark-menu-item">
      <Tooltip content="任务"
               placement="right">
        <div class="icon-style">
          <font-awesome-icon icon="tasks"
                             size="2x" />
        </div>
      </Tooltip>
      </MenuItem>
      <MenuItem name="data"
                to="data"
                class="lark-menu-item">
      <Tooltip content="数据"
               placement="right">
        <div class="icon-style">
          <font-awesome-icon icon="table"
                             size="2x" />
        </div>
      </Tooltip>
      </MenuItem>
      <MenuItem name="tool"
                to="tool"
                class="lark-menu-item">
      <Tooltip content="工具"
               placement="right">
        <div class="icon-style">
          <font-awesome-icon icon="toolbox"
                             size="2x" />
        </div>
      </Tooltip>
      </MenuItem>
      <MenuItem name="knowledge"
                to="knowledge"
                class="lark-menu-item">
      <Tooltip content="知识"
               placement="right">
        <div class="icon-style">
          <font-awesome-icon icon="book-reader"
                             size="2x" />
        </div>
      </Tooltip>
      </MenuItem>
      <MenuItem name="search"
                to="search"
                class="lark-menu-item">
      <Tooltip content="搜索"
               placement="right">
        <div class="icon-style">
          <font-awesome-icon icon="search"
                             size="2x" />
        </div>
      </Tooltip>
      </MenuItem>
      <MenuItem name="setup"
                to="setup"
                class="lark-menu-item menu-item-setup">
      <Tooltip content="设置"
               placement="right">
        <div class="icon-style">
          <font-awesome-icon icon="cog"
                             size="2x" />
        </div>
      </Tooltip>
      </MenuItem>
    </Menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapsed: true
    };
  },
  computed: {
    rotateIcon () {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses () {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    collapsedSider () {
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
  padding-top: 12px;
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
  width: 64px;
  .lark-sidebar-item {
    height: 64px;
    .icon-style {
      padding-left: 0px;
    }
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
