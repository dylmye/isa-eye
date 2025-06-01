import { Queries } from "tinybase/with-schemas";
import { Schemas } from "../schema";

export const currentRuleset = (queries: Queries<Schemas>) =>
  queries.setQueryDefinition(
    "currentRuleset",
    "rulesets",
    ({ select, where }) => {
      const currentTaxYear = queries.getStore().getValue("currentTaxYear");
      // select("friendlyName");
      // select("providerName");
      // select("isaType");
      // where((getCell) => !getCell("endTaxYear"));
    }
  );