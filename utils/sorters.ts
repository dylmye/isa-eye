export const sortRulesetIds = (a: string, b: string) =>
  Number.parseInt(a.split("/")[0], 10) - Number.parseInt(b.split("/")[0], 10);
