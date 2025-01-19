import { getCrossPlatformColour } from "@/hooks/getCrossPlatformColour";
import { PropsWithChildren } from "react";
import { DimensionValue, Platform, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface CardBaseProps {
  style?: StyleProp<ViewStyle>
}

const CardBase = ({ children, style }: PropsWithChildren<CardBaseProps>) => (
  <View style={[styles.container, style]}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    display: "flex",
    minHeight: 64,
    backgroundColor: getCrossPlatformColour(
      "secondarySystemBackground",
      "@android:color/system_accent1_900",
      "rgba(255, 255, 255, 0.15)"
    ),
    ...(Platform.OS === "web" && { maxWidth: "50rem" as DimensionValue }),
    padding: 16,
    borderRadius: 8,
    width: "100%",
  },
});

export default CardBase;
