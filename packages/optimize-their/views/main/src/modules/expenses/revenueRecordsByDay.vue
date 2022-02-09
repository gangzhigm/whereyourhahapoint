<template>
  <drawLine :title="title" :drawData="drawData" :drawKey="drawKey" />
</template>
<script>
import drawLine from "@/components/drawLine.vue";
import { ref, inject, reactive, watchEffect, onMounted } from "vue";
export default {
  name: "revenueRecords",
  components: {
    drawLine
  },
  setup(props) {
    let drawData = ref([]);
    let drawKey = ref("revenueRecords");
    let title = ref("消费记账日统计");
    const electron = inject("electron");
    function getPageData() {
      electron.ipcRenderer.invoke("getRevenueRecordsByDay", "").then(result => {
        drawData.value = result.map(item =>
          Object.assign({}, { name: item[0], value: Math.abs(Number(item[1])) })
        );
      });
    }
    getPageData();
    return { drawData, title, drawKey };
  }
};
</script>
