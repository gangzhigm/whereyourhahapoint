<template>
  <capsuleList :list="list" :title="title" :tableFormat="tableFormat" />
</template>
<script>
import capsuleList from "@/components/capsuleList.vue";
import { ref, inject, reactive, watchEffect, onMounted } from "vue";
export default {
  name: "financeRecords",
  components: {
    capsuleList
  },
  setup(props) {
    let list = ref([]);
    let title = ref("账户列表");
    const electron = inject("electron");
    function getPageData() {
      electron.ipcRenderer.invoke("getAccount", "").then(result => {
        console.info(result);
        list.value = result;
      });
    }
    getPageData();
    const tableFormat = [
      {
        name: "项目",
        value: "name"
      },
      {
        name: "类型",
        value: "type"
      }
    ];
    return { list, title, tableFormat };
  }
};
</script>
<style scoped lang="less"></style>
getLiabilitiesRecords getRevenueRecords getFinanceRecords
