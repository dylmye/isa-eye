import Ruleset from "@/types/ruleset";
import { IsaTypeCodes } from "./isaTypes";
import { DropdownOptions } from "@/types/dropdown";

export const RULE_NAMES = [
  "2024/2025",
  "2023/2024",
  "2022/2023",
  "2021/2022",
  "2020/2021",
  "2019/2020",
  "2018/2019",
  "2017/2018"
] as const;

export type RuleNames = (typeof RULE_NAMES)[number];

export const rules: Ruleset<RuleNames, IsaTypeCodes>[] = [
  {
    name: "2024/2025",
    overallAllowance: 20000,
    startDate: "2024-04-06",
    endDate: "2025-04-05",
    individualAllowances: [
      {
        code: "HELP_TO_BUY",
        allowance: 2400,
        notes: "Contribute up to £200 a month, and up to £1,200 in the first month.",
      },
    ],
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
    notes: 'Fractional share contracts were added to the products allowed within Stocks and Shares ISAs. There were no changes to allowances for ISAs and allowances for all ISA types were frozen until the 2030/2031 tax year. The announced "British ISA" was scrapped. It is now permissible to open and pay into multiple of the same type of ISAs in the same year.',
  },
  {
    name: "2023/2024",
    overallAllowance: 20000,
    startDate: "2023-04-06",
    endDate: "2024-04-05",
    individualAllowances: [
      {
        code: "HELP_TO_BUY",
        allowance: 2400,
        notes: "Contribute up to £200 a month, and up to £1,200 in the first month.",
      },
    ],
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
    notes: "There were no changes to ISAs this year.",
  },
  {
    name: "2022/2023",
    overallAllowance: 20000,
    startDate: "2022-04-06",
    endDate: "2023-04-05",
    individualAllowances: [
      {
        code: "HELP_TO_BUY",
        allowance: 2400,
        notes: "Contribute up to £200 a month, and up to £1,200 in the first month.",
      },
    ],
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
    notes: "There were no changes to ISAs this year.",
  },
  {
    name: "2021/2022",
    overallAllowance: 20000,
    startDate: "2021-04-06",
    endDate: "2022-04-05",
    individualAllowances: [
      {
        code: "HELP_TO_BUY",
        allowance: 2400,
        notes: "Contribute up to £200 a month, and up to £1,200 in the first month.",
      },
    ],
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
    notes: "There were no changes to ISAs this year.",
  },
  {
    name: "2020/2021",
    overallAllowance: 20000,
    startDate: "2020-04-06",
    endDate: "2021-04-05",
    individualAllowances: [
      {
        code: "HELP_TO_BUY",
        allowance: 2400,
        notes: "Contribute up to £200 a month, and up to £1,200 in the first month.",
      },
    ],
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
    notes: "The Junior ISA allowance was increased by £4,632/year (£386/month). The LISA withdrawal charge was reduced from 25% to 20% for withdrawals made between 6th March 2020 and 5th April 2021.",
  },
  {
    name: "2019/2020",
    overallAllowance: 20000,
    startDate: "2019-04-06",
    endDate: "2020-04-05",
    individualAllowances: [
      {
        code: "HELP_TO_BUY",
        allowance: 2400,
        notes: "Contribute up to £200 a month, and up to £1,200 in the first month.",
      },
    ],
    groupAllowances: [
      {
        codes: ["LIFETIME_CASH", "LIFETIME_STOCKS_AND_SHARES"],
        allowance: 4000,
      },
      {
        codes: ["JUNIOR_CASH", "JUNIOR_STOCKS_AND_SHARES"],
        allowance: 4368,
      },
    ],
    notes: "The Junior ISA allowance was increased by £108/year (£9/month) in line with inflation.",
  },
  {
    name: "2018/2019",
    overallAllowance: 20000,
    startDate: "2018-04-06",
    endDate: "2019-04-05",
    individualAllowances: [
      {
        code: "HELP_TO_BUY",
        allowance: 2400,
        notes: "Contribute up to £200 a month, and up to £1,200 in the first month.",
      },
    ],
    groupAllowances: [
      {
        codes: ["LIFETIME_CASH", "LIFETIME_STOCKS_AND_SHARES"],
        allowance: 4000,
      },
      {
        codes: ["JUNIOR_CASH", "JUNIOR_STOCKS_AND_SHARES"],
        allowance: 4260,
      },
    ],
    notes: "The Junior ISA allowance was increased by £132/year (£11/month) in line with inflation.",
  },
  {
    name: "2017/2018",
    overallAllowance: 20000,
    startDate: "2017-04-06",
    endDate: "2018-04-05",
    individualAllowances: [
      {
        code: "HELP_TO_BUY",
        allowance: 2400,
        notes: "Contribute up to £200 a month, and up to £1,200 in the first month.",
      },
    ],
    groupAllowances: [
      {
        codes: ["LIFETIME_CASH", "LIFETIME_STOCKS_AND_SHARES"],
        allowance: 4000,
      },
      {
        codes: ["JUNIOR_CASH", "JUNIOR_STOCKS_AND_SHARES"],
        allowance: 4128,
      },
    ],
  },
];

export const rulesDropdown: DropdownOptions<RuleNames> = rules.map(x => ({
  label: x.name,
  value: x.name,
}))
