import type { CellSchema } from "tinybase";

/**
 * Ruleset Exceptions
 *
 * An allowance for a specific product for a
 * given tax year. Any products that don't
 * have an exception contribute to the shared
 * allowance.
 */
const rulesetExceptionsTable = {
  productId: { type: 'string' },
  rulesetId: { type: 'string' },
  allowancePence: { type: 'string' },
  notes: { type: 'string' },
  includedInShared: { type: 'boolean', default: true }
} satisfies Record<string, CellSchema>

export default rulesetExceptionsTable;

// @TODO ADD RELATIONS, ADD TO SEEDER