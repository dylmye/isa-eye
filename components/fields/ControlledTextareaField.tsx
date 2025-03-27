import { FieldValues, Path } from "react-hook-form";
import ControlledTextField, {
  ControlledTextFieldProps,
} from "./ControlledTextField";

const ControlledTextareaField = <
  TForm extends FieldValues = any,
  TFieldName extends Path<TForm> = any
>(
  props: ControlledTextFieldProps<TForm, TFieldName>
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
