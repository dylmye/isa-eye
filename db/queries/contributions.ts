import { Queries } from "tinybase/with-schemas";
import { Schemas } from "../schema";
import balanceTypes from "@/constants/balanceTypes";

export const ledgerBalancesByAccount = (queries: Queries<Schemas>) =>
  queries.setQueryDefinition(
    "ledgerBalancesByAccount",
    "contributions",
    ({ select, group, join, where }) => {
      select("productId");
      select("deductedFromAllowancePence");
      select("addedToAllowancePence")
      join("products", "productId");
      where("products", "balanceType", balanceTypes.LEDGER);
      // @TODO: this isn't working because stored as str not num, sum manually
      group("deductedFromAllowancePence", "sum").as("totalDeducted");
      // @TODO: this isn't working because stored as str not num, sum manually
      group("addedToAllowancePence", "sum").as("totalAdded");
    }
  );

export const simpleBalancesByAccount = (queries: Queries<Schemas>) =>
  queries.setQueryDefinition(
    "simpleBalancesByAccount",
    "contributions",
    ({ select, group, join, where }) => {
      select("productId");
      select("deductedFromAllowancePence");
      join("products", "productId");
      where("products", "balanceType", balanceTypes.SIMPLE);
      // get "last" value
      group("deductedFromAllowancePence", (cells, l) => l && cells[l - 1]).as(
        "currentBalance"
      );
    }
  );
