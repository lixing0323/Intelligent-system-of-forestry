<template>
  <div class="back" @click="goBack()">
    <i class="fa fa-chevron-left fa-icon" />
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
    // 返回上一级
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
