import type { ValueSchema } from "tinybase";
import rulesetsSeedData from "../seedData/rulesets";
import annualBalances, { AnnualBalance } from "./annualBalances";
import products, { Product } from "./products";
import productTypes, { ProductType } from "./productTypes";
import providerAliases, { ProductAlias } from "./providerAliases";
import providers, { Provider } from "./providers";
import rulesetExceptions, { RulesetException } from "./rulesetExceptions";
import rulesets, { Ruleset } from "./rulesets";

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
};

export const keyvalueSchema = {
  /** The tax year currently visible, to be used for nav and actions */
  currentTaxYear: {
    type: "string",
    default: rulesetsSeedData[rulesetsSeedData.length - 1].name,
  } as ValueSchema,
};

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
  [
    "rulesetExceptionProduct",
    "rulesetExceptions",
    "products",
    () => "productId",
  ],
  [
    "rulesetExceptionRuleset",
    "rulesetExceptions",
    "rulesets",
    () => "rulesetId",
  ],
] as const;
