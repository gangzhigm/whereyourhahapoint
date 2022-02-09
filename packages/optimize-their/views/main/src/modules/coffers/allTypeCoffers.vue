<template>
  <drawArea :title="title" :drawData="drawData" :drawKey="drawKey" />
</template>
<script>
import drawArea from "@/components/drawArea.vue";
import { ref, inject, reactive, watchEffect, onMounted } from "vue";
export default {
  name: "allTypecoffers",
  components: {
    drawArea
  },
  setup(props) {
    let drawData = ref([]);
    let drawKey = ref("allTypecoffers");
    let title = ref("ALL获取资产总额");
    const electron = inject("electron");
    function getPageData() {
      electron.ipcRenderer.invoke("getCofferCoverAllType", "").then(result => {
        drawData.value = result;
      });
    }
    getPageData();
    return { drawData, title, drawKey };
  }
};
</script>
