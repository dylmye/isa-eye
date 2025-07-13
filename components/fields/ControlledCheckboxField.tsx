import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as CheckboxPrimitive from "@rn-primitives/checkbox";
import { Controller, type FieldValues, type Path } from "react-hook-form";
import { View } from "react-native";
import { Text } from "@/components/ui";
import { useThemeColor } from "@/hooks/useThemeColor";
import type BaseField from "@/types/baseField";
import FieldLabel from "./shared/FieldLabel";
import InfoMessage from "./shared/InfoMessage";
import styles from "./shared/styles";
import ValidationMessage from "./shared/ValidationMessage";

export interface ControlledCheckboxFieldProps<
  // biome-ignore lint/complexity/noBannedTypes: no assumptions on field
  Form extends FieldValues = {},
  // biome-ignore lint/suspicious/noExplicitAny: no possible default value
  FieldName extends Path<Form> = any,
> extends BaseField<Form, FieldName> {}

const ControlledCheckboxField = <
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
  ...props
}: ControlledCheckboxFieldProps<TForm, TFieldName>) => {
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
            <View style={styles.checkboxWrapper}>
              <CheckboxPrimitive.Root
                checked={!!value}
                disabled={disabled}
                onBlur={onBlur}
                onCheckedChange={onChange}
                style={{
                  ...styles.checkbox,
                  borderColor: textColor,
                }}
              >
                <CheckboxPrimitive.Indicator>
                  <MaterialCommunityIcons name="check" color={textColor} />
                </CheckboxPrimitive.Indicator>
              </CheckboxPrimitive.Root>
              <Text className="ml-1 leading-4">Yes</Text>
            </View>
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

export default ControlledCheckboxField;
