<template>
  <div class="textbox-box">
    <p class="table-item">{{ textValue }}</p>
    <p class="table-title">{{ title }}</p>
  </div>
</template>
<script>
import { ref, inject, reactive, watchEffect, onMounted } from "vue";
export default {
  name: "consumptionRecords",
  title: "消费记账",
  props: {
    textValue: Array,
    title: Array
  }
};
</script>
<style scoped lang="less">
.textbox-box {
  padding: 10px 0;
  border: 1px dotted #fff;
  box-sizing: border-box;
  display: inline-block;
  display: flex;
  flex-direction: column;
  width: 25vw;
  min-width: 400px;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  .table-item {
    font-size: 20px;
    font-weight: bold;
    margin: 0;
  }
  .table-title {
    font-size: 12px;
    font-weight: bold;
    margin: 0;
  }
}
</style>
