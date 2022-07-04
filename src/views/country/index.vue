<template>
  <div>
    <div>
      <top />
      <bottom :plot="plot" />

      <div class="screen-full">
        <full-screen />
      </div>
    </div>
  </div>
</template>

// 城市
<script>
import Top from './top/index'
import Bottom from './bottom/index'
import FullScreen from '@/views/dashboard/map/compoennts/fullScreen'
import { getPlotData } from '@/api/dashboard/plot'

export default {
  name: 'CityDetails',
  components: { Top, Bottom, FullScreen },
  data() {
    return {
      id: undefined,
      plot: {}
    }
  },
  created() {
    this.id = this.$route.params.id
    if (this.id) {
      this.getData()
    }
  },
  methods: {
    getData() {
      // 获取样地数据
      this.getPlotItem()
    },
    getPlotItem() {
      getPlotData(this.id).then(res => {
        this.plot = res
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.screen-full {
  display: block;
  position: absolute;
  top: 20px;
  right: 20px;
}
.back-dashboard {
  display: block;
  position: absolute;
  top: 20px;
  right: 60px;
}
</style>
