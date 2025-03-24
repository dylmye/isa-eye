import ThemedText from "@/components/ThemedText";
import { Platform } from "react-native";

interface FieldLabelProps {
  label: string;
  fieldName: string;
  required?: boolean;
}

const FieldLabel = ({ label, fieldName, required }: FieldLabelProps) => {
  const text = (
    <ThemedText nativeID={`${fieldName}-label`} role="presentation">
      {label}
      {required && " *"}
    </ThemedText>
  );

  if (Platform.OS === "web") {
    return <label htmlFor={fieldName}>{text}</label>;
  }

  return text;
};

export default FieldLabel;
