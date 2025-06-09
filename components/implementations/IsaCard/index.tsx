import CardBase from "@/components/CardBase";
import ThemedText from "@/components/ThemedText";
import { StyleSheet, View } from "react-native";
import BankLogoIcon from "../BankLogoIcon";
import getProductName from "@/utils/getProductName";
import { Product } from "@/types/db";
import hooks from "@/hooks/database";
import { AllProductsRow } from "@/db/queries/products";

export interface IsaCardProps {
  /** Product is closed or non-interactable
   * @default false
   */
  disabled?: boolean;
  product: AllProductsRow;
}

const IsaCard = ({ disabled = false, product }: IsaCardProps) => {
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
        £X,XXX
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

export default IsaCard;
