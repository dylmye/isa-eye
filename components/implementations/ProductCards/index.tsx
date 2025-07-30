import { FlashList, type ListRenderItem } from "@shopify/flash-list";
import toSorted from "array.prototype.tosorted";
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
      toSorted(currentYearProducts ?? [], ([_, pA], [__, pB]) =>
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
      <View>
        <ProductSummaryCard product={product} productId={id} />
      </View>
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
        ItemSeparatorComponent={() => <View className="pb-2" />}
        ListEmptyComponent={
          <ProductCardsEmpty anyExistingProducts={!!productsAnyYearCount} />
        }
        estimatedItemSize={64}
      />
    </View>
  );
};

export default ProductCards;
