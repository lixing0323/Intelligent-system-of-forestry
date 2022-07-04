<template>
  <div class="land business-card-padding-10">
    <div class="title">样地基本信息</div>
    <el-card>
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
    </el-card>
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
      hotImage: TreeImg

    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/element-variables.scss";
 .land {
   width: 100%;
 }
  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .icon-flex {
    display: flex;
    flex-wrap: nowrap;
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
      margin-left: 5px;
      border-spacing:1px;
      font-size:12px;
      td{
        height: 18px;
        line-height: 18px;
      }
      th{
        height: 18px;
        background: #f5f5f5;
      }
      .label {
        background-color: #4D8850;
        color: #FFFFFF;
      }
      .value {
        background-color: #FFFFFF;
        color: #000000;
      }
      .deep-label {
        background-color: #2E6631 !important;
      }
      .deep-value {
        background-color: #EEEEEE  !important;
      }
    }
  }

</style>
