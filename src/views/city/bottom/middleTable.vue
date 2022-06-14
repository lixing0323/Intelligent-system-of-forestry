<template>
  <div class="wood business-card-padding-10">
    <div class="title">样木基本信息</div>
    <el-card>
      <ht-table :data="list" :stripe="false" :row-class-name="tableRowClassName">
        <ht-table-column width="80" prop="id" label="林木号" />
        <ht-table-column prop="name" label="树种学名" />
        <ht-table-column prop="cn" label="中文名" />
        <ht-table-column width="80" prop="height" label="树高(m)" />
        <ht-table-column width="80" prop="width" label="胸径(m)" />
      </ht-table>
    </el-card>
  </div>

</template>

// 图片
<script>

export default {
  components: { },
  data() {
    return {
      list: [
        { id: '001', name: 'Platycladus oriental', cn: '侧柏', height: '5.214', width: '5.27' },
        { id: '001', name: 'Platycladus oriental', cn: '侧柏', height: '5.214', width: '5.27' },
        { id: '001', name: 'Platycladus oriental', cn: '侧柏', height: '5.214', width: '5.27' },
        { id: '001', name: 'Platycladus oriental', cn: '侧柏', height: '5.214', width: '5.27' },
        { id: '001', name: 'Platycladus oriental', cn: '侧柏', height: '5.214', width: '5.27' },
        { id: '001', name: 'Platycladus oriental', cn: '侧柏', height: '5.214', width: '5.27' },
        { id: '001', name: 'Platycladus oriental', cn: '侧柏', height: '5.214', width: '5.27' },
        { id: '001', name: 'Platycladus oriental', cn: '侧柏', height: '5.214', width: '5.27' },
        { id: '001', name: 'Platycladus oriental', cn: '侧柏', height: '5.214', width: '5.27' },
        { id: '001', name: 'Platycladus oriental', cn: '侧柏', height: '5.214', width: '5.27' },
        { id: '001', name: 'Platycladus oriental', cn: '侧柏', height: '5.214', width: '5.27' },
        { id: '001', name: 'Platycladus oriental', cn: '侧柏', height: '5.214', width: '5.27' }
      ]
    }
  },
  created() {
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      return rowIndex % 2 === 0 ? 'light-colour-row' : 'deep-colour-row'
    },
    tableHeaderCellStyle({ row, column, rowIndex, columnIndex }) {
      return { color: '#fff', 'background-color': '#5382CC' }
    }
  }
}
</script>

<style lang="scss" scoped>
.wood {
  width: 100%;
}

  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }
</style>
