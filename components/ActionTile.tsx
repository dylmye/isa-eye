import { Pressable, type PressableProps, StyleSheet } from "react-native";
import { Text } from "@/components/ui";
import { getCrossPlatformColour } from "@/hooks/getCrossPlatformColour";
import { useColorScheme } from "@/hooks/useColorScheme";

interface ActionTileProps extends PressableProps {
  title: string;
  icon: React.ReactNode;
  onPress: () => void;
}

const ActionTile = ({ title, icon, onPress, ...props }: ActionTileProps) => {
  const { colorScheme } = useColorScheme();

  const schemeStyles =
    colorScheme === "light"
      ? {
          borderColor: "rgba(0, 0, 0, 0.04)",
          borderWidth: 2,
          backgroundColor: getCrossPlatformColour(
            "secondarySystemBackground",
            "@android:color/system_accent1_900",
            "rgb(206, 206, 206)",
          ),
        }
      : {
          backgroundColor: getCrossPlatformColour(
            "secondarySystemBackground",
            "@android:color/system_accent1_900",
            "rgba(255, 255, 255, 0.15)",
          ),
        };

  return (
    <Pressable
      {...props}
      style={[styles.container, schemeStyles]}
      onPress={onPress}
    >
      {icon}
      <Text>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 64,
    paddingVertical: 12,
  },
});

export default ActionTile;
