import { AddModalProps } from "@/components/AddModal";
import hooks from "@/hooks/database";
import UpdateBalanceModalUI, { UpdateBalanceData } from "./ui";
import { AnnualBalance } from "@/types/db";

const UpdateBalanceModal = (props: AddModalProps) => {
  const onSubmitForm = hooks.useAddRowCallback(
    "annualBalances",
    (data: UpdateBalanceData) => ({
      productId: data.productId,
      rulesetId: data.rulesetId,
      lastUpdatedDateUnix: Date.now(),
      deductedFromAllowancePence: String(data.amount! * 100),
    } satisfies AnnualBalance)
  );

  return (
    <UpdateBalanceModalUI
      onSubmitForm={onSubmitForm}
      {...props}
    />
  );
};

export default UpdateBalanceModal;
