import { Queries } from "tinybase/with-schemas";
import { Schemas } from "../schema";

export const allAccounts = (queries: Queries<Schemas>) =>
  queries.setQueryDefinition(
    "allAccounts",
    "products",
    ({ select, where }) => {
      select("friendlyName");
      select("providerName");
      select("isaType");
      where((getCell) => !getCell("endTaxYear"));
    }
  );

export const allAccountsWithOpenCloseYears = (queries: Queries<Schemas>) =>
  queries.setQueryDefinition(
    "allAccountsWithOpenCloseYears",
    "products",
    ({ select }) => {
      select("friendlyName");
      select("providerName");
      select("isaType");
      select("startTaxYear");
      select("endTaxYear");
    }
  );

export const allAccountsWithIsaType = (queries: Queries<Schemas>) =>
  queries.setQueryDefinition(
    "allAccountsWithIsaType",
    "products",
    ({ select }) => {
      select("friendlyName");
      select("providerName");
      select("isaType");
      select("balanceType");
    }
  );
