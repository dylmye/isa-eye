import { AddModalProps } from "@/components/AddModal";
import hooks from "@/hooks/database";
import AddTransactionModalUI, { AddTransactionData } from "./ui";
import { useMemo } from "react";
import { RichDropdownOptions } from "@/types/dropdown";
import getAccountName, { GetAccountNameProps } from "@/utils/getAccountName";

const useAccountDropdownOptions = () => {
  const accounts = hooks.useResultTable("allAccounts");

  return useMemo<RichDropdownOptions>(() => {
    const accountsArr = Object.entries(accounts);

    if (!accountsArr.length) return [];

    const resultsArr: RichDropdownOptions = [];

    accountsArr.forEach(([id, a]) => {
      resultsArr.push({
        label: getAccountName(a as unknown as GetAccountNameProps),
        value: id,
        image: banks.find((b) => b.id === a.providerName)?.iconFile,
      });
    });

    return resultsArr;
  }, [accounts]);
};

const AddTransactionModal = (props: AddModalProps) => {
  // we need to update if the product is simple balanced
  const onSubmitForm = hooks.useAddRowCallback(
    "contributions",
    (data: AddTransactionData) => ({
      // @TODO link to account. search data.accountName
      productId: "1",
      taxYear: data.transactionTaxYear,
      transactionDateUnix: data.transactionDate
        ? new Date(data.transactionDate).getTime()
        : undefined,
      deductedFromAllowancePence: String(data.amount! * 100),
      notes: data.notes,
    })
  );

  const accountOptions = useAccountDropdownOptions();

  return (
    <AddTransactionModalUI
      onSubmitForm={onSubmitForm}
      accountDropdownOptions={accountOptions}
      {...props}
    />
  );
};

export default AddTransactionModal;
