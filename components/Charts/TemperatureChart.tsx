import { AreaChartProps } from "@opd/g2plot-react";
import AreaChart from "./AreaChart";

type LineData = {
  time: string;
  temperature: number;
};
type Props = {
  data: LineData[];
};

const getConfig = (data: LineData[]): AreaChartProps => ({
  height: 450,
  meta: { value: { maxLimit: 60 } },
  xField: "time",
  yField: "temperature",
  smooth: true,
  annotations: [
    {
      type: "regionFilter",
      top: true,
      start: ["min", 20],
      end: ["max", "min"],
      color: "#62d141",
    },
    {
      type: "regionFilter",
      top: true,
      start: ["min", 30],
      end: ["max", 20],
      color: "#ffb026",
    },
    {
      type: "regionFilter",
      top: true,
      start: ["min", "max"],
      end: ["max", 40],
      color: "#FF4D4F",
    },
  ],
  data,
});

const TurnAroundTimeChart = ({ data }: Props) => (
  <AreaChart config={getConfig(data)} />
);

export default TurnAroundTimeChart;
