import ThemedText from "@/components/ThemedText";
import React from "react";
import IsaCard from "../IsaCard";
import Cards from "@/components/Cards";
import { StyleSheet, View } from "react-native";
import banks from "@/constants/banks";
import { isaTypes } from "@/constants/isaTypes";
import { rules } from "@/constants/rules";

const AccountCards = () => (
  <View>
    <ThemedText style={styles.title} numberOfLines={1} dynamicTypeRamp="title2">
      Accounts
    </ThemedText>
    <Cards>
      <IsaCard account={{ bank: banks[0], isaType: isaTypes[0], openedInTaxYear: rules[0].name }} />
      <IsaCard account={{ bank: banks[1], isaType: isaTypes[1], openedInTaxYear: rules[0].name }} />
      <IsaCard account={{ bank: banks[2], isaType: isaTypes[2], openedInTaxYear: rules[0].name }} />
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
