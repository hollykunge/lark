<template>
  <a-layout style="height: 100%">
    <chat-group-box/>
  </a-layout>
</template>

<script>
import ChatGroupBox from '@/components/chat/ChatGroupBox'
import LarkNavbar from '@/layout/LarkNavbar'
import LarkSideWindow from '@/components/header/LarkSideWindow'
export default {
  components: { LarkSideWindow, LarkNavbar, ChatGroupBox },
  data () {
    return {}
  },
  methods: {}
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
  border: rgb(165, 165, 165);
}
.layout-header-bar {
  height: 32px;
  background: #f2f2f2;
  // box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  -webkit-app-region: drag;
}
</style>
