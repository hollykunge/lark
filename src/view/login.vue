<template>
  <Layout style="height:100%">
    <Header :style="{padding: 0}" class="layout-header-bar">
      <lark-navbar></lark-navbar>
    </Header>
    <Content :style="{margin: '0px', background: '#F2F2F2', minHeight: '600px', height: '100%'}">
      <Row type="flex" justify="center" align="middle" class="login-panel">
        <Col span="8">
          <Card>
            <p slot="title">登录</p>
            <login-form @on-success-valid="handleSubmit"/>
          </Card>
        </Col>
      </Row>
    </Content>
    <Footer>©2019 WorkHub Corporation. All rights reserved.</Footer>
  </Layout>
</template>
<script>
import LarkNavbar from "@/layout/LarkNavbar";
import LoginForm from "@/components/login/LoginForm";
import { mapActions } from "vuex";
export default {
  components: { LarkNavbar, LoginForm },
  data() {
    return {
      formTop: {
        username: "workhub",
        password: "workhub"
      }
    };
  },
  methods: {
    ...mapActions(["handleLogin", "getUserInfo"]),
    handleSubmit({ userName, password }) {
      this.handleLogin({ userName, password }).then(res => {
        this.getUserInfo().then(res => {
          this.$router.push({
            name: this.$config.homeName
          });
        });
      });
    }
  }
};
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

