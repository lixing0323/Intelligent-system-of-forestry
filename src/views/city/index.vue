<template>
  <div class="business-map">
    <div class="homepage-png">
      <el-image :src="HomepagePNG" />
    </div>

    <div class="back" @click="goBack()">
      <i class="fa fa-chevron-left fa-icon" />
    </div>

    <div class="screen-full">
      <full-screen />
    </div>

    <middle-top-card :sub-title="cityName" />
    <left-top-card :card-loading="rightTopLoading" />
    <right-top-card :card-loading="rightTopLoading" :forestry="forestry" />
    <bottom-card />
  </div>
</template>

<script>
// 城市
import HomepagePNG from '@/assets/city/home.png'
import LeftTopCard from '@/views/dashboard/map/leftTopCard'
import RightTopCard from '@/views/dashboard/map/rightTopCard'
import MiddleTopCard from '@/views/dashboard/map/middleTopCard'
import FullScreen from '@/views/dashboard/map/compoennts/fullScreen'
import BottomCard from './components/table'
import { getDomainData } from '@/api/dashboard/domain.js'
import { getCarbonSinkData } from '@/api/dashboard/carbonSink'

export default {
  components: { LeftTopCard, RightTopCard, MiddleTopCard, FullScreen, BottomCard },
  props: {
  },
  data() {
    return {
      HomepagePNG,
      domain: [],
      forestry: {},
      cityName: undefined,
      rightTopLoading: false,
      id: undefined
    }
  },
  computed: {
  },
  watch: {},
  mounted() {
    this.getData()
  },
  created() {
    this.id = this.$route.params.id
  },
  methods: {
    // 获取数据
    getData() {
      // 获取区域数据, 获取林业的碳汇量数据
      Promise.all([getDomainData(), getCarbonSinkData()]).then(res => {
        this.domain = res[0]
        this.forestry = res[1][0]
        this.setMapData()
        this.rightTopLoading = false

        this.getCityName(this.domain)
      }).catch(() => (this.rightTopLoading = false))
    },
    getCityName(data) {
      const index = data.findIndex(item => item.id === Number(this.id))
      console.log(data)
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

