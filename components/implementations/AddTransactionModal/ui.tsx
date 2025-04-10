import { useForm } from "react-hook-form";
import { useMemo } from "react";

import AddModal, { AddModalProps } from "@/components/AddModal";
import {
  ControlledDateField,
  ControlledTextareaField,
  ControlledCurrencyField,
  ControlledAutocompleteField,
} from "@/components/fields";
import SubmitButton from "@/components/fields/SubmitButton";
import FormUI from "@/components/fields/FormUI";
import hooks from "@/hooks/database";
import {
  DropdownValue,
  RichDropdownOptions,
  RichDropdownValue,
} from "@/types/dropdown";
import RichDropdownOption from "@/components/fields/RichDropdownOption";
import balanceTypes from "@/constants/balanceTypes";
import { RuleNames, rulesDropdown } from "@/constants/rules";

const useGetAccountBalanceType = (currentAccountName?: string) => {
  const accounts = hooks.useResultTable("allAccountsWithIsaType");

  // @TODO: this won't work for accounts without friendlynames!! Any way to get cellId for selected option?
  return useMemo<
    (typeof balanceTypes)[keyof typeof balanceTypes] | undefined
  >(() => {
    const account = Object.values(accounts ?? []).find(
      (a) => a.friendlyName === currentAccountName
    );
    return account
      ? (account.balanceType as (typeof balanceTypes)[keyof typeof balanceTypes])
      : undefined;
  }, [currentAccountName]);
};

interface AddTransactionModalUIProps extends AddModalProps {
  onSubmitForm: (data: AddTransactionData) => void;
  accountDropdownOptions: RichDropdownOptions;
}

export interface AddTransactionData {
  /** Account to add transaction to */
  accountName: string;
  /** Depending on the account type, the amount on the ledger entry or the new balance for the account. */
  amount?: number;
  /** For detailed txns, Date for the transaction */
  transactionDate?: string;
  transactionTaxYear?: string;
  notes?: string;
}

const AddTransactionModalUI = ({
  onSubmitForm,
  accountDropdownOptions,
  ...props
}: AddTransactionModalUIProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<AddTransactionData>();

  const onDismiss = () => {
    reset();
    props.onDismiss?.();
  };

  const onSubmit = (data: AddTransactionData) => {
    onSubmitForm(data);
    onDismiss();
  };

  const currentAccountName = watch("accountName");
  const balanceType = useGetAccountBalanceType(currentAccountName);
  const isSimpleBalance = balanceType === balanceTypes.SIMPLE;

  return (
    <AddModal {...props}>
      <AddModal.Header
        text={isSimpleBalance ? "Update balance" : "Add transaction"}
        onDismiss={onDismiss}
      />
      <FormUI>
        <ControlledAutocompleteField<
          AddTransactionData,
          "accountName",
          RichDropdownValue
        >
          control={control}
          errors={errors}
          allOptions={accountDropdownOptions}
          name="accountName"
          label="Account name"
          renderOption={(o, onPress) => (
            <RichDropdownOption option={o} onPress={onPress} />
          )}
          required
        />
        {currentAccountName && (
          <>
            {isSimpleBalance ? (
              <ControlledAutocompleteField<
                AddTransactionData,
                "transactionTaxYear",
                DropdownValue<RuleNames>
              >
                control={control}
                errors={errors}
                allOptions={rulesDropdown}
                name="transactionTaxYear"
                label="Tax Year"
                required
              />
            ) : (
              <ControlledDateField<AddTransactionData, "transactionDate">
                control={control}
                errors={errors}
                name="transactionDate"
                label="Date"
                required
              />
            )}
            <ControlledCurrencyField<AddTransactionData, "amount">
              control={control}
              errors={errors}
              name="amount"
              label="Amount"
              required
              note={
                isSimpleBalance
                  ? "Enter the current balance of this account for the tax year you select."
                  : undefined
              }
            />
            {!isSimpleBalance && (
              <ControlledTextareaField<AddTransactionData, "notes">
                control={control}
                errors={errors}
                name="notes"
                label="Notes"
              />
            )}
          </>
        )}
        <SubmitButton onPress={handleSubmit(onSubmit)} />
      </FormUI>
    </AddModal>
  );
};

export default AddTransactionModalUI;
