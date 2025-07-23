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
import { ControlledCheckboxField, ControlledTextField } from "../fields";
import FormUI from "../fields/FormUI";

interface EditProductData {
  productName: string;
  isFlexible: boolean;
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
            </FormUI>
            <View className="flex flex-col gap-2">
              <Text className="text-sm">
                {existingProductData.endTaxYear
                  ? `This account was closed in ${existingProductData.endTaxYear}. `
                  : `Closed accounts don't show in future years' account lists and aren't open to future contributions. Nothing else changes: you can still update balances up until the ${currentRulesetName} tax year. `}
                <Text className="font-bold text-sm">
                  Any future contributions already added will still count
                  towards your allowance but won't be visible in the accounts
                  list.
                </Text>
              </Text>
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
