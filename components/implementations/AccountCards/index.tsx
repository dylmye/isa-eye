import ThemedText from "@/components/ThemedText";
import React from "react";
import IsaCard from "../IsaCard";
import Cards from "@/components/Cards";
import { StyleSheet, View } from "react-native";
import hooks from "@/hooks/database";

const AccountCards = () => {
  const queries = hooks.useQueries();
  const accounts = queries?.getResultTable("allProducts");
  return (
  <View>
    <ThemedText style={styles.title} numberOfLines={1} dynamicTypeRamp="title2">
      Accounts
    </ThemedText>
    <Cards>
      <ThemedText>{JSON.stringify(accounts)}</ThemedText>
      {/* {!Object.keys(accounts ?? {}).length && (
        <ThemedText>Add an account to get started!</ThemedText>
      )}
      {Object.entries(accounts).map(([id, a]) => (
        <IsaCard account={a} key={`isa-acct-${id}`} />
      ))} */}
    </Cards>
  </View>
)
};

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
