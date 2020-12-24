import React, { useRef } from "react";
import { AreaChart, AreaChartProps } from "@opd/g2plot-react";

type Props = {
  config: AreaChartProps;
};

const CustomableAreaChart = ({ config }: Props) => {
  const chartRef: any = useRef();
  return <AreaChart {...config} chartRef={chartRef} />;
};

export default CustomableAreaChart;
