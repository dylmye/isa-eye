import { AddModalProps } from "@/components/AddModal";
import hooks from "@/hooks/database";
import AddAccountModalUI, { AddAccountData } from "./ui";
import { Product } from "@/db/schema";

const AddAccountModal = (props: AddModalProps) => {
  const onSubmitForm = hooks.useAddRowCallback(
    "products",
    (data: AddAccountData) => ({
      startTaxYear: data.openedInTaxYear,
      providerId: data.providerId,
      friendlyName: data.accountName,
      productTypeCode: data.isaTypeCode,
      flexible: data.isFlexible,
      startingBalancePence: String(data.openingBalance * 100),
    } satisfies Product)
  );
  return <AddAccountModalUI onSubmitForm={onSubmitForm} {...props} />;
};

export default AddAccountModal;
