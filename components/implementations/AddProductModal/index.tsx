import type { AddModalProps } from "@/components/AddModal";
import type { Product } from "@/db/schema";
import hooks from "@/hooks/database";
import AddProductModalUI, { type AddProductData } from "./ui";

const AddProductModal = (props: AddModalProps) => {
  const onSubmitForm = hooks.useAddRowCallback(
    "products",
    (data: AddProductData) =>
      ({
        startTaxYear: data.openedInTaxYear,
        providerId: data.providerId,
        friendlyName: data.productName,
        productTypeCode: data.isaTypeCode,
        flexible: data.isFlexible,
      }) satisfies Product,
  );
  return <AddProductModalUI onSubmitForm={onSubmitForm} {...props} />;
};

export default AddProductModal;
