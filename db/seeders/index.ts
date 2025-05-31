import { Store } from "tinybase/with-schemas";
import { Schemas } from "../schema";
import seedProviders from "./providers";
import seedProductTypes from "./productTypes";

const seeders = [
  seedProviders,
  seedProductTypes,
] satisfies ((store: Store<Schemas>) => void)[];

export default seeders;
