import React, { useMemo } from "react";
import { useWindowDimensions, View } from "react-native";
import { Card, Text } from "@/components/ui";
import { useCurrentYearBalances } from "@/db/hooks";
import getProductName from "@/utils/getProductName";
import CompositionChartInner from "./inner";

const CompositionCard = () => {
  const balances = useCurrentYearBalances();
  const { width } = useWindowDimensions();

  const chartProducts = useMemo(() => {
    return balances.map((b) => ({
      id: b.productId,
      value: b.percentage ?? 0,
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
    <Card className="w-full">
      <Card.Header>
        <Card.Title>Composition</Card.Title>
      </Card.Header>
      {/* fixed height is required by victory */}
      <Card.Content className="flex h-44 native:h-52 flex-row gap-4">
        <View className="min-w-48 flex-1">
          <CompositionChartInner products={chartProducts} />
        </View>
        {width > 450 && (
          <View className="min-w-48 flex-1">
            <Text className="font-bold text-lg">Key</Text>
            {chartProducts.map((p) => (
              <View
                className="flex flex-row items-center py-1"
                key={`product-key-row-${p.id}`}
              >
                <View
                  className="mr-2 h-3 w-3 rounded-full"
                  style={{ backgroundColor: p.colour }}
                />
                <Text numberOfLines={1}>{p.label}</Text>
              </View>
            ))}
          </View>
        )}
      </Card.Content>
    </Card>
  );
};

export default CompositionCard;
