import { useMemo } from "react";

import hooks from "@/hooks/database";
import { AllContributionsRow } from "../queries/annualBalances";

export const useCurrentYearBalances = () => {
  const currentRulesetId = hooks.useValue("currentTaxYear");
  const contributions = hooks.useResultTable("allContributions") as Record<number, AllContributionsRow>;

  return useMemo(() => {
    return Object.values(contributions ?? {}).filter((c) => !currentRulesetId || c.rulesetId === currentRulesetId);
  }, [contributions, currentRulesetId]);
}