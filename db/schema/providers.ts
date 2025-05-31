import type { CellSchema } from "tinybase";

/**
 * Providers
 *
 * Companies that market ISA products - banks, e-money institutions,
 * building societies, investment companies, etc.
 */
const providersTable = {
  name: { type: 'string' },
  iconRelativeUrl: { type: 'string' },
} satisfies Record<string, CellSchema>

export default providersTable;
