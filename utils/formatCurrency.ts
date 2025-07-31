export const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
    trailingZeroDisplay: "stripIfInteger",
  }).format(amount);
