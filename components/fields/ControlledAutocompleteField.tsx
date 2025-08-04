import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { FlashList } from "@shopify/flash-list";
import Fuse from "fuse.js";
import { useCallback, useState } from "react";
import { Controller, type FieldValues, type Path } from "react-hook-form";
import { Pressable, View } from "react-native";

import { Input, Text } from "@/components/ui";
import type BaseField from "@/types/baseField";
import type { DropdownValue } from "@/types/dropdown";
import { cn } from "@/utils/styles";
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

  const onSelectResult = useCallback((selectedItem: TOption) => {
    setTextInputValue(selectedItem.label);
    requestAnimationFrame(() => {
      setResultsVisiblity(false);
    });
  }, []);

  return (
    <>
      <Controller
        {...props}
        render={({ field: { onChange, value, disabled } }) => {
          return (
            <View>
              {label && (
                <FieldLabel
                  label={label}
                  fieldName={props.name}
                  required={required}
                  disabled={disabled}
                />
              )}
              <View className="flex items-center" collapsable={false}>
                <Input
                  value={textInputValue}
                  placeholder="Start typing..."
                  onFocus={() => {
                    setResultsVisiblity(true);
                  }}
                  // this triggers before the option is selected, only after first selection
                  // onBlur={() => setResultsVisiblity(false)}
                  onChangeText={(newText) => {
                    setTextInputValue(newText);
                    setResultsVisiblity(true);
                    updateFilteredOptions(
                      fuse.search(newText).map((r) => r.item),
                    );
                  }}
                  nativeID={props.name}
                  aria-labelledby={label && `${props.name}-label`}
                  role="combobox"
                  aria-expanded={showResults}
                  readOnly={disabled}
                  aria-disabled={disabled}
                />
                <MaterialCommunityIcons
                  name="chevron-down"
                  size={16}
                  aria-hidden={true}
                  className="pointer-events-none absolute right-4 h-10 content-center text-foreground opacity-50"
                />
              </View>
              {showResults && (
                <View className="max-h-48 w-full rounded border border-card bg-card shadow-md">
                  <FlashList
                    data={filteredOptions}
                    renderItem={({ item }) => (
                      <Pressable
                        className={cn(
                          "z-50 cursor-pointer border-gray-200 border-b bg-card px-3 py-2",
                          value === item.value && "bg-primary",
                        )}
                        onPress={() => {
                          onChange(item.value);
                          onSelectResult(item);
                        }}
                      >
                        <Text className="text-base">{item.label}</Text>
                      </Pressable>
                    )}
                    estimatedItemSize={41}
                  />
                </View>
              )}
            </View>
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
