import { useMemo } from "react";
import type { FieldValues, Path } from "react-hook-form";

import { ControlledAutocompleteField } from "@/components/fields";
import type { ControlledAutocompleteFieldProps } from "@/components/fields/ControlledAutocompleteField";
import RichDropdownOption from "@/components/fields/RichDropdownOption";
import hooks from "@/hooks/database";
import type { DropdownOptions, DropdownValue } from "@/types/dropdown";

const ProductTypeDropdownField = <
  // biome-ignore lint/complexity/noBannedTypes: no assumptions on field
  TForm extends FieldValues = {},
  // biome-ignore lint/suspicious/noExplicitAny: no possible default value
  TFieldName extends Path<TForm> = any,
>(
  props: Omit<
    ControlledAutocompleteFieldProps<TForm, TFieldName, DropdownValue>,
    "allOptions" | "renderOption"
  >,
) => {
  const productTypes = hooks.useTable("productTypes");
  const productTypeDropdownOptions: DropdownOptions = useMemo(() => {
    return Object.keys(productTypes).map<DropdownValue>((id) => ({
      label: productTypes[id].name!,
      value: id,
    }));
  }, [productTypes]);
  return (
    <ControlledAutocompleteField
      allOptions={productTypeDropdownOptions}
      renderOption={(o, onPress) => (
        <RichDropdownOption option={o} onPress={onPress} />
      )}
      {...props}
    />
  );
};

export default ProductTypeDropdownField;
