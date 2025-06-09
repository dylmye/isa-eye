import { useForm } from "react-hook-form";

import AddModal, { AddModalProps } from "@/components/AddModal";
import { ControlledCurrencyField } from "@/components/fields";
import SubmitButton from "@/components/fields/SubmitButton";
import FormUI from "@/components/fields/FormUI";

import RulesetDropdownField from "../RulesetDropdownField";
import ProductDropdownField from "../ProductDropdownField";

interface AddTransactionModalUIProps extends AddModalProps {
  onSubmitForm: (data: AddTransactionData) => void;
}

export interface AddTransactionData {
  /** Product to add transaction to */
  productId: string;
  /** The new balance for the product. */
  amount?: number;
  rulesetId?: string;
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

  const currentProductId = watch("productId");

  return (
    <AddModal {...props}>
      <AddModal.Header text={"Update balance"} onDismiss={onDismiss} />
      <FormUI>
        <ProductDropdownField<AddTransactionData, "productId">
          control={control}
          errors={errors}
          name="productId"
          label="Account"
          required
        />
        {currentProductId && (
          <>
            <RulesetDropdownField<AddTransactionData, "rulesetId">
              control={control}
              errors={errors}
              name="rulesetId"
              label="Tax Year"
              required
            />
            <ControlledCurrencyField<AddTransactionData, "amount">
              control={control}
              errors={errors}
              name="amount"
              label="Allowance used"
              required
              note={
                "Enter the sum of all contributions you've made this tax year so far. If your account is flexible, deduct any withdrawals (up to the total you've contributed.)"
              }
            />
          </>
        )}
        <SubmitButton onPress={handleSubmit(onSubmit)} />
      </FormUI>
    </AddModal>
  );
};

export default AddTransactionModalUI;
