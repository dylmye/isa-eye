import { AddModalProps } from "@/components/AddModal";
import hooks from "@/hooks/database";
import AddProductModalUI, { AddProductData } from "./ui";
import { Product } from "@/db/schema";

const AddProductModal = (props: AddModalProps) => {
  const onSubmitForm = hooks.useAddRowCallback(
    "products",
    (data: AddProductData) => ({
      startTaxYear: data.openedInTaxYear,
      providerId: data.providerId,
      friendlyName: data.productName,
      productTypeCode: data.isaTypeCode,
      flexible: data.isFlexible,
    } satisfies Product)
  );
  return <AddProductModalUI onSubmitForm={onSubmitForm} {...props} />;
};

export default AddProductModal;
