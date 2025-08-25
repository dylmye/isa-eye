import { Controller, type FieldValues, type Path } from "react-hook-form";
import { View } from "react-native";
import { Checkbox, Label } from "@/components/ui";
import type BaseField from "@/types/baseField";
import FieldLabel from "./shared/FieldLabel";
import InfoMessage from "./shared/InfoMessage";
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
  const currFieldErrs = errors?.[props.name];

  return (
    <>
      <Controller
        {...props}
        render={({ field: { onChange, value, disabled, name } }) => (
          <>
            {label && (
              <FieldLabel
                label={label}
                fieldName={props.name}
                required={required}
              />
            )}
            <View className="flex flex-row gap-2 py-2">
              <Checkbox
                checked={!!value}
                onCheckedChange={onChange}
                disabled={disabled}
                aria-labelledby={`${name}-label`}
              />
              <Label>Yes</Label>
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
