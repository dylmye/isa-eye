import { ValueSchema } from "tinybase";

import annualBalances, { AnnualBalance } from "./annualBalances";
import products, { Product } from "./products";
import providers, { Provider } from "./providers";
import providerAliases, { ProductAlias } from "./providerAliases";
import productTypes, { ProductType } from "./productTypes";
import rulesets, { Ruleset } from "./rulesets";
import rulesetExceptions, { RulesetException } from "./rulesetExceptions";
import rulesetsSeedData from "../seedData/rulesets";

export const tableSchema = {
  annualBalances,
  products,
  providers,
  providerAliases,
  productTypes,
  rulesets,
  rulesetExceptions,
};

export {
  AnnualBalance,
  Product,
  Provider,
  ProductAlias,
  ProductType,
  Ruleset,
  RulesetException,
}

export const keyvalueSchema = {
  /** The tax year currently visible, to be used for nav and actions */
  currentTaxYear: { type: 'string', default: rulesetsSeedData[rulesetsSeedData.length - 1].name } as ValueSchema
}

export type Schemas = [typeof tableSchema, typeof keyvalueSchema];

export const tableIndexes = [
  ["byTaxYear", "annualBalances", "rulesetId"],
] as const;

export const tableRelationships = [
  ["annnualBalanceProduct", "annualBalances", "products", () => "productId"],
  ["annualBalanceRuleset", "annualBalances", "rulesets", () => "rulesetId"],
  ["providerAliasProvider", "providerAliases", "providers", () => "providerId"],
  ["productProvider", "products", "providers", () => "providerId"],
  ["productType", "products", "productTypes", () => "productTypeCode"],
  ["rulesetExceptionProduct", "rulesetExceptions", "products", () => "productId"],
  ["rulesetExceptionRuleset", "rulesetExceptions", "rulesets", () => "rulesetId"]
] as const;
