<template>
  <a-form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
    <a-formitem prop="userName">
      <a-input v-model="form.userName" placeholder="请输入用户名">
        <span slot="prepend">
          <a-icon :size="16" type="ios-person"></a-icon>
        </span>
      </a-input>
    </a-formitem>
    <a-formitem prop="password">
      <a-input type="password" v-model="form.password" placeholder="请输入密码">
        <span slot="prepend">
          <a-icon :size="14" type="md-lock"></a-icon>
        </span>
      </a-input>
    </a-formitem>
    <a-formitem>
      <a-button @click="handleSubmit" type="primary" long>登录</a-button>
    </a-formitem>
  </a-form>
</template>
<script>
export default {
  name: 'LoginForm',
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: '账号不能为空', trigger: 'blur' }]
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: '密码不能为空', trigger: 'blur' }]
      }
    }
  },
  data () {
    return {
      form: {
        userName: 'workhub',
        password: ''
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
    handleSubmit () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$emit('on-success-valid', {
            userName: this.form.userName,
            password: this.form.password
          })
        }
      })
    }
  }
}
</script>
