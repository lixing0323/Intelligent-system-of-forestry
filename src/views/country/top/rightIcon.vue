<template>
  <div class="video">
    <div class="image-container"><el-image :src="hotImage" fit="fill" class="img" :style="{width: `${width}px`}" /></div>
    <div class="image-container"><el-image :src="treeImage" fit="fill" class="img" :style="{width: `${width}px`}" /></div>
  </div>
</template>

// 图片
<script>
import HotPNG from '@/assets/city/2.png'
import SkyPNG from '@/assets/city/1.png'

export default {
  components: { },
  data() {
    return {
      hotImage: HotPNG,
      treeImage: SkyPNG,
      width: document.documentElement.clientWidth / 3
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

.video {
}
  .image-container {
    height: 210px;
    padding: 0 10px 0 10px;
    text-align: center;
  }
  .img {
    height: 190px;
  }
</style>
