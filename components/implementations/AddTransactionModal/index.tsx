import { AddModalProps } from "@/components/AddModal";
import hooks from "@/hooks/database";
import AddTransactionModalUI, { AddTransactionData } from "./ui";
import { AnnualBalance } from "@/types/db";

const AddTransactionModal = (props: AddModalProps) => {
  const onSubmitForm = hooks.useAddRowCallback(
    "annualBalances",
    (data: AddTransactionData) => ({
      productId: data.productId,
      rulesetId: data.rulesetId,
      lastUpdatedDateUnix: Date.now(),
      deductedFromAllowancePence: String(data.amount! * 100),
    } satisfies AnnualBalance)
  );

  return (
    <AddTransactionModalUI
      onSubmitForm={onSubmitForm}
      {...props}
    />
  );
};

export default AddTransactionModal;
