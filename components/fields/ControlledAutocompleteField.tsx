import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fuse from "fuse.js";
import { useState } from "react";
import { Controller, type FieldValues, type Path } from "react-hook-form";
import { View } from "react-native";
import Autocomplete from "react-native-autocomplete-input";

import { Input } from "@/components/ui";
import type BaseField from "@/types/baseField";
import type { DropdownValue } from "@/types/dropdown";
import DropdownOption from "./DropdownOption";
import FieldLabel from "./shared/FieldLabel";
import InfoMessage from "./shared/InfoMessage";
import ValidationMessage from "./shared/ValidationMessage";

export interface ControlledAutocompleteFieldProps<
  // biome-ignore lint/complexity/noBannedTypes: no assumptions on field
  Form extends FieldValues = {},
  // biome-ignore lint/suspicious/noExplicitAny: no possible default value
  FieldName extends Path<Form> = any,
  Option extends DropdownValue = DropdownValue,
> extends BaseField<Form, FieldName> {
  allOptions: Option[];
  renderOption?: (o: Option, onPress: () => void) => React.ReactElement;
  _DEBUG_IS_OPEN?: boolean;
}

const ControlledAutocompleteField = <
  // biome-ignore lint/complexity/noBannedTypes: no assumptions on field
  TForm extends FieldValues = {},
  // biome-ignore lint/suspicious/noExplicitAny: no possible default value
  TFieldName extends Path<TForm> = any,
  TOption extends DropdownValue = DropdownValue,
>({
  placeholder,
  required,
  disabled,
  label,
  errors,
  note,
  allOptions,
  renderOption,
  _DEBUG_IS_OPEN,
  ...props
}: ControlledAutocompleteFieldProps<TForm, TFieldName, TOption>) => {
  const [filteredOptions, updateFilteredOptions] = useState(allOptions);
  const [showResults, setResultsVisiblity] = useState(_DEBUG_IS_OPEN ?? false);
  const [textInputValue, setTextInputValue] = useState<string>(
    props.defaultValue ?? "",
  );
  const currFieldErrs = errors?.[props.name];

  const fuse = new Fuse(allOptions, {
    keys: ["label", "aliases"],
    threshold: 0.2,
  });

  return (
    <>
      <Controller
        {...props}
        render={({ field: { onChange, value, disabled } }) => {
          const onPressItem = (value: string, label: string) => {
            setResultsVisiblity(false);
            onChange(value);
            setTextInputValue(label);
          };
          return (
            <>
              {label && (
                <FieldLabel
                  label={label}
                  fieldName={props.name}
                  required={required}
                />
              )}
              <Autocomplete
                editable={!disabled}
                autoCorrect={false}
                data={showResults ? filteredOptions : []}
                value={value}
                onChangeText={(newText) => {
                  !showResults && setResultsVisiblity(true);
                  updateFilteredOptions(
                    fuse.search(newText).map((r) => r.item),
                  );
                  return setTextInputValue(newText);
                }}
                onFocus={() => {
                  setResultsVisiblity(true);
                }}
                onBlur={(e) => {
                  // handle case where option is selected but onBlur is called first
                  if (
                    "relatedTarget" in e &&
                    (e.relatedTarget as { role: string | null })?.role ===
                      "listitem"
                  )
                    return;

                  setResultsVisiblity(false);
                }}
                renderTextInput={(props) => (
                  <View className="flex items-center">
                    <Input {...props} value={textInputValue} />
                    <MaterialCommunityIcons
                      name="chevron-down"
                      size={16}
                      aria-hidden={true}
                      className="pointer-events-none absolute right-4 h-10 content-center text-foreground opacity-50"
                    />
                  </View>
                )}
                containerStyle={!showResults && { zIndex: 0 }}
                inputContainerStyle={{
                  borderColor: "transparent",
                }}
                flatListProps={{
                  keyboardShouldPersistTaps: "always",
                  keyExtractor: (item) => item.value,
                  renderItem: ({ item }) =>
                    renderOption?.(item, () =>
                      onPressItem(item.value, item.label),
                    ) ?? (
                      <DropdownOption
                        option={item}
                        onPress={() => {
                          onPressItem(item.value, item.label);
                        }}
                      />
                    ),
                  className:
                    "bg-popover px-1 py-1 z-[1000] max-h-[320] rounded-md border-input shadow-foreground/10 shadow-md",
                }}
              />
            </>
          );
        }}
        rules={{
          ...props.rules,
          required: {
            value: required ?? false,
            message: "Select an option",
          },
          validate: (value) =>
            allOptions.map((o) => o.value).includes(value) ||
            "Select a valid option",
        }}
        disabled={disabled}
      />
      {currFieldErrs && (
        <ValidationMessage message={currFieldErrs.message as string} />
      )}
      {note && !currFieldErrs && <InfoMessage message={note} />}
    </>
  );
};

export default ControlledAutocompleteField;
