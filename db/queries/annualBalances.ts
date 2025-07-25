import type { Queries, ResultRow } from "tinybase/with-schemas";
import type { AnnualBalance, Schemas } from "../schema";

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
      select("products", "startTaxYear").as("productStartTaxYear");

      join("providers", "products", "providerId");
      select("providers", "name").as("productProviderName");
      select("providers", "colour").as("productProviderColour");

      join("productTypes", "products", "productTypeCode");
      select("productTypes", "name").as("productProductTypeName");
    },
  );

export interface AllContributionsRow
  extends ResultRow,
    Required<
      Pick<
        AnnualBalance,
        "rulesetId" | "productId" | "deductedFromAllowancePence"
      >
    > {
  productFriendlyName: string;
  productStartTaxYear: string;
  productInitialBalancePence: string;
  productProviderColour: string;
  productProviderName: string;
  productProductTypeName: string;
}

export const remainingBalanceByYear = (queries: Queries<Schemas>) =>
  queries.setQueryDefinition(
    "remainingBalanceByYear",
    "annualBalances",
    ({ select, group }) => {
      select("rulesetId");
      select("deductedFromAllowancePence");
      group("deductedFromAllowancePence", (cells) => {
        const calculatedValue = cells.reduce<number>(
          (acc, curr) => acc - Number.parseFloat(curr as string) / 100,
          20_000,
        );
        // We don't show negative balance
        return Math.max(calculatedValue, 0);
      }).as("remainingBalance");
    },
  );

export interface RemainingBalanceByYearRow
  extends ResultRow,
    Required<Pick<AnnualBalance, "rulesetId" | "deductedFromAllowancePence">> {
  remainingBalance: number;
}
