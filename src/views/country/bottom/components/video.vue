<template>
  <div class="player">
    <video-player
      ref="videoPlayer"
      class="video-player"
      :options="playerOptions"
      :playsinline="true"
    />
  </div>
</template>

<script>
import VideoImage from '@/assets/city/2.png'

export default {
  components: { },
  props: {
  },
  data() {
    return {
      playerOptions: {
        // videojs options
        height: '225',
        width: '400',
        autoplay: true,
        language: 'zh-CN',
        muted: true,
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: 'https://www.yiyuen.com/e/file/view/334735'
        }],
        poster: VideoImage
      }
    }
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
</style>
