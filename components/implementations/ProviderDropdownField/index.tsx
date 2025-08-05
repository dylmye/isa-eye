import toSorted from "array.prototype.tosorted";
import { useMemo } from "react";
import type { FieldValues, Path } from "react-hook-form";

import { ControlledSelectField } from "@/components/fields";
import type { ControlledSelectFieldProps } from "@/components/fields/ControlledSelectField";
import hooks from "@/hooks/database";
import type { DropdownOptions, DropdownValue } from "@/types/dropdown";

const ProviderDropdownField = <
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
  const providers = hooks.useTable("providers");
  const aliases = hooks.useTable("providerAliases");

  const collator = new Intl.Collator("en-GB");

  const providerDropdownOptions: DropdownOptions = useMemo(() => {
    return toSorted(Object.keys(providers), (idA, idB) =>
      collator.compare(providers[idA].name!, providers[idB].name!),
    ).map<DropdownValue>((id) => ({
      label: providers[id].name!,
      value: id,
    }));
  }, [providers, aliases]);
  return (
    <ControlledSelectField allOptions={providerDropdownOptions} {...props} />
  );
};

export default ProviderDropdownField;
