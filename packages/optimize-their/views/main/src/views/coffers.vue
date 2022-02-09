<template>
  <div class="coffers-box">
    <div class="coffers-item">
      <coffer />
      <cofferByFamily />
      <cofferByLoanable />
      <cofferByNetAsset />
      <cofferByNetAssetAndFamily />
      <cofferByNetAssetCanUse />
      <cofferBySocialInsurance />
    </div>
    <cofferByType />
    <nowCoffers />
    <allCoffers />
    <allTypeCoffers />
  </div>
</template>
<script>
import coffer from "@/modules/coffers/coffer.vue";
import cofferByFamily from "@/modules/coffers/cofferByFamily.vue";
import cofferByLoanable from "@/modules/coffers/cofferByLoanable.vue";
import cofferByNetAsset from "@/modules/coffers/cofferByNetAsset.vue";
import cofferByNetAssetAndFamily from "@/modules/coffers/cofferByNetAssetAndFamily.vue";
import cofferByNetAssetCanUse from "@/modules/coffers/cofferByNetAssetCanUse.vue";
import cofferBySocialInsurance from "@/modules/coffers/cofferBySocialInsurance.vue";
import cofferByType from "@/modules/coffers/cofferByType.vue";
import nowCoffers from "@/modules/coffers/nowCoffers.vue";
import allCoffers from "@/modules/coffers/allCoffers.vue";
import allTypeCoffers from "@/modules/coffers/allTypeCoffers.vue";

import { inject, onMounted, ref, reactive, provide, readonly } from "vue";
export default {
  name: "Home",
  components: {
    coffer,
    cofferByFamily,
    cofferByLoanable,
    cofferByNetAsset,
    cofferByNetAssetAndFamily,
    cofferByNetAssetCanUse,
    cofferBySocialInsurance,
    cofferByType,
    nowCoffers,
    allCoffers,
    allTypeCoffers
  },
  setup() {}
};
</script>
<style scoped lang="less">
.coffers-box {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  background: #7b8c7c;
  color: #d0d6d0;
  .coffers-item {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
  }
}
</style>
