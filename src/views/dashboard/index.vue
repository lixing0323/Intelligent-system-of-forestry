<template>
  <div class="dashboard">
    <map-show />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MapShow from './map'

export default {
  components: { MapShow },
  data() {
    return {
    }
  },
  computed: { ...mapGetters(['userInfo']) },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
