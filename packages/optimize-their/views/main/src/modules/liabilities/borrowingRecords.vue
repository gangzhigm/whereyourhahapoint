<template>
  <classificationList :list="list" :title="title" :tableFormat="tableFormat" />
</template>
<script>
import classificationList from "@/components/classificationList.vue";
import { ref, inject, reactive, watchEffect, onMounted } from "vue";
export default {
  name: "consumptionRecords",
  components: {
    classificationList
  },
  setup(props) {
    let list = ref([]);
    let title = ref("借款记账");
    const electron = inject("electron");
    function getPageData() {
      electron.ipcRenderer.invoke("getBorrowingRecords", "").then(result => {
        list.value = result;
      });
    }
    getPageData();
    const tableFormat = [
      {
        name: "日期",
        value: 0
      },
      {
        name: "项目",
        value: 1
      },
      {
        name: "金额",
        value: 2
      },
      {
        name: "备注",
        value: 5
      }
    ];
    return { list, title, tableFormat };
  }
};
</script>
