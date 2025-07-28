import { Image } from "expo-image";
import { useMemo } from "react";
import { Platform, View } from "react-native";
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
      className="flex w-full flex-row items-center justify-between rounded-lg border-2 border-border bg-card px-4 py-3 transition hover:brightness-110"
      style={
        isWeb &&
        productColourBackgroundWeb && {
          backgroundImage: productColourBackgroundWeb,
        }
      }
    >
      <View className="flex flex-row gap-2">
        <View className="h-9 w-9">
          <Image
            source={product.providerIconRelativeUrl}
            className="flex-1 rounded-full border-2 border-ring"
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
    </View>
  );
};

export default ProductSummaryCard;
