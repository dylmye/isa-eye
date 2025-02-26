import { getCrossPlatformColour } from "@/hooks/getCrossPlatformColour";
import { useColorScheme } from "@/hooks/useColorScheme";
import { PropsWithChildren } from "react";
import {
  DimensionValue,
  Platform,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

interface CardBaseProps {
  style?: StyleProp<ViewStyle>;
}

const CardBase = ({ children, style }: PropsWithChildren<CardBaseProps>) => {
  const colourScheme = useColorScheme();

  const schemeStyles =
    colourScheme === "light"
      ? {
          borderColor: 'rgba(0, 0, 0, 0.04)',
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
        )
      };

  return (
    <View
      style={[styles.container, schemeStyles, style]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    minHeight: 64,
    padding: 16,
    borderRadius: 8,
    width: "100%",
  },
});

export default CardBase;
