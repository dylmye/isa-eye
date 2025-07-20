export const formatHeadlineCurrency = (amount: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 2,
    trailingZeroDisplay: "stripIfInteger",
  }).format(amount);
