import type { FieldValues, Path } from "react-hook-form";
import ControlledTextField, {
  type ControlledTextFieldProps,
} from "./ControlledTextField";

const ControlledTextareaField = <
  // biome-ignore lint/complexity/noBannedTypes: no assumptions on field
  TForm extends FieldValues = {},
  // biome-ignore lint/suspicious/noExplicitAny: no possible default value
  TFieldName extends Path<TForm> = any,
>(
  props: ControlledTextFieldProps<TForm, TFieldName>,
) => (
  <ControlledTextField
    {...props}
    componentProps={{
      ...props?.componentProps,
      multiline: true,
      numberOfLines: 3,
    }}
  />
);

export default ControlledTextareaField;
