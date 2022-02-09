<template>
  <textBox :textValue="textValue" :title="title" />
</template>
<script>
import textBox from "@/components/textBox.vue";
import { ref, inject, reactive, watchEffect, onMounted } from "vue";
export default {
  name: "cofferByLoanable",
  components: {
    textBox
  },
  setup(props) {
    let textValue = ref([]);
    let title = ref("获取资产可贷款的净资产总额");
    const electron = inject("electron");
    function getPageData() {
      electron.ipcRenderer.invoke("getCofferByLoanable", "").then(result => {
        textValue.value = result;
      });
    }
    getPageData();
    return { textValue, title };
  }
};
</script>
