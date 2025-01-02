import Ruleset from "@/types/ruleset";
import { IsaTypeCodes } from "./isaTypes";

export const rules: Ruleset<IsaTypeCodes>[] = [
  {
    name: "2024/2025",
    overallAllowance: 20000,
    groupAllowances: [
      {
        codes: ["LIFETIME_CASH", "LIFETIME_STOCKS_AND_SHARES"],
        allowance: 4000,
      },
      {
        codes: ["JUNIOR_CASH", "JUNIOR_STOCKS_AND_SHARES"],
        allowance: 9000,
      },
    ],
  },
];
