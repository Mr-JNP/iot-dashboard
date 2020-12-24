import React, { useRef } from "react";
import { RingProgressChart, RingProgressChartProps } from "@opd/g2plot-react";

const config: RingProgressChartProps = {
  height: 200,
  width: 200,
  autoFit: false,
  percent: 0.6,
  color: ["#F4664A", "#E8EDF3"],
  innerRadius: 0.85,
  radius: 0.98,
  statistic: {
    title: {
      style: { color: "#363636", fontSize: "12px", lineHeight: "14px" },
      formatter: () => "进度",
    },
  },
};

const RingChart = () => {
  const chartRef: any = useRef();
  return <RingProgressChart {...config} chartRef={chartRef} />;
};

export default RingChart;
