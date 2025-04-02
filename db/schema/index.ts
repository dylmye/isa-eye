import { ValueSchema } from "tinybase";
import products from "./products";
import contributions from "./contributions";

export const tableSchema = {
  products,
  contributions,
};

export const keyvalueSchema = {
  currentTaxYear: { type: 'string' } as ValueSchema
}

export type Schemas = [typeof tableSchema, typeof keyvalueSchema];

export const tableIndexes = [
  ["byTaxYear", "contributions", "taxYear"],
] as const;

export const tableRelationships = [
  ["contributionProduct", "contributions", "products", "productId"],
] as const;
