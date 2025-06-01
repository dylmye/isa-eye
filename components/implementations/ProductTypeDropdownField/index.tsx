import { useMemo } from "react";
import { FieldValues, Path } from "react-hook-form";

import { ControlledAutocompleteField } from "@/components/fields";
import { ControlledAutocompleteFieldProps } from "@/components/fields/ControlledAutocompleteField";
import RichDropdownOption from "@/components/fields/RichDropdownOption";
import type { DropdownOptions, DropdownValue } from "@/types/dropdown";
import hooks from "@/hooks/database";

const ProductTypeDropdownField = <
  TForm extends FieldValues = any,
  TFieldName extends Path<TForm> = any
>(props: Omit<ControlledAutocompleteFieldProps<TForm, TFieldName, DropdownValue>, 'allOptions' | 'renderOption'>) => {
  const productTypes = hooks.useTable("productTypes");
  const productTypeDropdownOptions: DropdownOptions = useMemo(() => {
    return Object.keys(productTypes).map<DropdownValue>(id => ({
      label: productTypes[id].name!,
      value: id,
    }));
  }, [productTypes]);
  return (
    <ControlledAutocompleteField allOptions={productTypeDropdownOptions} renderOption={(o, onPress) => (
      <RichDropdownOption option={o} onPress={onPress} />
    )} {...props} />
  )
}

export default ProductTypeDropdownField;
