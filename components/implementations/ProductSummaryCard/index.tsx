import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import CardBase from "@/components/CardBase";
import { Text } from "@/components/ui";
import type { AllProductsRow } from "@/db/queries/products";
import hooks from "@/hooks/database";
import getProductName from "@/utils/getProductName";
import BankLogoIcon from "../BankLogoIcon";

export interface ProductSummaryCardProps {
  /** Product is closed or non-interactable
   * @default false
   */
  disabled?: boolean;
  product: AllProductsRow;
  productId: string;
  onPress?: () => void;
}

// @TODO: replace cardbase with nativewind
const ProductSummaryCard = ({
  disabled = false,
  product,
  productId,
  onPress = () => {},
}: ProductSummaryCardProps) => {
  const currentRuleset = hooks.useValue("currentTaxYear");
  const productBalanceRow = hooks.useRow(
    "annualBalances",
    `${productId}-${currentRuleset}`,
  );

  const formattedProductBalance = useMemo(() => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 2,
      trailingZeroDisplay: "stripIfInteger",
    }).format(
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
    <CardBase
      style={[styles.container, disabled && styles.containerDisabled]}
      highlightColourWeb={productColourBackgroundWeb}
      accessibilityLabel={`Your ${formattedAccountName} account has used ${formattedProductBalance} of your ${currentRuleset} ISA allowance.`}
      accessibilityRole="list"
      onPress={onPress}
    >
      <View style={styles.name}>
        <BankLogoIcon
          bankIcon={{ uri: product.providerIconRelativeUrl }}
          size={38}
          style={styles.icon}
        />
        <Text
          className="mx-2 overflow-ellipsis font-semibold text-2xl leading-8"
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {formattedAccountName}
        </Text>
      </View>
      <Text className="font-semibold text-2xl leading-9">
        {formattedProductBalance}
      </Text>
    </CardBase>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  containerDisabled: {},
  icon: {
    flex: 1,
  },
  name: {
    flex: 1,
    flexDirection: "row",
    overflow: "hidden",
    lineHeight: 38,
  },
});

export default ProductSummaryCard;
