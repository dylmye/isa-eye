import { Platform } from "react-native";
import { Text } from "@/components/ui";
import styles from "../styles";

interface FieldLabelProps {
  label: string;
  fieldName: string;
  required?: boolean;
}

// @TODO: replace with rn-primitives Label
const FieldLabel = ({ label, fieldName, required }: FieldLabelProps) => {
  const text = (
    <Text
      nativeID={`${fieldName}-label`}
      role="presentation"
      className="font-semibold text-sm"
    >
      {label}
      {required ? " *" : " (optional)"}
    </Text>
  );

  if (Platform.OS === "web") {
    return (
      <label htmlFor={fieldName} style={styles.label}>
        {text}
      </label>
    );
  }

  return text;
};

export default FieldLabel;
