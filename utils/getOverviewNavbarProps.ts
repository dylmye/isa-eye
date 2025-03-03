import { rules } from "@/constants/rules";
import { formatRulesetNameForNav } from "./formatRulesetNameForNav";

interface UseOverviewNavProps {
  /** Towards the oldest ruleset (index len-1) */
  previousRulesetName?: string;
  /** Towards the latest ruleset (index 0) */
  nextRulesetName?: string;
}

export const getOverviewNavbarProps = (
  currentRulesetName: string
): UseOverviewNavProps => {
  const lastIndex = rules.length - 1;
  const currIndex = rules.findIndex((r) => r.name === currentRulesetName);

  switch (currIndex) {
    case -1:
      return {};
    case 0:
      return {
        previousRulesetName: formatRulesetNameForNav(rules[1].name),
      };
    case lastIndex:
      return {
        nextRulesetName: formatRulesetNameForNav(rules[lastIndex - 1].name),
      };
    default:
      return {
        previousRulesetName: formatRulesetNameForNav(rules[currIndex + 1].name),
        nextRulesetName: formatRulesetNameForNav(rules[currIndex - 1].name),
      };
  }
};
