import { useMemo } from "react";
import { FieldValues, Path } from "react-hook-form";

import { ControlledAutocompleteField } from "@/components/fields";
import { ControlledAutocompleteFieldProps } from "@/components/fields/ControlledAutocompleteField";
import RichDropdownOption from "@/components/fields/RichDropdownOption";
import type { RichDropdownOptions, RichDropdownValue } from "@/types/dropdown";
import hooks from "@/hooks/database";

const ProviderDropdownField = <
  TForm extends FieldValues = any,
  TFieldName extends Path<TForm> = any
>(props: Omit<ControlledAutocompleteFieldProps<TForm, TFieldName, RichDropdownValue>, 'allOptions' | 'renderOption'>) => {
  const providers = hooks.useTable("providers");
  const aliases = hooks.useTable("providerAliases");
  const providerDropdownOptions: RichDropdownOptions = useMemo(() => {
    return Object.keys(providers).map<RichDropdownValue>(id => ({
      label: providers[id].name!,
      value: id,
      image: { uri: providers[id].iconRelativeUrl! },
      aliases: Object.keys(aliases).filter(aid => aliases[aid].providerId === id).map(a => aliases[a].alias!),
    }));
  }, [providers, aliases]);
  return (
    <ControlledAutocompleteField allOptions={providerDropdownOptions} _DEBUG_IS_OPEN renderOption={(o, onPress) => (
      <RichDropdownOption option={o} onPress={onPress} />
    )} {...props} />
  )
}

export default ProviderDropdownField;
