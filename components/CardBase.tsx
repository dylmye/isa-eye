import { getCrossPlatformColour } from "@/hooks/getCrossPlatformColour";
import { useColorScheme } from "@/hooks/useColorScheme";
import { PropsWithChildren, useMemo } from "react";
import {
  ColorValue,
  Platform,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

interface CardBaseProps {
  style?: StyleProp<ViewStyle>;
  highlightColourWeb?: string;
}

const CardBase = ({ children, style, highlightColourWeb }: PropsWithChildren<CardBaseProps>) => {
  const colourScheme = useColorScheme();

  const isWeb = Platform.OS === 'web';

  const baseBackgroundColour = useMemo<ColorValue>(() => {
    return colourScheme === "light" ? getCrossPlatformColour(
      "secondarySystemBackground",
      "@android:color/system_accent1_900",
      "rgb(206, 206, 206)"
    ) : getCrossPlatformColour(
      "secondarySystemBackground",
      "@android:color/system_accent1_900",
      "rgba(255, 255, 255, 0.15)"
    );
  }, [colourScheme])

  const schemeStyles =
    colourScheme === "light"
      ? {
        borderColor: 'rgba(0, 0, 0, 0.04)',
        borderWidth: 2,
        background: highlightColourWeb && isWeb ? `${baseBackgroundColour.toString()} ${highlightColourWeb}` : baseBackgroundColour,
      }
      : {
        background: highlightColourWeb && isWeb ? `${baseBackgroundColour.toString()} ${highlightColourWeb}` : baseBackgroundColour,
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
