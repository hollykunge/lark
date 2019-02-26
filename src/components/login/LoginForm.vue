<template>
  <a-form id="formLogin"
          class="user-layout-login"
          ref="formLogin"
          :form="form"
          @submit="handleSubmit">
    <a-form-item prop="userName">
      <a-input v-model="form.userName"
               size="large"
               type="text"
               placeholder="帐户名">
        <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
      </a-input>
    </a-form-item>
    <a-form-item prop="password">
      <a-input v-model="form.password" size="large"
               type="password"
               autocomplete="false"
               placeholder="密码 / admin">
        <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button size="large"
                type="primary"
                htmlType="submit"
                class="login-button"
                :loading="state.loginBtn"
                :disabled="state.loginBtn">登录
      </a-button>
    </a-form-item>
  </a-form>
</template>
<script>
  import {mapActions} from 'vuex'

  export default {
    name: 'LoginForm',
    props: {
      userNameRules: {
        type: Array,
        default: () => {
          return [{required: true, message: '账号不能为空', trigger: 'blur'}]
        }
      },
      passwordRules: {
        type: Array,
        default: () => {
          return [{required: true, message: '密码不能为空', trigger: 'blur'}]
        }
      }
    },
    data () {
      return {
        form: {
          userName: 'workhub',
          password: ''
        },
        state: {
          time: 60,
          loginBtn: false,
          // login type: 0 email, 1 username, 2 telephone
          loginType: 0
        }
      }
    },
    computed: {
      rules () {
        return {
          userName: this.userNameRules,
          password: this.passwordRules
        }
      }
    },
    methods: {
      ...mapActions(['handleLogin', 'getUserInfo']),
      handleSubmit ({ userName, password }) {
        this.handleLogin({ userName, password }).then(res => {
          this.getUserInfo()
            .then(res => {
              this.$router.push({
                name: 'home'
              })
            })
        })
      }
      // handleSubmit () {
      //   this.$refs.loginForm.validate(valid => {
      //     if (valid) {
      //       this.$emit('on-success-valid', {
      //         userName: this.form.userName,
      //         password: this.form.password
      //       })
      //     }
      //   })
      // }
    }
  }
</script>
