import { RuleNames } from "@/constants/rules";

/**
 * Determine if the target taxyear is in range of the start and end.
 * @returns true if `target` is in/after the start TY and in/before the end TY
 */
export const taxYearIsInRange = (target: RuleNames, startRange: RuleNames, endRange?: RuleNames): boolean => {
  const startYear: number = Number(startRange.split("/")[0])
  const endYear: number | null = endRange ? Number(endRange.split("/")[1]) : null;
  const targetYear: number = Number(target.split("/")[0]);

  if (startYear > targetYear) return false;
  if (endYear !== null && targetYear > endYear) return false;
  return true;
}
