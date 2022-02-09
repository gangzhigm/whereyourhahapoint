<template>
  <drawPie :title="title" :drawData="drawData" :drawKey="drawKey" />
</template>
<script>
import drawPie from "@/components/drawPie.vue";
import { ref, inject, reactive, watchEffect, onMounted } from "vue";
export default {
  name: "nowCoffers",
  components: {
    drawPie
  },
  setup(props) {
    let drawData = ref([]);
    let drawKey = ref("nowCoffers");
    let title = ref("获取资产分项记账");
    const electron = inject("electron");
    function getPageData() {
      electron.ipcRenderer.invoke("getNowCoffers", "").then(result => {
        drawData.value = result.map(item =>
          Object.assign({}, { name: item[1], value: Math.abs(Number(item[2])) })
        );
      });
    }
    getPageData();
    return { drawData, title, drawKey };
  }
};
</script>
