const balanceTypes = {
  /** A balance value is kept for every tax year the product is open. */
  SIMPLE: 0,
  /** A ledger of transactions is kept for the product. */
  LEDGER: 1,
} as const;

export default balanceTypes;
