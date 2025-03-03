import CardBase from "@/components/CardBase";
import ThemedText from "@/components/ThemedText";
import { StyleSheet, View } from "react-native";
import BankLogoIcon from "../BankLogoIcon";
import Bank from "@/types/bank";
import Account from "@/types/account";
import getAccountName from "@/utils/getAccountName";

export interface IsaCardProps {
  /** Account is closed or non-interactable
   * @default false
   */
  disabled?: boolean;
  account: Account;
}

const IsaCard = ({ disabled = false, account }: IsaCardProps) => (
  <CardBase style={[styles.container, disabled && styles.containerDisabled]}>
    <View style={{ flex: 1, alignItems: "center", flexDirection: "row" }}>
      <BankLogoIcon
        bankIcon={account.bank.iconFile}
        size={38}
        style={styles.icon}
      />
      <ThemedText
        type="defaultSemiBold"
        adjustsFontSizeToFit
        style={styles.nameText}
        numberOfLines={1}
      >
        {getAccountName(account)}
      </ThemedText>
    </View>
    <View style={{ alignItems: "flex-end" }}>
      <ThemedText type="defaultSemiBold" style={styles.valueText}>
        £2,400
      </ThemedText>
      <ThemedText>remaining</ThemedText>
    </View>
  </CardBase>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  containerDisabled: {},
  icon: {
    flex: 1,
  },
  nameText: {
    fontSize: 24,
    lineHeight: 32,
    marginHorizontal: 8,
    textOverflow: "ellipsis",
  },
  valueText: {
    fontSize: 24,
  },
});

export default IsaCard;
