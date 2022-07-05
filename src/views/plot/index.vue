<template>
  <div class="business-map">
    <header-image />
    <back-icon />
    <full-screen />

    <div class="plot-container">
      <div class="plot-title">渭南市澄城县样地1</div>

      <el-radio-group v-model="radio" class="select-radio">
        <el-radio-button label="生物量" />
        <el-radio-button label="碳通量" />
      </el-radio-group>

      <tab-biomass v-if="isBiomassTab()" />
      <tab-carbon v-else />
    </div>
  </div>
</template>

<script>
// 样地
import HeaderImage from '@/views/dashboard/map/compoennts/header'
import BackIcon from '@/views/dashboard/map/compoennts/back'
import FullScreen from '@/views/dashboard/map/compoennts/fullScreen'
import TabBiomass from './components/biomass'
import TabCarbon from './components/carbon'

export default {
  components: { HeaderImage, BackIcon, FullScreen, TabBiomass, TabCarbon },
  props: {
  },
  data() {
    return {
      radio: '生物量'
    }
  },
  created() {
  },
  methods: {
    // 是否是生物量
    isBiomassTab() {
      return this.radio === '生物量'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/element-variables.scss";
.plot-container {
  position: relative;
  margin-top: 150px;
  margin-left: 3%;
  margin-right: 3%;

  .plot-title {
    color: $--color-font;
  }
  .select-radio {
    margin-top: 20px;
  }
}

</style>

