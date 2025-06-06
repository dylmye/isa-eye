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
      
      join("providers", "providerId").as("provider");
      join("productTypes", "productTypeCode").as("productType");

      select("providerId");
      select("providers", "name").as("providerName");
      select("providers", "iconRelativeUrl").as("providerIconRelativeUrl");

      select("productTypeCode");
      select("productTypes", "name").as("productTypeName");

      // @TODO: how to get all annualBalance values with productId match?
    }
  );

  export const productsOpenInCurrentTaxYear = (queries: Queries<Schemas>) =>
    queries.setQueryDefinition(
      "productsOpenInCurrentTaxYear",
      "products",
      ({ select, join }) => {
        // all products where startTaxYear >= currentTax Year, endTaxYear null or >= currentTaxYear
      }
    )