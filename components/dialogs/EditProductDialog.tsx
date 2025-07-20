import React, { type PropsWithChildren, useState } from "react";
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
