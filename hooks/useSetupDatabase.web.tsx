import { createStore, type Store } from "tinybase/with-schemas";
import { createIndexedDbPersister } from "tinybase/persisters/persister-indexed-db/with-schemas";
import * as TinybaseUiReact from "tinybase/ui-react/with-schemas";

import { tableSchema, keyvalueSchema, type Schemas } from "@/db/schema";

const { useCreateStore, useCreatePersister } =
  TinybaseUiReact as TinybaseUiReact.WithSchemas<Schemas>;

export const useSetupDatabase = (): Store<Schemas> => {
  const store = useCreateStore(() =>
    createStore().setTablesSchema(tableSchema).setValuesSchema(keyvalueSchema)
  );

  try {
    useCreatePersister(
      store,
      (store) => createIndexedDbPersister(store, "isaEyeDb"),
      [],
      async (persister) => {
        await persister.load();
        await persister.startAutoSave();
      }
    );
  } catch (e) {
    console.error(
      "Error while attempting to create database and state persister",
      e
    );
  }

  return store;
};
