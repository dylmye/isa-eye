import { Queries } from "tinybase/with-schemas";
import { Schemas } from "../schema";
import rulesets from "../seedData/rulesets";

/**
 * All annual balances for the current year.
 */
export const currentYearBalances = (queries: Queries<Schemas>) =>
  queries.setQueryDefinition(
    "currentYearBalances",
    "annualBalances",
    ({ select, join, where }) => {
      const currentTaxYear = queries.getStore().getValue("currentTaxYear") as string;

      select("lastUpdatedDateUnix");
      select("deductedFromAllowancePence");

      select("productId");
      select("rulesetId");

      join("products", "productId").as("product");
      join("rulesets", "rulesetId").as("ruleset");

      where("rulesetId", currentTaxYear);
    }
  );