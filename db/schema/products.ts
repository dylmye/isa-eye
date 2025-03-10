import { CellSchema } from "tinybase";

const productsTable: Record<string, CellSchema> = {
  startTaxYear: { type: 'string' },
  endTaxYear: { type: 'string' },
  providerName: { type: 'string' },
  friendlyName: { type: 'string' },
  colourHex: { type: 'string' },
  isaType: { type: 'string' },
} as const

export default productsTable;
