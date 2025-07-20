import React, { type PropsWithChildren, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Text,
} from "@/components/ui";
import type { AnnualBalance } from "@/db/schema";
import hooks from "@/hooks/database";
import { ControlledCurrencyField } from "../fields";
import FormUI from "../fields/FormUI";
import ProductDropdownField from "../implementations/ProductDropdownField";
import RulesetDropdownField from "../implementations/RulesetDropdownField";

export interface UpdateBalanceData {
  /** Product to update balance of */
  productId: string;
  rulesetId: string;
  /** The new balance for the product. */
  amount?: number;
}

const UpdateBalanceDialog = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);

  const onUpdateOpenState = (newState: boolean) => {
    if (!newState) {
      reset();
    }
    setOpen(newState);
  };

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

  const onSubmitForm = hooks.useSetRowCallback(
    "annualBalances",
    (data) => `${data.productId}-${data.rulesetId}`,
    (data: UpdateBalanceData) =>
      ({
        productId: data.productId,
        rulesetId: data.rulesetId,
        lastUpdatedDateUnix: Date.now(),
        deductedFromAllowancePence: String(data.amount! * 100),
      }) satisfies AnnualBalance,
  );

  const onSubmit = (data: UpdateBalanceData) => {
    onSubmitForm(data);
    onUpdateOpenState(false);
  };

  const selectedProductId = watch("productId");
  const selectedRulesetId = watch("rulesetId");
  const selectedProduct = hooks.useRow("products", selectedProductId);

  // this might be the worst code of 2025
  // @TODO: overwrite existing value - or just set amount directly?
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
    <Dialog className="flex-1" open={open} onOpenChange={onUpdateOpenState}>
      <DialogTrigger asChild>{children}</DialogTrigger>
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
    </Dialog>
  );
};

export default UpdateBalanceDialog;
