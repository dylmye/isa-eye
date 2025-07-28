import React, { type PropsWithChildren, useState } from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
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
import type { Product } from "@/db/schema";
import hooks from "@/hooks/database";
import { taxYearIsInRange } from "@/utils/taxYearIsInRange";
import { ControlledCheckboxField, ControlledTextField } from "../fields";
import FormUI from "../fields/FormUI";

interface EditProductData {
  productName: string;
  isFlexible: boolean;
  startTaxYear: string;
}

interface EditProductDialogProps {
  existingId: string;
}

const EditProductDialog = ({
  existingId,
  children,
}: PropsWithChildren<EditProductDialogProps>) => {
  const [open, setOpen] = useState(false);
  const currentRulesetName = hooks.useValue("currentTaxYear") as string;

  const onUpdateOpenState = (newState: boolean) => {
    if (!newState) {
      reset();
    }
    setOpen(newState);
  };

  const existingProductData = hooks.useRow("products", existingId);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditProductData>({
    shouldUnregister: true,
  });

  const onSubmitForm = hooks.useSetPartialRowCallback(
    "products",
    existingId,
    (data: EditProductData) =>
      ({
        friendlyName: data.productName,
        flexible: data.isFlexible,
      }) satisfies Product,
  );

  const onPressDelete = hooks.useDelRowCallback(
    "products",
    existingId,
    undefined,
    (store) => {
      const rowIdsToDelete: string[] = [];
      store.forEachRow("annualBalances", (rowId, _forEachCell) => {
        // @TODO: a better way to do this
        if (rowId.startsWith(existingId)) {
          rowIdsToDelete.push(rowId);
        }
      });
      rowIdsToDelete.forEach((rId) => store.delRow("annualBalances", rId));
    },
  );

  const onPressCloseAccount = hooks.useSetPartialRowCallback(
    "products",
    existingId,
    () => ({
      endTaxYear: currentRulesetName,
    }),
    [],
    undefined,
    (store) => {
      const rowIdsToDelete: string[] = [];
      store.forEachRow("annualBalances", (rowId, _forEachCell) => {
        const [productId, rulesetId] = rowId.split("-");
        // @TODO: a better way to do this
        if (
          productId === existingId &&
          !taxYearIsInRange(
            rulesetId,
            existingProductData.startTaxYear,
            existingProductData.endTaxYear,
          )
        ) {
          rowIdsToDelete.push(rowId);
        }
      });
      // @TODO: this isn't working for some reason
      console.log(`Deleting: ${rowIdsToDelete.join(", ")}`);
      rowIdsToDelete.forEach((rId) => store.delRow("annualBalances", rId));
    },
    [existingProductData],
  );

  const onPressReopenAccount = hooks.useDelCellCallback(
    "products",
    existingId,
    "endTaxYear",
  );

  const onSubmit = (data: EditProductData) => {
    onSubmitForm(data);
    onUpdateOpenState(false);
  };

  return (
    <Dialog className="w-full" open={open} onOpenChange={onUpdateOpenState}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Account</DialogTitle>
          <DialogDescription>
            <FormUI>
              <ControlledTextField<EditProductData, "productName">
                control={control}
                errors={errors}
                defaultValue={existingProductData.friendlyName}
                name="productName"
                label="Nickname"
              />
              <ControlledCheckboxField<EditProductData, "isFlexible">
                control={control}
                errors={errors}
                defaultValue={existingProductData.flexible}
                name="isFlexible"
                label="Flexible?"
                note="Check with your bank whether this ISA is flexible."
              />
              <ControlledTextField
                control={control}
                defaultValue={existingProductData.startTaxYear}
                name="startTaxYear"
                label="Opened In Year"
                disabled
              />
            </FormUI>
            <View className="flex flex-col gap-2">
              {existingProductData.endTaxYear ? (
                <Text className="text-sm">
                  This account was closed in {existingProductData.endTaxYear}.
                </Text>
              ) : (
                <Text className="text-sm">
                  Closed accounts don't show in future years' account lists and
                  aren't open to future contributions. You can still update
                  balances up until the {currentRulesetName} tax year, however{" "}
                  <Text className="font-semibold text-sm">
                    any future contributions already added will be permanently
                    deleted.
                  </Text>
                </Text>
              )}
              <Button
                className="w-fit flex-grow-0"
                variant="outline"
                onPress={
                  existingProductData.endTaxYear
                    ? onPressReopenAccount
                    : onPressCloseAccount
                }
              >
                <Text>
                  {existingProductData.endTaxYear
                    ? "Re-open account"
                    : `Close account`}
                </Text>
              </Button>
            </View>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">
              <Text>Cancel</Text>
            </Button>
          </DialogClose>
          <Button variant="destructive" onPress={onPressDelete}>
            <Text>Delete</Text>
          </Button>
          <Button onPress={handleSubmit(onSubmit)}>
            <Text>Update</Text>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditProductDialog;
