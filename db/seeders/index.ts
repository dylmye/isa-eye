import { Store } from "tinybase/with-schemas";
import { Schemas } from "../schema";
import seedProviders from "./providers";
import seedProductTypes from "./productTypes";
import seedRulesets from "./rulesets";

const seeders = [
  seedProviders,
  seedProductTypes,
  seedRulesets,
] satisfies ((store: Store<Schemas>) => void)[];

export default seeders;
