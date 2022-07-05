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
        width: '350px',
        height: '280px'
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
          x: 20,
          y: 20,
          x2: 20,
          y2: 20,
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
          hoverAnimation: false,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          label: {
            normal: {
              formatter: '{b|{b}}  \n  {c|{c}%}',
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
            }
          },
          labelLine: {
            show: false
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
