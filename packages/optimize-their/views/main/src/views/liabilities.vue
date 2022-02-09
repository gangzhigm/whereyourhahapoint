<template>
  <div class="liabilities-box">
    <div class="liabilities-item">
      <repaymentPlan />
      <repaymentRecords />
      <borrowingRecords />
    </div>
    <typeliabilitiesRecords />
    <nowLiabilitiesR />
  </div>
</template>
<script>
import repaymentPlan from "@/modules/liabilities/repaymentPlan.vue";
import repaymentRecords from "@/modules/liabilities/repaymentRecords.vue";
import typeliabilitiesRecords from "@/modules/liabilities/typeliabilitiesRecords.vue";
import borrowingRecords from "@/modules/liabilities/borrowingRecords.vue";
import nowLiabilitiesR from "@/modules/liabilities/nowLiabilitiesRecords.vue";
import { inject, onMounted, ref, reactive, provide, readonly } from "vue";
export default {
  name: "Home",
  components: {
    repaymentPlan,
    repaymentRecords,
    typeliabilitiesRecords,
    borrowingRecords,
    nowLiabilitiesR
  },
  setup() {}
};
</script>
<style scoped lang="less">
.liabilities-box {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  background: #7b8c7c;
  color: #d0d6d0;
  .liabilities-item {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
  }
}
</style>
