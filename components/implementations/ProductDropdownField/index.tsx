import { useMemo } from "react";
import { FieldValues, Path } from "react-hook-form";

import { ControlledAutocompleteField } from "@/components/fields";
import { ControlledAutocompleteFieldProps } from "@/components/fields/ControlledAutocompleteField";
import RichDropdownOption from "@/components/fields/RichDropdownOption";
import type { RichDropdownOptions, RichDropdownValue } from "@/types/dropdown";
import hooks from "@/hooks/database";
import getAccountName from "@/utils/getAccountName";

const ProductDropdownField = <
  TForm extends FieldValues = any,
  TFieldName extends Path<TForm> = any
>(
  props: Omit<
    ControlledAutocompleteFieldProps<TForm, TFieldName, RichDropdownValue>,
    "allOptions" | "renderOption"
  >
) => {
  const products = hooks.useResultTable("allProducts");
  const providerDropdownOptions: RichDropdownOptions = useMemo(() => {
    return Object.keys(products).map<RichDropdownValue>((id) => ({
      label: getAccountName({
        friendlyName: products[id].friendlyName as string,
        providerName: products[id].providerName as string,
        productTypeName: products[id].productTypeName as string,
      }),
      value: id,
      image: { uri: products[id].providerIconRelativeUrl as string },
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
