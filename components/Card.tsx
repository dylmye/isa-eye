import {
  ColorValue,
  DimensionValue,
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
    ...Platform.select({
        ios: { backgroundColor: PlatformColor("secondarySystemBackground") },
        android: { backgroundColor: PlatformColor("@android:color/system_accent1_900") },
        web: { backgroundColor: "rgba(255, 255, 255, 0.15)", maxWidth: "50rem" as DimensionValue },
      }),
    padding: 16,
    marginHorizontal: 8,
    borderRadius: 8,
    width: '100%',
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 6,
  }
});

export default Card;
