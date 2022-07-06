<template>
  <div>
    <div class="record input-card" :style="{left:'3%', right: '3%', width: `${width}px`}">
      <div class="title">碳通量趋势记录</div>
      <line-e-charts :width="width" :height="300" :chart-data="lineData" />
    </div>
  </div>
</template>

<script>
// 样地数据统计
import listMixin from '@/views/mixins/listMixin'
import LineECharts from './line'

export default {
  components: { LineECharts },
  mixins: [listMixin],
  props: {
  },
  data() {
    return {
      width: document.documentElement.clientWidth * 0.94,
      lineData: []
    }
  },
  computed: {
  },
  created() {
    this.lineData = [
      { name: '树径初始值', type: 'line', stack: 'Total', data: [120, 132, 101, 134, 90, 230, 210],
        itemStyle: { lineStyle: { color: '#2A9A30' }}
      }
    ]
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/element-variables.scss";
.input-card {
  background: rgba(46, 53, 71, 0.5);
  background-clip: border-box;
  border-width: 0;
  border-radius: 0.4rem;
  color: $--color-font;
  display: block;
  padding: 20px;
  margin-top: 20px;
  .title {
    font-size: 20px;
  }
}

</style>

