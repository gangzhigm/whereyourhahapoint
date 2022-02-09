<template>
  <div class="home">
    <div class="box">
      <accountChangeVue />
      <flowChange />
    </div>
  </div>
</template>
<script>
import { inject, onMounted, ref, reactive, provide, readonly } from "vue";
import accountChangeVue from "../modules/form/accountChange.vue";
import flowChange from "../modules/form/flowChange.vue";
export default {
  name: "Home",
  components: { accountChangeVue, flowChange },
  setup() {
    const electron = inject("electron");
    function getPageData(data) {
      electron.ipcRenderer
        .invoke("getHomeData", JSON.stringify(data))
        .then(result => {
          console.info(result);
        });
    }
    function testawe(event) {
      getPageData(formData);
    }
    const formData = reactive({
      date: "2020-12-23",
      name: "项目",
      value: 1234,
      type: 1,
      mark: "hahaha"
    });
    return { testawe, formData };
  }
};
</script>
<style scoped lang="less">
@media screen and (max-width: 1000px) {
  .box {
    min-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
}
@media screen and (min-width: 1000px) {
  .box {
    display: grid;
    grid-template-columns: 50% 50%;
  }
}
.block {
  width: 100%;
  min-width: 500px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.g2plot-box {
  width: 100%;
  height: 100%;
}
.block-title {
  margin: 0;
}
.block-body {
  height: 300px;
  width: 100%;
}
</style>
