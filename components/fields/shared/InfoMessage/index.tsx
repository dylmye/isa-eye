import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View } from "react-native";
import { Text } from "@/components/ui";
import styles from "../styles";

interface InfoMessageProps {
  message: string;
}

const InfoMessage = ({ message }: InfoMessageProps) => (
  <View
    className="mb-2 rounded-md bg-blue-300 p-2"
    style={styles.messageShared}
  >
    <Text className="color-blue-600 flex flex-row items-center gap-1">
      <MaterialCommunityIcons
        name="information-outline"
        color="inherit"
        size={18}
      />
      {message}
    </Text>
  </View>
);

export default InfoMessage;
