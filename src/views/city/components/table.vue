<template>
  <div class="input-card" :style="{left:'3%', bottom: '3%', width: `${width}px`, height: '430px'}">
    <div class="title">样地数据统计</div>
    <ht-action-panel class="table-container business-search">
      <template slot="left">
        <el-input v-model="listQuery.plot" placeholder="请输入样地区域" class="filter-item" @keyup.enter.native="onSearch" />
        <el-date-picker
          v-model="listQuery.date"
          type="daterange"
          placement="bottom-start"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions"
        />
        <el-button type="primary" icon="el-icon-search" @click="onSearch">查询</el-button>
      </template>
    </ht-action-panel>
    <ht-table ref="table" v-loading="isLoading" height="auto" class="table" :data="list" :row-class-name="tableRowClassName">
      <ht-table-column type="index" width="55" label="序号" />
      <ht-table-column label="样地区域" prop="area" min-width="100" />
      <ht-table-column label="树径" prop="width" min-width="100" />
      <ht-table-column label="树高" prop="height" min-width="100" />
      <ht-table-column label="样本个数" prop="count" min-width="100" />
      <ht-table-column label="采集时间" prop="time" min-width="160" />
      <ht-table-column label="操作" :min-width="120">
        <template slot-scope="{ row }">
          <el-button type="text" class="warning" @click="onView(row)">查看详情</el-button>
        </template>
      </ht-table-column>
    </ht-table>
  </div>
</template>

<script>
// 样地数据统计
import listMixin from '@/views/mixins/listMixin'

export default {
  components: { },
  mixins: [listMixin],
  props: {
  },
  data() {
    return {
      width: document.documentElement.clientWidth * 0.94,
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
      listQuery: {
        date: []
      }
    }
  },
  computed: {
  },
  created() {
    this.list = [
      { area: '临渭区', width: '34cm', height: '16m', count: '18', time: '2022-07-04 10:41' },
      { area: '韩城市', width: '34cm', height: '16m', count: '18', time: '2022-07-04 10:41' },
      { area: '华阴市', width: '34cm', height: '16m', count: '18', time: '2022-07-04 10:41' },
      { area: '华州区', width: '34cm', height: '16m', count: '18', time: '2022-07-04 10:41' },
      { area: '潼关县', width: '34cm', height: '16m', count: '18', time: '2022-07-04 10:41' },
      { area: '大荔县', width: '34cm', height: '16m', count: '18', time: '2022-07-04 10:41' }
    ]
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 1) {
        return 'light-colour-row'
      }
    },
    onView(row) {
      this.$router.push({ name: 'CountryDetails', params: { id: row.id ? row.id : 1 }})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/element-variables.scss";
.input-card {
  background: rgba(46, 53, 71, 0.5);
  background-clip: border-box;
  border-width: 0;
  border-radius: 0.4rem;
  color: $--color-font;
  display: block;
  padding: 20px;
  position: absolute;
  .title {
    font-size: 24px;
    font-weight: bold;
    padding: 20px 0 0 20px;
  }
  .table-container {
    margin-top: 20px;
    .table {
    }
  }
}
</style>

