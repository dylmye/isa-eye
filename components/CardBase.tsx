import { getCrossPlatformColour } from "@/hooks/getCrossPlatformColour";
import { useColorScheme } from "@/hooks/useColorScheme";
import { PropsWithChildren, useMemo } from "react";
import {
  ColorValue,
  Platform,
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";

interface CardBaseProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  highlightColourWeb?: string;
  onPress?: () => void;
}

const CardBase = ({ children, style, highlightColourWeb, onPress, ...props }: PropsWithChildren<CardBaseProps>) => {
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

  if (onPress) {
    return (
      <Pressable onPress={onPress} {...props} style={[styles.container, schemeStyles, style]}>{children}</Pressable>
    )
  }

  return (
    <View
      {...props}
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
