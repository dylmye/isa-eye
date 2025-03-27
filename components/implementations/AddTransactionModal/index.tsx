import { AddModalProps } from "@/components/AddModal";
import hooks from "@/hooks/database";
import AddTransactionModalUI, { AddTransactionData } from "./ui";

const AddTransactionModal = (props: AddModalProps) => {
  const onSubmitForm = hooks.useAddRowCallback(
    "contributions",
    (data: AddTransactionData) => ({
      productId: 0,
      taxYear: "2024/2025",
      contributions: data.amount,
    })
  );
  return <AddTransactionModalUI onSubmitForm={onSubmitForm} {...props} />;
};

export default AddTransactionModal;
