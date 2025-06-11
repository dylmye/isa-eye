import { useMemo } from "react";
import { FieldValues, Path } from "react-hook-form";

import { ControlledAutocompleteField } from "@/components/fields";
import { ControlledAutocompleteFieldProps } from "@/components/fields/ControlledAutocompleteField";
import RichDropdownOption from "@/components/fields/RichDropdownOption";
import type { DropdownOptions, DropdownValue } from "@/types/dropdown";
import hooks from "@/hooks/database";

const RulesetDropdownField = <
  TForm extends FieldValues = any,
  TFieldName extends Path<TForm> = any
>(props: Omit<ControlledAutocompleteFieldProps<TForm, TFieldName, DropdownValue>, 'allOptions' | 'renderOption'>) => {
  const rulesets = hooks.useTable("rulesets");
  const rulesetDropdownOptions: DropdownOptions = useMemo(() => {
    return Object.keys(rulesets).reverse().map<DropdownValue>(id => ({
      label: id,
      value: id,
    }));
  }, [rulesets]);
  return (
    <ControlledAutocompleteField allOptions={rulesetDropdownOptions} renderOption={(o, onPress) => (
      <RichDropdownOption option={o} onPress={onPress} />
    )} {...props} />
  )
}

export default RulesetDropdownField;
