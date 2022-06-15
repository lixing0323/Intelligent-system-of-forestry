<template>
  <div class="input-card" :style="{right:'3%', bottom: '3%', width: '400px', height: '330px' }">
    <dv-loading v-if="cardLoading">加载中</dv-loading>
    <template v-if="!cardLoading">
      <div class="title">碳汇监测样地</div>
      <el-radio-group v-model="radio" class="tree-check-radio">
        <el-radio v-for="(l, index) in labels" :key="index" :label="l">{{ l }}</el-radio>
      </el-radio-group>
      <div class="progress-div">
        <div class="right-title">碳汇量(吨)</div>
        <progress-line v-for="(item, index) in items" :key="index" :title="item.title" :value="item.value" />
      </div>
    </template>
  </div>
</template>

<script>
import ProgressLine from './compoennts/progress'

export default {
  components: { ProgressLine },
  props: {
    cardLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      radio: '全部',
      labels: ['全部', '林地', '湿地', '草原', '荒漠'],
      items: []
    }
  },
  created() {
    this.items = [
      { title: '澄城壶梯山', value: 11312 },
      { title: '澄城樊家川', value: 10000 },
      { title: '澄城邓母', value: 9600 },
      { title: '澄城阿銮寨', value: 8121 },
      { title: '澄城南社', value: 7862 },
      { title: '澄城团结', value: 5023 },
      { title: '澄城权家河', value: 3878 }
    ]
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
@import "~@/styles/element-variables.scss";
  .input-card {
    background: rgba(46, 53, 71, 0.5);
    background-clip: border-box;
    border-width: 0;
    color: $--color-font;
    border-radius: 0.4rem;
    padding: 20px;
    display: block;
    position: absolute;
    .title {
      font-size: 20px;
    }
    .tree-check-radio {
      margin-top: 10px;
    }
    .progress-div {
      margin-top: 15px;
      .right-title {
        text-align: right;
        font-size: 12px;
        margin-bottom: 5px;
      }
    }
  }

</style>
