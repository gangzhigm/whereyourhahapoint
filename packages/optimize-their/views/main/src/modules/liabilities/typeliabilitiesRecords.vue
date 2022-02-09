<template>
  <drawPie :title="title" :drawData="drawData" :drawKey="drawKey" />
</template>
<script>
import drawPie from "@/components/drawPie.vue";
import { ref, inject, reactive, watchEffect, onMounted } from "vue";
export default {
  name: "consumptionRecords",
  components: {
    drawPie
  },
  setup(props) {
    let drawData = ref([]);
    let drawKey = ref("consumptionRecords");
    let title = ref("总欠款类型记账");
    const electron = inject("electron");
    function getPageData() {
      electron.ipcRenderer
        .invoke("getTypeliabilitiesRecords", "")
        .then(result => {
          drawData.value = result.map(item =>
            Object.assign(
              {},
              { name: item[0], value: Math.abs(Number(item[1])) }
            )
          );
        });
    }
    getPageData();
    return { drawData, title, drawKey };
  }
};
</script>
