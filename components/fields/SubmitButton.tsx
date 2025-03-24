import { Button } from "react-native";

interface SubmitButtonProps {
  onPress: () => void;
}

const SubmitButton = ({ onPress }: SubmitButtonProps) => (
  <Button title="Submit" onPress={onPress} />
);

export default SubmitButton;
