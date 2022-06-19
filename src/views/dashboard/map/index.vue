<template>
  <div class="business-map">
    <div class="map" :style="{ height: height + 'px' }">
      <div :id="id" class="map" />
    </div>

    <div class="homepage-png">
      <el-image :src="HomepagePNG" />
    </div>

    <div class="screen-full">
      <full-screen />
    </div>

    <middle-top-card :sub-title="cityName" />
    <left-top-card :card-loading="rightTopLoading" />
    <left-bottom-card :card-loading="rightTopLoading" />
    <right-top-card :card-loading="rightTopLoading" :forestry="forestry" />
    <right-bottom-card :card-loading="rightTopLoading" />
  </div>
</template>

<script>
/* eslint-disable */
import HomepagePNG from '@/assets/city/home.png'
import LeftTopCard from './leftTopCard'
import LeftBottomCard from './leftBottomCard'
import RightTopCard from './rightTopCard'
import RightBottomCard from './rightBottomCard'
import MiddleTopCard from './middleTopCard'
import FullScreen from './compoennts/fullScreen'

import { getDomainData } from '@/api/dashboard/domain.js'
import {getCarbonSinkData} from "@/api/dashboard/carbonSink";
// 地图
  var map;

  export default {
    name: "map-show",
    components: { HomepagePNG, LeftTopCard, LeftBottomCard, RightTopCard, RightBottomCard, MiddleTopCard, FullScreen },
    props: {
      // id
      id: {
        type: String,
        default: "container"
      },
      uuid: {
        type: String,
        default: undefined
      }
    },
    computed: {
    },
    data() {
      return {
        HomepagePNG,
        height: document.documentElement.clientHeight - 5,
        markers: [],
        domain: [],
        forestry: {},
        groups: [
          { longitude: '109.832654',  latitude: '37.838099'  }, // 榆林
          { longitude: '109.700589',  latitude: '36.21953'  }, // 延安
          { longitude: '109.22671',  latitude: '34.159562'  }, // 西安
          { longitude: '107.432185',  latitude: '32.880493'  }, // 汉中
          // { longitude: '108.644072',  latitude: '32.579881'  }, // 安康
          { longitude: '107.168056',  latitude: '34.316907'  }, // 宝鸡
          // { longitude: '108.348869',  latitude: '34.624322'  }, // 咸阳
          // { longitude: '109.032498',  latitude: '35.146861'  }, // 铜川
          // { longitude: '110.32207',  latitude: '33.530487'  }, // 商洛
          { longitude: '109.809348',  latitude: '34.803123'  } // 渭南
        ],
        cityName: undefined,
        rightTopLoading: false
      }
    },
    watch: {},
    mounted() {
      this.rightTopLoading = true
      this.createMap()
      this.getData()
    },
    created() {
    },
    methods: {
      // 新建地图
      createMap() {
        const that = this
        map = new AMap.Map(this.id, {
          resizeEnable: true,
          keyboardEnable: false,
          mapStyle: "amap://styles/grey",
          center: [108.947044, 35.98445],
          zoom: [6],
          pitch: 0,
          viewMode: '3D', // 地图模式
        });
        map.on('click', function(e) {
          // 拾取所在位置的行政区
          const props = that.disProvince.getDistrictByContainerPos(e.pixel)
          that.cityName = props.NAME_CHN
          const msg = `经度=${e.lnglat.getLng()}纬度=${e.lnglat.getLat()}地址：${props}`
          console.log(msg)
          // that.$message.success({ message: msg, duration: 5000 })
        });
        map.clearMap();
      },
      // 配置地图数据
      setMapData() {
        // 设置标记点
        this.setMarkers()
        // 陕西省绘图
        this.initProvince();
        this.disProvince.setMap(map);
        // marker会影响zoom初始化，因此需要重新设置
        map.setZoom(6.5)
        // 省市区范围图会影响中心点设置，因此要重新设置
        map.setCenter([108.947044, 35.98445])
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
            // content: '<div class="markerClass more-animation"></div>',
            icon: new AMap.Icon({
              image: require('@/assets/city/flag.png'),
              size: new AMap.Size(20, 52),
              imageSize: new AMap.Size(20,52)}),
            position: position,
            extData: {
              label:  that.showTipContent(null, country, sampling, target ),
              sampling: sampling, street: street }
          });
          map.add(this.markers[i]);
          // 显示鼠标窗口提示
          // AMap.event.addListener(this.markers[i], 'mouseover', (e) => {
          //   const position = [e.target.getPosition().lng, e.target.getPosition().lat]
          //   const content = that.showTipContent('街道', '村', '样本1', '目标1')
          //   infoWindow.setContent(content);
          //   infoWindow.open(map, position);
          // });
          // 隐藏窗体
          AMap.event.addListener(this.markers[i], 'mouseout', () => {
            infoWindow.close()
          });
          // 点击marker进入子界面
          AMap.event.addListener(this.markers[i], 'click', (e) => {
            // 拾取所在位置的行政区
            const props = that.disProvince.getDistrictByContainerPos(e.pixel)
            that.gotoDetails(props.NAME_CHN)
          });
        }
        map.setFitView();
      },
      // 鼠标提示
      showTipContent(street, country, sampling, target) {
        return`<div class="content-window-card">
                 <div class="info-top">${country}</div>
                 <div class="info-middle">
                  <div class="tip-label">实际/目标采样数: <span class="tip-number">${sampling} / ${target}</span>（人次）</div>
                   <div class="tip-label">采样率: <span class="tip-number">1</span></div>
                 </div>
                 <div class="info-bottom"><img style="width: 1.1rem;height: 0.5rem" src="https://epidemic-control-1253330314.cos.ap-nanjing.myqcloud.com/nucleic_acid_map/arrow.png" /></div>
               </div>`
      },
      // 设置区域图 610000 = 西安  depth = 地级市
      initProvince() {
        this.disProvince = new AMap.DistrictLayer.Province({
          adcode: [610000], depth: 1,
          styles: {
            'fill': '#191E2C',
            'province-stroke': '#00D93C',
            'city-stroke': '#00D93C', // 中国地级市边界
            'county-stroke': '#00D93C' // 中国区县边界
          }
        });
      },
      // 跳转详情
      gotoDetails(name) {
        let valid = false
        if (this.domain && this.domain.length > 0) {
          const index = this.domain.findIndex(item => name.indexOf(item.name) !== -1)
          console.log(this.domain, name)
          if (index !== -1) {
            valid = true
             // const id = this.domain[index].org_id
            const id = 1
            this.$router.push({name: 'CityDetails', params: { id: 1 }})
          }
        }
        if (!valid) {
          this.$message({ message: `城市数据还未返回或者数据错误，请稍后再点击`, duration: 1500, type: 'error' })
        }
      },
      // 获取数据
      getData() {
        // 获取区域数据, 获取林业的碳汇量数据
        Promise.all([getDomainData(), getCarbonSinkData()]).then(res => {
          this.domain = res[0]
          this.forestry = res[1][0]
          this.setMapData()
          this.rightTopLoading = false
        }).catch(() => (this.rightTopLoading = false))
      }
    }
  }
  /* eslint-disable */
