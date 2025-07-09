import type {
  ControllerProps,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";

export default interface BaseField<
  // biome-ignore lint/complexity/noBannedTypes: no assumptions on field
  Form extends FieldValues = {},
  // biome-ignore lint/suspicious/noExplicitAny: no possible default value
  FieldName extends Path<Form> = any,
> extends Omit<ControllerProps<Form, FieldName>, "render"> {
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  label?: string;
  errors?: FieldErrors<Form>;
  note?: string;
}
