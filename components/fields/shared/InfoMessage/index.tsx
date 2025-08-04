import { View } from "react-native";
import { Alert } from "@/components/ui";

interface InfoMessageProps {
  message: string;
}

const InfoMessage = ({ message }: InfoMessageProps) => (
  <View className="-z-[1] my-2">
    <Alert icon="information-outline" variant="informative">
      <Alert.Description>{message}</Alert.Description>
    </Alert>
  </View>
);

export default InfoMessage;
