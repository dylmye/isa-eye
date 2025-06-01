import { AddModalProps } from "@/components/AddModal";
import hooks from "@/hooks/database";
import AddAccountModalUI, { AddAccountData } from "./ui";
import balanceTypes from "@/constants/balanceTypes";

const AddAccountModal = (props: AddModalProps) => {
  const onSubmitForm = hooks.useAddRowCallback(
    "products",
    (data: AddAccountData) => ({
      startTaxYear: data.openedInTaxYear,
      providerName: banks.find((b) => b.name === data.bankName)!.id,
      friendlyName: data.accountName,
      isaType: isaTypes.find((i) => i.name === data.isaType)!.code,
      balanceType: balanceTypes[data.balanceType as keyof typeof balanceTypes],
      flexible: data.isFlexible,
      startingBalancePence: String(data.openingBalance * 100),
    })
  );
  return <AddAccountModalUI onSubmitForm={onSubmitForm} {...props} />;
};

export default AddAccountModal;
