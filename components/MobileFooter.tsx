import { StyleSheet, View } from "react-native";
import ThemedText from "./ThemedText";
import { getCrossPlatformColour } from "@/hooks/getCrossPlatformColour";

const MobileFooter = () => (
  <View style={styles.container}><ThemedText>Back</ThemedText><ThemedText>Add</ThemedText><ThemedText>Next</ThemedText></View>
)

const styles = StyleSheet.create({
  container: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    paddingVertical: 16,
    backgroundColor: getCrossPlatformColour(
      "secondarySystemBackground",
      "@android:color/system_accent1_900",
      "rgba(255, 255, 255, 0.15)"
    ),
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
})

export default MobileFooter;
