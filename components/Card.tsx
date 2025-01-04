import {
  ColorValue,
  Platform,
  PlatformColor,
  StyleSheet,
  View,
} from "react-native";
import ThemedText from "./ThemedText";

interface CardProps {
  title: string;
}

const Card = ({ title }: CardProps) => (
  <View style={styles.container}>
    <ThemedText style={styles.title} numberOfLines={1} dynamicTypeRamp="title2">{title}</ThemedText>
    <ThemedText>Contents</ThemedText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    minHeight: 64,
    backgroundColor: Platform.select({
      ios: PlatformColor("secondarySystemBackground"),
      android: PlatformColor("@android:color/system_accent1_900"),
      default: "rgba(255, 255, 255, 0.15)" as ColorValue,
    }),
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 6,
  }
});

export default Card;
