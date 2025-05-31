import { Store } from "tinybase/with-schemas";
import { Schemas } from "../schema";
import { default as seedData } from "../seedData/rulesets";

const seedRulesets = (store: Store<Schemas>) => {
  const existingRulesets = store.getTable('rulesets');
  const existingRulesetIds = Object.keys(existingRulesets);

  for (const rulesetIndex in seedData) {
    const currentSeedData = seedData[rulesetIndex];

    // @TODO add a date check value
    if (!existingRulesetIds.includes(currentSeedData.name)) {
      store.setRow('rulesets', currentSeedData.name, {
        sharedAllowancePence: currentSeedData.sharedAllowancePence.toString(),
        startDate: currentSeedData.startDate,
        endDate: currentSeedData.endDate,
        notes: currentSeedData.name,
      })

      currentSeedData.productSpecificRulesets?.forEach(({ code, allowancePence, notes, includedInOverall }) => {
        store.addRow('rulesetExceptions', {
          rulesetId: currentSeedData.name,
          productId: code,
          allowancePence: allowancePence.toString(),
          includedInShared: includedInOverall,
          notes: notes
        })
      })
    }
  }
}

export default seedRulesets;
