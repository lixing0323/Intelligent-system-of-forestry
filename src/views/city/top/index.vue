<template>
  <div style="margin-top: 10px">
    <div class="top-flex">
      <left-city class="left" />
      <middle-map class="middle" />
      <right-icon class="right" />
    </div>
  </div>
</template>

// 上半部分
<script>
import LeftCity from './leftTab'
import MiddleMap from './middleMap'
import RightIcon from './rightIcon'

export default {
  components: { LeftCity, MiddleMap, RightIcon },
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .top-flex {
    display: flex;
    flex-wrap: nowrap;
  }
  .left {
    flex: 0 0 120px;
  }
</style>
