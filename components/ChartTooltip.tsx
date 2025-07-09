import { Circle } from "@shopify/react-native-skia";
import type { SharedValue } from "react-native-reanimated";

interface ChartTooltipProps {
  x: SharedValue<number>;
  y: SharedValue<number>;
}

const ChartTooltip = ({ x, y }: ChartTooltipProps) => (
  <Circle cx={x} cy={y} r={6} color="white" />
);

export default ChartTooltip;
