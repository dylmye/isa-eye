import type { Store } from "tinybase/with-schemas";
import type { Schemas } from "../schema";
import { default as seedData } from "../seedData/isaTypes";

const seedProductTypes = (store: Store<Schemas>) => {
  const existingProductTypes = store.getTable("productTypes");
  const existingProductTypeCodes = Object.keys(existingProductTypes);

  for (const currentSeedData of seedData) {
    const { code, ...safeData } = currentSeedData;
    // @TODO add a date check value to update aliases etc
    if (!existingProductTypeCodes.includes(code)) {
      store.setRow("productTypes", code, safeData);
    }
  }
};

export default seedProductTypes;
