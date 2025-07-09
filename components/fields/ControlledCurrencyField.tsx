import { FieldValues, Path } from "react-hook-form";
import ControlledTextField, {
  ControlledTextFieldProps,
} from "./ControlledTextField";

const ControlledCurrencyField = <
  // biome-ignore lint/complexity/noBannedTypes: no assumptions on field
  TForm extends FieldValues = {},
  // biome-ignore lint/suspicious/noExplicitAny: no possible default value
  TFieldName extends Path<TForm> = any,
>(
  props: ControlledTextFieldProps<TForm, TFieldName>,
) => (
  <ControlledTextField
    {...props}
    prefix="£"
    componentProps={{
      ...props?.componentProps,
      inputMode: "decimal",
      keyboardType: "decimal-pad",
    }}
    rules={{
      pattern: {
        value:
          /(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0)$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/,
        message: "Must be a valid amount of money (e.g. £5, £20.75)",
      },
      min: {
        value: 0,
        message: "Amount must be higher than £0",
      },
    }}
  />
);

export default ControlledCurrencyField;
