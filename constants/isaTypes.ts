import { DropdownOptions } from "@/types/dropdown";
import IsaType from "@/types/isaType";

export const ISA_TYPES = [
  "CASH",
  "STOCKS_AND_SHARES",
  "INNOVATIVE_FINANCE",
  "LIFETIME_CASH",
  "LIFETIME_STOCKS_AND_SHARES",
  "JUNIOR_CASH",
  "JUNIOR_STOCKS_AND_SHARES",
  "BRITISH",
  "HELP_TO_BUY",
  "MAXI",
  "MINI",
] as const;

/** Unique identifiers for every ISA product ever available. Use `ISA_TYPES` for an array of all values. */
export type IsaTypeCodes = (typeof ISA_TYPES)[number];

export const isaTypes: IsaType<IsaTypeCodes>[] = [
  {
    code: "CASH",
    name: "Cash ISA",
    introducedWithRuleset: "2008/2009",
    shortDescription: "Earn interest on cash tax-free",
    longDescription:
      "A deposit account, where your cash is guaranteed. The rules for accessing the cash once deposited may differ by account.",
  },
  {
    code: "STOCKS_AND_SHARES",
    name: "Stocks & Shares ISA",
    introducedWithRuleset: "2008/2009",
    shortDescription: "Invest without paying tax on gains",
    longDescription:
      "A number of investment structures in a tax-free wrapper. Income and gains from the investments in the accounts are not subject to dividend, income or capital gains taxes.",
  },
  {
    code: "INNOVATIVE_FINANCE",
    name: "Innovative Finance ISA",
    introducedWithRuleset: "2016/2017",
    shortDescription: "Profit from peer-to-peer lending, tax-free",
    longDescription:
      "An account with a peer-to-peer lending provider with a tax-free wrapper. Interest earned from providing high-risk loans are earned tax-free.",
  },
  {
    code: "LIFETIME_CASH",
    name: "Lifetime Cash ISA",
    introducedWithRuleset: "2017/2018",
    shortDescription: "Save up for your first home and earn a government bonus",
    longDescription:
      "A Cash ISA with age and spend limitations, in exchange for a 25% bonus provided by the Government when withdrawing for the purchase of a first home, after turning 60 years old, when diagnosed with a terminal illness.",
  },
  {
    code: "LIFETIME_STOCKS_AND_SHARES",
    name: "Lifetime Stocks & Shares ISA",
    introducedWithRuleset: "2017/2018",
    shortDescription: "Invest for your first home and earn a government bonus",
    longDescription:
      "A Stocks & Shares ISA with age and spend limitations, in exchange for a 25% contribution bonus provided by the Government when withdrawing for the purchase of a first home, after turning 60 years old, or if diagnosed with a terminal illness.",
  },
  {
    code: "JUNIOR_CASH",
    name: "Junior Cash ISA",
    introducedWithRuleset: "2011/2012",
    shortDescription: "Save for your child's future",
    longDescription:
      "A Cash ISA held in a child's name. Money cannot be withdrawn until they turn 18, or in if diagnosed with a terminal illness.",
  },
  {
    code: "JUNIOR_STOCKS_AND_SHARES",
    name: "Junior Stocks & Shares ISA",
    introducedWithRuleset: "2011/2012",
    shortDescription: "Invest for your child's future",
    longDescription:
      "A Stocks & Shares ISA held in a child's name. Money cannot be withdrawn until they turn 18, or in if diagnosed with a terminal illness.",
  },
  {
    code: "HELP_TO_BUY",
    name: "Help To Buy ISA",
    introducedWithRuleset: "2015/2016",
    removedWithRuleset: "2019/2020",
    shortDescription: "Save up for your first home and earn a government bonus",
    longDescription:
      "A Cash ISA with a monthly top-up restriction that, if used towards the purchase of your first home, will be topped up with a 25% government bonus.",
  },
  {
    code: "MAXI",
    name: "Maxi ISA",
    introducedWithRuleset: "1999/2000",
    removedWithRuleset: "2008/2009",
    shortDescription: "Legacy stocks and shares wrapper",
    longDescription:
      "Primarily designed to hold stocks, shares and life insurance. Earnings from dividends and capital gains are tax-exempt.",
  },
  {
    code: "MINI",
    name: "Mini ISA",
    introducedWithRuleset: "1999/2000",
    removedWithRuleset: "2008/2009",
    shortDescription: "Legacy cash wrapper",
    longDescription:
      "Mini cash ISAs allow tax-free interest earning on balances. Mini stocks and shares ISAs are similar to Maxi ISAs with a lower limit. Mini insurance ISAs offer a lower-risk investment in a life insurance contract.",
  },
];

export const isaTypesDropdown: DropdownOptions<IsaTypeCodes> = isaTypes.map(x => ({
  label: x.name,
  value: x.code,
}))
