import { Store } from "tinybase/with-schemas";
import { Schemas } from "../schema";
import { default as seedData } from "../seedData/banks";

const seedProviders = (store: Store<Schemas>) => {
  const existingProviders = store.getTable('providers');
  const existingPartnerIds = Object.keys(existingProviders);

  for (const currentSeedData of seedData) {
    // @TODO add a date check value to update aliases etc
    if (!existingPartnerIds.includes(currentSeedData.id)) {
      store.setRow('providers', currentSeedData.id, {
        name: currentSeedData.name,
        iconRelativeUrl: currentSeedData.iconRelativeUrl,
      })

      for (const aliasIndex in currentSeedData.aliases) {
        store.addRow('providerAliases', {
          alias: currentSeedData.aliases[aliasIndex],
          providerId: currentSeedData.id,
        })
      }
    }
  }
}

export default seedProviders;
