import ThemedText from "@/components/ThemedText";
import { View } from "react-native";
import styles from "../styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface InfoMessageProps {
  message: string;
}

const InfoMessage = ({ message }: InfoMessageProps) => (
  <View style={[styles.infoMessage, styles.messageShared]}>
    <ThemedText style={[styles.infoMessageText, styles.messageTextShared]}>
      <MaterialCommunityIcons
        name="information-outline"
        color="inherit"
        size={18}
      />
      {message}
    </ThemedText>
  </View>
);

export default InfoMessage;
