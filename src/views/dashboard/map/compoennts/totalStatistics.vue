<template>
  <div class="total-container">
    <div class="input-card">
      <div class="label">样地总数</div>
      <div class="number">
        <span><ht-count-number :start-val="0" :end-val="115" class="value" :decimals="0" /></span>
        <span class="unit" />
      </div>
    </div>
    <div class="input-card" style="margin: 0 20px">
      <div class="label">总面积</div>
      <div class="number">
        <span><ht-count-number :start-val="0" :end-val="1781.58" class="value" /></span>
        <span class="unit">万公顷</span>
      </div>
    </div>
    <div class="input-card">
      <div class="label">总储量</div>
      <div class="number">
        <span><ht-count-number :start-val="0" :end-val="4967.9" class="value" /></span>
        <span class="unit">百万吨</span>
      </div>
    </div>
  </div>

</template>

<script>
import HtCountNumber from '@/components/HtCountNumber'

export default {
  components: { HtCountNumber },
  props: {
    count: {
      type: Number,
      default: 0
    },
    area: {
      type: Number,
      default: 0
    },
    quantity: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
    }
  },
  computed: {
  },
  created() {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
@import "~@/styles/element-variables.scss";
.total-container {
  display: flex;
  flex-wrap: nowrap;
  .input-card {
    background: rgba(0, 0, 0, 0.5);
    background-clip: border-box;
    border-width: 0;
    color: $--color-font;
    border-radius: 0.4rem;
    vertical-align: middle;
    padding-top: 5px;
    height: 100px;
    flex: 1;

    .label {
      font-size: 18px;
      color: #BEBEBE;
      margin-top: 15px;
    }
    .number {
      color: $--color-font;
      margin-top: 5px;
      .value {
        font-size: 26px;
      }
      .unit {
        font-size: 16px;
      }
    }
  }
}

</style>
