<template>
  <video-player
    ref="videoPlayer"
    class="video-player-box"
    :options="playerOptions"
    :playsinline="true"
    @play="onPlayerPlay($event)"
    @pause="onPlayerPause($event)"
    @statechanged="playerStateChanged($event)"
    @ready="playerReadied"
  />
</template>

<script>
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
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: 'https://www.yiyuen.com/e/file/view/334735'
        }],
        poster: '/assets/city/1.png'
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
    // listen event
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    // ...player event

    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied(player) {
      console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
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
