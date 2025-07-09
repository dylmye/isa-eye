import type { AddModalProps } from "@/components/AddModal";
import type { Product } from "@/db/schema";
import hooks from "@/hooks/database";
import EditProductModalUI, { type EditProductData } from "./ui";

const EditProductModal = (props: AddModalProps) => {
  const onSubmitForm = hooks.useSetPartialRowCallback(
    "products",
    props.existingId as string,
    (data: EditProductData) =>
      ({
        friendlyName: data.productName,
        flexible: data.isFlexible,
      }) satisfies Product,
  );
  const onPressDelete = hooks.useDelRowCallback(
    "products",
    props.existingId as string,
    undefined,
    (store) => {
      const rowIdsToDelete: string[] = [];
      store.forEachRow("annualBalances", (rowId, _forEachCell) => {
        // @TODO: a better way to do this
        if (rowId.startsWith(props.existingId as string)) {
          rowIdsToDelete.push(rowId);
        }
      });
      rowIdsToDelete.forEach((rId) => store.delRow("annualBalances", rId));
    },
  );
  return (
    <EditProductModalUI
      onSubmitForm={onSubmitForm}
      onPressDelete={onPressDelete}
      {...props}
    />
  );
};

export default EditProductModal;
