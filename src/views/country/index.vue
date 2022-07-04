<template>
  <div class="business-map">
    <div class="map" :style="{ height: height + 'px' }">
      <div id="country" class="map" />
    </div>

    <header-image />
    <back-icon />
    <full-screen />

    <left-top-card />
    <right-top-card />
    <left-bottom-card :data="plot" />
    <middle-top-card :show-bar="false" :show-statistics="false" />
    <middle-bottom-card />
    <right-bottom-card />
  </div>
</template>

<script>
/* eslint-disable */
import HeaderImage from '@/views/dashboard/map/compoennts/header'
import BackIcon from '@/views/dashboard/map/compoennts/back'
import FullScreen from '@/views/dashboard/map/compoennts/fullScreen'
import MiddleTopCard from '@/views/dashboard/map/middleTopCard'
import LeftTopCard from './leftTopCard'
import RightTopCard from './rightTopCard'
import LeftBottomCard from './leftBottomCard'
import MiddleBottomCard from './middleBottomCard'
import RightBottomCard from './rightBottomCard'

import { getPlotData } from '@/api/dashboard/plot'
// 地图
var map;

export default {
  name: 'CityDetails',
  components: { HeaderImage, BackIcon, FullScreen, LeftTopCard, RightTopCard, LeftBottomCard,
    MiddleBottomCard, RightBottomCard, MiddleTopCard },
  data() {
    return {
      id: undefined,
      height: document.documentElement.clientHeight - 5,
      plot: {}
    }
  },
  mounted() {
    this.createMap()
  },
  created() {
    this.id = this.$route.params.id
    if (this.id) {
      this.getData()
    }
  },
  methods: {
    // 新建地图
    createMap() {
      map = new AMap.Map('country', {
        mapStyle: "amap://styles/grey",
        center: [108.947044, 34.58445],
        zoom: 9
      });
    },
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

<style lang="scss">
.map {
  width: 100%;
  height: 100%;
}
</style>
