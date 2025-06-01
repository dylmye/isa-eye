import { Queries } from "tinybase/with-schemas";
import { Schemas } from "../schema";

/**
 * All products ever opened with all data joins.
 */
export const allProducts = (queries: Queries<Schemas>) =>
  queries.setQueryDefinition(
    "allProducts",
    "products",
    ({ select, join }) => {
      select("friendlyName");
      select("startTaxYear");
      select("endTaxYear");
      select("flexible");
      select("startingBalancePence");

      select("providerId");
      select("providers", "name").as("providerName");
      select("providers", "iconRelativeUrl").as("providerIconRelativeUrl");

      select("productTypeCode");
      select("productTypes", "name").as("productTypeName");

      join("providers", "providerId").as("provider");
      join("productTypes", "productTypeCode").as("productType");
      // @TODO: how to get all annualBalance values with productId match?
    }
  );