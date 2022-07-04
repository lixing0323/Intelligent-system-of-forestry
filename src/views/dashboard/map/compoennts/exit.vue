<template>
  <div class="exit" @click="logout()">
    <el-tooltip content="退出登录" effect="dark" placement="bottom">
      <i class="fa fa-power-off fa-icon" />
    </el-tooltip>
  </div>
</template>

<script>
export default {
  components: { },
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
    // 退出登录
    logout() {
      this.$confirm('此操作将登出当前账号, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('user/logout').then(() => {
          this.$router.push(`/login`)
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
