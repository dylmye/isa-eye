///////////////////////////////////////////////
// THIS IS FOR NATIVE ONLY. SEE uSD FOR NATIVE
///////////////////////////////////////////////

import { createIndexedDbPersister } from "tinybase/persisters/persister-indexed-db/with-schemas";
import {
  createIndexes,
  createQueries,
  createRelationships,
  createStore,
  type Indexes,
  type Queries,
  type Relationships,
  type Store,
} from "tinybase/with-schemas";
import queryDefs from "@/db/queries";
import {
  keyvalueSchema,
  type Schemas,
  tableIndexes,
  tableRelationships,
  tableSchema,
} from "@/db/schema";
import seeders from "@/db/seeders";
import hooks from "@/hooks/database";

const { useCreateStore, useCreatePersister, useCreateQueries } = hooks;

export const useSetupDatabase = (): {
  store: Store<Schemas>;
  queries: Queries<Schemas> | undefined;
  indexes: Indexes<Schemas>;
  relationships: Relationships<Schemas>;
} => {
  const store = useCreateStore(() =>
    createStore().setTablesSchema(tableSchema).setValuesSchema(keyvalueSchema),
  );
  const queries = useCreateQueries(store, (s) => {
    const cq = createQueries(s);
    Object.values(queryDefs).forEach((def) => {
      def(cq);
    });
    return cq;
  });

  const indexes = createIndexes(store);
  const relationships = createRelationships(store);

  try {
    // biome-ignore lint/correctness/useHookAtTopLevel: no better way to error catch this
    useCreatePersister(
      store,
      (store) => createIndexedDbPersister(store, "isaEyeTinybase"),
      [],
      async (persister) => {
        await persister.load();
        await persister.startAutoSave();
      },
    );

    tableIndexes.forEach((i) => indexes.setIndexDefinition(i[0], i[1], i[2]));

    tableRelationships.forEach((r) =>
      relationships.setRelationshipDefinition(r[0], r[1], r[2], r[3]),
    );

    seeders.forEach((s) => s(store));
  } catch (e) {
    console.error(
      "Error while attempting to create database and state persister",
      e,
    );
  }

  return {
    store,
    queries,
    indexes,
    relationships,
  };
};
