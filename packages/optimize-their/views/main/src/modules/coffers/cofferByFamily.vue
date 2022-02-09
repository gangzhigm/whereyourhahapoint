<template>
  <textBox :textValue="textValue" :title="title" />
</template>
<script>
import textBox from "@/components/textBox.vue";
import { ref, inject, reactive, watchEffect, onMounted } from "vue";
export default {
  name: "cofferByFamily",
  components: {
    textBox
  },
  setup(props) {
    let textValue = ref([]);
    let title = ref("获取家庭储蓄总额");
    const electron = inject("electron");
    function getPageData() {
      electron.ipcRenderer.invoke("getCofferByFamily", "").then(result => {
        textValue.value = result;
      });
    }
    getPageData();
    return { textValue, title };
  }
};
</script>
