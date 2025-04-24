import type { CellSchema } from "tinybase";

/**
 * Product Types
 *
 * ISA components as defined in the Individual Savings Account Regulations 1998 Sections 2 and 4.
 */
const productTypesTable = {
  code: { type: 'string' },
  name: { type: 'string' },
  introducedWithRuleset: { type: 'string' },
  shortDescription: { type: 'string' },
  longDescription: { type: 'string' },
} satisfies Record<string, CellSchema>

export default productTypesTable;
