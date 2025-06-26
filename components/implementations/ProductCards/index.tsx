import React from "react";
import { StyleSheet, View } from "react-native";

import ThemedText from "@/components/ThemedText";
import Cards from "@/components/Cards";
import ProductSummaryCard from "@/components/implementations/ProductSummaryCard";
import { useCurrentYearProducts } from "@/db/hooks";
import hooks from "@/hooks/database";

const ProductCards = () => {
  const currentYearProducts = useCurrentYearProducts();
  const hasProductsInCurrentYear = !!currentYearProducts.length;
  const productsAnyYearCount = hooks.useRowCount("products");
  return (
    <View>
      <ThemedText style={styles.title} numberOfLines={1} dynamicTypeRamp="title2">
        Accounts
      </ThemedText>
      <Cards>
        {!hasProductsInCurrentYear && (
          <ThemedText>{productsAnyYearCount ? "None of your accounts have a balance in this year. Update your balance to get started." : "Add an account to get started!"}</ThemedText>
        )}
        {(currentYearProducts ?? []).map(([id, product]) => (
          <ProductSummaryCard key={`summary-product-${id}`} product={product} productId={id} />
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
