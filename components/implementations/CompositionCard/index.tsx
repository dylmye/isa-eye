import React from "react";
import { StyleSheet, View } from "react-native";
import CompositionChartInner from "./inner";
import Card from "@/components/Card";
import ThemedText from "@/components/ThemedText";
import { useCurrentYearBalances } from "@/db/hooks";

const CompositionCard = () => {
  const balances = useCurrentYearBalances();

  if (!balances?.length) {
    return <></>;
  }

  return (
    <Card title="Composition">
      <View style={styles.contentContainer}>
        <View style={styles.section}>
          <CompositionChartInner />
        </View>
        <View style={styles.section}>
          <ThemedText style={styles.keyTitle}>Key</ThemedText>
          {balances.map(b => (
            <View style={styles.keyIndicator} key={`product-key-row-${b.productId}`}>
              <View
                style={[styles.keyIndicatorIcon, { backgroundColor: b.productColour ?? "white" }]}
              />
              <ThemedText numberOfLines={1}>{b.productFriendlyName ?? "UNKNOWN NAME - USE `getProductName`"}</ThemedText>
            </View>
          ))}
        </View>
      </View>
    </Card>
  )
};

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
