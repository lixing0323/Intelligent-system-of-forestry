<template>
  <div>
    <div class="image-card" :style="{ right:'3%', width: '400px',top: '100px'}">
      <el-image :src="HotPNG" fit="fill" class="img" />
    </div>

    <div class="image-card live" :style="{right:'3%', width: '400px', top: '330px'}">
      <el-image :src="SkyPNG" fit="fill" class="img" />
    </div>
  </div>
</template>

<script>
import HotPNG from '@/assets/city/2.png'
import SkyPNG from '@/assets/city/1.png'
export default {
  components: { },
  props: {
  },
  data() {
    return {
      HotPNG, SkyPNG
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
  .image-card {
    background: rgba(46, 53, 71, 0.5);
    background-clip: border-box;
    border-width: 0;
    border-radius: 0.4rem;
    display: block;
    padding: 5px;
    position: absolute;
    height: 200px;
  }
  .img {
    width: 100%;
    height: 100%;
  }
</style>
