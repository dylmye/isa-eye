import React from "react";
import { StyleSheet, View } from "react-native";
import ThemedText from "@/components/ThemedText";
import Cards from "@/components/Cards";
import ProductSummaryCard from "@/components/implementations/ProductSummaryCard";
import hooks from "@/hooks/database";
import { AllProductsRow } from "@/db/queries/products";

const ProductCards = () => {
  const queries = hooks.useQueries();
  const products = queries?.getResultTable("allProducts");
  const hasProducts = !!queries?.getResultRowCount("allProducts");
  return (
    <View>
      <ThemedText style={styles.title} numberOfLines={1} dynamicTypeRamp="title2">
        Accounts
      </ThemedText>
      <Cards>
        {!hasProducts && (
          <ThemedText>Add an account to get started!</ThemedText>
        )}
        {Object.entries(products ?? {}).map(([id, product]) => (
          <ProductSummaryCard key={`isa-acct-${id}`} product={product as AllProductsRow} productId={id} />
        ))}
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

export default ProductCards;
