import type { CellSchema } from "tinybase";
import type { Row } from "tinybase/with-schemas";

/**
 * Providers
 *
 * Companies that market ISA products - banks, e-money institutions,
 * building societies, investment companies, etc.
 * 
 * ID format: string
 */
const providersTable = {
  name: { type: 'string' },
  iconRelativeUrl: { type: 'string' },
  colour: { type: 'string', default: '#ffffff' },
} satisfies Record<string, CellSchema>

export default providersTable;

type Schema = { providers: typeof providersTable }

export type Provider = Row<Schema, 'providers'>