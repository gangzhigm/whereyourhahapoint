<template>
  <drawPie :title="title" :drawData="drawData" :drawKey="drawKey" />
</template>
<script>
import drawPie from "@/components/drawPie.vue";
import { ref, inject, reactive, watchEffect, onMounted } from "vue";
export default {
  name: "nowconsumptionRecords",
  components: {
    drawPie
  },
  setup(props) {
    let drawData = ref([]);
    let drawKey = ref("nowconsumptionRecords");
    let title = ref(
      new Date().getMonth() + 1 === 12
        ? `${new Date().getFullYear() + 1}-1当月还款记账`
        : `${new Date().getFullYear()}-${new Date().getMonth() + 2}当月还款记账`
    );
    const electron = inject("electron");
    function getPageData() {
      electron.ipcRenderer
        .invoke("getNowLiabilitiesRecords", "")
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
