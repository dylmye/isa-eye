import { Button, View } from "react-native";
import styles from "./shared/styles";

interface SubmitButtonProps {
  onPress: () => void;
}

/** @TODO change color of button on web */

const SubmitButton = ({ onPress }: SubmitButtonProps) => (
  <View style={styles.submit}>
    <Button title="Submit" onPress={onPress} />
  </View>
);

export default SubmitButton;
