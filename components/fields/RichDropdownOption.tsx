import { Image } from "expo-image";
import { Pressable } from "react-native";
import { Text } from "@/components/ui";
import type { RichDropdownValue } from "@/types/dropdown";
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
    <Text>{option.label}</Text>
  </Pressable>
);

export default RichDropdownOption;
