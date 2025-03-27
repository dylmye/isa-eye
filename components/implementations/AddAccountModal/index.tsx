import { AddModalProps } from "@/components/AddModal";
import hooks from "@/hooks/database";
import AddAccountModalUI, { AddAccountData } from "./ui";

const AddAccountModal = (props: AddModalProps) => {
  const onSubmitForm = hooks.useAddRowCallback(
    "contributions",
    (data: AddAccountData) => ({})
  );
  return <AddAccountModalUI onSubmitForm={onSubmitForm} {...props} />;
};

export default AddAccountModal;
