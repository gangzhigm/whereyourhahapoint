<template>
  <div class="fund-box">
    <div class="fund-item">
      <indexFundsVue />
      <initiativeFundVue />
      <stockListVue />
      <virtualCurrencyVue />
    </div>
    <totalAmountOfFundVue />
    <allDataOfFundVue />
    <allTotalAmountOfFund />
  </div>
</template>
<script>
import allDataOfFundVue from "../modules/fund/allDataOfFund.vue";
import allTotalAmountOfFund from "../modules/fund/allTotalAmountOfFund.vue";
import indexFundsVue from "../modules/fund/indexFunds.vue";
import initiativeFundVue from "../modules/fund/initiativeFund.vue";
import stockListVue from "../modules/fund/stockList.vue";
import totalAmountOfFundVue from "../modules/fund/totalAmountOfFund.vue";
import virtualCurrencyVue from "../modules/fund/virtualCurrency.vue";
import { inject, onMounted, ref, reactive, provide, readonly } from "vue";
export default {
  name: "Home",
  components: {
    indexFundsVue,
    initiativeFundVue,
    stockListVue,
    totalAmountOfFundVue,
    virtualCurrencyVue,
    allDataOfFundVue,
    allTotalAmountOfFund
  },
  setup() {}
};
</script>
<style scoped lang="less">
.fund-box {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  background: #7b8c7c;
  color: #d0d6d0;
  .fund-item {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
  }
}
</style>
