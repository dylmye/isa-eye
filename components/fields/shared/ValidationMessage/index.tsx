import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View } from "react-native";
import { Text } from "@/components/ui";
import styles from "../styles";

interface ValidationMessageProps {
  message: string;
}

const ValidationMessage = ({ message }: ValidationMessageProps) => (
  <View
    className="mb-2 rounded-md bg-red-300 p-2"
    style={[styles.validationMessage, styles.messageShared]}
  >
    <Text className="color-red-600 flex flex-row items-center gap-1">
      <MaterialCommunityIcons name="alert-octagram" color="inherit" size={18} />
      {message}
    </Text>
  </View>
);

export default ValidationMessage;
