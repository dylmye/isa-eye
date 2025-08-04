import { PortalHost } from "@gorhom/portal";
import React from "react";
import { useForm } from "react-hook-form";
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
import type { Product } from "@/db/schema";
import hooks from "@/hooks/database";
import { ControlledCheckboxField, ControlledTextField } from "../fields";
import FormUI from "../fields/FormUI";
import ProductTypeDropdownField from "../implementations/ProductTypeDropdownField";
import ProviderDropdownField from "../implementations/ProviderDropdownField";
import RulesetDropdownField from "../implementations/RulesetDropdownField";

interface AddProductData {
  providerId: string;
  productName: string;
  openedInTaxYear: string;
  isaTypeCode: string;
  isFlexible: boolean;
}

const AddProductDialog = ({ portalHostName }: { portalHostName: string }) => {
  const currentRulesetName = hooks.useValue("currentTaxYear") as string;

  const onUpdateOpenState = (newState: boolean) => {
    if (!newState) {
      reset();
    }
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddProductData>();

  const onSubmitForm = hooks.useAddRowCallback(
    "products",
    (data: AddProductData) =>
      ({
        startTaxYear: data.openedInTaxYear,
        providerId: data.providerId,
        friendlyName: data.productName,
        productTypeCode: data.isaTypeCode,
        flexible: data.isFlexible,
      }) satisfies Product,
  );

  const onSubmit = (data: AddProductData) => {
    onSubmitForm(data);
    onUpdateOpenState(false);
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Add Account</DialogTitle>
        <DialogDescription>
          <FormUI>
            <ControlledTextField<AddProductData, "productName">
              control={control}
              errors={errors}
              name="productName"
              label="Nickname"
            />
            <ProviderDropdownField<AddProductData, "providerId">
              control={control}
              errors={errors}
              name="providerId"
              label="Bank"
              required
            />
            <RulesetDropdownField<AddProductData, "openedInTaxYear">
              control={control}
              errors={errors}
              name="openedInTaxYear"
              defaultValue={currentRulesetName as string}
              label="Year of opening"
              required
              note="The tax year runs from 6th April to 5th April of the following year, so an ISA opened on 2nd Feb 2024 would be in the 2023/2024 tax year."
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
            <PortalHost name={portalHostName} />
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
          <Text>Add</Text>
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default AddProductDialog;
