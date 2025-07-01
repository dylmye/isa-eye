import type { CellSchema } from "tinybase";
import type { Row } from "tinybase/with-schemas";

/**
 * Products
 *
 * An ISA account. It is opened with a provider within a TY, and aligns with requirements for its type.
 * 
 * ID format: integer
 */
const productsTable = {
  startTaxYear: { type: 'string' },
  endTaxYear: { type: 'string' },
  providerId: { type: 'string' },
  friendlyName: { type: 'string' },
  productTypeCode: { type: 'string' },
  flexible: { type: 'boolean' },
} satisfies Record<string, CellSchema>

export default productsTable;

type Schema = { products: typeof productsTable }

export type Product = Row<Schema, 'products'>