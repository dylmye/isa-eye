import type { Store } from "tinybase/with-schemas";
import type { Schemas } from "../schema";
import seedProductTypes from "./productTypes";
import seedProviders from "./providers";
import seedRulesets from "./rulesets";

const seeders = [seedProviders, seedProductTypes, seedRulesets] satisfies ((
  store: Store<Schemas>,
) => void)[];

export default seeders;
