<template>
  <a-layout style="height:100%">
    <a-layout-header :style="{padding: 0}" class="layout-header-bar">
      <lark-navbar></lark-navbar>
    </a-layout-header>
    <a-layout-content :style="{margin: '0px', background: '#F2F2F2', minHeight: '600px', height: '100%'}">
      <a-row type="flex" justify="center" align="middle" class="login-panel">
        <a-col span="8">
          <a-card>
            <p slot="title">登录</p>
            <login-form/>
          </a-card>
        </a-col>
      </a-row>
    </a-layout-content>
    <a-layout-footer>©2019 WorkHub Corporation. All rights reserved.</a-layout-footer>
  </a-layout>
</template>
<script>
import LarkNavbar from '@/components/header/LarkNavbar'
import LoginForm from '@/components/login/LoginForm'

export default {
  components: { LarkNavbar, LoginForm },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.login-panel {
  height: 100%;
}
.layout-header-bar {
  height: 32px;
  background: #f2f2f2;
  // box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  -webkit-app-region: drag;
}
</style>

