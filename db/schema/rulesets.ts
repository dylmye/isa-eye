import type { CellSchema } from "tinybase";

/**
 * Rulesets
 *
 * Allowances for ISAs as defined by the
 * Individual Savings Account Regulations 1998
 * in force at the time of each tax year.
 */
const rulesetsTable = {
  taxYear: { type: 'string' },
  sharedAllowancePence: { type: 'string' },
  startDate: { type: 'string' },
  endDate: { type: 'string' },
  notes: { type: 'string' },
} satisfies Record<string, CellSchema>

export default rulesetsTable;
