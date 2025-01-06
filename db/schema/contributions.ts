import { int, sqliteTable, text, real, AnySQLiteColumn, uniqueIndex } from "drizzle-orm/sqlite-core";
import { productsTable } from "./products";

export const productContributionsByYearTable = sqliteTable("contributions", {
  id: int().primaryKey({ autoIncrement: true, }),
  productId: int().references((): AnySQLiteColumn => productsTable.id),
  taxYear: text().notNull(),
  contributions: real().notNull(),
}, (table) => ({
  taxYearIndex: uniqueIndex("taxYear_idx").on(table.taxYear),
}));
