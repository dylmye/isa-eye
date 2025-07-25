import { Image } from "expo-image";
import { Pressable } from "react-native";
import { Text } from "@/components/ui";
import type { RichDropdownValue } from "@/types/dropdown";

interface RichDropdownOptionProps {
  option: RichDropdownValue;
  onPress: () => void;
}

const RichDropdownOption = ({ option, onPress }: RichDropdownOptionProps) => (
  <Pressable
    onPress={onPress}
    // Keep this for ControlledAutocompleteField onBlur
    role="listitem"
    className="web:group relative flex w-full web:cursor-default web:select-none flex-row items-center gap-2 rounded-sm native:py-2 py-1.5 pr-2 native:pl-10 pl-8 web:outline-none web:hover:bg-accent/50 web:focus:bg-accent active:bg-accent"
  >
    <Image
      source={option.image}
      className="aspect-square h-4 w-4 rounded-full"
    />
    <Text className="native:text-base text-popover-foreground text-sm web:group-focus:text-accent-foreground">
      {option.label}
    </Text>
  </Pressable>
);

export default RichDropdownOption;
