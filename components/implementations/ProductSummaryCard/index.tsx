import CardBase from "@/components/CardBase";
import ThemedText from "@/components/ThemedText";
import { StyleSheet, View } from "react-native";
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

  console.log(JSON.stringify({ productBalanceRow, currentRuleset }));

  const formattedProductBalance = useMemo(() => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 2,
      trailingZeroDisplay: "stripIfInteger",
    }).format(Number.parseFloat(productBalanceRow.deductedFromAllowancePence ?? '0') / 100)
  }, [productBalanceRow.lastUpdatedDateUnix]);

  return (
    <CardBase style={[styles.container, disabled && styles.containerDisabled]}>
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
