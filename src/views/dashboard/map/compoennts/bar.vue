<template>
  <div>
    <div :id="id" :style="styleObject" />
  </div>
</template>

<script>
// 柱状图
import * as ECharts from 'echarts'

export default {
  components: { },
  props: {
    chartData: {
      type: [Object, Array],
      default: undefined
    },
    mainTitle: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    id: {
      type: [Number, String],
      default: 'echarts-bar'
    },
    width: {
      type: Number,
      default: 300
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
        legend: { show: false },
        xAxis: {
          type: 'category',
          data: ['澄城', '潼关', '大荔', '合阳', '蒲城', '富平', '白水'],
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          show: false
        },
        series: [
          {
            data: this.chartData,
            type: 'bar',
            showBackground: true,
            itemStyle: {
              color: '#78E97D'
            },
            barWidth: '30%',
            backgroundStyle: {
              color: '#0D1115'
            }
          }
        ]
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
