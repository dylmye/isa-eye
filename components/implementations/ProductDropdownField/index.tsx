import { useMemo } from "react";
import type { FieldValues, Path } from "react-hook-form";

import { ControlledSelectField } from "@/components/fields";
import type { ControlledSelectFieldProps } from "@/components/fields/ControlledSelectField";
import hooks from "@/hooks/database";
import type { DropdownOptions, DropdownValue } from "@/types/dropdown";
import getProductName from "@/utils/getProductName";

const ProductDropdownField = <
  // biome-ignore lint/complexity/noBannedTypes: no assumptions on field
  TForm extends FieldValues = {},
  // biome-ignore lint/suspicious/noExplicitAny: no possible default value
  TFieldName extends Path<TForm> = any,
>(
  props: Omit<
    ControlledSelectFieldProps<TForm, TFieldName, DropdownValue>,
    "allOptions" | "renderOption"
  >,
) => {
  const products = hooks.useResultTable("allProducts");
  const providerDropdownOptions: DropdownOptions = useMemo(() => {
    return Object.keys(products).map<DropdownValue>((id) => ({
      label: getProductName({
        friendlyName: products[id].friendlyName as string,
        providerName: products[id].providerName as string,
        productTypeName: products[id].productTypeName as string,
      }),
      value: id,
    }));
  }, [products]);
  return (
    <ControlledSelectField allOptions={providerDropdownOptions} {...props} />
  );
};

export default ProductDropdownField;
