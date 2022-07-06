<template>
  <div class="progress">
    <div class="title">{{ title }}</div>
    <div class="line" :style="`width: ${lineWidth}px`">
      <span class="color" :style="`width: ${getProgressWidth()}px`" />
      <span class="value"> <ht-count-number :start-val="0" :end-val="value" class="value" /></span>
    </div>
  </div>
</template>

<script>
import HtCountNumber from '@/components/HtCountNumber'
export default {
  components: { HtCountNumber },
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: [Number, String],
      default: undefined
    },
    max: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      lineWidth: 360
    }
  },
  methods: {
    getProgressWidth() {
      if (this.value) {
        return this.value * this.lineWidth / this.max
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/element-variables.scss";
  .progress {
    height: 30px;
    line-height: 22px;
    display: flex;
    flex-wrap: nowrap;
    .title {
      font-size: 12px;
      color: #D6D6D6;
      width: 100px;
    }
    .line {
      display: inline-block;
      height: 20px;
      margin-top: 1px;
      background-color: #191E2C;
      border-radius:20px;
      .color {
        background-color: $--color-font;
        border-radius:20px;
        display: inline-block;
        height: 20px;
      }
      .value {
        color: $--color-font;
        float: right;
        margin-right: 5px;
      }
    }

  }

</style>
