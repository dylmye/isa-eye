import { FlashList, type ListRenderItem } from "@shopify/flash-list";
import React, { useMemo } from "react";
import { View } from "react-native";
import { EditProductDialog } from "@/components/dialogs";
import ProductSummaryCard from "@/components/implementations/ProductSummaryCard";
import { Text } from "@/components/ui";
import { useCurrentYearProducts } from "@/db/hooks";
import hooks from "@/hooks/database";
import getProductName from "@/utils/getProductName";
import ProductCardsEmpty from "./ProductCardsEmpty";

const ProductCards = () => {
  const currentYearProducts = useCurrentYearProducts();
  const productsAnyYearCount = hooks.useRowCount("products");

  const collator = new Intl.Collator("en-GB");

  const data = useMemo(
    () =>
      (currentYearProducts ?? []).sort(([_, pA], [__, pB]) =>
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
      ),
    [currentYearProducts],
  );

  const renderCard: ListRenderItem<(typeof currentYearProducts)[0]> = ({
    item: [id, product],
  }) => (
    <EditProductDialog existingId={id as string}>
      <ProductSummaryCard product={product} productId={id} />
    </EditProductDialog>
  );

  return (
    <View>
      <Text
        className="my-3 text-left font-bold text-xl"
        numberOfLines={1}
        dynamicTypeRamp="title2"
      >
        Accounts
      </Text>
      <FlashList
        data={data}
        renderItem={renderCard}
        contentContainerClassName="mx-4 flex flex-col items-center"
        className="w-full"
        ItemSeparatorComponent={() => <View className="pb-4" />}
        ListEmptyComponent={
          <ProductCardsEmpty anyExistingProducts={!!productsAnyYearCount} />
        }
      />
    </View>
  );
};

export default ProductCards;
