import type { CellSchema } from "tinybase";
import type { Row } from "tinybase/with-schemas";

/**
 * Product Types
 *
 * ISA components as defined in the Individual Savings Account Regulations 1998 Sections 2 and 4.
 *
 * ID format: string
 */
const productTypesTable = {
  name: { type: "string" },
  introducedWithRuleset: { type: "string" },
  removedWithRuleset: { type: "string" },
  shortDescription: { type: "string" },
  longDescription: { type: "string" },
} satisfies Record<string, CellSchema>;

export default productTypesTable;

type Schema = { productTypes: typeof productTypesTable };

export type ProductType = Row<Schema, "productTypes">;
