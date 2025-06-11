import { Queries, ResultRow } from "tinybase/with-schemas";
import { AnnualBalance, Schemas } from "../schema";

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