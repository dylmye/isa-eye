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
import ThemedText from "@/components/ThemedText";
import ControlledRadioField from "@/components/fields/ControlledRadioField";

interface AddAccountModalUIProps extends AddModalProps {
  onSubmitForm: (data: AddAccountData) => void;
}

export interface AddAccountData {
  bankName: string;
  accountName?: string;
  openedInTaxYear: string;
  balanceType: "simple" | "ledger";
  openingBalance: number;
}

const AddAccountModalUI = ({
  onSubmitForm,
  ...props
}: AddAccountModalUIProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm<AddAccountData>();

  const onSubmit = (data: AddAccountData) => {
    onSubmitForm(data);
    reset();
    props.onDismiss?.();
  };

  console.log(getValues());

  return (
    <AddModal {...props}>
      <AddModal.Header text="Add account" onDismiss={props.onDismiss} />
      <FormUI>
        <ThemedText>Bank</ThemedText>
        {/* @TODO This will need to become an autocomplete / dropdown */}
        <ControlledTextField<AddAccountData, "bankName">
          control={control}
          errors={errors}
          name="bankName"
          label="Bank"
          required
        />
        <ControlledTextField<AddAccountData, "accountName">
          control={control}
          errors={errors}
          name="accountName"
          label="Nickname"
        />
        {/* @TODO This will need to become an autocomplete / dropdown */}
        <ControlledTextField<AddAccountData, "openedInTaxYear">
          control={control}
          errors={errors}
          name="openedInTaxYear"
          label="Year of opening"
          required
        />
        <ControlledRadioField<AddAccountData, "balanceType">
          control={control}
          errors={errors}
          name="balanceType"
          label="Balance Type"
          options={[
            {
              value: "simple",
              label: "Simple",
            },
            {
              value: "ledger",
              label: "Detailed",
            },
          ]}
          required
          // @TODO: how are we gonna manage transfers and annual values (contribs from last year don't count for this year etc) with simple balances lol
          note="Choose carefully as it's not possible to change. A simple balance account doesn't have a transaction history and is easier to manage. A detailed account maintains a ledger of transactions."
        />
        <ControlledCurrencyField<AddAccountData, "openingBalance">
          control={control}
          errors={errors}
          name="openingBalance"
          label="Starting Balance"
          required
        />
        <SubmitButton onPress={handleSubmit(onSubmit)} />
      </FormUI>
    </AddModal>
  );
};

export default AddAccountModalUI;
