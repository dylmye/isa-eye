import BaseField from "@/types/baseField";
import { Controller, FieldValues, Path } from "react-hook-form";
import { TextInputProps } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import FieldLabel from "./shared/FieldLabel";

interface ControlledTextFieldProps<
  Form extends FieldValues = any,
  FieldName extends Path<Form> = any
> extends BaseField<Form, FieldName> {
  componentProps?: Omit<
    TextInputProps,
    "placeholder" | "onBlur" | "onChangeText" | "value" | "readOnly"
  >;
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
  ...props
}: ControlledTextFieldProps<TForm, TFieldName>) => (
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
        <TextInput
          {...componentProps}
          placeholder={placeholder}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          readOnly={disabled}
          aria-labelledby={label && `${props.name}-label`}
        />
      </>
    )}
    rules={{
      ...props.rules,
      required,
    }}
    disabled={disabled}
  />
);

export default ControlledTextField;
