import { useForm } from "react-hook-form";
import { useEffect } from "react";

import AddModal, { AddModalProps } from "@/components/AddModal";
import { ControlledCurrencyField } from "@/components/fields";
import SubmitButton from "@/components/fields/SubmitButton";
import FormUI from "@/components/fields/FormUI";
import hooks from "@/hooks/database";

import RulesetDropdownField from "../RulesetDropdownField";
import ProductDropdownField from "../ProductDropdownField";

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
  const currentRulesetId = hooks.useValue("currentTaxYear");
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
  const selectedProductIsFlexible = hooks.useCell("products", selectedProductId, "flexible") as boolean | undefined;
  const selectedExistingBalance = hooks.useRow("annualBalances", `${selectedProductId}-${selectedRulesetId}`);

  useEffect(() => {
    if (selectedExistingBalance?.deductedFromAllowancePence) {
      setValue("amount", Number.parseFloat(selectedExistingBalance.deductedFromAllowancePence) / 100);
    }
  }, [selectedExistingBalance, selectedRulesetId])

  return (
    <AddModal {...props}>
      <AddModal.Header text={"Update contribution balance"} onDismiss={onDismiss} />
      <FormUI>
        <ProductDropdownField<UpdateBalanceData, "productId">
          control={control}
          errors={errors}
          name="productId"
          label="Account"
          required
        />
        {selectedProductId && (
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
              name="amount"
              label="Allowance used"
              required
              note={selectedProductIsFlexible ? `Enter the sum of all contributions you've made during this tax year, subtracting any withdrawals.
If you've withdrawn more than the amount you've contributed this tax year, enter £0 and don't edit previous year contributions.
Don't include transfers and interest/gains earned.` :
                "Enter the sum of all contributions you've made during this tax year. Don't subtract withdrawals. Don't include transfers and interest/gains earned."
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
