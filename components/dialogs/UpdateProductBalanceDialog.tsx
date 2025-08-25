import type { Option } from "@rn-primitives/select";
import { router } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import {
  Button,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Text,
} from "@/components/ui";
import type { AnnualBalance } from "@/db/schema";
import hooks from "@/hooks/database";
import { formatCurrency } from "@/utils/formatCurrency";
import { ControlledCurrencyField } from "../fields";
import FormUI from "../fields/FormUI";
import ProductDropdownField from "../implementations/ProductDropdownField";
import RulesetDropdownField from "../implementations/RulesetDropdownField";

export interface UpdateBalanceData {
  /** Product to update balance of */
  productId: Option;
  rulesetId: Option;
  /** The new balance for the product. */
  amount?: number;
}

const UpdateProductBalanceDialog = () => {
  const onUpdateOpenState = (newState: boolean) => {
    if (!newState) {
      reset();
    }
  };

  const store = hooks.useStore();
  const rulesetExceptions = hooks.useTable("rulesetExceptions");
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

  const onSubmitForm = hooks.useSetRowCallback(
    "annualBalances",
    (data) => `${data.productId?.value}-${data.rulesetId?.value}`,
    (data: UpdateBalanceData) =>
      ({
        productId: data.productId?.value,
        rulesetId: data.rulesetId?.value,
        lastUpdatedDateUnix: Date.now(),
        deductedFromAllowancePence: String(data.amount! * 100),
      }) satisfies AnnualBalance,
  );

  const onSubmit = (data: UpdateBalanceData) => {
    onSubmitForm(data);
    onUpdateOpenState(false);
    router.dismiss();
  };

  const selectedProductId = watch("productId");
  const selectedRulesetId = watch("rulesetId");
  const selectedProduct = hooks.useRow(
    "products",
    selectedProductId?.value ?? "",
  );

  const currentRulesetExceptionRow = useMemo(() => {
    return Object.values(rulesetExceptions ?? {}).filter(
      (re) =>
        re.rulesetId === selectedRulesetId?.value &&
        re.productTypeId === selectedProduct?.productTypeCode,
    )?.[0];
  }, [selectedRulesetId, selectedProduct?.productTypeCode]);

  const amountNote = useMemo(() => {
    let note = "";
    if (selectedProduct?.flexible) {
      note += `Enter the sum of all contributions you've made during this tax year, subtracting any withdrawals.
If you've withdrawn more than the amount you've contributed this tax year, enter £0 and don't edit previous year contributions.
Don't include transfers and interest/gains earned.`;
    } else {
      note +=
        "Enter the sum of all contributions you've made during this tax year. Don't subtract withdrawals. Don't include transfers and interest/gains earned.";
    }

    if (currentRulesetExceptionRow) {
      note += `\nThe allowance for this type of account this year is ${formatCurrency(parseFloat(currentRulesetExceptionRow.allowancePence ?? "0") / 100)}.`;
    }
    return note;
  }, [selectedProduct?.flexible, currentRulesetExceptionRow]);

  // this might be the worst code of 2025 and idk if it even works reliably
  // @TODO: overwrite existing value - or just set amount directly?
  useEffect(() => {
    const selectedExistingBalance = store?.getRow(
      "annualBalances",
      `${selectedProductId?.value}-${selectedRulesetId?.value ?? currentRulesetId}`,
    );
    if (selectedExistingBalance?.deductedFromAllowancePence) {
      setCurrentProductExistingValue(
        Number.parseFloat(selectedExistingBalance.deductedFromAllowancePence) /
          100,
      );
    } else {
      if (!selectedProductId?.value) {
        setCurrentProductExistingValue(null);
      } else {
        setValue("amount", 0);
        setCurrentProductExistingValue(0);
      }
    }
  }, [selectedRulesetId?.value, selectedProductId?.value, currentRulesetId]);

  // @TODO: add form validation for rulesetId within product open-close range
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Update Balance</DialogTitle>
        <DialogDescription>
          <FormUI>
            <ProductDropdownField<UpdateBalanceData, "productId">
              control={control}
              errors={errors}
              name="productId"
              label="Account"
              required
            />
            {currentProductExistingValue !== null && selectedProduct ? (
              <>
                <RulesetDropdownField<UpdateBalanceData, "rulesetId">
                  control={control}
                  errors={errors}
                  defaultValue={{
                    label: currentRulesetId as string,
                    value: currentRulesetId as string,
                  }}
                  name="rulesetId"
                  label="Tax Year"
                  filterRulesets={[
                    selectedProduct.startTaxYear,
                    selectedProduct?.endTaxYear,
                  ]}
                  required
                />
                <ControlledCurrencyField<UpdateBalanceData, "amount">
                  control={control}
                  errors={errors}
                  defaultValue={currentProductExistingValue}
                  name="amount"
                  label="Allowance used"
                  required
                  note={amountNote}
                />
              </>
            ) : (
              <View style={{ height: 48 }} />
            )}
          </FormUI>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="secondary">
            <Text>Cancel</Text>
          </Button>
        </DialogClose>
        <Button onPress={handleSubmit(onSubmit)}>
          <Text>Update</Text>
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default UpdateProductBalanceDialog;
