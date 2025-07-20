import { useMemo } from "react";
import type { FieldValues, Path } from "react-hook-form";

import { ControlledAutocompleteField } from "@/components/fields";
import type { ControlledAutocompleteFieldProps } from "@/components/fields/ControlledAutocompleteField";
import hooks from "@/hooks/database";
import type { DropdownOptions, DropdownValue } from "@/types/dropdown";

const RulesetDropdownField = <
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
  const rulesets = hooks.useTable("rulesets");
  const rulesetDropdownOptions: DropdownOptions = useMemo(() => {
    return Object.keys(rulesets)
      .reverse()
      .map<DropdownValue>((id) => ({
        label: id,
        value: id,
      }));
  }, [rulesets]);
  return (
    <ControlledAutocompleteField
      allOptions={rulesetDropdownOptions}
      {...props}
    />
  );
};

export default RulesetDropdownField;
