import { TablesSchema, ValuesSchema } from "tinybase";
import products from "./products";
import contributions from "./contributions";

export const tableSchema: TablesSchema = {
  products,
  contributions,
};

export const keyvalueSchema: ValuesSchema = {
  currentTaxYear: { type: 'string' }
}

export type Schemas = [typeof tableSchema, typeof keyvalueSchema];

export const tableIndexes: string[][] = [
  ["byTaxYear", "contributions", "taxYear"],
]

export const tableRelationships: string[][] = [
  ["contributionProduct", "contributions", "products", "productId"],
];
