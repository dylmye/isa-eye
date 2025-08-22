import { Controller, type FieldValues, type Path } from "react-hook-form";
import { type TextInputProps, View } from "react-native";
import { Input, Text } from "@/components/ui";
import type BaseField from "@/types/baseField";
import { cn } from "@/utils/styles";
import FieldLabel from "./shared/FieldLabel";
import InfoMessage from "./shared/InfoMessage";
import ValidationMessage from "./shared/ValidationMessage";

export interface ControlledTextFieldProps<
  // biome-ignore lint/complexity/noBannedTypes: no assumptions on field
  Form extends FieldValues = {},
  // biome-ignore lint/suspicious/noExplicitAny: no possible default value
  FieldName extends Path<Form> = any,
> extends BaseField<Form, FieldName> {
  componentProps?: Omit<
    TextInputProps,
    "placeholder" | "onBlur" | "onChangeText" | "value" | "readOnly"
  >;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const ControlledTextField = <
  // biome-ignore lint/complexity/noBannedTypes: no assumptions on field
  TForm extends FieldValues = {},
  // biome-ignore lint/suspicious/noExplicitAny: no possible default value
  TFieldName extends Path<TForm> = any,
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
                disabled={disabled}
              />
            )}
            <View className="flex flex-row items-center py-1">
              {prefix && (
                <View className="pr-2">
                  <Text className="font-semibold text-base">{prefix}</Text>
                </View>
              )}
              <Input
                {...componentProps}
                placeholder={placeholder}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                readOnly={disabled}
                aria-labelledby={label && `${props.name}-label`}
                nativeID={props.name}
                aria-invalid={!!currFieldErrs}
                aria-errormessage={currFieldErrs?.message}
                aria-disabled={disabled}
                className={cn(disabled && "cursor-not-allowed bg-muted")}
              />
              {suffix && (
                <View className="pl-2">
                  <Text className="font-semibold text-base">{suffix}</Text>
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
