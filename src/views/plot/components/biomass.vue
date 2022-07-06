<template>
  <div>
    <div class="statistics input-card" :style="{left:'3%', right: '3%', width: `${width}px`}">
      <div class="title">样本数据统计</div>
      <ht-action-panel class="table-container business-search">
        <template slot="left">
          <el-input v-model="listQuery.name" placeholder="请输入样本名称" class="filter-item" @keyup.enter.native="onSearch" />
          <el-button type="primary" icon="el-icon-search" @click="onSearch">查询</el-button>
        </template>
      </ht-action-panel>
      <ht-table ref="table" v-loading="isLoading" height="auto" class="table" :data="list" :row-class-name="tableRowClassName">
        <ht-table-column label="请选择" width="60">
          <template v-slot="{ row }">
            <el-radio v-model="radioSelectIndex" :label="row.id"> &nbsp;</el-radio>
          </template>
        </ht-table-column>
        <ht-table-column type="index" width="55" label="序号" />
        <ht-table-column label="样本名称" prop="name" min-width="100" />
        <ht-table-column label="树径初始值" prop="width" min-width="100" />
        <ht-table-column label="树径增长值" prop="height" min-width="100" />
        <ht-table-column label="电量" prop="count" min-width="100" />
        <ht-table-column label="信号" prop="time" min-width="160" />
        <ht-table-column label="备注" prop="comment" min-width="160" />
      </ht-table>
    </div>

    <div class="record input-card" :style="{left:'3%', right: '3%', width: `${width}px`}">
      <div class="title">【{{ recordTitle }}】趋势记录</div>
      <line-e-charts :width="width" :height="300" :chart-data="lineData" />
    </div>
  </div>
</template>

<script>
// 样地数据统计
import listMixin from '@/views/mixins/listMixin'
import LineECharts from './line'

export default {
  components: { LineECharts },
  mixins: [listMixin],
  props: {
  },
  data() {
    return {
      width: document.documentElement.clientWidth * 0.94,
      listQuery: {
        name: ''
      },
      lineData: [],
      radioSelectIndex: '1'
    }
  },
  computed: {
    recordTitle() {
      const index = this.list.findIndex(item => item.id === this.radioSelectIndex)
      return index !== -1 ? this.list[index].name : this.list[0].name
    }
  },
  created() {
    this.list = [
      { id: '1', name: '样本1', width: '52.7cm', height: '0.02m', count: '85%', time: '75%', comment: '备注1' },
      { id: '2', name: '样本2', width: '35.4cm', height: '0.01cm', count: '85%', time: '80%', comment: '备注1' },
      { id: '3', name: '样本3', width: '96cm', height: '0.02cm', count: '90%', time: '70%', comment: '备注1' },
      { id: '4', name: '样本4', width: '64cm', height: '0.05cm', count: '95%', time: '40%', comment: '备注1' },
      { id: '5', name: '样本5', width: '34cm', height: '16cm', count: '16%', time: '30%', comment: '备注1' },
      { id: '6', name: '样本6', width: '34cm', height: '16cm', count: '16%', time: '30%', comment: '备注1' },
      { id: '7', name: '样本7', width: '34cm', height: '16cm', count: '16%', time: '30%', comment: '备注1' }
    ]
    this.lineData = [
      { name: '树径初始值', type: 'line', stack: 'Total', data: [120, 132, 101, 134, 90, 230, 210],
        itemStyle: { normal: { lineStyle: { color: '#73A8E4' }}}
      },
      {
        name: '树径增长值', type: 'line', stack: 'Total', data: [220, 182, 191, 234, 290, 330, 310],
        itemStyle: { normal: { lineStyle: { color: '#2A9A30' }}}
      }
    ]
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 1) {
        return 'light-colour-row'
      }
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
  margin-top: 20px;
  .title {
    font-size: 20px;
  }
  .table-container {
    margin-top: 20px;
    .table {
    }
  }
}

.statistics {
}
.record {
}

</style>

