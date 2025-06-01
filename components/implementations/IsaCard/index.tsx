import CardBase from "@/components/CardBase";
import ThemedText from "@/components/ThemedText";
import { StyleSheet, View } from "react-native";
import BankLogoIcon from "../BankLogoIcon";
import getAccountName from "@/utils/getAccountName";
import { Product } from "@/types/db";
import hooks from "@/hooks/database";

export interface IsaCardProps {
  /** Account is closed or non-interactable
   * @default false
   */
  disabled?: boolean;
  account: Pick<Product, "providerId" | "friendlyName" | "productTypeCode">;
}

const IsaCard = ({ disabled = false, account }: IsaCardProps) => {
  const provider = hooks.useRow("providers", account.providerId ?? 'PLACEHOLDER');
  const productType = hooks.useRow("productTypes", account.productTypeCode!);
  return (
    <CardBase style={[styles.container, disabled && styles.containerDisabled]}>
      <View style={styles.name}>
        <BankLogoIcon
          bankIcon={require(provider!.iconRelativeUrl!)}
          size={38}
          style={styles.icon}
        />
        <ThemedText
          type="defaultSemiBold"
          style={styles.nameText}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {getAccountName({ providerName: provider.name!, productTypeName: productType.name!, friendlyName: account.friendlyName })}
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
