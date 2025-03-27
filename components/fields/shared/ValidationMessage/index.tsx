import ThemedText from "@/components/ThemedText";
import { View } from "react-native";
import styles from "../styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface ValidationMessageProps {
  message: string;
}

const ValidationMessage = ({ message }: ValidationMessageProps) => (
  <View style={styles.validationMessage}>
    <ThemedText style={styles.validationMessageText}>
      <MaterialCommunityIcons name="alert-octagram" color="inherit" size={18} />
      {message}
    </ThemedText>
  </View>
);

export default ValidationMessage;
