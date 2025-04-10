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
  account: Pick<Account, "bank" | "friendlyName" | "isaType">;
}

// TODO: figure out why al rayan clips so early, aegon clips too late, history card: white y axis, comp card: key under pie on mobile. create action sheet for plus button on mobile. create modal for add template. confirm overview / footer shadows are working. Figure out if we can still do Expo go.

const IsaCard = ({ disabled = false, account }: IsaCardProps) => (
  <CardBase style={[styles.container, disabled && styles.containerDisabled]}>
    <View style={styles.name}>
      <BankLogoIcon
        bankIcon={account.bank.iconFile}
        size={38}
        style={styles.icon}
      />
      <ThemedText
        type="defaultSemiBold"
        style={styles.nameText}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {getAccountName(account)}
      </ThemedText>
    </View>
    <ThemedText type="defaultSemiBold" style={styles.valueText}>
      £X,XXX
    </ThemedText>
  </CardBase>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    // alignItems: "center",
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
