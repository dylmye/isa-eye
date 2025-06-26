import { useMemo } from "react";

import hooks from "@/hooks/database";
import { taxYearIsInRange } from "@/utils/taxYearIsInRange";
import { AllProductsRow } from "../queries/products";

export const useCurrentYearProducts = () => {
  const currentRulesetId = hooks.useValue("currentTaxYear");
  const products = hooks.useResultTable("allProducts") as Record<number, AllProductsRow>;

  return useMemo(() => {
    return Object.entries(products ?? {}).filter(([_, p]) => !currentRulesetId || taxYearIsInRange(currentRulesetId as string, p.startTaxYear, p.endTaxYear));
  }, [products, currentRulesetId]);
}