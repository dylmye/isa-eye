import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable, type PressableProps } from "react-native";
import { cn } from "@/utils/styles";
import { Text } from "./ui";

interface BottomSheetItemProps extends PressableProps {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  label: string;
  disabled?: boolean;
}

const BottomSheetItem = ({
  icon,
  label,
  disabled,
  ...props
}: BottomSheetItemProps) => (
  <Pressable
    className="flex flex-1 flex-row items-start gap-3 p-4"
    disabled={disabled}
    {...props}
  >
    <MaterialCommunityIcons
      name={icon}
      size={24}
      className={cn(disabled ? "color-muted" : "color-foreground")}
    />
    <Text
      className={cn(
        "font-semibold text-lg",
        disabled ? "text-muted" : "text-foreground",
      )}
    >
      {label}
    </Text>
  </Pressable>
);

export default BottomSheetItem;
