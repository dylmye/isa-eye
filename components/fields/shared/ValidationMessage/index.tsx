import { View } from "react-native";
import { Alert } from "@/components/ui";

interface ValidationMessageProps {
  message: string;
}

const ValidationMessage = ({ message }: ValidationMessageProps) => (
  <View className="my-2">
    <Alert icon="alert-octagon" variant="destructive">
      <Alert.Description>{message}</Alert.Description>
    </Alert>
  </View>
);

export default ValidationMessage;
