<template>
  <div class="layout">
    <a-layout style="height: 100%">
      <a-layout-sider ref="side1"
                      trigger="null"
                      width="64"
      >
        <lark-sidebar class="sidebar-container"></lark-sidebar>
      </a-layout-sider>
      <a-layout style="height: 100%" class="lark-content-layout">

        <a-layout-content class="main-container"
                          :style="{margin: '0px', background: '#F2F2F2', minHeight: '704px', height: '100%'}">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
  import LarkNavbar from './LarkNavbar'
  import LarkSidebar from './LarkSidebar'

  export default {
    name: 'layout',
    components: {LarkNavbar, LarkSidebar},
    data () {
      return {}
    },
    computed: {
      menuitemClasses: function () {
        return ['menu-item', this.isCollapsed ? 'collapsed-menu' : '']
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .layout {
    height: 100%;
    width: 100%;
    border: 0px solid #f2f2f2;
    background: #f2f2f2;
    position: relative;
    border-radius: 1px;
    overflow: hidden;

    .lark-content-layout {
      background: #f2f2f2;
    }
  }

  .layout-header-bar {
    height: 32px;
    background: #f2f2f2;
    // box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    -webkit-app-region: drag;
  }

  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width 0.2s ease 0.2s;
  }

  .menu-item i {
    transform: translateX(0px);
    transition: font-size 0.2s ease, transform 0.2s ease;
    vertical-align: middle;
    font-size: 16px;
  }

  .collapsed-menu span {
    width: 0px;
    transition: width 0.2s ease;
  }

  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
    vertical-align: middle;
    font-size: 22px;
  }

  .ivu-layout-sider {
    background: rgb(1, 68, 168) !important;
  }
</style>
