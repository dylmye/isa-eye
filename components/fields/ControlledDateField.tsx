import BaseField from "@/types/baseField";
import { Controller, FieldValues, Path } from "react-hook-form";
import FieldLabel from "./shared/FieldLabel";
import styles from "./shared/styles";
import { useThemeColor } from "@/hooks/useThemeColor";

/**
 * @TODO this field probably isn't working on mobile/native platforms, probably replace it on native
 */

interface ControlledDateFieldProps<
  // biome-ignore lint/complexity/noBannedTypes: no assumptions on field
  Form extends FieldValues = {},
  // biome-ignore lint/suspicious/noExplicitAny: no possible default value
  FieldName extends Path<Form> = any,
> extends BaseField<Form, FieldName> {}

const ControlledDateField = <
  // biome-ignore lint/complexity/noBannedTypes: no assumptions on field
  TForm extends FieldValues = {},
  // biome-ignore lint/suspicious/noExplicitAny: no possible default value
  TFieldName extends Path<TForm> = any,
>({
  placeholder,
  required,
  disabled,
  label,
  ...props
}: ControlledDateFieldProps<TForm, TFieldName>) => {
  const textColor = useThemeColor({}, "text");
  return (
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
          <input
            {...field}
            type="date"
            style={{ ...styles.field, ...styles.dateField, color: textColor }}
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
};

export default ControlledDateField;
