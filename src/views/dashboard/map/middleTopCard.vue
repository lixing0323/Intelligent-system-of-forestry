<template>
  <div class="province-label" :style="{left: left, top: '12%', width: `${width}px`, 'text-align': 'center' }">
    <div class="province-title">
      <div>
        <span class="center-title">
          陕西省
          <span v-if="subTitle">（{{ subTitle }}）</span>
        </span>
        <dv-decoration-5 style="width:100%;height:30px;" />
      </div>
    </div>

    <div class="province-flex-card">
      <div class="input-card">
        <div class="label">总面积</div>
        <div class="number">
          <span><ht-count-number :start-val="0" :end-val="1030" class="value" /></span>
          <span class="unit">公顷</span>
        </div>
      </div>
      <div class="input-card">
        <div class="label">总储量</div>
        <div class="number">
          <span><ht-count-number :start-val="0" :end-val="2090" class="value" /></span>
          <span class="unit">吨</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 顶部中间位置
import HtCountNumber from '@/components/HtCountNumber'

export default {
  components: { HtCountNumber },
  props: {
    subTitle: {
      type: String,
      default: undefined
    }
  },
  data() {
    return {
      data: [],
      width: 300
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
  },
  methods: {
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
  color: $--color-font;;
  .center-title {
    padding: 0 15px;
  }
}
//.province-title:before,
//.province-title:after {
//  content: "";
//  flex: 1 1;
//  border-bottom: 1px solid $--color-font;
//  margin: auto;
//}

.province-flex-card {
  display: flex;
  flex-wrap: nowrap;
}
  .input-card {
    background: rgba(46, 53, 71, 0.5);
    background-clip: border-box;
    border-width: 0;
    color: $--color-font;
    border-radius: 0.4rem;
    vertical-align: middle;
    padding-top: 5px;
    margin: 0 10px;
    height: 55px;
    flex: 1;

    .label {
      font-size: 12px;
      color: #BEBEBE;
    }
    .number {
      color: $--color-font;
      margin-top: 5px;
      .value {
        font-size: 18px;
      }
      .unit {
        font-size: 12px;
      }
    }
  }
</style>
