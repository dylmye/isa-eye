import { openDatabaseSync } from "expo-sqlite";
import {
  createStore,
  createIndexes,
  createRelationships,
  type Store,
} from "tinybase/with-schemas";
import { createExpoSqlitePersister } from "tinybase/persisters/persister-expo-sqlite/with-schemas";
import * as TinybaseUiReact from "tinybase/ui-react/with-schemas";

import {
  tableSchema,
  keyvalueSchema,
  type Schemas,
  tableIndexes,
  tableRelationships,
} from "@/db/schema";

const { useCreateStore, useCreatePersister } =
  TinybaseUiReact as TinybaseUiReact.WithSchemas<Schemas>;

export const useSetupDatabase = (): Store<Schemas> => {
  const store = useCreateStore(() =>
    createStore().setTablesSchema(tableSchema).setValuesSchema(keyvalueSchema)
  );

  try {
    useCreatePersister(
      store,
      (store) =>
        createExpoSqlitePersister(store, openDatabaseSync("db/isa-eye.db")),
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

  return store;
};
