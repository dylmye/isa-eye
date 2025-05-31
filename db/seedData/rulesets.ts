interface RulesetSeedData {
  /** Season for ruleset, e.g. 2024/2025 for April 2024-2025 ISA ruleset. */
  name: string;
  /** The allowance afforded to each taxpayer across all ISAs an individual holds, in pence. */
  sharedAllowancePence: number;
  /** The first day of this tax year. */
  startDate: string;
  /** The last day of this tax year. */
  endDate: string;
  productSpecificRulesets?: {
    /** Id of the product */
    code: string;
    /** Allowance for this specific product */
    allowancePence: number;
    /** Whether this allowance is included in the shared allowance or not. E.g. LISA's allowance is included in the shared allowance, but JISA isn't (it's the child's allowance instead.) */
    includedInOverall: boolean;
    notes?: string;
  }[];
  /** Changelog and any other details. */
  notes?: string;
}

export const rulesets: readonly RulesetSeedData[] = [
  {
    name: "2017/2018",
    sharedAllowancePence: 20000,
    startDate: "2017-04-06",
    endDate: "2018-04-05",
    productSpecificRulesets: [
      {
        code: "HELP_TO_BUY",
        allowancePence: 2400,
        includedInOverall: true,
        notes: "Contribute up to £200 a month, and up to £1,200 in the first month.",
      },
      {
        code: "LIFETIME",
        allowancePence: 4000,
        includedInOverall: true,
      },
      {
        code: "JUNIOR",
        allowancePence: 4128,
        includedInOverall: false,
      },
    ],
  },
  {
    name: "2018/2019",
    sharedAllowancePence: 20000,
    startDate: "2018-04-06",
    endDate: "2019-04-05",
    productSpecificRulesets: [
      {
        code: "HELP_TO_BUY",
        allowancePence: 2400,
        includedInOverall: true,
        notes: "Contribute up to £200 a month, and up to £1,200 in the first month.",
      },
      {
        code: "LIFETIME",
        allowancePence: 4000,
        includedInOverall: true,
      },
      {
        code: "JUNIOR",
        allowancePence: 4128,
        includedInOverall: false,
      },
    ],
    notes: "The Junior ISA allowance was increased by £132/year (£11/month) in line with inflation.",
  },
  {
    name: "2019/2020",
    sharedAllowancePence: 20000,
    startDate: "2019-04-06",
    endDate: "2020-04-05",
    productSpecificRulesets: [
      {
        code: "HELP_TO_BUY",
        allowancePence: 2400,
        includedInOverall: true,
        notes: "Contribute up to £200 a month, and up to £1,200 in the first month.",
      },
      {
        code: "LIFETIME",
        allowancePence: 4000,
        includedInOverall: true,
      },
      {
        code: "JUNIOR",
        allowancePence: 4368,
        includedInOverall: false,
      },
    ],
    notes: "The Junior ISA allowance was increased by £108/year (£9/month) in line with inflation.",
  },
  {
    name: "2020/2021",
    sharedAllowancePence: 20000,
    startDate: "2020-04-06",
    endDate: "2021-04-05",
    productSpecificRulesets: [
      {
        code: "HELP_TO_BUY",
        allowancePence: 2400,
        includedInOverall: true,
        notes: "Contribute up to £200 a month, and up to £1,200 in the first month.",
      },
      {
        code: "LIFETIME",
        allowancePence: 4000,
        includedInOverall: true,
      },
      {
        code: "JUNIOR",
        allowancePence: 9000,
        includedInOverall: false,
      },
    ],
    notes: "The Junior ISA allowance was increased by £4,632/year (£386/month). The LISA withdrawal charge was reduced from 25% to 20% for withdrawals made between 6th March 2020 and 5th April 2021.",
  },
  {
    name: "2021/2022",
    sharedAllowancePence: 20000,
    startDate: "2021-04-06",
    endDate: "2022-04-05",
    productSpecificRulesets: [
      {
        code: "HELP_TO_BUY",
        allowancePence: 2400,
        includedInOverall: true,
        notes: "Contribute up to £200 a month, and up to £1,200 in the first month.",
      },
      {
        code: "LIFETIME",
        allowancePence: 4000,
        includedInOverall: true,
      },
      {
        code: "JUNIOR",
        allowancePence: 9000,
        includedInOverall: false,
      },
    ],
    notes: "There were no changes to ISAs this year.",
  },
  {
    name: "2022/2023",
    sharedAllowancePence: 20000,
    startDate: "2022-04-06",
    endDate: "2023-04-05",
    productSpecificRulesets: [
      {
        code: "HELP_TO_BUY",
        allowancePence: 2400,
        includedInOverall: true,
        notes: "Contribute up to £200 a month, and up to £1,200 in the first month.",
      },
      {
        code: "LIFETIME",
        allowancePence: 4000,
        includedInOverall: true,
      },
      {
        code: "JUNIOR",
        allowancePence: 9000,
        includedInOverall: false,
      },
    ],
    notes: "There were no changes to ISAs this year.",
  },
  {
    name: "2023/2024",
    sharedAllowancePence: 20000,
    startDate: "2023-04-06",
    endDate: "2024-04-05",
    productSpecificRulesets: [
      {
        code: "HELP_TO_BUY",
        allowancePence: 2400,
        includedInOverall: true,
        notes: "Contribute up to £200 a month, and up to £1,200 in the first month.",
      },
      {
        code: "LIFETIME",
        allowancePence: 4000,
        includedInOverall: true,
      },
      {
        code: "JUNIOR",
        allowancePence: 9000,
        includedInOverall: false,
      },
    ],
    notes: "There were no changes to ISAs this year.",
  },
  {
    name: "2024/2025",
    sharedAllowancePence: 20000,
    startDate: "2024-04-06",
    endDate: "2025-04-05",
    productSpecificRulesets: [
      {
        code: "HELP_TO_BUY",
        allowancePence: 2400,
        includedInOverall: true,
        notes: "Contribute up to £200 a month, and up to £1,200 in the first month.",
      },
      {
        code: "LIFETIME",
        allowancePence: 4000,
        includedInOverall: true,
      },
      {
        code: "JUNIOR",
        allowancePence: 9000,
        includedInOverall: false,
      },
    ],
    notes: 'Fractional share contracts were added to the products allowed within Stocks and Shares ISAs. There were no changes to allowances for ISAs and allowances for all ISA types were frozen until the 2030/2031 tax year. The announced "British ISA" was scrapped. It is now permissible to open and pay into multiple of the same type of ISAs in the same year.',
  },
  // 2025/2026?
]

export default rulesets;