<template>
  <div>
    <div class="circle-top-title">{{ title }}</div>
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
      default: undefined
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
        width: '230px',
        height: '130px'
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
      this.title = '28%'
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
          text: this.mainTitle,
          subtext: this.subTitle,
          x: 'center',
          y: 'center',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 12,
            color: '#00D93B'
          }, // 标题
          subtextStyle: {
            fontWeight: 'normal',
            fontSize: 12,
            color: '#FFFFFF',
            verticalAlign: 'top'
          } // 副标题
        },
        tooltip: {
          trigger: 'axis',
          showContent: false
        },
        legend: { show: false },
        series: [{
          type: 'pie',
          radius: ['50%', '70%'],
          label: { show: false },
          labelLine: { show: false },
          data: this.chartData,
          hoverAnimation: false,
          itemStyle: {
            normal: {
              color: function(colors) {
                const colorList = ['#0F1317', '#00D93B']
                return colorList[colors.dataIndex]
              }
            }
          }
        },
        {
          type: 'pie',
          radius: ['80%', '90%'],
          label: { show: false },
          labelLine: { show: false },
          data: this.chartData,
          hoverAnimation: false,
          itemStyle: {
            normal: {
              color: function(colors) {
                const colorList = ['#0F1317', '#17C3DA']
                return colorList[colors.dataIndex]
              }
            }
          }
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
.circle-top-title {
  text-align: center;
  font-size: 12px;
  color: #17C3DA;
}
</style>
