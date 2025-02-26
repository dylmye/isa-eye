import ThemedText from "@/components/ThemedText";
import React from "react";
import IsaCard from "../IsaCard";
import Cards from "@/components/Cards";
import { StyleSheet, View } from "react-native";

const AccountCards = () => (
  <View>
    <ThemedText style={styles.title} numberOfLines={1} dynamicTypeRamp="title2">
      Accounts
    </ThemedText>
    <Cards>
      <IsaCard />
      <IsaCard />
      <IsaCard />
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
