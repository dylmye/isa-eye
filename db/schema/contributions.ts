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
  taxYear: { type: 'string' },
  contributions: { type: 'number', default: 0 },
} as const

export default contributionsTable;
