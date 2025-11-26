import type { Store } from "tinybase/with-schemas";
import type { Schemas } from "../schema";
import { default as seedData } from "../seedData/banks";

const seedProviders = (store: Store<Schemas>) => {
  const existingProviders = store.getTable("providers");
  const existingPartnerIds = Object.keys(existingProviders);

  for (const currentSeedData of seedData) {
    // @TODO add a date check value to update aliases etc
    if (!existingPartnerIds.includes(currentSeedData.id)) {
      store.setRow("providers", currentSeedData.id, {
        name: currentSeedData.name,
        iconRelativeUrl: currentSeedData.iconRelativeUrl,
        colour: currentSeedData.colour,
      });

      for (const aliasIndex in currentSeedData.aliases) {
        store.addRow("providerAliases", {
          alias: currentSeedData.aliases[aliasIndex],
          providerId: currentSeedData.id,
        });
      }
    } else {
      // 20251126 - handle new CDN
      if (
        existingProviders[currentSeedData.id].iconRelativeUrl !==
        currentSeedData.iconRelativeUrl
      ) {
        store.setPartialRow("providers", currentSeedData.id, {
          iconRelativeUrl: currentSeedData.iconRelativeUrl,
        });
      }
    }
  }
};

export default seedProviders;
