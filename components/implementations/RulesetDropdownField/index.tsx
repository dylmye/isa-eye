import toSorted from "array.prototype.tosorted";
import { useMemo } from "react";
import type { FieldValues, Path } from "react-hook-form";
import { ControlledAutocompleteField } from "@/components/fields";
import type { ControlledAutocompleteFieldProps } from "@/components/fields/ControlledAutocompleteField";
import hooks from "@/hooks/database";
import type { DropdownOptions, DropdownValue } from "@/types/dropdown";
import { sortRulesetIds } from "@/utils/sorters";
import { taxYearIsInRange } from "@/utils/taxYearIsInRange";

const RulesetDropdownField = <
  // biome-ignore lint/complexity/noBannedTypes: no assumptions on field
  TForm extends FieldValues = {},
  // biome-ignore lint/suspicious/noExplicitAny: no possible default value
  TFieldName extends Path<TForm> = any,
>(
  props: Omit<
    ControlledAutocompleteFieldProps<TForm, TFieldName, DropdownValue>,
    "allOptions" | "renderOption"
  > & {
    filterRulesets?: [string | undefined, string | undefined];
  },
) => {
  const rulesets = hooks.useTable("rulesets");
  const rulesetDropdownOptions: DropdownOptions = useMemo(() => {
    const filteredRulesets = toSorted(
      Object.keys(rulesets),
      sortRulesetIds,
    ).filter((r) => {
      return (
        !props.filterRulesets ||
        taxYearIsInRange(r, props.filterRulesets[0], props.filterRulesets[1])
      );
    });

    return filteredRulesets.toReversed().map<DropdownValue>((id) => ({
      label: id,
      value: id,
    }));
  }, [rulesets, props.filterRulesets]);
  return (
    <ControlledAutocompleteField
      allOptions={rulesetDropdownOptions}
      {...props}
    />
  );
};

export default RulesetDropdownField;
