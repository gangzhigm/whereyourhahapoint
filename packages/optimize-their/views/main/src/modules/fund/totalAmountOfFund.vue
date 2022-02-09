<template>
  <drawPie :title="title" :drawData="drawData" :drawKey="drawKey" />
</template>
<script>
import drawPie from "@/components/drawPie.vue";
import { ref, inject, reactive, watchEffect, onMounted } from "vue";
export default {
  name: "totalAmountOfFund",
  components: {
    drawPie
  },
  setup(props) {
    let drawData = ref([]);
    let drawKey = ref("totalAmountOfFund");
    let title = ref("获取理财分类总额");
    const electron = inject("electron");
    function getPageData() {
      electron.ipcRenderer.invoke("getTotalAmountOfFund", "").then(result => {
        // list.value = result;
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
