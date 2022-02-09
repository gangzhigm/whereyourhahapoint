<template>
  <div class="draw-item">
    <h3 class="draw-title">{{ title }}</h3>
    <div :id="drawKey" class="g2plot-box"></div>
  </div>
</template>
<script>
import { drawLine } from "@/uilt/render";
import { ref, inject, reactive, watchEffect, onMounted } from "vue";
export default {
  name: "drawLine",
  title: "折线图",
  props: {
    drawData: Array,
    title: Array,
    drawKey: String
  },
  setup(props) {
    watchEffect(() => {
      render(props.drawData);
    });
    function render(value) {
      const config = {
        width: 1100,
        height: 300,
        xField: "name",
        yField: "value",
        slider: {
          start: 0,
          end: 1
        },
        theme: {
          defaultColor: "#ff0000",
          colors10: [
            "#FF6B3B",
            "#626681",
            "#FFC100",
            "#9FB40F",
            "#76523B",
            "#DAD5B5",
            "#0E8E89",
            "#E19348",
            "#F383A2",
            "#247FEA"
          ]
        }
      };
      drawLine(props.drawKey, value, config);
    }
  }
};
</script>
<style scoped lang="less">
.draw-item {
  padding-top: 10px;
  border: 2px dotted #fff;
  box-sizing: border-box;
  display: inline-block;
  display: flex;
  flex-direction: column;
  min-width: 900px;
  width: 100%;
  justify-content: flex-start;
  min-height: 300px;
  align-items: flex-start;
  overflow: hidden;
}
.draw-title {
  text-align: center;
  width: 100%;
  display: inline-block;
  margin: 0;
  padding: 0;
  display: block;
  width: 100%;
  text-align: center;
}
.g2plot-box {
  background: #fff;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
}
</style>
