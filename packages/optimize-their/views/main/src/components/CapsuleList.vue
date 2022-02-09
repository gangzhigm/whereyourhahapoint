<template>
  <div class="classification-item">
    <h3 class="table-title">{{ title }}</h3>
    <div class="classification-table-box">
      <table>
        <thead>
          <tr>
            <td colspan="4"></td>
          </tr>
          <tr class="table-header">
            <td
              v-for="tableItem of tableFormat"
              :key="tableItem.value"
              class="table-header-item"
            >
              {{ tableItem.name }}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr class="table-body" v-for="(i,index) in list" :key="index">
            <td
              v-for="tableItem of tableFormat"
              :key="tableItem.value"
              :title="i[tableItem.value]"
            >
              <div class="table-body-item">
                {{ testa(tableItem, i) }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { computed, ref, inject, reactive, watchEffect, onMounted } from "vue";
export default {
  name: "classificationList",
  title: "基础列表",
  props: {
    list: Array,
    title: Array,
    tableFormat: Array
  },
  setup(props) {
    console.info(props);
    console.info(props.tableFormat);
    function testa(key, value) {
      if (key.name === "日期") {
        return `${new Date(value[key.value]).getFullYear()}.${new Date(
          value[key.value]
        ).getMonth() + 1}.${new Date(value[key.value]).getDate()}`;
        // return `${new Date(value[key.value]).getFullYear()}年${new Date(value[key.value]).getMonth()+1}月${new Date(value[key.value]).getDate()}日`;
      } else {
        return value[key.value];
      }
    }
    return { testa };
  }
};
</script>
<style scoped lang="less">
.classification-item {
  padding: 10px 0;
  border: 1px dotted #fff;
  box-sizing: border-box;
  display: inline-block;
  display: flex;
  flex-direction: column;
  width: 20vw;
  min-width: 400px;
  justify-content: flex-start;
  align-items: center;
  height: 300px;
  overflow: hidden;
}
.table-title {
  text-align: center;
  width: 100%;
  display: inline-block;
  margin: 0;
  padding: 0;
  height: 30px;
  line-height: 30px;
}
.classification-table-box {
  min-width: 400px;
  width: 100%;
  height: calc(100% - 30px);
  overflow-y: scroll;
  margin-left: 34px;
}
table {
  width: 100%;
  .table-body-item {
    cursor: default;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
  }
}
</style>
