import { Pressable, type PressableProps } from "react-native";
import { Card, Text } from "@/components/ui";

interface ActionTileProps extends PressableProps {
  title: string;
  icon: React.ReactNode;
  onPress: () => void;
}

const ActionTile = ({ title, icon, onPress, ...props }: ActionTileProps) => {
  return (
    <Pressable {...props} className="flex-1" onPress={onPress}>
      <Card className="min-h-16 items-center justify-center rounded-lg py-3">
        <Card.Content className="items-center justify-center pb-0">
          {icon}
          <Text className="color-card-foreground">{title}</Text>
        </Card.Content>
      </Card>
    </Pressable>
  );
};

export default ActionTile;
