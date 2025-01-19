import React from "react";
import { StyleSheet, View } from "react-native";
import HistoryChartInner from "./inner";
import Card from "@/components/Card";
import ThemedText from "@/components/ThemedText";

const HistoryCard = () => (
  <Card title="History">
    <View style={styles.contentContainer}>
      <HistoryChartInner />
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
    overflow: 'visible',
    padding: 8,
  },
});

export default HistoryCard;
