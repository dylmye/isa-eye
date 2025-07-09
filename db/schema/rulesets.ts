import type { CellSchema } from "tinybase";
import type { Row } from "tinybase/with-schemas";

/**
 * Rulesets
 *
 * Allowances for ISAs as defined by the
 * Individual Savings Account Regulations 1998
 * in force at the time of each tax year.
 *
 * ID format: string
 */
const rulesetsTable = {
  sharedAllowancePence: { type: "string" },
  startDate: { type: "string" },
  endDate: { type: "string" },
  notes: { type: "string" },
} satisfies Record<string, CellSchema>;

export default rulesetsTable;

type Schema = { rulesets: typeof rulesetsTable };

export type Ruleset = Row<Schema, "rulesets">;
