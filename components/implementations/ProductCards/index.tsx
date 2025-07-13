import React, { useState } from "react";
import { View } from "react-native";
import CardStack from "@/components/CardStack";
import ProductSummaryCard from "@/components/implementations/ProductSummaryCard";
import { Text } from "@/components/ui";
import { useCurrentYearProducts } from "@/db/hooks";
import hooks from "@/hooks/database";
import getProductName from "@/utils/getProductName";
import EditProductModal from "../EditProductModal";

const ProductCards = () => {
  const [selectedProductId, setSelectedProductId] = useState<string | null>();
  const currentYearProducts = useCurrentYearProducts();
  const hasProductsInCurrentYear = !!currentYearProducts.length;
  const productsAnyYearCount = hooks.useRowCount("products");

  const collator = new Intl.Collator("en-GB");

  return (
    <View>
      <Text
        className="mx-4 my-3 text-left font-bold text-xl"
        numberOfLines={1}
        dynamicTypeRamp="title2"
      >
        Accounts
      </Text>
      <CardStack>
        {/* @TODO replace with info card */}
        {!hasProductsInCurrentYear && (
          <Text className="text-lg">
            {productsAnyYearCount
              ? "None of your accounts have a balance in this year. Update your balance to get started."
              : "Add an account to get started!"}
          </Text>
        )}
        {(currentYearProducts ?? [])
          .sort(([_, pA], [__, pB]) =>
            collator.compare(
              getProductName({
                friendlyName: pA.friendlyName,
                providerName: pA.providerName,
                productTypeName: pA.productTypeName,
              }),
              getProductName({
                friendlyName: pB.friendlyName,
                providerName: pB.providerName,
                productTypeName: pB.productTypeName,
              }),
            ),
          )
          .map(([id, product]) => (
            <ProductSummaryCard
              key={`summary-product-${id}`}
              product={product}
              productId={id}
              onPress={() => setSelectedProductId(id)}
            />
          ))}
      </CardStack>
      <EditProductModal
        isVisible={!!selectedProductId}
        onDismiss={() => setSelectedProductId(null)}
        existingId={selectedProductId}
      />
    </View>
  );
};

export default ProductCards;
