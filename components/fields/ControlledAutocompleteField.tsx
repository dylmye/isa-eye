import BaseField from "@/types/baseField";
import { Controller, FieldValues, Path } from "react-hook-form";
import FieldLabel from "./shared/FieldLabel";
import styles from "./shared/styles";
import { useThemeColor } from "@/hooks/useThemeColor";
import Autocomplete from "react-native-autocomplete-input";
import ValidationMessage from "./shared/ValidationMessage";
import InfoMessage from "./shared/InfoMessage";
import { useState } from "react";
import { DropdownValue } from "@/types/dropdown";
import Fuse from "fuse.js";
import ThemedText from "../ThemedText";
import { Pressable, TextInput } from "react-native";

export interface ControlledAutocompleteFieldProps<
  Form extends FieldValues = any,
  FieldName extends Path<Form> = any,
  Option extends DropdownValue = DropdownValue
> extends BaseField<Form, FieldName> {
  allOptions: Option[];
  renderOption?: (o: Option, onPress: () => void) => React.ReactElement;
  _DEBUG_IS_OPEN?: boolean;
}

const ControlledAutocompleteField = <
  TForm extends FieldValues = any,
  TFieldName extends Path<TForm> = any,
  TOption extends DropdownValue = DropdownValue
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
  const textColor = useThemeColor({}, "text");
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
          const onPressItem = (label: string) => {
            setResultsVisiblity(false);
            onChange(label);
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
                  // @TODO: debounce this bad boi
                  updateFilteredOptions(
                    fuse.search(newText).map((r) => r.item)
                  );
                  return onChange(newText);
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
                  <TextInput
                    {...props}
                    style={{
                      ...styles.field,
                      color: textColor,
                    }}
                  />
                )}
                containerStyle={!showResults && styles.autocompleteInput}
                inputContainerStyle={{
                  borderColor: "transparent",
                }}
                flatListProps={{
                  keyboardShouldPersistTaps: "always",
                  keyExtractor: (item) => item.value,
                  renderItem: ({ item }) =>
                    renderOption?.(item, () => onPressItem(item.label)) ?? (
                      <Pressable
                        onPress={() => {
                          onPressItem(item.label);
                        }}
                        style={styles.autocompleteResult}
                        role="listitem"
                      >
                        <ThemedText>{item.label}</ThemedText>
                      </Pressable>
                    ),
                  style: styles.autocompleteResultsFlatlist,
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
            allOptions.map((o) => o.label).includes(value) ||
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
