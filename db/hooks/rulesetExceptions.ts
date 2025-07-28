import { useMemo } from "react";
import hooks from "@/hooks/database";

export const useCurrentYearRulesetExceptions = () => {
  const currentRulesetId = hooks.useValue("currentTaxYear");
  const currentRuleset = hooks.useRow("rulesets", currentRulesetId as string);
  const allExceptions = hooks.useResultTable("allExceptions");

  return useMemo(() => {
    const currentYearExceptions = Object.values(allExceptions).filter(
      (e) => e.rulesetId === currentRulesetId,
    );

    return {
      ...currentRuleset,
      exceptions: currentYearExceptions,
    };
  }, [currentRulesetId, currentRuleset, allExceptions]);
};
