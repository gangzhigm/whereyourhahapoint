import { Line, Pie, Area } from "@antv/g2plot";
function drawPie(id, data, customConfig) {
  if (data.length === 0) {
    return;
  }
  if (document.querySelector(`#${id}`)) {
    const config = Object.assign(
      {
        data,
        angleField: "value",
        colorField: "name",
        radius: 1,
        innerRadius: 0.64,
        meta: {
          value: {
            formatter: v => `¥ v`
          }
        }
      },
      customConfig
    );
    const piePlot = new Pie(id, config);
    piePlot.render();
  } else {
    setTimeout(() => {
      drawArea(id, data, customConfig);
    }, 1000);
  }
}

function drawArea(id, data, customConfig) {
  if (data.length === 0) {
    return;
  }
  if (document.querySelector(`#${id}`)) {
    const config = Object.assign(
      {
        data,
        xField: "date",
        yField: "value",
        seriesField: "name",
        slider: {
          start: 0.1,
          end: 0.9
        }
      },
      customConfig
    );
    const area = new Area(id, config);
    area.render();
  } else {
    setTimeout(() => {
      drawArea(id, data, customConfig);
    }, 1000);
  }
}

function drawLine(id, data, customConfig) {
  if (data.length === 0) {
    return;
  }

  if (document.querySelector(`#${id}`)) {
    const config = Object.assign(
      {
        data,
        xField: "name",
        yField: "value"
      },
      customConfig
    );
    const line = new Line(id, config);

    line.render();
  } else {
    setTimeout(() => {
      drawLine(id, data, customConfig);
    }, 1000);
  }
}
export { drawLine, drawArea, drawPie };
