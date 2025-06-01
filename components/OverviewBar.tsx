import { View, StyleSheet } from "react-native";

import ThemedText from "./ThemedText";
import { getCrossPlatformColour } from "@/hooks/getCrossPlatformColour";
import NavBackButton from "./implementations/NavBackButton";
import NavForwardButton from "./implementations/NavForwardButton";
import { router } from "expo-router";

interface OverviewBarProps {
  rulesetId: string;
  showNavButtons: boolean;
  previousRuleset?: string;
  nextRuleset?: string;
}

const OverviewBar = ({
  rulesetId,
  showNavButtons,
  previousRuleset,
  nextRuleset,
}: OverviewBarProps) => (
  <View style={styles.container}>
    {showNavButtons && (
      <NavBackButton
        disabled={!previousRuleset}
        onPress={() =>
          !!previousRuleset && router.push(`/overview/${previousRuleset}`)
        }
      />
    )}
    <View>
      <ThemedText aria-hidden style={[styles.text, styles.dateSubtitle]}>
        {rulesetId}
      </ThemedText>
      <ThemedText
        aria-label={`Your remaining ISA allowance for the ${rulesetId} tax year.`}
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
    {showNavButtons && (
      <NavForwardButton
        disabled={!nextRuleset}
        onPress={() => !!nextRuleset && router.push(`/overview/${nextRuleset}`)}
      />
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 24,
    justifyContent: "center",
    alignItems: "center",
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
