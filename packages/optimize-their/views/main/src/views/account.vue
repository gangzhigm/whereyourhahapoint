<template>
  <div class="fund-box">
    <div class="fund-item">
      <accountChangeVue />
      <accountListVue />      
    </div>
  </div>
</template>
<script>

import { inject, onMounted, ref, reactive, provide, readonly } from "vue";
import accountChangeVue from '../modules/account/accountChange.vue';
import accountListVue from '../modules/account/accountList.vue';
export default {
  name: "Home",
  components: {
    accountChangeVue,
    accountListVue
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
