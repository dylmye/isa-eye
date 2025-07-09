import type { AddModalProps } from "@/components/AddModal";
import hooks from "@/hooks/database";
import type { AnnualBalance } from "@/types/db";
import UpdateBalanceModalUI, { type UpdateBalanceData } from "./ui";

const UpdateBalanceModal = (props: AddModalProps) => {
  const onSubmitForm = hooks.useSetRowCallback(
    "annualBalances",
    (data) => `${data.productId}-${data.rulesetId}`,
    (data: UpdateBalanceData) =>
      ({
        productId: data.productId,
        rulesetId: data.rulesetId,
        lastUpdatedDateUnix: Date.now(),
        deductedFromAllowancePence: String(data.amount! * 100),
      }) satisfies AnnualBalance,
  );

  return <UpdateBalanceModalUI onSubmitForm={onSubmitForm} {...props} />;
};

export default UpdateBalanceModal;
