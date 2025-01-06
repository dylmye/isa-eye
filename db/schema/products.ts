import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const productsTable = sqliteTable("products", {
  id: int().primaryKey({ autoIncrement: true }),
  startTaxYear: text().notNull(),
  endTaxYear: text(),
  providerName: text().notNull(),
  friendlyName: text().notNull(),
});
