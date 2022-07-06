<template>
  <div class="tab business-tab" :style="{ left:'3%', top: '100px', width: '80px', height: 'auto' }">
    <el-tabs :tab-position="'left'">
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
      tabs: ['样地1', '样地2', '样地3', '样地4']
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
  background: rgba(46, 53, 71, 0.5);
  background-clip: border-box;
  display: block;
  position: absolute;
}
</style>
