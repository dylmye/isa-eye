import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import CompositionChartInner from "./inner";
import Card from "@/components/Card";
import ThemedText from "@/components/ThemedText";
import { useCurrentYearBalances } from "@/db/hooks";
import getProductName from "@/utils/getProductName";

const CompositionCard = () => {
  const balances = useCurrentYearBalances();

  const chartProducts = useMemo(() => {
    return balances.map(b => ({
      id: b.productId,
      value: b.percentage,
      label: getProductName({ friendlyName: b.productFriendlyName, providerName: b.productProviderName, productTypeName: b.productProductTypeName }),
      colour: b.productProviderColour ?? "white"
    }))
  }, [balances])

  if (!balances?.length) {
    return <></>;
  }

  return (
    <Card title="Composition">
      <View style={styles.contentContainer}>
        <View style={styles.section}>
          <CompositionChartInner products={chartProducts} />
        </View>
        <View style={styles.section}>
          <ThemedText style={styles.keyTitle}>Key</ThemedText>
          {chartProducts.map(p => (
            <View style={styles.keyIndicator} key={`product-key-row-${p.id}`}>
              <View
                style={[styles.keyIndicatorIcon, { backgroundColor: p.colour }]}
              />
              <ThemedText numberOfLines={1}>{p.label}</ThemedText>
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
