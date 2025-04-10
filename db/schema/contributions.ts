/**
 * Contributions
 *
 * For detailed accounts, a contribution is a transaction.
 *
 * For simple accounts, a single contribution record is kept
 * for each tax year from opening. It represents the overall
 * account balance.
 */
const contributionsTable = {
  productId: { type: 'string' },
  /** For simple */
  taxYear: { type: 'string' },
  /** For ledger */
  transactionDateUnix: { type: 'number' },
  // usage of isa allowance. Store as a string to avoid JS floating point BS, convert to int when doing calculations
  deductedFromAllowancePence: { type: 'string' },
  // flexible isa only: return of isa allowance. Store as a string to avoid JS floating point BS, convert to int when doing calculations
  addedToAllowancePence: { type: 'string' },
  notes: { type: 'string' }
} as const

export default contributionsTable;
