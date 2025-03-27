import { useForm } from "react-hook-form";

import AddModal, { AddModalProps } from "@/components/AddModal";
import {
  ControlledTextField,
  ControlledDateField,
  ControlledTextareaField,
  ControlledCurrencyField,
} from "@/components/fields";
import SubmitButton from "@/components/fields/SubmitButton";
import FormUI from "@/components/fields/FormUI";

interface AddTransactionModalUIProps extends AddModalProps {
  onSubmitForm: (data: AddTransactionData) => void;
}

export interface AddTransactionData {
  /** Account to add transaction to */
  accountName: string;
  /** Depending on the account type, the amount on the ledger entry or the new balance for the account. @TODO store as an integer of pennies */
  amount?: number;
  /** Date for the transaction */
  transactionDate?: string;
  notes?: string;
}

const AddTransactionModalUI = ({
  onSubmitForm,
  ...props
}: AddTransactionModalUIProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddTransactionData>();

  const onSubmit = (data: AddTransactionData) => {
    onSubmitForm(data);
    reset();
    props.onDismiss?.();
  };

  return (
    <AddModal {...props}>
      <AddModal.Header text="Add transaction" onDismiss={props.onDismiss} />
      <FormUI>
        {/* @TODO This will need to become an autocomplete / dropdown */}
        <ControlledTextField<AddTransactionData, "accountName">
          control={control}
          errors={errors}
          name="accountName"
          label="Account Name"
          required
        />
        {/* @TODO support for ledger vs. simple balance accounts */}
        <ControlledCurrencyField<AddTransactionData, "amount">
          control={control}
          errors={errors}
          name="amount"
          label="Amount"
          required
        />
        <ControlledDateField<AddTransactionData, "transactionDate">
          control={control}
          errors={errors}
          name="transactionDate"
          label="Date"
          required
        />
        <ControlledTextareaField<AddTransactionData, "notes">
          control={control}
          errors={errors}
          name="notes"
          label="Notes"
        />
        <SubmitButton onPress={handleSubmit(onSubmit)} />
      </FormUI>
    </AddModal>
  );
};

export default AddTransactionModalUI;
