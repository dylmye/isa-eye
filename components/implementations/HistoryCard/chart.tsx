import ChartTooltip from "@/components/ChartTooltip";
import {
  matchFont,
  useFont,
} from "@shopify/react-native-skia";
import { Platform } from "react-native";
import { CartesianChart, Line, useChartPressState } from "victory-native";
import React from "react";

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
  const font = ["ios", "android"].includes(Platform.OS)
    ? matchFont({
        fontFamily: Platform.select({
          ios: "Helvetica",
          default: "sans-serif",
        }),
        fontSize: 9,
        fontStyle: "normal",
        fontWeight: "bold",
      })
    : useFont("sans-serif", 9);

  const { state: chartPressState, isActive: chartIsPressed } =
    useChartPressState({ x: 0, y: { cumulativeContributions: 0 } });

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
      yAxis={[{ font, lineWidth: 0 }]}
      chartPressState={chartPressState}
    >
      {({ points }) => (
        <>
          <Line
            points={points.cumulativeContributions}
            color="white"
            strokeWidth={3}
            connectMissingData
          />
          {chartIsPressed ? (
            <ChartTooltip
              x={chartPressState.x.position}
              y={chartPressState.y.cumulativeContributions.position}
            />
          ) : null}
        </>
      )}
    </CartesianChart>
  );
};

export default HistoryChart;
