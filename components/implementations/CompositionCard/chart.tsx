import { Pie, PolarChart } from "victory-native";

const exampleData = [
  {
    value: 33,
    colour: "#000000",
    label: "ISA A",
  },
  {
    value: 33,
    colour: "#ffffff",
    label: "ISA B",
  },
  {
    value: 33,
    colour: "#fe89df",
    label: "ISA Rae",
  },
];

const CompositionChart = () => (
  <PolarChart
    data={exampleData}
    colorKey="colour"
    labelKey="label"
    valueKey="value"
  >
    <Pie.Chart size={150} innerRadius={"60%"} startAngle={90} />
  </PolarChart>
);

export default CompositionChart;
