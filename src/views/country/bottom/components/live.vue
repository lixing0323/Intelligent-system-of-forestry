<template>
  <video-player
    class="vjs-custom-skin"
    :options="playerOptions"
    @ready="playerReadied"
  />
</template>

<script>
// custom skin css
// videojs
import videojs from 'video.js'
window.videojs = videojs
// hls plugin for videojs6
require('videojs-contrib-hls/dist/videojs-contrib-hls.js')

export default {
  components: { },
  props: {
  },
  data() {
    return {
      playerOptions: {
        // videojs and plugin options
        height: '360',
        sources: [{
          withCredentials: false,
          type: 'application/x-mpegURL',
          src: 'https://open.ys7.com/v3/openlive/G23645265_1_2.m3u8?expire=1663383212&id=360740393407492096&t=363b50f70b10c95667855463f0e400d4c308497dbb8e470bc83b94af6cd88c56&ev=100'
        }],
        controlBar: {
          timeDivider: false,
          durationDisplay: false
        },
        flash: { hls: { withCredentials: false }},
        html5: { hls: { withCredentials: false }},
        poster: '/assets/city/2.png'
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
    playerReadied(player) {
      player.tech({ IWillNotUseThisInPlugins: true }).hls
      player.tech_.hls.xhr.beforeRequest = function(options) {
        // console.log(options)
        return options
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .video-player-box {
    height: 200px;
    width: 400px;
  }

</style>
