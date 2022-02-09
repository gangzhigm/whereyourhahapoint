<template>
  <div class="expenses-box">
    <div class="expenses-item">
      <idleRecords />
      <spendingRecords />
      <incomeRecords />
      <consumptionRecords />
      <financeRecords />
      <liabilitiesRecords />
      <revenueRecords />
    </div>
    <spendingRecordsByDay />
    <consumptionRecordsByDay />
    <incomeRecordsByDay />
    <financeRecordsByDay />
    <liabilitiesRecordsByDay />
    <revenueRecordsByDay />
    <coverage />
  </div>
</template>
<script>
import idleRecords from "@/modules/expenses/idleRecords.vue";
import consumptionRecords from "@/modules/expenses/consumptionRecords.vue";
import financeRecords from "@/modules/expenses/financeRecords.vue";
import incomeRecords from "@/modules/expenses/incomeRecords.vue";
import liabilitiesRecords from "@/modules/expenses/liabilitiesRecords.vue";
import revenueRecords from "@/modules/expenses/revenueRecords.vue";
import spendingRecords from "@/modules/expenses/spendingRecords.vue";
import spendingRecordsByDay from "@/modules/expenses/spendingRecordsByDay.vue";
import consumptionRecordsByDay from "@/modules/expenses/consumptionRecordsByDay.vue";
import financeRecordsByDay from "@/modules/expenses/financeRecordsByDay.vue";
import incomeRecordsByDay from "@/modules/expenses/incomeRecordsByDay.vue";
import liabilitiesRecordsByDay from "@/modules/expenses/liabilitiesRecordsByDay.vue";
import revenueRecordsByDay from "@/modules/expenses/revenueRecordsByDay.vue";
import coverage from "@/modules/expenses/coverage.vue";

import { inject, onMounted, ref, reactive, provide, readonly } from "vue";
export default {
  name: "Home",
  components: {
    idleRecords,
    consumptionRecords,
    financeRecords,
    incomeRecords,
    liabilitiesRecords,
    revenueRecords,
    spendingRecords,
    spendingRecordsByDay,
    consumptionRecordsByDay,
    financeRecordsByDay,
    incomeRecordsByDay,
    liabilitiesRecordsByDay,
    revenueRecordsByDay,
    coverage
  },
  setup() {}
};
</script>
<style scoped lang="less">
.expenses-box {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  background: #7b8c7c;
  color: #d0d6d0;
  .expenses-item {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
  }
}
</style>
