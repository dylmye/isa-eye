import ThemedText from "@/components/ThemedText";
import { View } from "react-native";
import styles from "../styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface ValidationMessageProps {
  message: string;
}

const ValidationMessage = ({ message }: ValidationMessageProps) => (
  <View style={[styles.validationMessage, styles.messageShared]}>
    <ThemedText
      style={[styles.validationMessageText, styles.messageTextShared]}
    >
      <MaterialCommunityIcons name="alert-octagram" color="inherit" size={18} />
      {message}
    </ThemedText>
  </View>
);

export default ValidationMessage;
