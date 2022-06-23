<template>
  <div class="sensor">
    <div class="title">传感器实时数据</div>
    <div class="card-flex">
      <rectangle-card v-for="(item, index) in items" :key="index" class="item" :title="item.title" :unit="item.unit" :value="item.value" />
    </div>
  </div>
</template>

// 图片
<script>
import RectangleCard from './components/rectangle'

export default {
  components: { RectangleCard },
  data() {
    return {
      items: []
    }
  },
  created() {
    this.items = [
      { title: '风速', value: '33', unit: 'm/s' },
      { title: '风向', value: '东南偏南', unit: '' },
      { title: '温度', value: '28.8', unit: '℃' },
      { title: '湿度', value: '50.6', unit: 'RH' },
      { title: '大气压', value: '951.09', unit: 'mbar' },
      { title: '二氧化碳', value: '1287', unit: 'ppm' },
      { title: '雨量', value: '0.02', unit: 'mm' },
      { title: '太阳总辐射', value: '0', unit: 'w/㎡' },
      { title: '光合有效辐射', value: '0', unit: 'w/㎡' },
      { title: '土壤湿度', value: '45.8', unit: '%RH' },
      { title: '土壤热通量', value: '0', unit: 'w/㎡' },
      { title: 'PM2.5', value: '0', unit: 'ug/m³' },
      { title: '氧气浓度', value: '0', unit: '%' },
      { title: '甲烷', value: '0', unit: '%' },
      { title: '二氧化碳', value: '0', unit: 'ppm' },
      { title: '微差压', value: '0', unit: 'kpa' },
      { title: '信号强度', value: '28', unit: 'RSSI' }
    ]
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.sensor {
  width: 100%;
}
.title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}
  .card-flex {
    display: flex;
    flex-wrap: wrap;
    .item {
    }
  }
</style>
