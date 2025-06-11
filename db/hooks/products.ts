import { useMemo } from "react";

import hooks from "@/hooks/database";
import { taxYearIsInRange } from "@/utils/taxYearIsInRange";
import { AllProductsRow } from "../queries/products";

export const useCurrentYearProducts = () => {
  const queries = hooks.useQueries();
  const currentRulesetId = hooks.useValue("currentTaxYear");
  const products = queries?.getResultTable("allProducts") as Record<number, AllProductsRow>;

  return useMemo(() => Object.entries(products ?? {}).filter(([_, p]) => !currentRulesetId || taxYearIsInRange(currentRulesetId as string, p.startTaxYear, p.endTaxYear)), [products, currentRulesetId]);
}