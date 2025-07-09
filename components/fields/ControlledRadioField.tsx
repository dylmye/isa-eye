import BaseField from "@/types/baseField";
import { Controller, FieldValues, Path } from "react-hook-form";
import * as RadioGroupPrimitive from "@rn-primitives/radio-group";
import FieldLabel from "./shared/FieldLabel";
import styles from "./shared/styles";
import { useThemeColor } from "@/hooks/useThemeColor";
import ValidationMessage from "./shared/ValidationMessage";
import InfoMessage from "./shared/InfoMessage";
import { View } from "react-native";
import ThemedText from "../ThemedText";

export interface ControlledRadioFieldProps<
  // biome-ignore lint/complexity/noBannedTypes: no assumptions on field
  Form extends FieldValues = {},
  // biome-ignore lint/suspicious/noExplicitAny: no possible default value
  FieldName extends Path<Form> = any,
> extends BaseField<Form, FieldName> {
  options: {
    label: string;
    value: string | number | boolean;
    disabled?: boolean;
  }[];
}

const ControlledRadioField = <
  // biome-ignore lint/complexity/noBannedTypes: no assumptions on field
  TForm extends FieldValues = {},
  // biome-ignore lint/suspicious/noExplicitAny: no possible default value
  TFieldName extends Path<TForm> = any,
>({
  label,
  required,
  disabled,
  errors,
  note,
  options,
  ...props
}: ControlledRadioFieldProps<TForm, TFieldName>) => {
  const textColor = useThemeColor({}, "text");
  const currFieldErrs = errors?.[props.name];

  return (
    <>
      <Controller
        {...props}
        render={({ field: { onChange, onBlur, value, disabled } }) => (
          <>
            {label && (
              <FieldLabel
                label={label}
                fieldName={props.name}
                required={required}
              />
            )}
            <RadioGroupPrimitive.Root
              value={value}
              onValueChange={onChange}
              style={styles.radioGroup}
            >
              {options.map((o) => {
                const isSelected = value === o.value;
                return (
                  <View
                    key={o.value.toString()}
                    style={[
                      styles.field,
                      isSelected && styles.selectedRadioOption,
                    ]}
                  >
                    {/* add fieldlabel */}
                    <RadioGroupPrimitive.Item
                      value={o.value.toString()}
                      onPress={() => onChange(o.value)}
                      aria-labelledby={`${o.value}-label`}
                      aria-disabled={o.disabled ?? false}
                      aria-selected={isSelected}
                    >
                      <RadioGroupPrimitive.Indicator />
                    </RadioGroupPrimitive.Item>
                    <ThemedText
                      nativeID={`${o.value}-label`}
                      style={isSelected && styles.selectedRadioOptionText}
                      onPress={() => onChange(o.value)}
                    >
                      {o.label}
                    </ThemedText>
                  </View>
                );
              })}
            </RadioGroupPrimitive.Root>
          </>
        )}
        rules={{
          ...props.rules,
          required: {
            value: required ?? false,
            message: "This is required",
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

export default ControlledRadioField;
