<template>
  <el-card class="business-card-padding-10">
    <div class="bottom-flex">
      <left-icon class="left" :data="plot" />
      <middle-table class="middle" />
      <right-card class="right" />
    </div>
  </el-card>
</template>

//
<script>
import LeftIcon from './leftIcon'
import MiddleTable from './middleTable'
import RightCard from './rightCard'

export default {
  components: { LeftIcon, MiddleTable, RightCard },
  props: {
    plot: {
      type: Object,
      default: () => {}
    }
  },
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
  .bottom-flex {
    display: flex;
    flex-wrap: nowrap;
    .left {
      flex-grow: 2;
    }
    .middle {
      flex-grow: 1;
      margin-left: 20px;
    }
    .right {
      flex-grow: 2;
      margin-left: 20px;
    }
  }
</style>
