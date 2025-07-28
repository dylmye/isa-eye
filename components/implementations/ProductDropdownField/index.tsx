import { useMemo } from "react";
import type { FieldValues, Path } from "react-hook-form";

import { ControlledAutocompleteField } from "@/components/fields";
import type { ControlledAutocompleteFieldProps } from "@/components/fields/ControlledAutocompleteField";
import RichDropdownOption from "@/components/fields/RichDropdownOption";
import hooks from "@/hooks/database";
import type { RichDropdownOptions, RichDropdownValue } from "@/types/dropdown";
import getProductName from "@/utils/getProductName";

const ProductDropdownField = <
  // biome-ignore lint/complexity/noBannedTypes: no assumptions on field
  TForm extends FieldValues = {},
  // biome-ignore lint/suspicious/noExplicitAny: no possible default value
  TFieldName extends Path<TForm> = any,
>(
  props: Omit<
    ControlledAutocompleteFieldProps<TForm, TFieldName, RichDropdownValue>,
    "allOptions" | "renderOption"
  >,
) => {
  const products = hooks.useResultTable("allProducts");
  const providerDropdownOptions: RichDropdownOptions = useMemo(() => {
    return Object.keys(products).map<RichDropdownValue>((id) => ({
      label: getProductName({
        friendlyName: products[id].friendlyName as string,
        providerName: products[id].providerName as string,
        productTypeName: products[id].productTypeName as string,
      }),
      value: id,
      image: products[id].providerIconRelativeUrl as string,
    }));
  }, [products]);
  return (
    <ControlledAutocompleteField
      allOptions={providerDropdownOptions}
      renderOption={(o, onPress) => (
        <RichDropdownOption option={o} onPress={onPress} />
      )}
      {...props}
    />
  );
};

export default ProductDropdownField;
