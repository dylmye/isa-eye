import { useForm } from "react-hook-form";

import AddModal, { AddModalProps } from "@/components/AddModal";
import { ControlledCurrencyField } from "@/components/fields";
import SubmitButton from "@/components/fields/SubmitButton";
import FormUI from "@/components/fields/FormUI";

import RulesetDropdownField from "../RulesetDropdownField";
import ProductDropdownField from "../ProductDropdownField";

interface UpdateBalanceModalUIProps extends AddModalProps {
  onSubmitForm: (data: UpdateBalanceData) => void;
}

export interface UpdateBalanceData {
  /** Product to update balance of */
  productId: string;
  rulesetId?: string;
  /** The new balance for the product. */
  amount?: number;
}

const UpdateBalanceModalUI = ({
  onSubmitForm,
  ...props
}: UpdateBalanceModalUIProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<UpdateBalanceData>();

  const onDismiss = () => {
    reset();
    props.onDismiss?.();
  };

  const onSubmit = (data: UpdateBalanceData) => {
    onSubmitForm(data);
    onDismiss();
  };

  const currentProductId = watch("productId");

  return (
    <AddModal {...props}>
      <AddModal.Header text={"Update balance"} onDismiss={onDismiss} />
      <FormUI>
        <ProductDropdownField<UpdateBalanceData, "productId">
          control={control}
          errors={errors}
          name="productId"
          label="Account"
          required
        />
        {currentProductId && (
          <>
            <RulesetDropdownField<UpdateBalanceData, "rulesetId">
              control={control}
              errors={errors}
              name="rulesetId"
              label="Tax Year"
              required
            />
            <ControlledCurrencyField<UpdateBalanceData, "amount">
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

export default UpdateBalanceModalUI;
