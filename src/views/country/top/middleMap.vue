<template>
  <div class="map-container">
    <div class="map">
      <div :id="id" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  // 地图
  var map;

  export default {
    name: "map-show",
    components: { },
    props: {
      // id
      id: {
        type: String,
        default: "container"
      }
    },
    computed: {
    },
    data() {
      return {
      }
    },
    watch: {},
    mounted() {
      // 新建地图
      map = new AMap.Map(this.id, {
        resizeEnable: true,
        center: [108.948024, 34.263161,], //地图中心点
        keyboardEnable: false,
        zoom: 10
      });
    },
    methods: {
    }
  }
  /* eslint-disable */
</script>

<style lang="scss">
.map-container {
  width: 100%;
  height: 100%;
  .map {
    position: relative;
    width: 100%;
    height: 400px;
  }
}

</style>

