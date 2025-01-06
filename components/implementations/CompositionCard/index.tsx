import React from "react";
import { StyleSheet, View } from "react-native";
import CompositionChartInner from "./inner";
import Card from "@/components/Card";
import ThemedText from "@/components/ThemedText";

const CompositionCard = () => (
  <Card title="Composition">
    <View style={styles.contentContainer}>
      <View style={styles.section}>
        <CompositionChartInner />
      </View>
      <View style={styles.section}>
        <ThemedText style={styles.keyTitle}>Key</ThemedText>
        <View style={styles.keyIndicator}>
          <View
            style={[styles.keyIndicatorIcon, { backgroundColor: "black" }]}
          />
          <ThemedText numberOfLines={1}>ISA A</ThemedText>
        </View>
        <View style={styles.keyIndicator}>
          <View
            style={[styles.keyIndicatorIcon, { backgroundColor: "white" }]}
          />
          <ThemedText numberOfLines={1}>ISA B</ThemedText>
        </View>
      </View>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  contentContainer: {
    // static height required by Victory
    height: 150,
    display: "flex",
    flexDirection: "row",
    gap: 16,
  },
  section: {
    flex: 1,
  },
  keyTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  keyIndicator: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
  },
  keyIndicatorIcon: {
    borderRadius: "100%",
    width: 12,
    height: 12,
    marginRight: 8,
  },
});

export default CompositionCard;
