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
    <middle-top-card :show-bar="false" title="渭南市澄城县" />
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
      plot: {},
      markers: [],
      groups: [ { longitude: '109.912077',  latitude: '35.200365'  },
        { longitude: '109.847696',  latitude: '35.175061'  },
        { longitude: '109.771244',  latitude: '35.16557'  },
        { longitude: '109.983137',  latitude: '35.176744'  }]
    }
  },
  mounted() {
    this.createMap()
    this.setMarkers()
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
        center: [109.921104, 35.164237],
        zoom: 13
      });
      map.on('click', function(e) {
        const msg = `经度=${e.lnglat.getLng()}纬度=${e.lnglat.getLat()}`
        console.log(msg)
      });
      map.clearMap();
    },
    // 新建多个标记 自定义 image = require('@/assets/map/red.png')
    setMarkers() {
      const that = this
      let infoWindow = new AMap.InfoWindow({isCustom: true, offset: new AMap.Pixel(10, 0)})

      for (let i=0; i<this.groups.length; i++) {
        const sampling = 1
        const target = 2
        const position = [this.groups[i].longitude, this.groups[i].latitude]
        const country = '区'
        const street = '街道'

        this.markers[i] = new AMap.Marker({
          icon: new AMap.Icon({
            image: require('@/assets/city/flag.png'),
            size: new AMap.Size(20, 52),
            imageSize: new AMap.Size(20,52)}),
          position: position
        });
        map.add(this.markers[i]);
      }
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
