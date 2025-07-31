import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { ScrollView, View } from "react-native";

import CardStack from "@/components/CardStack";
import DesktopActionTiles from "@/components/DesktopActionTiles";
import CompositionCard from "@/components/implementations/CompositionCard";
import ProductCards from "@/components/implementations/ProductCards";
import MobileFooter from "@/components/MobileFooter";
import OverviewBar from "@/components/OverviewBar";
import PageColumn from "@/components/PageColumn";
import { useCurrentYearProducts } from "@/db/hooks";
import hooks from "@/hooks/database";
import { useIsMediumScreen } from "@/hooks/responsiveQueries";
import type ModalVisibilityState from "@/types/modalVisibilityState";
import { useGetOverviewNavbarProps } from "@/utils/getOverviewNavbarProps";

const DEFAULT_RULESET_ID = "2024/2025";

const OverviewForRuleset = () => {
  const isMediumScreen = useIsMediumScreen();
  const currentYearProducts = useCurrentYearProducts();
  const searchParams = useLocalSearchParams<{ ruleset?: string }>();
  const [modalVisiblity, updateModalVisibility] =
    useState<ModalVisibilityState>({
      addProduct: false,
      updateBalance: false,
      bulkUpload: false,
    });
  const hasProducts = !!currentYearProducts.length;

  const navbarProps = useGetOverviewNavbarProps();

  /**
   *
   * Ruleset handling
   *
   */
  const currentRulesetFormattedName = useMemo(
    () => searchParams?.ruleset?.replace("-", "/") ?? DEFAULT_RULESET_ID,
    [searchParams?.ruleset],
  );
  const updateCurrentRulesetForStore = hooks.useSetValueCallback(
    "currentTaxYear",
    (newYear: string) => newYear,
    [],
  );
  const existingRulesets = hooks.useRowIds("rulesets");
  useEffect(() => {
    if (existingRulesets.includes(currentRulesetFormattedName)) {
      updateCurrentRulesetForStore(currentRulesetFormattedName);
    } else {
      router.replace("/+not-found");
    }
  }, [currentRulesetFormattedName]);

  return (
    <View className="flex-1">
      <OverviewBar
        rulesetId={currentRulesetFormattedName}
        showNavButtons={!isMediumScreen}
        previousRuleset={navbarProps?.previousRulesetName}
        nextRuleset={navbarProps?.nextRulesetName}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <PageColumn>
          <CardStack>
            {!isMediumScreen && (
              <DesktopActionTiles
                onPress={(key) =>
                  updateModalVisibility({ ...modalVisiblity, [key]: true })
                }
                hasProducts={!!hasProducts}
              />
            )}
            {!!hasProducts && <CompositionCard />}
          </CardStack>
          <ProductCards />
        </PageColumn>
      </ScrollView>
      {isMediumScreen && (
        <MobileFooter
          previousRuleset={navbarProps?.previousRulesetName}
          nextRuleset={navbarProps?.nextRulesetName}
          hasProducts={hasProducts}
        />
      )}
    </View>
  );
};

export default OverviewForRuleset;
