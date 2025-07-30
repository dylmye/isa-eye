import { Platform, Pressable, type PressableProps } from "react-native";
import { Card, Text } from "@/components/ui";
import { cn } from "@/utils/styles";

interface ActionTileProps extends PressableProps {
  title: string;
  icon: React.ReactNode;
  onPress?: () => void;
}

/**
 * XXL buttons for primary actions on desktop.
 */
const ActionTile = ({ title, icon, onPress, ...props }: ActionTileProps) => {
  return (
    <Pressable {...props} className="flex-1" onPress={onPress}>
      <Card
        className={cn(
          "min-h-16 items-center justify-center rounded-lg bg-primary py-3",
          Platform.OS === "web" && "transition-colors hover:opacity-95",
          props?.disabled && "cursor-not-allowed opacity-75 hover:opacity-75",
        )}
      >
        <Card.Content className="color-primary-foreground items-center justify-center pb-0">
          {icon}
          <Text className="font-semibold text-primary-foreground">{title}</Text>
        </Card.Content>
      </Card>
    </Pressable>
  );
};

export default ActionTile;
