<template>
  <div class="tab-container">
    <div class="tab-card business-tab" :style="{ width: '80px', height: 'auto' }">
      <el-tabs :tab-position="'left'">
        <el-tab-pane v-for="(t, index) in tabs" :key="index" :label="t" />
      </el-tabs>
    </div>
    <div class="input-card" :style="{ width: '400px', height: '300px' }">
      <div class="title">碳储量总面积占比</div>
      <pie-chart :id="'area'" ref="eChart" :chart-data="data" class="pie" :width="320" :height="200" />
    </div>
  </div>
</template>

<script>
import PieChart from '@/views/dashboard/map/compoennts/pie'

export default {
  components: { PieChart },
  data() {
    return {
      tabs: ['澄城壶梯山', '澄城樊家川', '澄城邓母'],
      data: []
    }
  },
  created() {
    this.data = [
      { value: 12.51, name: '草原', label: { color: '#E57F2C' }, itemStyle: { color: '#D1985C' }},
      { value: 1.73, name: '荒漠', label: { color: '#4374CB' }, itemStyle: { color: '#4374CB' }},
      { value: 15.73, name: '湿地', label: { color: '#2CE57F' }, itemStyle: { color: '#5CC76A' }},
      { value: 70.3, name: '林地', label: { color: '#17C3DA' }, itemStyle: { color: '#28A6E9' }}
    ]
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/element-variables.scss";
.tab-container {
  left: 3%;
  top: 100px;
  height: auto;
  display: flex;
  flex-flow: nowrap;
  position: absolute;

  .tab-card {
    background: rgba(46, 53, 71, 0.5);
    background-clip: border-box;
    display: block;
    position: relative;
  }
  .input-card {
    background: rgba(46, 53, 71, 0.5);
    background-clip: border-box;
    border-width: 0;
    color: $--color-font;
    border-radius: 0.4rem;
    display: block;
    position: relative;
    padding: 20px;
    .title {
      font-size: 24px;
      font-weight: bold;
      padding: 20px 0 0 20px;
    }
    .pie {
      margin: 10px;
    }
  }
}
</style>
