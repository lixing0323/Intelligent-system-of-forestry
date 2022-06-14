<template>
  <div class="input-card" :style="{ right:'3%', top: '12%', width: '400px', height: '230px' }">
    <dv-loading v-if="cardLoading">加载中</dv-loading>
    <div v-if="!cardLoading" class="rectangle-flex">
      <div class="item"><rectangle :title="'林业面积/碳汇'" :area="100" :weight="forestry.sink_value" /></div>
      <div class="item"> <rectangle :title="'荒漠面积/碳汇'" :area="200" :weight="600" /></div>
      <div class="item top"><rectangle :title="'湿地面积/碳汇'" :area="300" :weight="600" /></div>
      <div class="item top"><rectangle :title="'草原面积/碳汇'" :area="400" :weight="700" /></div>
    </div>
  </div>
</template>

<script>
import Rectangle from './compoennts/rectangle'
export default {
  components: { Rectangle },
  props: {
    forestry: {
      type: Object,
      default: () => {}
    },
    cardLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      data: [],
      rectangleLoading: false
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
@import "~@/styles/element-variables.scss";
  .input-card {
    background: rgba(46, 53, 71, 0.5);
    background-clip: border-box;
    border-width: 0;
    color: $--color-font;
    border-radius: 0.4rem;
    display: block;
    padding: 20px;
    position: absolute;
    .rectangle-flex {
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 160px;
        margin-top: 20px;
        margin-left: 10px;
        margin-right: 10px;
        vertical-align: middle;
      }
    }
  }
</style>
