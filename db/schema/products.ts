import { CellSchema } from "tinybase";

const productsTable: Record<string, CellSchema> = {
  startTaxYear: { type: 'string' },
  endTaxYear: { type: 'string' },
  providerName: { type: 'string' },
  friendlyName: { type: 'string' },
  isaType: { type: 'string' },
  // enum
  balanceType: { type: 'number' },
  flexible: { type: 'boolean' },
  // store as a string to avoid JS floating point BS, convert to int when doing calculations
  startingBalancePence: { type: 'string' }
} as const

export default productsTable;
