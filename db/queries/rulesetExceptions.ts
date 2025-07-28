import type { Queries } from "tinybase/with-schemas";
import type { Schemas } from "../schema";

/**
 * All excpetions with product joins
 */
export const allExceptions = (queries: Queries<Schemas>) =>
  queries.setQueryDefinition(
    "allExceptions",
    "rulesetExceptions",
    ({ select, join }) => {
      select("rulesetId");
      select("allowancePence");
      select("includedInShared");

      join("productTypes", "productTypeId");
      select("productTypes", "name");
    },
  );
