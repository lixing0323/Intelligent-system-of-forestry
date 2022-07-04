<template>
  <div class="business-map">
    <header-image />
    <back-icon />
    <full-screen />

    <middle-top-card :title="cityName" :show-bar="true" />
    <left-top-card :card-loading="rightTopLoading" />
    <right-top-card :card-loading="rightTopLoading" :forestry="forestry" />
    <bottom-card />
  </div>
</template>

<script>
// 城市
import HeaderImage from '@/views/dashboard/map/compoennts/header'
import BackIcon from '@/views/dashboard/map/compoennts/back'
import LeftTopCard from '@/views/dashboard/map/leftTopCard'
import RightTopCard from '@/views/dashboard/map/rightTopCard'
import MiddleTopCard from '@/views/dashboard/map/middleTopCard'
import FullScreen from '@/views/dashboard/map/compoennts/fullScreen'
import BottomCard from './components/table'
import { getDomainData } from '@/api/dashboard/domain.js'
import { getCarbonSinkData } from '@/api/dashboard/carbonSink'

export default {
  components: { HeaderImage, BackIcon, LeftTopCard, RightTopCard, MiddleTopCard, FullScreen, BottomCard },
  props: {
  },
  data() {
    return {
      domain: [],
      forestry: {},
      cityName: undefined,
      rightTopLoading: false
    }
  },
  created() {
    this.getData()
  },
  methods: {
    // 获取数据
    getData() {
      // 获取区域数据, 获取林业的碳汇量数据
      Promise.all([getDomainData(), getCarbonSinkData()]).then(res => {
        this.domain = res[0]
        this.forestry = res[1][0]
        this.rightTopLoading = false

        this.getCityName(this.domain)
      }).catch(() => (this.rightTopLoading = false))
    },
    getCityName(data) {
      const index = data.findIndex(item => item.id === Number(this.$route.params.id))
      if (index !== -1) {
        this.cityName = data[index].name
      }
    },
    // 返回上一级
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

