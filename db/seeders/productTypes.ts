import { Store } from "tinybase/with-schemas";
import { Schemas } from "../schema";
import { default as seedData } from "../seedData/isaTypes";

const seedProductTypes = (store: Store<Schemas>) => {
  const existingProductTypes = store.getTable('productTypes');
  const existingProductTypeCodes = Object.keys(existingProductTypes);

  for (const typeIndex in seedData) {
    const currentSeedData = seedData[typeIndex];

    // @TODO add a date check value to update aliases etc
    if (!existingProductTypeCodes.includes(currentSeedData.code)) {
      const { code, ...safeData } = currentSeedData;
      store.setRow('productTypes', currentSeedData.code, safeData)
    }
  }
}

export default seedProductTypes;
