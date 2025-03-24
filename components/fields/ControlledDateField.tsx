import BaseField from "@/types/baseField";
import { Controller, FieldValues, Path } from "react-hook-form";
import FieldLabel from "./shared/FieldLabel";

interface ControlledDateFieldProps<
  Form extends FieldValues = any,
  FieldName extends Path<Form> = any
> extends BaseField<Form, FieldName> {}

const ControlledDateField = <
  TForm extends FieldValues = any,
  TFieldName extends Path<TForm> = any
>({
  placeholder,
  required,
  disabled,
  label,
  ...props
}: ControlledDateFieldProps<TForm, TFieldName>) => (
  <Controller
    {...props}
    render={({ field }) => (
      <>
        {label && (
          <FieldLabel
            label={label}
            fieldName={props.name}
            required={required}
          />
        )}
        {/* @TODO filter min/max by TY modal was opened on */}
        <input {...field} type="date" />
      </>
    )}
    rules={{
      ...props.rules,
      required,
    }}
    disabled={disabled}
  />
);

export default ControlledDateField;
