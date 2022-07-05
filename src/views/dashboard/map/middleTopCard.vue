<template>
  <div>
    <div class="province-label" :style="{left: left, top: '100px', width: `${width}px`, 'text-align': 'center' }">
      <div class="province-title">
        <div><span class="center-title">{{ title }}</span></div>
      </div>

      <div v-if="showStatistics" class="province-flex-card">
        <div class="input-card">
          <div class="label">样地总数</div>
          <div class="number">
            <span><ht-count-number :start-val="0" :end-val="115" class="value" /></span>
            <span class="unit" />
          </div>
        </div>
        <div class="input-card" style="margin: 0 20px">
          <div class="label">总面积</div>
          <div class="number">
            <span><ht-count-number :start-val="0" :end-val="1781.58" class="value" /></span>
            <span class="unit">公顷</span>
          </div>
        </div>
        <div class="input-card">
          <div class="label">总储量</div>
          <div class="number">
            <span><ht-count-number :start-val="0" :end-val="4967.9" class="value" /></span>
            <span class="unit">吨</span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showBar" class="area-card" :style="{left: left, width: `${width}px`}">
      <div class="title">各区域分布
        <el-radio-group v-model="radio" class="tree-check-radio area-radio" @change="changeRadio">
          <el-radio v-for="(l, index) in labels" :key="index" :label="l">{{ l }}</el-radio>
        </el-radio-group>
      </div>
      <echarts-bar class="echarts-bar" :chart-data="items" :width="width-40" :height="150" />
    </div>
  </div>

</template>

<script>
// 顶部中间位置
import HtCountNumber from '@/components/HtCountNumber'
import EchartsBar from '@/views/dashboard/map/compoennts/bar'

export default {
  components: { HtCountNumber, EchartsBar },
  props: {
    title: {
      type: String,
      default: '陕西省'
    },
    showStatistics: {
      type: Boolean,
      default: true
    },
    showBar: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      data: [],
      width: document.documentElement.clientWidth / 3,
      radio: '样地数',
      labels: ['样地数', '面积', '碳储量'],
      items: []
    }
  },
  computed: {
    left() {
      return `${(document.documentElement.clientWidth - this.width) / 2}px`
    }
  },
  created() {
    this.data = [
      { value: 25, name: '林地', label: { color: '#E57F2C' }, itemStyle: { color: '#D1985C' }},
      { value: 25, name: '草原', label: { color: '#4374CB' }, itemStyle: { color: '#4374CB' }},
      { value: 25, name: '荒漠', label: { color: '#2CE57F' }, itemStyle: { color: '#5CC76A' }},
      { value: 25, name: '湿地', label: { color: '#17C3DA' }, itemStyle: { color: '#28A6E9' }}
    ]
    this.items = [120, 200, 150, 80, 70, 110, 130]
  },
  methods: {
    changeRadio(val) {
      if (val !== '样地数') {
        for (let i = 0, len = this.items.length; i < len; i++) {
          const rand = parseInt(Math.random() * len)
          const temp = this.items[rand]
          this.items[rand] = this.items[i]
          this.items[i] = temp
        }
      } else {
        this.items = Object.assign([], this.values)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/styles/element-variables.scss";
.province-label {
  display: block;
  position: absolute;
  margin-top: 10px;
}

.province-title {
  display: flex;
  flex-direction: row;
  font-size: 22px;
  font-weight: bold;
  color: $--color-font;;
  .center-title {
    padding: 0 15px;
  }
}
.province-title:before,
.province-title:after {
  content: "";
  flex: 1 1;
  border-bottom: 1px solid $--color-font;
  margin: auto;
}
.province-flex-card {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  margin-top: 20px;
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

.area-card {
  background: rgba(46, 53, 71, 0.5);
  background-clip: border-box;
  border-width: 0;
  color: $--color-font;
  border-radius: 0.4rem;
  padding: 20px;
  margin-top: 280px;
  position: relative;
  .title {
    font-size: 18px;
  }
  .area-radio {
    float: right;
  }
  .echarts-bar {
    margin-top: 10px;
  }
}
</style>
