import { StyleSheet, View } from "react-native";
import ThemedText from "./ThemedText";

const MobileFooter = () => (
  <View style={styles.container}><ThemedText>Footer</ThemedText></View>
)

const styles = StyleSheet.create({
  container: {
    position: 'fixed',
    bottom: 0,
    left: 0,
  }
})

export default MobileFooter;
