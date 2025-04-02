import ThemedText from "@/components/ThemedText";
import React from "react";
import IsaCard from "../IsaCard";
import Cards from "@/components/Cards";
import { StyleSheet, View } from "react-native";
import Account from "@/types/account";

interface AccountCardsProps {
  accounts: Pick<Account, "bank" | "isaType" | "friendlyName">[];
}

const AccountCards = ({ accounts }: AccountCardsProps) => (
  <View>
    <ThemedText style={styles.title} numberOfLines={1} dynamicTypeRamp="title2">
      Accounts
    </ThemedText>
    <Cards>
      {accounts.map((a) => (
        <IsaCard account={a} />
      ))}
    </Cards>
  </View>
);

const styles = StyleSheet.create({
  titleWrapper: {
    alignItems: "center",
  },
  title: {
    fontSize: 21,
    fontWeight: "bold",
    marginVertical: 12,
    marginHorizontal: 16,
    textAlign: "left",
  },
});

export default AccountCards;
