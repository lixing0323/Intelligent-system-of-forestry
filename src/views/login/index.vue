<template>
  <div class="login-container">
    <div id="login-bg-container" class="login-bg-container">
      <img :src="loginBgImage" alt="" class="login-bg-image">
      <el-form
        ref="loginForm"
        style="padding-top: 150px"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        autocomplete="on"
        label-position="left"
      >
        <div class="title-container">
          <span class="title">登录</span>
        </div>

        <el-form-item prop="username">
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="请输入用户名"
            name="username"
            type="text"
            tabindex="1"
            aauto-complete="new-password"
          />
        </el-form-item>

        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="请输入密码"
            name="password"
            tabindex="2"
            auto-complete="new-password"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>

        <el-button
          :loading="loading"
          type=""
          size="large"
          class="login-button"
          style="background-color: #519df2;font-size: 21px;font-weight: bold"
          @click.native.prevent="handleLogin"
        >
          登   录
        </el-button>
      </el-form>
      <h4 style="position: fixed; bottom: -2px;z-index: 999;left: 46%;color: white;font-size: 12px">Copyright © 2022</h4>
    </div>
  </div>
</template>

<script>
import loginBgImage from '@/assets/login_bg.jpg'

export default {
  name: 'Login',
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能少于6位'))
      } else {
        callback()
      }
    }
    return {
      loginBgImage,
      loginForm: {
        username: '',
        password: '',
        action: 'login'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', message: '请输入用户名' }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
    const dashboard = window.document.getElementById('login-bg-container')
    dashboard.style.minHeight = `${window.innerHeight}px`
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    checkCapslock({ shiftKey, key } = {}) {
      if (key && key.length === 1) {
        this.capsTooltip = shiftKey && (key >= 'a' && key <= 'z') || !shiftKey && (key >= 'A' && key <= 'Z')
      }
      if (key === 'CapsLock' && this.capsTooltip === true) {
        this.capsTooltip = false
      }
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      const defaultRoute = { path: this.redirect || '/' }
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push(defaultRoute)
              this.loading = false
              // getUserInfo(true)
              //   .then(response => {
              //     this.$router.push(defaultRoute)
              //     this.loading = false
              //   }).catch(() => {
              //   this.$router.push(defaultRoute)
              //   this.loading = false
              // })
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  }
}
</script>

<style lang="scss">
  /* 修复input 背景不协调 和光标变色 */

  $bg: #283443;
  $light_gray: #fff;
  $cursor: #fff;

  @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input {
      color: $cursor;
    }
  }

  /* reset element-ui css */
  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0;
        -webkit-appearance: none;
        border-radius: 0;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }

      input:-webkit-autofill {
        -webkit-text-fill-color: $cursor !important;
        transition: background-color 5000s ease-in-out 0s !important;
      }

      input:-webkit-autofill:focus {
        -webkit-text-fill-color: $cursor !important;
        transition: background-color 5000s ease-in-out 0s !important;
      }
    }

    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.5);
      border-radius: 5px;
      color: #454545;
    }

    .el-input__inner {
      font-size: 16px;
    }

    .el-form-item__error {
      padding-left: 5px;
      padding-top: 5px;
      padding-bottom: 5px;
    }
  }
</style>

<style lang="scss" scoped>
  @import "../../styles/mall";

  .login-container {
    min-height: 600px;
    height: 100%;
    width: 100%;

    background-color: $var-mall-background-color;
    overflow-x: auto;

    .login-title-container {
      @extend .mall-flex-container;
      justify-content: flex-start;
      align-items: center;
      width: 1280px;
      margin-left: auto;
      margin-right: auto;

      .login-title-divider {
        font-size: 48px;
        margin: -20px 30px 0 30px;
        color: $var-mall-primary-title-color;
        font-weight: lighter;
      }

      .login-welcome {
        font-size: 38px;
        margin-top: -10px;
      }
    }

    .login-bg-container {
      position: relative;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      height: auto;
      background-color: white;

      .login-bg-image {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
      }

      .login-form {
        z-index: 2;
        position: absolute;
        top: 60px;
        right: 240px;
        width: 340px;
        max-width: 100%;
      }

      .login-button {
        width: 100%;
        color: white;
      }

      .tips {
        font-size: 14px;
        color: #000;
        margin-bottom: 10px;

        span {
          &:first-of-type {
            margin-right: 16px;
          }
        }
      }

      .svg-container {
        padding: 6px 5px 6px 15px;
        color: white;
        vertical-align: middle;
        width: 30px;
        display: inline-block;
      }

      .title-container {
        position: relative;
        padding: 10px;

        .title {
          font-size: 26px;
          color: black;
          margin: 0 auto 40px auto;
          text-align: center;
          font-weight: bold;
        }
      }

      .show-pwd {
        position: absolute;
        right: 15px;
        top: 15px;
        font-size: 16px;
        color: white;
        cursor: pointer;
        user-select: none;
      }
    }

  }
</style>
