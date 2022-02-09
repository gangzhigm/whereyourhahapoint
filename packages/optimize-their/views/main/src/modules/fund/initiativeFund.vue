<template>
  <classificationList :list="list" :title="title" :tableFormat="tableFormat" />
</template>
<script>
import classificationList from "@/components/classificationList.vue";
import { ref, inject, reactive, watchEffect, onMounted } from "vue";
export default {
  name: "initiativeFund",
  components: {
    classificationList
  },
  setup(props) {
    let list = ref([]);
    let title = ref("获取主动基金列表");
    const electron = inject("electron");
    function getPageData() {
      electron.ipcRenderer.invoke("getInitiativeFund", "").then(result => {
        list.value = result;
      });
    }
    getPageData();
    const tableFormat = [
      {
        name: "项目",
        value: 0
      },
      {
        name: "金额",
        value: 1
      },
      {
        name: "编码",
        value: 2
      }
    ];
    return { list, title, tableFormat };
  }
};
</script>
