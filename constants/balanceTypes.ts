const balanceTypes = {
  /** A balance value is kept for every tax year the account is open. */
  SIMPLE: 0,
  /** A ledger of transactions is kept for the account. */
  LEDGER: 1,
} as const;

export default balanceTypes;
