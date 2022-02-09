<template>
  <drawArea :title="title" :drawData="drawData" :drawKey="drawKey" />
</template>
<script>
import drawArea from "@/components/drawArea.vue";
import { ref, inject, reactive, watchEffect, onMounted } from "vue";
export default {
  name: "coverage",
  components: {
    drawArea
  },
  setup(props) {
    let drawData = ref([]);
    let drawKey = ref("coverage");
    let title = ref("覆盖积累");
    const electron = inject("electron");
    function getPageData() {
      electron.ipcRenderer.invoke("getCoverage", "").then(result => {
        drawData.value = result;
      });
    }
    getPageData();
    return { drawData, title, drawKey };
  }
};
</script>
<style scoped lang="less"></style>
getLiabilitiesRecords getRevenueRecords getFinanceRecords
