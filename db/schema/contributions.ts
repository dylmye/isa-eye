import { CellSchema } from "tinybase";

const contributionsTable: Record<string, CellSchema> = {
  productId: { type: 'string' },
  taxYear: { type: 'string' },
  contributions: { type: 'number', default: 0 },
} as const

export default contributionsTable;
