import {
  View,
  StyleSheet,
  PlatformColor,
  Platform,
  ColorValue,
} from "react-native";
import ThemedText from "./ThemedText";

const OverviewBar = () => (
  <View style={styles.container}>
    <ThemedText aria-hidden style={[styles.text, styles.dateSubtitle]}>
      2024/2025
    </ThemedText>
    <ThemedText
      aria-label="Your remaining ISA allowance for the 2024/2025 tax year."
      style={styles.text}
      type="title"
      adjustsFontSizeToFit
      dynamicTypeRamp="largeTitle"
    >
      £20,000
    </ThemedText>
    <ThemedText aria-hidden style={styles.text}>
      remaining
    </ThemedText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: Platform.select({
      ios: PlatformColor("secondarySystemBackground"),
      android: PlatformColor("@android:color/system_accent1_900"),
      default: "rgba(255, 255, 255, 0.15)" as ColorValue,
    }),
    paddingVertical: 16,
    marginBottom: 16,
    boxShadow: "0px -1px 15px 15px rgba(64, 64, 64, 0.31)",
  },
  text: {
    textAlign: "center",
  },
  dateSubtitle: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: "600",
  },
});

export default OverviewBar;
