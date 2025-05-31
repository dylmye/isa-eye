import type { CellSchema } from "tinybase";

/**
 * Products
 *
 * An ISA account. It is opened with a provider within a TY, and aligns with requirements for its type.
 */
const productsTable = {
  startTaxYear: { type: 'string' },
  endTaxYear: { type: 'string' },
  providerId: { type: 'string' },
  friendlyName: { type: 'string' },
  productTypeCode: { type: 'string' },
  flexible: { type: 'boolean' },
  // store as a string to avoid JS floating point BS, convert to int when doing calculations
  startingBalancePence: { type: 'string' }
} satisfies Record<string, CellSchema>

export default productsTable;
