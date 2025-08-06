import { Controller, type FieldValues, type Path } from "react-hook-form";
import { View } from "react-native";
import { ScrollView as GestureHandledScrollView } from "react-native-gesture-handler";
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
              <Select value={value} onValueChange={(o) => onChange(o?.value)}>
                <SelectTrigger>
                  <SelectValue
                    className="native:text-lg text-foreground text-sm"
                    placeholder="Select an option"
                  />
                </SelectTrigger>
                <SelectContent insets={contentInsets} collapsable={false}>
                  {/* Use GH scrollview: https://github.com/mrzachnugent/react-native-reusables/issues/163#issuecomment-2198220936 */}
                  <GestureHandledScrollView className="max-h-42 w-full">
                    <SelectGroup className="w-full">
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
                  </GestureHandledScrollView>
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
