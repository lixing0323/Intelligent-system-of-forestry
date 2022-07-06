<template>
  <div>
    <div :id="id" :style="styleObject" />
  </div>
</template>

<script>
// 饼图
import * as ECharts from 'echarts'

export default {
  components: { },
  props: {
    chartData: {
      type: [Object, Array],
      default: undefined
    },
    title: {
      type: String,
      default: ''
    },
    id: {
      type: [Number, String],
      default: undefined
    },
    width: {
      type: Number,
      default: 420
    },
    height: {
      type: Number,
      default: 300
    }
  },
  data() {
    return {
      charts: undefined
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
        grid: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 0,
          borderWidth: 10
        },
        title: {
          text: this.title,
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          showContent: false
        },
        legend: { show: false },
        series: [{
          type: 'pie',
          radius: ['40%', '70%'],
          emphasis: {
            scale: false,
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          label: {
            formatter: '{b}: {c}\n({d}%)',
            borderWidth: 20,
            rich: {
              a: {
                color: '#333',
                fontSize: 20
              },
              b: {
                fontSize: 18,
                color: '#FFFFFF'
              },
              c: {
                fontSize: 20,
                lineHeight: 30
              }
            }
          },
          data: this.chartData
        }]
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
