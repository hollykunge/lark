<template>
  <Layout style="height: 100%">
    <chat-group-box/>
    <!-- <Sider>
      <lark-side-window/>
    </Sider>-->
    <!-- <Layout>
      <Header>
        <Header :style="{padding: 0}"
                class="layout-header-bar">
          <lark-navbar></lark-navbar>
        </Header>
      </Header>
      <Content :style="{margin: '0px', background: '#F2F2F2', height: '100%'}">Content</Content>
      <Footer>Footer</Footer>
    </Layout>-->
  </Layout>
</template>

<script>
import ChatGroupBox from "@/components/chat/ChatGroupBox";
import LarkNavbar from "@/layout/LarkNavbar";
import LarkSideWindow from "@/components/header/LarkSideWindow";
export default {
  components: { LarkSideWindow, LarkNavbar, ChatGroupBox },
  data() {
    return {};
  },
  methods: {}
};
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
