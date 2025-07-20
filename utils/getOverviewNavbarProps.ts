import { useMemo } from "react";
import hooks from "@/hooks/database";
import { formatRulesetNameForNav } from "./formatRulesetNameForNav";
import { sortRulesetIds } from "./sorters";

interface UseOverviewNavProps {
  /** Towards the oldest ruleset (index len-1) */
  previousRulesetName?: string;
  /** Towards the latest ruleset (index 0) */
  nextRulesetName?: string;
}

export const useGetOverviewNavbarProps = (): UseOverviewNavProps => {
  const currentRulesetName = hooks.useValue("currentTaxYear") as string;
  const rulesets = hooks.useRowIds("rulesets") as string[];

  // sort rulesets by numeric value of starting year.
  const sortedRulesets = useMemo(() => {
    return rulesets.toSorted(sortRulesetIds);
  }, [rulesets]);
  const lastIndex = sortedRulesets.length - 1;
  const currIndex = sortedRulesets.findIndex((r) => r === currentRulesetName);

  return useMemo(() => {
    switch (currIndex) {
      // borked
      case -1:
        return {};
      // first (earliest) ruleset
      case 0:
        return {
          nextRulesetName: formatRulesetNameForNav(sortedRulesets[1]),
        };
      // last (latest) ruleset
      case lastIndex:
        return {
          previousRulesetName: formatRulesetNameForNav(
            sortedRulesets[lastIndex - 1],
          ),
        };
      // any others
      default:
        return {
          previousRulesetName: formatRulesetNameForNav(
            sortedRulesets[currIndex - 1],
          ),
          nextRulesetName: formatRulesetNameForNav(
            sortedRulesets[currIndex + 1],
          ),
        };
    }
  }, [sortedRulesets, currIndex]);
};
