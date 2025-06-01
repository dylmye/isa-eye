import { useForm } from "react-hook-form";

import AddModal, { AddModalProps } from "@/components/AddModal";
import {
  ControlledTextField,
  ControlledCurrencyField,
  ControlledRadioField,
  ControlledCheckboxField,
  ControlledAutocompleteField,
} from "@/components/fields";
import SubmitButton from "@/components/fields/SubmitButton";
import FormUI from "@/components/fields/FormUI";
import balanceTypes from "@/constants/balanceTypes";
import { DropdownValue } from "@/types/dropdown";
import ProviderDropdownField from "../ProviderDropdownField";
import RulesetDropdownField from "../RulesetDropdownField";
import ProductTypeDropdownField from "../ProductTypeDropdownField";

interface AddAccountModalUIProps extends AddModalProps {
  onSubmitForm: (data: AddAccountData) => void;
}

export interface AddAccountData {
  providerId: string;
  accountName: string;
  openedInTaxYear: string;
  isaTypeCode: string;
  balanceType: keyof typeof balanceTypes;
  isFlexible: boolean;
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
  } = useForm<AddAccountData>();

  const onDismiss = () => {
    reset();
    props.onDismiss?.();
  };

  const onSubmit = (data: AddAccountData) => {
    onSubmitForm(data);
    onDismiss();
  };

  return (
    <AddModal {...props}>
      <AddModal.Header text="Add account" onDismiss={onDismiss} />
      <FormUI>
        <ProviderDropdownField<
          AddAccountData,
          "providerId"
        >
          control={control}
          errors={errors}
          name="providerId"
          label="Bank"
          required
        />
        <ControlledTextField<AddAccountData, "accountName">
          control={control}
          errors={errors}
          name="accountName"
          label="Nickname"
          required
          note="(Alpha: this field will be optional in the future. Must be unique.)"
        />
        <RulesetDropdownField<
          AddAccountData,
          "openedInTaxYear"
        >
          control={control}
          errors={errors}
          name="openedInTaxYear"
          label="Year of opening"
          required
          note="The tax year runs from 6th April to 5th April, so an ISA opened on 2nd Feb 2024 would be in the 2023/2024 tax year."
        />
        <ProductTypeDropdownField<
          AddAccountData,
          "isaTypeCode"
        >
          control={control}
          errors={errors}
          name="isaTypeCode"
          label="Type of ISA"
          required
        />
        <ControlledRadioField<AddAccountData, "balanceType">
          control={control}
          errors={errors}
          name="balanceType"
          label="Balance Type"
          options={[
            {
              value: "SIMPLE",
              label: "Simple",
            },
            {
              value: "LEDGER",
              label: "Detailed",
            },
          ]}
          required
          note="'Simple Balance' accounts maintain a single balance for every tax year, while 'Detailed Balance' accounts maintain a transaction history."
        />
        <ControlledCheckboxField<AddAccountData, "isFlexible">
          control={control}
          errors={errors}
          name="isFlexible"
          label="Flexible?"
          defaultValue={false}
          note="Check with your bank whether this ISA is flexible."
        />
        <ControlledCurrencyField<AddAccountData, "openingBalance">
          control={control}
          errors={errors}
          name="openingBalance"
          label="Starting Balance"
          required
          note="This balance won't contribute to the allowance of the year this account was opened."
        />
        <SubmitButton onPress={handleSubmit(onSubmit)} />
      </FormUI>
    </AddModal>
  );
};

export default AddAccountModalUI;
