<template>
  <drawStepArea :title="title" :drawData="drawData" :drawKey="drawKey" />
</template>
<script>
import drawStepArea from "@/components/drawStepArea.vue";
import { ref, inject, reactive, watchEffect, onMounted } from "vue";
export default {
  name: "allTotalAmountOfFund",
  components: {
    drawStepArea
  },
  setup(props) {
    let drawData = ref([]);
    let drawKey = ref("allTotalAmountOfFund");
    let title = ref("全部分类总数据");
    const electron = inject("electron");
    function getPageData() {
      electron.ipcRenderer
        .invoke("getAllTotalAmountOfFund", "")
        .then(result => {
          drawData.value = result;
        });
    }
    getPageData();
    return { drawData, title, drawKey };
  }
};
</script>
