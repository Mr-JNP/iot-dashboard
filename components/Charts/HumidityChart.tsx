import { AreaChartProps } from "@opd/g2plot-react";
import AreaChart from "./AreaChart";

type LineData = {
  time: string;
  value: number;
};
type Props = {
  data: LineData[];
};

const getConfig = (data: LineData[]): AreaChartProps => ({
  height: 400,
  xField: "time",
  yField: "value",
  smooth: true,
  color: "#1c90ff",
  data,
});

const TurnAroundTimeChart = ({ data }: Props) => (
  <AreaChart config={getConfig(data)} />
);

export default TurnAroundTimeChart;
