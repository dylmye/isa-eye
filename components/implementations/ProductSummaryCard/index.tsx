import { Image } from "expo-image";
import { useMemo } from "react";
import { Platform, StyleSheet, View } from "react-native";
import Svg, { Defs, LinearGradient, Rect, Stop } from "react-native-svg";
import { Text } from "@/components/ui";
import type { AllProductsRow } from "@/db/queries/products";
import hooks from "@/hooks/database";
import { formatCurrency } from "@/utils/formatCurrency";
import getProductName from "@/utils/getProductName";

export interface ProductSummaryCardProps {
  product: AllProductsRow;
  productId: string;
}

const ProductSummaryCard = ({
  product,
  productId,
}: ProductSummaryCardProps) => {
  const currentRuleset = hooks.useValue("currentTaxYear");
  const productBalanceRow = hooks.useRow(
    "annualBalances",
    `${productId}-${currentRuleset}`,
  );

  const isWeb = Platform.OS === "web";

  const formattedProductBalance = useMemo(() => {
    return formatCurrency(
      Number.parseFloat(productBalanceRow.deductedFromAllowancePence ?? "0") /
        100,
    );
  }, [productBalanceRow.deductedFromAllowancePence, currentRuleset]);

  const formattedAccountName = getProductName(product);

  const productColourBackgroundWeb = useMemo(
    () =>
      `radial-gradient(circle at left bottom, ${product.providerColour}E6 0%, ${product.providerColour}80 25%, rgba(0, 0, 0, 0) 80%)`,
    [product.providerColour],
  );

  return (
    <View
      className="pointer-events-none flex w-full flex-row items-center justify-between overflow-hidden rounded-lg border-2 border-border bg-card px-4 native:py-5 py-3 transition hover:brightness-110 active:brightness-120"
      style={
        isWeb &&
        productColourBackgroundWeb && {
          backgroundImage: productColourBackgroundWeb,
        }
      }
    >
      <View className="flex flex-row gap-2 native:gap-4">
        <View className="h-9 w-9 overflow-hidden rounded-full border-2 border-ring">
          <Image
            source={{ uri: product.providerIconRelativeUrl }}
            className="flex-1"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <Text
          className="mr-2 overflow-ellipsis font-semibold text-2xl text-card-foreground"
          numberOfLines={1}
        >
          {formattedAccountName}
        </Text>
      </View>
      <Text className="font-semibold text-2xl text-card-foreground">
        {formattedProductBalance}
      </Text>
      {Platform.OS !== "web" && (
        <View style={StyleSheet.absoluteFillObject} className="-z-10">
          <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
            <Defs>
              <LinearGradient
                id={`native-gradient-bg-${productId}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <Stop
                  offset={0}
                  stopColor={product.providerColour}
                  stopOpacity={0.9}
                />
                <Stop
                  offset={0.25}
                  stopColor={product.providerColour}
                  stopOpacity={0.3}
                />
                <Stop
                  offset={0.8}
                  stopColor={product.providerColour}
                  stopOpacity={0}
                />
              </LinearGradient>
            </Defs>
            <Rect
              width="100%"
              height="100%"
              fill={`url(#native-gradient-bg-${productId})`}
            />
          </Svg>
        </View>
      )}
    </View>
  );
};

export default ProductSummaryCard;
