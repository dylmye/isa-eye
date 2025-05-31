import banks from "@/constants/banks";
import { IsaTypeCodes, isaTypes } from "@/constants/isaTypes";
import { RuleNames } from "@/constants/rules";
import { Schemas } from "@/db/schema";
import { taxYearIsInRange } from "@/utils/taxYearIsInRange";
import { useMemo } from "react";
import * as TinybaseUiReact from "tinybase/ui-react/with-schemas";

const hooks = TinybaseUiReact as TinybaseUiReact.WithSchemas<Schemas>;

export default hooks;

interface UseGetAccountsProps {
  /** @default true */
  restrictToOpenInCurrentTaxYear?: boolean;
  /** @default true */
  restrictToOpenAccounts?: boolean;
  /** @default false */
  withOpenCloseYears?: boolean;
  /** @default false */
  withBalanceType?: boolean;
  /** @default false */
  withBalance?: boolean;
}

export const useGetAccounts = ({
  restrictToOpenInCurrentTaxYear = true,
  restrictToOpenAccounts = true,
  withOpenCloseYears = false,
  withBalanceType = false,
  withBalance = false,
}: UseGetAccountsProps) => {
  const currentTaxYear = hooks.useValue("currentTaxYear");
  return useMemo(() => {
    hooks
      .useQueries()
      ?.setQueryDefinition("accounts", "products", ({ select, where }) => {
        select("friendlyName");
        select("providerName");
        select((getCell) => banks.find(i => i.id === (getCell("providerName")))?.name).as("bankName");
        select("isaType");
        select((getCell) => isaTypes.find(i => i.code === (getCell("isaType") as IsaTypeCodes))?.name).as("isaTypeName");

        if (withOpenCloseYears) {
          select("startTaxYear");
          select("endTaxYear");
        }

        if (withBalanceType) {
          select("balanceType");
        }

        if (restrictToOpenAccounts) {
          where((getCell) => !getCell("endTaxYear"));
        }

        if (restrictToOpenInCurrentTaxYear) {
          where((getCell) =>
            taxYearIsInRange(
              currentTaxYear as RuleNames,
              getCell("startTaxYear") as RuleNames,
              getCell("endTaxYear") as RuleNames
            )
          );
        }

        if (withBalance) {
          //
        }
      });
    return "accounts";
  }, [currentTaxYear]);
};
