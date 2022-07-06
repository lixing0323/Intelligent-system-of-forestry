<template>
  <div class="rectangle">
    <div class="rectangle-title">{{ title }}</div>
    <div class="rectangle-value">
      <span> <ht-count-number :start-val="0" :end-val="Number(area)" class="number" :decimals="0" /></span>
      <span class="unit">万公顷</span>
      <span>  / <ht-count-number :start-val="0" :end-val="Number(weight)" class="number" :decimals="0" /></span>
      <span class="unit">百万吨</span>
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
    area: {
      type: [Number, String],
      default: undefined
    },
    weight: {
      type: [Number, String],
      default: undefined
    }
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/element-variables.scss";
  .rectangle {
    background-color: #191E2C;
    width: 220px;
    height: 120px;

    .rectangle-title {
      font-size: 18px;
      color: #BEBEBE;
      text-align: center;
      padding-top: 30px;
    }
    .rectangle-value {
      margin-top: 5px;
      text-align: center;
      .number {
        font-size: 22px;
        color: $--color-font;
        font-weight: bold;
      }
      .unit {
        font-size: 10px;
        color: $--color-font;
      }
    }

  }

</style>
