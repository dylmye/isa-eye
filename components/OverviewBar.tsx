import { View, StyleSheet } from "react-native";
import ThemedText from "./ThemedText";
import { getCrossPlatformColour } from "@/hooks/getCrossPlatformColour";
import Ruleset from "@/types/ruleset";

interface OverviewBarProps {
  ruleset: Ruleset;
}

const OverviewBar = ({ ruleset }: OverviewBarProps) => (
  <View style={styles.container}>
    <ThemedText aria-hidden style={[styles.text, styles.dateSubtitle]}>
      {ruleset.name}
    </ThemedText>
    <ThemedText
      aria-label={`Your remaining ISA allowance for the ${ruleset.name} tax year.`}
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
    backgroundColor: getCrossPlatformColour(
      "secondarySystemBackground",
      "@android:color/system_accent1_900",
      "rgba(255, 255, 255, 0.15)"
    ),
    paddingVertical: 16,
    shadowColor: "#404040",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.31,
    shadowRadius: 3,
    elevation: 5,
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
