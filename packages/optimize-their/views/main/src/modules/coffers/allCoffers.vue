<template>
  <drawArea :title="title" :drawData="drawData" :drawKey="drawKey" />
</template>
<script>
import drawArea from "@/components/drawArea.vue";
import { ref, inject, reactive, watchEffect, onMounted } from "vue";
export default {
  name: "allcoffers",
  components: {
    drawArea
  },
  setup(props) {
    let drawData = ref([]);
    let drawKey = ref("allcoffers");
    let title = ref("ALL获取资产总额");
    const electron = inject("electron");
    function getPageData() {
      electron.ipcRenderer.invoke("getCofferCoverAll", "").then(result => {
        drawData.value = result;
      });
    }
    getPageData();
    return { drawData, title, drawKey };
  }
};
</script>
