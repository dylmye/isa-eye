import { ValueSchema } from "tinybase";

import { RULE_NAMES } from "@/constants/rules";
import products from "./products";
import annualBalances from "./annualBalances";
import providers from "./providers";
import providerAliases from "./providerAliases";
import productTypes from "./productTypes";
import rulesets from "./rulesets";
import rulesetExceptions from "./rulesetExceptions";

// to-do: add relationships, replace const uses with queries

export const tableSchema = {
  products,
  annualBalances,
  providers,
  providerAliases,
  productTypes,
  rulesets,
  rulesetExceptions,
};

export const keyvalueSchema = {
  /** The tax year currently visible, to be used for nav and actions */
  currentTaxYear: { type: 'string', default: RULE_NAMES[0] } as ValueSchema
}

export type Schemas = [typeof tableSchema, typeof keyvalueSchema];

export const tableIndexes = [
  ["byTaxYear", "annualBalances", "taxYear"],
] as const;

export const tableRelationships = [
  ["annnualBalanceProduct", "annualBalances", "products", () => "productId"],
  ["providerAliasProvider", "providerAliases", "providers", () => "providerId"],
  ["productProvider", "products", "providers", () => "providerId"],
  ["productType", "products", "productTypes", () => "productTypeCode"],
  ["rulesetExceptionProduct", "rulesetExceptions", "products", () => "productId"],
  ["rulesetExceptionRuleset", "rulesetExceptions", "rulesets", () => "rulesetId"]
] as const;
