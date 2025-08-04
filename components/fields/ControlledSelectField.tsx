import { Controller, type FieldValues, type Path } from "react-hook-form";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import type BaseField from "@/types/baseField";
import type { DropdownValue } from "@/types/dropdown";
import FieldLabel from "./shared/FieldLabel";
import InfoMessage from "./shared/InfoMessage";
import ValidationMessage from "./shared/ValidationMessage";

export interface ControlledSelectFieldProps<
  // biome-ignore lint/complexity/noBannedTypes: no assumptions on field
  Form extends FieldValues = {},
  // biome-ignore lint/suspicious/noExplicitAny: no possible default value
  FieldName extends Path<Form> = any,
  Option extends DropdownValue = DropdownValue,
> extends BaseField<Form, FieldName> {
  allOptions: Option[];
  renderOption?: (o: Option, onPress: () => void) => React.ReactElement;
}

const ControlledSelectField = <
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
  ...props
}: ControlledSelectFieldProps<TForm, TFieldName, TOption>) => {
  const currFieldErrs = errors?.[props.name];

  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12,
  };

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
              <Select value={value} onValueChange={onChange}>
                <SelectTrigger>
                  <SelectValue
                    className="native:text-lg text-foreground text-sm"
                    placeholder="Select an option"
                  />
                </SelectTrigger>
                <SelectContent insets={contentInsets}>
                  <SelectGroup>
                    {allOptions?.map((o) => (
                      <SelectItem
                        label={o.label}
                        value={o.value}
                        key={`select-opt-${o.value}`}
                      >
                        {o.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
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

export default ControlledSelectField;
