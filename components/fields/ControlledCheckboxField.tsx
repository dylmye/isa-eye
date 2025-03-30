import BaseField from "@/types/baseField";
import { Controller, FieldValues, Path } from "react-hook-form";
import * as CheckboxPrimitive from "@rn-primitives/checkbox";
import FieldLabel from "./shared/FieldLabel";
import styles from "./shared/styles";
import { useThemeColor } from "@/hooks/useThemeColor";
import ValidationMessage from "./shared/ValidationMessage";
import InfoMessage from "./shared/InfoMessage";
import { View } from "react-native";
import ThemedText from "../ThemedText";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export interface ControlledCheckboxFieldProps<
  Form extends FieldValues = any,
  FieldName extends Path<Form> = any
> extends BaseField<Form, FieldName> {}

const ControlledCheckboxField = <
  TForm extends FieldValues = any,
  TFieldName extends Path<TForm> = any
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
              <ThemedText style={{ lineHeight: 16 }}>Yes</ThemedText>
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
