import React, { useMemo } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import Card from "@/components/Card";
import { Text } from "@/components/ui";
import { useCurrentYearBalances } from "@/db/hooks";
import getProductName from "@/utils/getProductName";
import CompositionChartInner from "./inner";

const CompositionCard = () => {
  const balances = useCurrentYearBalances();
  const { width } = useWindowDimensions();

  const chartProducts = useMemo(() => {
    return balances.map((b) => ({
      id: b.productId,
      value: b.percentage,
      label: getProductName({
        friendlyName: b.productFriendlyName,
        providerName: b.productProviderName,
        productTypeName: b.productProductTypeName,
      }),
      colour: b.productProviderColour ?? "white",
    }));
  }, [balances]);

  if (!balances?.length) {
    return null;
  }

  return (
    <Card title="Composition">
      <View style={styles.contentContainer}>
        <View style={styles.section}>
          <CompositionChartInner products={chartProducts} />
        </View>
        {width > 450 && (
          <View style={styles.section}>
            <Text className="font-bold text-lg">Key</Text>
            {chartProducts.map((p) => (
              <View style={styles.keyIndicator} key={`product-key-row-${p.id}`}>
                <View
                  style={[
                    styles.keyIndicatorIcon,
                    { backgroundColor: p.colour },
                  ]}
                />
                <Text numberOfLines={1}>{p.label}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </Card>
  );
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
    minWidth: 200,
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
