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
  {
    name: "2023/2024",
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
  {
    name: "2022/2023",
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
  {
    name: "2021/2022",
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
  {
    name: "2020/2021",
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
  {
    name: "2019/2020",
    overallAllowance: 20000,
    groupAllowances: [
      {
        codes: ["LIFETIME_CASH", "LIFETIME_STOCKS_AND_SHARES"],
        allowance: 4000,
      },
      {
        codes: ["JUNIOR_CASH", "JUNIOR_STOCKS_AND_SHARES"],
        allowance: 4368,
      },
      // @TODO: ADD HTB
    ],
  },
  {
    name: "2018/2019",
    overallAllowance: 20000,
    groupAllowances: [
      {
        codes: ["LIFETIME_CASH", "LIFETIME_STOCKS_AND_SHARES"],
        allowance: 4000,
      },
      {
        codes: ["JUNIOR_CASH", "JUNIOR_STOCKS_AND_SHARES"],
        allowance: 4260,
      },
      // @TODO: ADD HTB
    ],
  },
  {
    name: "2017/2018",
    overallAllowance: 20000,
    groupAllowances: [
      {
        codes: ["LIFETIME_CASH", "LIFETIME_STOCKS_AND_SHARES"],
        allowance: 4000,
      },
      {
        codes: ["JUNIOR_CASH", "JUNIOR_STOCKS_AND_SHARES"],
        allowance: 4128,
      },
      // @TODO: ADD HTB
    ],
  },
];
