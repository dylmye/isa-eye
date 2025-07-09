export default interface CompositionChartProps {
  products: {
    /** Value 0 - 100 as percentage of chart */
    value: number;
    /** Hex colour */
    colour: string;
    /** Account name */
    label: string;
  }[];
}
