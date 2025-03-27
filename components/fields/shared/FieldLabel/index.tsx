import ThemedText from "@/components/ThemedText";
import { Platform } from "react-native";
import styles from "../styles";

interface FieldLabelProps {
  label: string;
  fieldName: string;
  required?: boolean;
}

const FieldLabel = ({ label, fieldName, required }: FieldLabelProps) => {
  const text = (
    <ThemedText
      nativeID={`${fieldName}-label`}
      role="presentation"
      style={styles.labelText}
    >
      {label}
      {required && " *"}
    </ThemedText>
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
