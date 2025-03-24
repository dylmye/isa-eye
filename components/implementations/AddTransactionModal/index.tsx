import { useForm } from "react-hook-form";

import AddModal, { AddModalProps } from "@/components/AddModal";
import { ControlledTextField, ControlledDateField } from "@/components/fields";
import SubmitButton from "@/components/fields/SubmitButton";
import ThemedText from "@/components/ThemedText";

interface AddTransactionData {
  /** Account to add transaction to */
  accountName: string;
  /** Depending on the account type, the amount on the ledger entry or the new balance for the account. @TODO store as an integer of pennies */
  amount?: number;
  /** Date for the transaction */
  transactionDate?: string;
  notes?: string;
}

const AddTransactionModal = (props: AddModalProps) => {
  const { control, handleSubmit, reset } = useForm<AddTransactionData>();

  const onSubmit = (data: AddTransactionData) => {
    // process data here
    reset();
    props.onDismiss?.();
  };

  return (
    <AddModal {...props}>
      <AddModal.Header text="Add transaction" onDismiss={props.onDismiss} />
      {/* @TODO This will need to become an autocomplete / dropdown */}
      <ControlledTextField<AddTransactionData, "accountName">
        control={control}
        name="accountName"
        label="Account Name"
        required
      />
      {/* @TODO support for ledger vs. simple balance accounts */}
      <ThemedText>Amount</ThemedText>
      <ControlledDateField<AddTransactionData, "transactionDate">
        control={control}
        name="transactionDate"
        label="Date"
        required
      />
      <ThemedText>Notes</ThemedText>
      <SubmitButton onPress={handleSubmit(onSubmit)} />
    </AddModal>
  );
};

export default AddTransactionModal;
