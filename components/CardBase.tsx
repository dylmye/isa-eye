import { type PropsWithChildren, useMemo } from "react";
import {
  type ColorValue,
  Platform,
  Pressable,
  type StyleProp,
  StyleSheet,
  View,
  type ViewProps,
  type ViewStyle,
} from "react-native";
import { getCrossPlatformColour } from "@/hooks/getCrossPlatformColour";
import { useColorScheme } from "@/hooks/useColorScheme";

interface CardBaseProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  highlightColourWeb?: string;
  onPress?: () => void;
}

const CardBase = ({
  children,
  style,
  highlightColourWeb,
  onPress,
  ...props
}: PropsWithChildren<CardBaseProps>) => {
  const { colorScheme } = useColorScheme();

  const isWeb = Platform.OS === "web";

  const baseBackgroundColour = useMemo<ColorValue>(() => {
    return colorScheme === "light"
      ? getCrossPlatformColour(
          "secondarySystemBackground",
          "@android:color/system_accent1_900",
          "rgb(206, 206, 206)",
        )
      : getCrossPlatformColour(
          "secondarySystemBackground",
          "@android:color/system_accent1_900",
          "rgba(255, 255, 255, 0.15)",
        );
  }, [colorScheme]);

  const schemeStyles =
    colorScheme === "light"
      ? {
          borderColor: "rgba(0, 0, 0, 0.04)",
          borderWidth: 2,
          background:
            highlightColourWeb && isWeb
              ? `${baseBackgroundColour.toString()} ${highlightColourWeb}`
              : baseBackgroundColour,
        }
      : {
          background:
            highlightColourWeb && isWeb
              ? `${baseBackgroundColour.toString()} ${highlightColourWeb}`
              : baseBackgroundColour,
        };

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        {...props}
        style={[styles.container, schemeStyles, style]}
      >
        {children}
      </Pressable>
    );
  }

  return (
    <View {...props} style={[styles.container, schemeStyles, style]}>
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
