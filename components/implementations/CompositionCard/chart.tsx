import { Pie, PolarChart } from "victory-native";
import type CompositionChartProps from "./interface";

const CompositionChart = ({ products }: CompositionChartProps) => {
  return (
    <PolarChart
      data={products ?? []}
      colorKey="colour"
      labelKey="label"
      valueKey="value"
    >
      <Pie.Chart size={150} innerRadius={"60%"} startAngle={90} />
    </PolarChart>
  );
};

export default CompositionChart;
