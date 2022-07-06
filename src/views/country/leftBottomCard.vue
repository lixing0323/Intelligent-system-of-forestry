<template>
  <div class="land-card" :style="{ left:'3%', bottom: '3%', width: `${width}px`, height: '420px' }">
    <div class="title">样地基本信息
      <el-button class="bt" type="primary" @click="gotoPlot()">样地统计数据</el-button>
    </div>
    <div class="icon-flex">
      <div class="img-dev"><el-image class="img" :src="hotImage" /></div>
      <div style="width: 100%">
        <table class="table">
          <tr>
            <td class="label deep-label">森林类型</td>
            <td class="value deep-value">{{ data.forest_type }}</td>
            <td class="label deep-label">土地权属</td>
            <td class="value deep-value">{{ data.land_property }}</td>
          </tr>

          <tr>
            <td class="label">林地类型</td>
            <td class="value">{{ data.forest_land_type }}</td>
            <td class="label">林木权属</td>
            <td class="value">{{ data.forest_property }}</td>
          </tr>

          <tr>
            <td class="label deep-label">县、局、保护区</td>
            <td class="value deep-value">{{ data.protection_zone }}</td>
            <td class="label deep-label">优势树种</td>
            <td class="value deep-value">{{ data.dominant_species }}</td>
          </tr>

          <tr>
            <td class="label">样地号</td>
            <td class="value">{{ data.land_number }}</td>
            <td class="label">平均年龄</td>
            <td class="value">{{ data.average_age }}</td>
          </tr>

          <tr>
            <td class="label deep-label">GPS纵坐标</td>
            <td class="value deep-value">{{ data.longitude }}</td>
            <td class="label deep-label">龄组</td>
            <td class="value deep-value">{{ data.age_group }}</td>
          </tr>

          <tr>
            <td class="label">GPS横坐标</td>
            <td class="value">{{ data.latitude }}</td>
            <td class="label">平均胸径（cm）</td>
            <td class="value">{{ data.avg_breast_diameter }}</td>
          </tr>

          <tr>
            <td class="label deep-label">海拔（m）</td>
            <td class="value deep-value">{{ data.altitude }}</td>
            <td class="label deep-label">平均树高（m）</td>
            <td class="value deep-value">{{ data.avg_tree_height }}</td>
          </tr>

          <tr>
            <td class="label">坡向</td>
            <td class="value">{{ data.slope_aspect }}</td>
            <td class="label">样木总株数</td>
            <td class="value">{{ data.sample_count }}</td>
          </tr>

          <tr>
            <td class="label deep-label">地貌</td>
            <td class="value deep-value">{{ data.landforms }}</td>
            <td class="label deep-label">枝落叶厚度（cm）</td>
            <td class="value deep-value">{{ data.fallen_thick }}</td>
          </tr>

          <tr>
            <td class="label">土壤厚度（cm）</td>
            <td class="value">{{ data.soil_thickness }}</td>
            <td class="label">土壤质地</td>
            <td class="value">{{ data.soil_texture }}</td>
          </tr>

          <tr>
            <td class="label deep-label">灌木覆盖度</td>
            <td class="value deep-value">{{ data.bush_cover }}</td>
            <td class="label deep-label">灌木平均高（m）</td>
            <td class="value deep-value">{{ data.bush_avg_height }}</td>
          </tr>

          <tr>
            <td class="label">草本覆盖度</td>
            <td class="value">{{ data.herbs_cover }}</td>
            <td class="label">草本高度（m）</td>
            <td class="value">{{ data.herbs_height }}</td>
          </tr>

          <tr>
            <td class="label deep-label">地类</td>
            <td class="value deep-value">{{ data.land_type }}</td>
            <td class="label deep-label">碳储量/碳汇量(吨)</td>
            <td class="value deep-value">#</td>
          </tr>
        </table>
      </div>
    </div>
  </div>

</template>

// 样地
<script>
import TreeImg from '@/assets/city/3.png'

export default {
  components: { },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      hotImage: TreeImg,
      width: document.documentElement.clientWidth / 4 + 70
    }
  },
  created() {
  },
  methods: {
    gotoPlot() {
      this.$router.push({ name: 'PlotDetails', params: { id: '1' }})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/element-variables.scss";
 .land-card {
   background: rgba(46, 53, 71, 0.5);
   background-clip: border-box;
   border-width: 0;
   color: $--color-font;
   border-radius: 0.4rem;
   display: block;
   position: absolute;
   padding: 20px;
 }
  .title {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
    .bt {
      float: right;
    }
  }
  .icon-flex {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    .img-dev {
      text-align: center;
    }
    .img {
      flex-grow: 1;
      width: 100%;
      vertical-align: middle;
    }
    .table {
      flex-grow: 1;
      width: 100%;
      font-size:14px;
      td{
        height: 20px;
        line-height: 20px;
      }
      th{
        height: 20px;
      }
      .label {
        background-color: #293342;
        color: $--color-font;
      }
      .value {
        background-color: #293342;
        color: #FFFFFF;
      }
      .deep-label {
        background-color: #282828 !important;
      }
      .deep-value {
        background-color: #282828  !important;
      }
    }
  }

</style>
