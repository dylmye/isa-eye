import { ControllerProps, FieldValues, Path } from "react-hook-form";

export default interface BaseField<Form extends FieldValues = any, FieldName extends Path<Form> = any> extends Omit<ControllerProps<Form, FieldName>, "render"> {
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  label?: string;
}
