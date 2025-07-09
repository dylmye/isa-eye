import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import AddModal, { type AddModalProps } from "@/components/AddModal";
import { ControlledCurrencyField } from "@/components/fields";
import FormUI from "@/components/fields/FormUI";
import SubmitButton from "@/components/fields/SubmitButton";
import hooks from "@/hooks/database";
import ProductDropdownField from "../ProductDropdownField";
import RulesetDropdownField from "../RulesetDropdownField";

interface UpdateBalanceModalUIProps extends AddModalProps {
  onSubmitForm: (data: UpdateBalanceData) => void;
}

export interface UpdateBalanceData {
  /** Product to update balance of */
  productId: string;
  rulesetId: string;
  /** The new balance for the product. */
  amount?: number;
}

const UpdateBalanceModalUI = ({
  onSubmitForm,
  ...props
}: UpdateBalanceModalUIProps) => {
  const store = hooks.useStore();
  const currentRulesetId = hooks.useValue("currentTaxYear");
  const [currentProductExistingValue, setCurrentProductExistingValue] =
    useState<number | null>(null);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    setValue,
  } = useForm<UpdateBalanceData>();

  const onDismiss = () => {
    reset();
    props.onDismiss?.();
  };

  const onSubmit = (data: UpdateBalanceData) => {
    onSubmitForm(data);
    onDismiss();
  };

  const selectedProductId = watch("productId");
  const selectedRulesetId = watch("rulesetId");
  const selectedProduct = hooks.useRow("products", selectedProductId);

  // this might be the worst code of 2025
  // TODO: overwrite existing value - or just set amount directly?
  useEffect(() => {
    const selectedExistingBalance = store?.getRow(
      "annualBalances",
      `${selectedProductId}-${selectedRulesetId ?? currentRulesetId}`,
    );
    if (selectedExistingBalance?.deductedFromAllowancePence) {
      setCurrentProductExistingValue(
        Number.parseFloat(selectedExistingBalance.deductedFromAllowancePence) /
          100,
      );
    } else {
      if (!selectedProductId) {
        setCurrentProductExistingValue(null);
      } else {
        setValue("amount", 0);
        setCurrentProductExistingValue(0);
      }
    }
  }, [selectedRulesetId, selectedProductId, currentRulesetId]);

  return (
    <AddModal {...props}>
      <AddModal.Header
        text={"Update contribution balance"}
        onDismiss={onDismiss}
      />
      <FormUI>
        <ProductDropdownField<UpdateBalanceData, "productId">
          control={control}
          errors={errors}
          name="productId"
          label="Account"
          required
        />
        {currentProductExistingValue !== null && (
          <>
            <RulesetDropdownField<UpdateBalanceData, "rulesetId">
              control={control}
              errors={errors}
              defaultValue={currentRulesetId as string}
              name="rulesetId"
              label="Tax Year"
              required
            />
            <ControlledCurrencyField<UpdateBalanceData, "amount">
              control={control}
              errors={errors}
              defaultValue={currentProductExistingValue}
              name="amount"
              label="Allowance used"
              required
              note={
                selectedProduct?.flexible
                  ? `Enter the sum of all contributions you've made during this tax year, subtracting any withdrawals.
If you've withdrawn more than the amount you've contributed this tax year, enter £0 and don't edit previous year contributions.
Don't include transfers and interest/gains earned.`
                  : "Enter the sum of all contributions you've made during this tax year. Don't subtract withdrawals. Don't include transfers and interest/gains earned."
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
