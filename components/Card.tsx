import {
  DimensionValue,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import ThemedText from "./ThemedText";
import { PropsWithChildren } from "react";
import { getCrossPlatformColour } from "@/hooks/getCrossPlatformColour";

interface CardProps {
  title: string;
}

const Card = ({ title, children }: PropsWithChildren<CardProps>) => (
  <View style={styles.container}>
    <ThemedText style={styles.title} numberOfLines={1} dynamicTypeRamp="title2">
      {title}
    </ThemedText>
    <ThemedText>{children}</ThemedText>
  </View>
);

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
  title: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 6,
  },
});

export default Card;
