import CardBase from "@/components/CardBase";
import ThemedText from "@/components/ThemedText";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import BankLogoIcon from "../BankLogoIcon";
import getProductName from "@/utils/getProductName";
import { AllProductsRow } from "@/db/queries/products";
import hooks from "@/hooks/database";
import { useMemo } from "react";

export interface ProductSummaryCardProps {
  /** Product is closed or non-interactable
   * @default false
   */
  disabled?: boolean;
  product: AllProductsRow;
  productId: string;
}

const ProductSummaryCard = ({ disabled = false, product, productId }: ProductSummaryCardProps) => {
  const currentRuleset = hooks.useValue("currentTaxYear");
  const productBalanceRow = hooks.useRow("annualBalances", `${productId}-${currentRuleset}`);

  const calculatedBalancePence = useMemo<number>(() => {
    const balanceRowBalance = Number.parseFloat(productBalanceRow.deductedFromAllowancePence ?? '0');
    const initialAdd = (product.startTaxYear === currentRuleset && product?.startingBalancePence && Number.isInteger(product.startingBalancePence)) ? Number.parseFloat(product.startingBalancePence) : 0;
    return balanceRowBalance + initialAdd;
  }, [productBalanceRow.lastUpdatedDateUnix, product.startTaxYear, currentRuleset])

  const formattedProductBalance = useMemo(() => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 2,
      trailingZeroDisplay: "stripIfInteger",
    }).format(calculatedBalancePence / 100)
  }, [productBalanceRow.lastUpdatedDateUnix, currentRuleset]);

  const productColourBackgroundWeb = useMemo(() => `radial-gradient(circle at left bottom, ${product.providerColour}E6 0%, ${product.providerColour}80 25%, rgba(0, 0, 0, 0) 80%)`, [product.providerColour])

  return (
    <CardBase style={[styles.container, disabled && styles.containerDisabled]} highlightColourWeb={productColourBackgroundWeb}>
      <View style={styles.name}>
        <BankLogoIcon
          bankIcon={{ uri: product.providerIconRelativeUrl }}
          size={38}
          style={styles.icon}
        />
        <ThemedText
          type="defaultSemiBold"
          style={styles.nameText}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {getProductName(product)}
        </ThemedText>
      </View>
      <ThemedText type="defaultSemiBold" style={styles.valueText}>
        {formattedProductBalance}
      </ThemedText>
    </CardBase>
  )
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
  nameText: {
    fontSize: 24,
    lineHeight: 32,
    marginHorizontal: 8,
    textOverflow: "ellipsis",
  },
  valueText: {
    fontSize: 24,
    lineHeight: 38,
  },
});

export default ProductSummaryCard;
