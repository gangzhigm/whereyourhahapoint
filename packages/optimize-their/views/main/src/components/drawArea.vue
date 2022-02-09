<template>
  <div class="draw-item">
    <h3 class="draw-title">{{ title }}</h3>
    <div :id="drawKey" class="g2plot-box"></div>
  </div>
</template>
<script>
import { drawArea } from "@/uilt/render";
import { ref, inject, reactive, watchEffect, onMounted } from "vue";
export default {
  name: "drawArea",
  title: "面积图",
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
        xField: "date",
        yField: "value",
        seriesField: "name",
        slider: {
          start: 0,
          end: 1
        },
        color: [
          "#ffa502",
          "#ff6348",
          "#ff4757",
          "#2ed573",
          "#1e90ff",
          "#3742fa",
          "#f52443",
          "#874521",
          "#0b2d64",
          "#c4be8c",
          "#cc0000",
          "#043403"
        ],
        areaStyle: {
          fillOpacity: 0.7
        },
        appendPadding: 10,
        isPercent: true,
        yAxis: {
          label: {
            formatter: value => {
              return value * 100;
            }
          }
        }
      };
      drawArea(props.drawKey, value, config);
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
