import { Button, View } from "react-native";
import styles from "./shared/styles";

interface DeleteButtonProps {
  onPress: () => void;
}

/** @TODO change color of button on web */

const DeleteButton = ({ onPress }: DeleteButtonProps) => (
  <View style={styles.actionButton}>
    <Button title="Delete" onPress={onPress} />
  </View>
);

export default DeleteButton;
