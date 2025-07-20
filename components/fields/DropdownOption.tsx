import { Pressable } from "react-native";
import { Text } from "@/components/ui";
import type { DropdownValue } from "@/types/dropdown";

interface DropdownOptionProps {
  option: DropdownValue;
  onPress: () => void;
}

const DropdownOption = ({ option, onPress }: DropdownOptionProps) => (
  <Pressable
    onPress={onPress}
    // Keep this for ControlledAutocompleteField onBlur
    role="listitem"
    className="web:group relative flex w-full web:cursor-default web:select-none flex-row items-center gap-2 rounded-sm native:py-2 py-1.5 pr-2 native:pl-10 pl-8 web:outline-none web:hover:bg-accent/50 web:focus:bg-accent active:bg-accent"
  >
    <Text className="native:text-base text-popover-foreground text-sm web:group-focus:text-accent-foreground">
      {option.label}
    </Text>
  </Pressable>
);

export default DropdownOption;
