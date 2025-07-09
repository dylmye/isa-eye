import { useForm } from "react-hook-form";

import AddModal, { type AddModalProps } from "@/components/AddModal";
import {
  ControlledCheckboxField,
  ControlledTextField,
} from "@/components/fields";
import FormUI from "@/components/fields/FormUI";
import SubmitButton from "@/components/fields/SubmitButton";
import ProductTypeDropdownField from "../ProductTypeDropdownField";
import ProviderDropdownField from "../ProviderDropdownField";
import RulesetDropdownField from "../RulesetDropdownField";

interface AddProductModalUIProps extends AddModalProps {
  onSubmitForm: (data: AddProductData) => void;
}

export interface AddProductData {
  providerId: string;
  productName: string;
  openedInTaxYear: string;
  isaTypeCode: string;
  isFlexible: boolean;
}

const AddProductModalUI = ({
  onSubmitForm,
  ...props
}: AddProductModalUIProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddProductData>();

  const onDismiss = () => {
    reset();
    props.onDismiss?.();
  };

  const onSubmit = (data: AddProductData) => {
    onSubmitForm(data);
    onDismiss();
  };

  return (
    <AddModal {...props}>
      <AddModal.Header text="Add account" onDismiss={onDismiss} />
      <FormUI>
        <ProviderDropdownField<AddProductData, "providerId">
          control={control}
          errors={errors}
          name="providerId"
          label="Bank"
          required
        />
        <ControlledTextField<AddProductData, "productName">
          control={control}
          errors={errors}
          name="productName"
          label="Nickname"
        />
        <RulesetDropdownField<AddProductData, "openedInTaxYear">
          control={control}
          errors={errors}
          name="openedInTaxYear"
          label="Year of opening"
          required
          note="The tax year runs from 6th April to 5th April, so an ISA opened on 2nd Feb 2024 would be in the 2023/2024 tax year."
        />
        <ProductTypeDropdownField<AddProductData, "isaTypeCode">
          control={control}
          errors={errors}
          name="isaTypeCode"
          label="Type of ISA"
          required
        />
        <ControlledCheckboxField<AddProductData, "isFlexible">
          control={control}
          errors={errors}
          name="isFlexible"
          label="Flexible?"
          defaultValue={false}
          note="Check with your bank whether this ISA is flexible."
        />
        <SubmitButton onPress={handleSubmit(onSubmit)} />
      </FormUI>
    </AddModal>
  );
};

export default AddProductModalUI;
