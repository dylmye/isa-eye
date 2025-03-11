/** A representation of the rules for ISAs in a given tax year. */
export default interface Ruleset<CodeType = string> {
  /** Season for ruleset, e.g. 2024/2025 for April 2024-2025 ISA ruleset. Must be unique. */
  name: string;
  /** The allowance afforded to each taxpayer across all ISAs. In 2024/2025 this was £20,000. */
  overallAllowance: number;
  /** Any allowances for individual ISA types, if applicable. */
  individualAllowances?: {
    /** ISA type this applies to. */
    code: CodeType;
    /** The allowance afforded to each taxpayer for this ISA type. */
    allowance: number;
    /** Whether this allowance is part of the overall allowance or separate. Should default to true. */
    deductsFromOverall?: boolean;
    /** Any other details. */
    notes?: string;
  }[];
  /** Any allowances shared between individual ISA types, if applicable. */
  groupAllowances?: {
    /** ISA types this applies to. */
    codes: CodeType[];
    /** The allowance afforded to each taxpayer between all of these ISA types. */
    allowance: number;
    /** Whether this allowance is part of the overall allowance or separate. Should default to true. */
    deductsFromOverall?: boolean;
    /** Any other details. */
    notes?: string;
  }[];
  startDate: string;
  endDate: string;
  /** Any other details. */
  notes?: string;
}
