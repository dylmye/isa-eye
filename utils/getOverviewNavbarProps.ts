import { useMemo } from "react";
import hooks from "@/hooks/database";
import { formatRulesetNameForNav } from "./formatRulesetNameForNav";

interface UseOverviewNavProps {
  /** Towards the oldest ruleset (index len-1) */
  previousRulesetName?: string;
  /** Towards the latest ruleset (index 0) */
  nextRulesetName?: string;
}

export const useGetOverviewNavbarProps = (): UseOverviewNavProps => {
  const currentRulesetName = hooks.useValue("currentTaxYear") as string;
  const rulesets = hooks.useRowIds("rulesets") as string[];
  const lastIndex = rulesets.length - 1;
  const currIndex = rulesets.findIndex((r) => r === currentRulesetName);

  return useMemo(() => {
    switch (currIndex) {
      // borked
      case -1:
        return {};
      // first (earliest) ruleset
      case 0:
        return {
          nextRulesetName: formatRulesetNameForNav(rulesets[1]),
        };
      // last (latest) ruleset
      case lastIndex:
        return {
          previousRulesetName: formatRulesetNameForNav(rulesets[lastIndex - 1]),
        };
      // any others
      default:
        return {
          previousRulesetName: formatRulesetNameForNav(rulesets[currIndex - 1]),
          nextRulesetName: formatRulesetNameForNav(rulesets[currIndex + 1]),
        };
    }
  }, [rulesets, currIndex]);
};
