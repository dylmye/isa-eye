import { FlashList, type ListRenderItem } from "@shopify/flash-list";
import toSorted from "array.prototype.tosorted";
import { Link } from "expo-router";
import React, { useMemo } from "react";
import { Platform, Pressable, View } from "react-native";

import ProductSummaryCard from "@/components/implementations/ProductSummaryCard";
import { Text } from "@/components/ui";
import { useCurrentYearProducts } from "@/db/hooks";
import hooks from "@/hooks/database";
import getProductName from "@/utils/getProductName";
import { cn } from "@/utils/styles";
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
    <Link href={`/edit/account/${id}`} className="flex-1" asChild>
      <Pressable
        className="flex-1"
        hitSlop={12}
      >
        <ProductSummaryCard product={product} productId={id} />
      </Pressable>
    </Link>
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
        contentContainerClassName={cn(
          "flex flex-col",
          Platform.OS === "web" && "items-center mx-4",
        )}
        className="w-full"
        ItemSeparatorComponent={() => <View className="pb-2" />}
        ListEmptyComponent={
          <View className="flex flex-1">
            <ProductCardsEmpty anyExistingProducts={!!productsAnyYearCount} />
          </View>
        }
      />
    </View>
  );
};

export default ProductCards;
