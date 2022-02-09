<template>
  <drawStepArea :title="title" :drawData="drawData" :drawKey="drawKey" />
</template>
<script>
import drawStepArea from "@/components/drawStepArea.vue";
import { ref, inject, reactive, watchEffect, onMounted } from "vue";
export default {
  name: "repaymentPlan",
  components: {
    drawStepArea
  },
  setup(props) {
    let drawData = ref([]);
    let drawKey = ref("repaymentPlan");
    let title = ref("还款计划记账");
    const electron = inject("electron");
    function getPageData() {
      electron.ipcRenderer.invoke("getRepaymentPlan", "").then(result => {
        drawData.value = result;
      });
    }
    getPageData();
    return { drawData, title, drawKey };
  }
};
</script>
