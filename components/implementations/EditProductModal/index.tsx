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
  return <EditProductModalUI onSubmitForm={onSubmitForm} {...props} />;
};

export default EditProductModal;
