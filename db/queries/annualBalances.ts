import { Queries, ResultRow } from "tinybase/with-schemas";
import { AnnualBalance, Schemas } from "../schema";

export const allContributions = (queries: Queries<Schemas>) =>
  queries.setQueryDefinition(
    "allContributions",
    "annualBalances",
    ({ select, join }) => {
      select("rulesetId");
      select("productId");
      select("deductedFromAllowancePence");

      join("products", "productId");
      select("products", "friendlyName").as("productFriendlyName");
      select("products", "colour").as("productColour");
      // select("products", "providerName").as("productProviderName");
      // select("products", "productTypeName").as("productProductTypeName");
    }
  );

export interface AllContributionsRow extends ResultRow, Required<Pick<AnnualBalance, 'rulesetId' | 'productId' | 'deductedFromAllowancePence'>> {
  productFriendlyName: string;
  productColour: string;
}

export const remainingBalanceByYear = (queries: Queries<Schemas>) =>
  queries.setQueryDefinition(
    "remainingBalanceByYear",
    "annualBalances",
    ({ select, group }) => {
      select("rulesetId");
      select("deductedFromAllowancePence");
      group("deductedFromAllowancePence", (cells) => {
        const calculatedValue = cells.reduce<number>((acc, curr) => acc - (Number.parseFloat(curr as string) / 100), 20_000);
        // We don't show negative balance
        return Math.max(calculatedValue, 0);
      }).as("remainingBalance");
    }
  );

export interface RemainingBalanceByYearRow extends ResultRow, Required<Pick<AnnualBalance, 'rulesetId' | 'deductedFromAllowancePence'>> {
  remainingBalance: number;
}