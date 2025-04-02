// THIS IS FOR NATIVE ONLY. SEE uSD.web FOR WEB
import { openDatabaseSync } from "expo-sqlite";
import {
  createStore,
  createIndexes,
  createRelationships,
  createQueries,
  type Store,
  type Queries,
} from "tinybase/with-schemas";
import { createExpoSqlitePersister } from "tinybase/persisters/persister-expo-sqlite/with-schemas";

import {
  tableSchema,
  keyvalueSchema,
  type Schemas,
  tableIndexes,
  tableRelationships,
} from "@/db/schema";
import hooks from "@/hooks/database";
import queryDefs from "@/db/queries";

const { useCreateStore, useCreatePersister, useCreateQueries } = hooks;

export const useSetupDatabase = (): {
  store: Store<Schemas>;
  queries: Queries<Schemas> | undefined;
} => {
  const store = useCreateStore(() =>
    createStore().setTablesSchema(tableSchema).setValuesSchema(keyvalueSchema)
  );
  const queries = useCreateQueries(store, (s) => {
    const cq = createQueries(s);
    Object.values(queryDefs).forEach((def) => {
      def(cq);
    });
    return cq;
  });

  try {
    useCreatePersister(
      store,
      (store) =>
        createExpoSqlitePersister(
          store,
          openDatabaseSync("db/isa-eye.db"),
          "isa_eye_expo"
        ),
      [],
      async (persister) => {
        await persister.load();
        await persister.startAutoSave();
      }
    );

    const indexes = createIndexes(store);
    tableIndexes.forEach((i) => indexes.setIndexDefinition(i[0], i[1], i[2]));

    const relationships = createRelationships(store);
    tableRelationships.forEach((r) =>
      relationships.setRelationshipDefinition(r[0], r[1], r[2], r[3])
    );
  } catch (e) {
    console.error(
      "Error while attempting to create database and state persister",
      e
    );
  }

  return {
    store,
    queries,
  };
};
