import { AddModalProps } from "@/components/AddModal";
import hooks from "@/hooks/database";
import EditProductModalUI, { EditProductData } from "./ui";
import { Product } from "@/db/schema";

const EditProductModal = (props: AddModalProps) => {
  const onSubmitForm = hooks.useSetPartialRowCallback(
    "products",
    props.existingId as string,
    (data: EditProductData) => ({
      friendlyName: data.productName,
      flexible: data.isFlexible,
    } satisfies Product)
  );
  return <EditProductModalUI onSubmitForm={onSubmitForm} {...props} />;
};

export default EditProductModal;
