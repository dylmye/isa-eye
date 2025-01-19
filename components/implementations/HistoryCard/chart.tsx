import {
  listFontFamilies,
  matchFont,
  useFont,
} from "@shopify/react-native-skia";
import { Platform } from "react-native";
import { CartesianChart, Line } from "victory-native";

const exampleData = [
  {
    month: 1,
    cumulativeContributions: 100,
  },
  {
    month: 2,
    cumulativeContributions: 750,
  },
  {
    month: 3,
    cumulativeContributions: 2000,
  },
  {
    month: 4,
    cumulativeContributions: 1800,
  },
  {
    month: 5,
    cumulativeContributions: 5000,
  },
  {
    month: 6,
    cumulativeContributions: 9000,
  },
  {
    month: 7,
    cumulativeContributions: 12000,
  },
  {
    month: 8,
    cumulativeContributions: 14500,
  },
];

const monthLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const HistoryChart = () => {
  const systemFont = listFontFamilies();
  const font = matchFont({
    fontFamily: Platform.select({ ios: 'Helvetica', default: 'sans-serif' }),
    fontSize: 9,
    fontStyle: "normal",
    fontWeight: "bold",
  });
  return (
    <CartesianChart
      data={exampleData}
      xKey="month"
      padding={{ bottom: 4 }}
      yKeys={["cumulativeContributions"]}
      xAxis={{
        font,
        formatXLabel: (l) => monthLabels[l + 1],
        lineWidth: 0,
        labelColor: "white",
        labelOffset: 0,
      }}
    >
      {({ points }) => (
        <Line
          points={points.cumulativeContributions}
          color="white"
          strokeWidth={3}
          connectMissingData
        />
      )}
    </CartesianChart>
  );
};

export default HistoryChart;
