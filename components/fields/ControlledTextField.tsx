import BaseField from "@/types/baseField";
import { Controller, FieldValues, Path } from "react-hook-form";
import { TextInputProps, View, TextInput } from "react-native";
import FieldLabel from "./shared/FieldLabel";
import styles from "./shared/styles";
import { useThemeColor } from "@/hooks/useThemeColor";
import ThemedText from "../ThemedText";
import ValidationMessage from "./shared/ValidationMessage";
import InfoMessage from "./shared/InfoMessage";

export interface ControlledTextFieldProps<
  Form extends FieldValues = any,
  FieldName extends Path<Form> = any
> extends BaseField<Form, FieldName> {
  componentProps?: Omit<
    TextInputProps,
    "placeholder" | "onBlur" | "onChangeText" | "value" | "readOnly"
  >;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const ControlledTextField = <
  TForm extends FieldValues = any,
  TFieldName extends Path<TForm> = any
>({
  placeholder,
  required,
  disabled,
  componentProps = {
    numberOfLines: 1,
  },
  label,
  errors,
  prefix,
  suffix,
  note,
  ...props
}: ControlledTextFieldProps<TForm, TFieldName>) => {
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
            <View style={styles.fieldWithAdornments}>
              {prefix && (
                <View style={styles.fieldPrefix}>
                  <ThemedText style={styles.fieldAdornmentText}>
                    {prefix}
                  </ThemedText>
                </View>
              )}
              <TextInput
                style={{ ...styles.field, color: textColor }}
                {...componentProps}
                placeholder={placeholder}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                readOnly={disabled}
                aria-labelledby={label && `${props.name}-label`}
                nativeID={props.name}
                aria-invalid={!!currFieldErrs}
                aria-errormessage={currFieldErrs && currFieldErrs?.message}
              />
              {suffix && (
                <View style={styles.fieldSuffix}>
                  <ThemedText style={styles.fieldAdornmentText}>
                    {suffix}
                  </ThemedText>
                </View>
              )}
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

export default ControlledTextField;
