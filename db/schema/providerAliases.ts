import type { CellSchema } from "tinybase";
import type { Row } from "tinybase/with-schemas";

/**
 * Provider Aliases
 *
 * Other names for providers, for search benefits.
 *
 * ID format: string
 */
const providerAliasesTable = {
  alias: { type: "string" },
  providerId: { type: "string" },
} satisfies Record<string, CellSchema>;

export default providerAliasesTable;

type Schema = { providerAliases: typeof providerAliasesTable };

export type ProductAlias = Row<Schema, "providerAliases">;
