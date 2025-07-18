import { useMemo } from "react";

import hooks from "@/hooks/database";
import type { AllContributionsRow } from "../queries/annualBalances";

export const useCurrentYearBalances = () => {
  const currentRulesetId = hooks.useValue("currentTaxYear");
  const contributions = hooks.useResultTable("allContributions") as Record<
    number,
    AllContributionsRow
  >;

  return useMemo(() => {
    const filteredRows = Object.values(
      structuredClone(contributions) ?? {},
    ).filter((c) => !currentRulesetId || c.rulesetId === currentRulesetId);

    if (!filteredRows?.length) return [];
    // totals per ruleset id here
    const totalsPerYear = filteredRows?.reduce(
      (acc, { rulesetId, deductedFromAllowancePence }) => {
        acc[rulesetId] =
          (acc[rulesetId] || 0) + Number.parseInt(deductedFromAllowancePence);
        return acc;
      },
      {} as Record<string, number>,
    );
    filteredRows.forEach((row) => {
      row.percentage =
        (Number.parseInt(row.deductedFromAllowancePence) /
          totalsPerYear[row.rulesetId]) *
        100;
    });
    return filteredRows as (AllContributionsRow & { percentage: number })[];
  }, [contributions, currentRulesetId]);
};
