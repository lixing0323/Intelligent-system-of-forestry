<template>
  <div class="province-title">
    <div><span class="center-title">{{ title }}</span></div>
  </div>
</template>

<script>

export default {
  components: { },
  props: {
    title: {
      type: String,
      default: '陕西省'
    }
  },
  data() {
    return {
    }
  },
  computed: {
  },
  created() {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
@import "~@/styles/element-variables.scss";
.province-title {
  display: flex;
  flex-direction: row;
  font-size: 22px;
  font-weight: bold;
  color: $--color-font;;
  .center-title {
    padding: 0 15px;
  }
}
.province-title:before,
.province-title:after {
  content: "";
  flex: 1 1;
  border-bottom: 1px solid $--color-font;
  margin: auto;
}
</style>
