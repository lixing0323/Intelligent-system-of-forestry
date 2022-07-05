<template>
  <div>
    <div :id="id" :style="styleObject" />
  </div>
</template>

<script>
// 折线图
import * as ECharts from 'echarts'

export default {
  components: { },
  props: {
    chartData: {
      type: [Object, Array],
      default: undefined
    },
    id: {
      type: [Number, String],
      default: 'echarts-line'
    },
    width: {
      type: Number,
      default: 800
    },
    height: {
      type: Number,
      default: 300
    }
  },
  data() {
    return {
      charts: undefined,
      title: ''
    }
  },
  computed: {
    styleObject() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`
      }
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler() {
        this.setData()
      }
    }
  },
  mounted() {
    this.initCharts()
  },
  methods: {
    initCharts() {
      this.charts = ECharts.init(document.getElementById(this.id))
      this.setData()
    },
    setData() {
      const option = {
        legend: {
          data: ['树径初始值', '树径增长值'],
          textStyle: {
            color: '#fff',
            fontSize: 16
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2021/08/10', '2021/09/10', '2021/10/10', '2021/11/10', '2021/12/10', '2022/01/10', '2022/02/10']
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: { color: '#1B232C' }
          }
        },
        series: this.chartData
      }

      this.charts.setOption(option)
      const myChart = this.charts
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
