import type { CellSchema } from "tinybase";
import type { Row } from "tinybase/with-schemas";

/**
 * Annual Balances
 *
 * The allowance used by a product for a given tax year.
 * The single value is updated either throughout the tax year
 * or is set as a goal.
 *
 * Balance is limited by the rules of the product type.
 *
 * ID format: {productId}-{rulesetId}
 */
const annualBalancesTable = {
  productId: { type: "string" },
  rulesetId: { type: "string" },
  lastUpdatedDateUnix: { type: "number" },
  // usage of isa allowance. Store as a string to avoid JS floating point BS, convert to int when doing calculations
  deductedFromAllowancePence: { type: "string" },
} satisfies Record<string, CellSchema>;

export default annualBalancesTable;

type Schema = { annualBalances: typeof annualBalancesTable };

export type AnnualBalance = Row<Schema, "annualBalances">;
