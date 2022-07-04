<template>
  <div class="wood-card" :style="{ left: `${left}px`, bottom: '3%', width: `${width}px`, height: '400px' }">
    <div class="title">样木基本信息</div>
    <ht-table :data="list" :stripe="false" :row-class-name="tableRowClassName">
      <ht-table-column prop="id" label="林木号" />
      <ht-table-column prop="name" label="树种学名" />
      <ht-table-column prop="cn" label="中文名" />
      <ht-table-column prop="height" label="树高(m)" />
      <ht-table-column prop="width" label="胸径(m)" />
    </ht-table>
  </div>

</template>

// 图片
<script>

export default {
  components: { },
  data() {
    return {
      width: document.documentElement.clientWidth / 3,
      left: document.documentElement.clientWidth / 3,
      list: [
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
@import "~@/styles/element-variables.scss";
.wood-card {
  background: rgba(46, 53, 71, 0.5);
  background-clip: border-box;
  border-width: 0;
  border-radius: 0.4rem;
  color: $--color-font;
  display: block;
  position: absolute;
  padding: 20px;
}

  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }
</style>
