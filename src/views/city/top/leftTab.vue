<template>
  <div class="tab">
    <el-tabs :tab-position="'left'" style="height: 200px">
      <el-tab-pane v-for="(t, index) in tabs" :key="index" :label="t" />
    </el-tabs>
  </div>
</template>

// 选择市县
<script>

export default {
  components: { },
  data() {
    return {
      tabs: ['西安市监测点1', '西安市监测点2', '西安市监测点3', '西安市监测点4']
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.tab {
}
</style>
