import type { CellSchema } from "tinybase";

/**
 * Provider Aliases
 *
 * Other names for providers, for search benefits.
 */
const providerAliasesTable = {
  alias: { type: 'string' },
  providerId: { type: 'string' },
} satisfies Record<string, CellSchema>

export default providerAliasesTable;
