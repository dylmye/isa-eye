import { PropsWithChildren } from "react";
import { DimensionValue, Platform, StyleSheet, View } from "react-native";

const PageColumn = ({ children }: PropsWithChildren<unknown>) => (
  <View style={styles.container}>{children}</View>
)

const styles = StyleSheet.create({
  container: {
    ...(Platform.OS === "web" && { maxWidth: "50rem" as DimensionValue }),
    alignSelf: "center",
    width: "100%",
  }
})

export default PageColumn;
