import { Image } from "expo-image";
import { Pressable } from "react-native";
import ThemedText from "../ThemedText";
import { RichDropdownValue } from "@/types/dropdown";
import styles from "./shared/styles";

interface RichDropdownOptionProps {
  option: RichDropdownValue;
  onPress: () => void;
}

const RichDropdownOption = ({ option, onPress }: RichDropdownOptionProps) => (
  <Pressable
    onPress={onPress}
    style={styles.autocompleteResult}
    role="listitem"
  >
    <Image source={option.image} style={styles.autocompleteResultImage} />
    <ThemedText>{option.label}</ThemedText>
  </Pressable>
);

export default RichDropdownOption;
