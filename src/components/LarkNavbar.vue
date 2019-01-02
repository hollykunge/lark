<template>
    <el-menu
    :default-active="activeIndex2"
    class="lark-navbar"
    mode="horizontal"
    @select="handleSelect"
    background-color="#fff"
    text-color="#fff"
    active-text-color="#ffd04b">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        <el-row>
        <el-button id="min" size="mini" icon="el-icon-minus" circle @click="handleMinimize"></el-button>
        <el-button id="max" size="mini" icon="el-icon-plus" circle></el-button>
        <el-button id="close" size="mini" type="danger" icon="el-icon-close" circle></el-button>
        </el-row>
    </el-menu>
</template>

<script>
import { Shell } from 'nw.gui'
export default {
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleMinimize () {
        let win = Shell.Window.get()
        win.minimize()
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.lark-navbar{
    -webkit-app-region:drag;
}
#min{
    -webkit-app-region: no-drag;
}
#max{
    -webkit-app-region: no-drag;
}
#close{
    -webkit-app-region: no-drag;
}
</style>
