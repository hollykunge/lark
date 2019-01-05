<template>
  <div>
    <div class="logo-con">
      <router-link to="/">
        <img src="static/logo.png">
      </router-link>
    </div>
    <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
      <MenuItem name="1-1">
        <div class="icon-style">
          <font-awesome-icon icon="home" size="2x"/>
        </div>
      </MenuItem>
      <MenuItem name="1-2">
        <div class="icon-style">
          <font-awesome-icon icon="comment" size="2x"/>
        </div>
      </MenuItem>
      <MenuItem name="1-3">
        <div class="icon-style">
          <font-awesome-icon icon="tasks" size="2x"/>
        </div>
      </MenuItem>
      <MenuItem name="1-4">
        <div class="icon-style">
          <font-awesome-icon icon="database" size="2x"/>
        </div>
      </MenuItem>
      <MenuItem name="1-5">
        <div class="icon-style">
          <font-awesome-icon icon="toolbox" size="2x"/>
        </div>
      </MenuItem>
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
  background: #002140;
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
  background-color: #002140 !important;
}
</style>

