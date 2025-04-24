import { ValueSchema } from "tinybase";
import products from "./products";
import contributions from "./contributions";
import { RULE_NAMES } from "@/constants/rules";
import providers from "./providers";
import providerAliases from "./providerAliases";
import productTypes from "./productTypes";
import rulesets from "./rulesets";

// to-do: seeding, add relationships, replace const uses with queries

export const tableSchema = {
  products,
  contributions,
  providers,
  providerAliases,
  productTypes,
  rulesets,
};

export const keyvalueSchema = {
  currentTaxYear: { type: 'string', default: RULE_NAMES[0] } as ValueSchema
}

export type Schemas = [typeof tableSchema, typeof keyvalueSchema];

export const tableIndexes = [
  ["byTaxYear", "contributions", "taxYear"],
] as const;

export const tableRelationships = [
  ["contributionProduct", "contributions", "products", "productId"],
  ["providerAliasProvider", "providerAliases", "providers", "providerId"],
  ["productProvider", "products", "providers", "providerId"],
  ["productType", "products", "productTypes", "productTypeCode"],
] as const;
