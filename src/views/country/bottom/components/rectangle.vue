<template>
  <el-card class="business-rectangle-card  sample-rectangle-container business-card-padding-5" shadow="always">
    <div>
      <span class="sample-value"> {{ value }}</span>
      <span class="sample-unit"> {{ unit }}</span>
    </div>
    <div class="sample-title">
      {{ title }}
    </div>
  </el-card>
</template>

<script>

export default {
  components: { },
  props: {
    title: {
      type: String,
      default: undefined
    },
    unit: {
      type: String,
      default: ''
    },
    value: {
      type: [Number, String],
      default: ''
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
@import "~@/styles/element-variables.scss";
.sample-rectangle-container {
  width: 151px;
  height: 50px;
  text-align: center;
  margin-bottom: 10px;
  margin-right: 15px;
  background-color: #191E2C !important;
  .sample-value {
    color: #2A9A30;
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
  }
  .sample-unit {
    color: #2A9A30;
    font-size: 12px;
  }
  .sample-title {
    color: #FFFFFF;
    font-size: 12px;
    margin-top: 3px;
  }
}
</style>
