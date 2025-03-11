import { getCrossPlatformColour } from "@/hooks/getCrossPlatformColour";
import { Pressable, StyleSheet, useColorScheme, View } from "react-native";
import ThemedText from "./ThemedText";

interface ActionTileProps {
  title: string;
  icon: React.ReactNode;
  onPress: () => void;
}

const ActionTile = ({ title, icon, onPress }: ActionTileProps) => {
  const colourScheme = useColorScheme();

  const schemeStyles =
    colourScheme === "light"
      ? {
          borderColor: "rgba(0, 0, 0, 0.04)",
          borderWidth: 2,
          backgroundColor: getCrossPlatformColour(
            "secondarySystemBackground",
            "@android:color/system_accent1_900",
            "rgb(206, 206, 206)"
          ),
        }
      : {
          backgroundColor: getCrossPlatformColour(
            "secondarySystemBackground",
            "@android:color/system_accent1_900",
            "rgba(255, 255, 255, 0.15)"
          ),
        };

  return (
    <Pressable style={[styles.container, schemeStyles]} onPress={onPress}>
      {icon}
      <ThemedText>{title}</ThemedText>
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
