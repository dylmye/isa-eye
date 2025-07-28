import { Platform } from "react-native";
import { Label } from "@/components/ui";

interface FieldLabelProps {
  label: string;
  fieldName: string;
  required?: boolean;
  disabled?: boolean;
}

const FieldLabel = ({
  label,
  fieldName,
  required,
  disabled,
}: FieldLabelProps) => {
  const text = (
    <Label
      nativeID={`${fieldName}-label`}
      role="presentation"
      className="mt-2 font-semibold text-sm"
    >
      {label}
      {!disabled && (required ? " *" : " (optional)")}
    </Label>
  );

  if (Platform.OS === "web") {
    return (
      <label htmlFor={fieldName} className="mb-1">
        {text}
      </label>
    );
  }

  return text;
};

export default FieldLabel;
