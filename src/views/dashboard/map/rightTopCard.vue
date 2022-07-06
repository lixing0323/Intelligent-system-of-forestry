<template>
  <div class="input-card" :style="{ right:'3%', top: '100px', width: '500px', height: '400px' }">
    <dv-loading v-if="cardLoading">加载中</dv-loading>

    <template v-if="!cardLoading">
      <div class="title">总面积及总碳储量</div>
      <div class="rectangle-flex">
        <div class="item"><rectangle :title="'林地面积/碳储'" :area="1247.6" :weight="2034.26" /></div>
        <div class="item right"> <rectangle :title="'草原面积/碳储'" :area="222.87" :weight="479.37" /></div>
        <div class="item top"><rectangle :title="'湿地面积/碳储'" :area="280.27" :weight="2453.7" /></div>
        <div class="item top right"><rectangle :title="'荒漠面积/碳储'" :area="30.85" :weight="0.57" /></div>
      </div>
    </template>
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
    .title {
      font-size: 24px;
      font-weight: bold;
      padding: 20px 0 0 20px;
    }

    .rectangle-flex {
      display: flex;
      flex-wrap: wrap;
      .item {
        margin-top: 20px;
        width: 220px;
        vertical-align: middle;
      }
      .right {
        margin-left: 20px;
      }
      .top {
        margin-top: 20px;
      }
    }
  }
</style>