</script>

<style lang="scss">
.map {
  width: 100%;
  height: 100%;
}

.markerClass {
  width: 18px;
  height: 18px;
  /*transform: translate3d(0px, 0px, 0px);*/
  position: relative;
  outline: none;
  box-shadow: 1px 1px 8px 0 rgba(0, 0, 0, 0.75);
  border-radius: 100%;
  transform-origin: 0 0;
  display: block;
  opacity: 0.7;
}

.markerClass::after {
  content: "";
  -webkit-border-radius: 100%;
  border-radius: 100%;
  height: 300%;
  width: 300%;
  position: absolute;
  margin: -100% 0 0 -100%;
  animation: pulsate 1s ease-out;
  animation-iteration-count: infinite; /*无穷反复*/
  animation-delay: 0.2s;
}

.more {
  background-color: #2039fc;
}

.more-animation {
  background-color: #2039fc;
}

.more-animation::after {
  box-shadow: 0 0 6px 2px #2039fc;
}

.less {
  background-color: #666666;
}

.less-animation {
  background-color: #666666;
}

.less-animation::after {
  box-shadow: 0 0 6px 2px #666666;
}

@keyframes pulsate {
  0% {
    transform: scale(0.1, 0.1);
    opacity: 0;
    filter: alpha(opacity=0);
  }
  50% {
    opacity: 1;
    filter: none;
  }
  100% {
    transform: scale(1.2, 1.2);
    opacity: 0;
    filter: alpha(opacity=0);
  }
}

.tip-country {
  font-size: 14px;
  font-weight: bold;
}
.tip-number {
  font-weight: bold;
  font-size: 0.9rem;
}

.tip-label {
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
}
.amap-marker-label {
  border: none;
  padding: 0;
}

.content-window-card {
  position: relative;
  box-shadow: none;
  bottom: 0;
  left: 0;
  width: auto;
  padding: 0;
  border: solid 1px silver;
}
div.info-top {
  position: relative;
  background: none repeat scroll 0 0 #F9F9F9;
  border-bottom: 1px solid #CCC;
  border-radius: 5px 5px 0 0;
  color: #333333;
  font-size: 0.9rem;
  font-weight: bold;
  line-height: 31px;
  padding: 0 10px;
}

div.info-middle {
  font-size: 12px;
  padding: 10px 6px;
  line-height: 20px;
  background-color: white;
}

div.info-bottom {
  height: 0px;
  width: 100%;
  clear: both;
  text-align: center;
  position: relative;
  top: -0.3rem;
}

.homepage-png {
  display: block;
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  top: 0;
}

.screen-full {
  display: block;
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>

