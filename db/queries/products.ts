import type { Queries, ResultRow } from "tinybase/with-schemas";
import type { Product, Schemas } from "../schema";

/**
 * All products ever opened with all data joins.
 */
export const allProducts = (queries: Queries<Schemas>) =>
  queries.setQueryDefinition("allProducts", "products", ({ select, join }) => {
    select("friendlyName");
    select("startTaxYear");
    select("endTaxYear");
    select("flexible");

    select("providerId");
    select("providers", "name").as("providerName");
    select("providers", "iconRelativeUrl").as("providerIconRelativeUrl");
    select("providers", "colour").as("providerColour");

    select("productTypeCode");
    select("productTypes", "name").as("productTypeName");

    join("providers", "providerId");
    join("productTypes", "productTypeCode");
  });

export interface AllProductsRow
  extends ResultRow,
    Required<
      Pick<Product, "friendlyName" | "startTaxYear" | "endTaxYear" | "flexible">
    > {
  providerName: string;
  providerIconRelativeUrl: string;
  providerColour: string;
  productTypeName: string;
}
