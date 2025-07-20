import { useMemo } from "react";
import type { FieldValues, Path } from "react-hook-form";

import { ControlledAutocompleteField } from "@/components/fields";
import type { ControlledAutocompleteFieldProps } from "@/components/fields/ControlledAutocompleteField";
import RichDropdownOption from "@/components/fields/RichDropdownOption";
import hooks from "@/hooks/database";
import type { RichDropdownOptions, RichDropdownValue } from "@/types/dropdown";

const ProviderDropdownField = <
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
  const providers = hooks.useTable("providers");
  const aliases = hooks.useTable("providerAliases");

  const collator = new Intl.Collator("en-GB");

  const providerDropdownOptions: RichDropdownOptions = useMemo(() => {
    return Object.keys(providers)
      .toSorted((idA, idB) =>
        collator.compare(providers[idA].name!, providers[idB].name!),
      )
      .map<RichDropdownValue>((id) => ({
        label: providers[id].name!,
        value: id,
        image: providers[id].iconRelativeUrl,
        aliases: Object.keys(aliases)
          .filter((aid) => aliases[aid].providerId === id)
          .map((a) => aliases[a].alias!),
      }));
  }, [providers, aliases]);
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

export default ProviderDropdownField;
