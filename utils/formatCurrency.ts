export const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    trailingZeroDisplay: "stripIfInteger",
  }).format(amount);
