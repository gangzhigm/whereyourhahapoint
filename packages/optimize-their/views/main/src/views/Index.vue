<template>
  <div class="index">
    <Nav v-if="inElectron" />
    <router-view v-if="inElectron" />
    <Nothing v-if="!inElectron" />
  </div>
</template>

<script>
import { provide, ref, readonly } from "vue";
import Nav from "@/components/nav.vue";
import Nothing from "@/components/nothing.vue";

export default {
  name: "Index",
  /**
   * @component Nav 导航组件
   * @component Nothing 404|无electron环境组件
   */
  components: {
    Nav,
    Nothing
  },
  setup() {
    /* 
      配置可全局使用的electron组件
      若不存在window.require功能，则不可用
    */
    const electron = window.require ? window.require("electron") : null;
    // 生成公共的electron对象
    provide("electron", readonly(electron));
    /*
      返回状态判断
      true  => 正常显示
      false => 404显示
    */
    return { inElectron: ref(electron ? true : false) };
  }
};
</script>
<style lang="less" scoped>
.index {
  position: relative;
  background: #95a5a6;
  color: #2c3e50;
  font: 14px/1.5 Helvetica Neue, Helvetica, Arial, Microsoft Yahei,
    Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  width: 100vw;
  height: 100vh;
  max-width: 1200px;
}
</style>
