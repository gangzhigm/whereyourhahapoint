<template>
  <div>
    <drawPie :title="title" :drawData="drawData" :drawKey="drawKey" />
  </div>
</template>
<script>
import drawPie from "@/components/drawPie.vue";
import { ref, inject, reactive, watchEffect, onMounted } from "vue";
export default {
  name: "cofferByType",
  components: {
    drawPie
  },
  setup(props) {
    let drawData = ref([]);
    let drawKey = ref("cofferByType");
    let title = ref("获取资产分类列表");
    const electron = inject("electron");
    function getPageData() {
      electron.ipcRenderer.invoke("getCofferByType", "").then(result => {
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
