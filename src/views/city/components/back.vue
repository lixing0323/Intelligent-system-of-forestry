<template>
  <div>
    <el-tooltip content="返回主页" effect="dark" placement="bottom">
      <svg-icon icon-class="dashboard" @click="click" />
    </el-tooltip>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.destroy()
  },
  methods: {
    click() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.svg-icon {
  display: inline-block;
  cursor: pointer;
  fill: #2A9A30;
  width: 30px;
  height: 30px;
  font-weight: bold;
  vertical-align: 10px;
}
</style>
