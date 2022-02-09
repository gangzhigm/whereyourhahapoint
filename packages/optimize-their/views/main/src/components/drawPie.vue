<template>
  <div class="draw-item">
    <h3 class="draw-title">{{ title }}</h3>
    <div :id="drawKey" class="g2plot-box"></div>
  </div>
</template>
<script>
import { drawPie } from "@/uilt/render";
import { ref, inject, reactive, watchEffect, onMounted } from "vue";
export default {
  name: "drawPie",
  title: "饼图",
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
        appendPadding: 10,
        angleField: "value",
        colorField: "name",
        radius: 1,
        innerRadius: 0.64,
        meta: {
          value: {
            formatter: v => `¥ ${v.toFixed(2)}`
          }
        },
        label: {
          type: "inner",
          offset: "-50%",
          autoRotate: false,
          style: { textAlign: "center" },
          formatter: ({ percent }) => `${(percent * 100).toFixed(0)}%`
        },
        statistic: {
          title: {
            offsetY: -8
          },
          content: {
            offsetY: -4
          }
        }
      };
      drawPie(props.drawKey, value, config);
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
