import { Redirect, useLocalSearchParams } from "expo-router";
import { useEffect, useMemo } from "react";
import { ScrollView, View } from "react-native";

import DesktopActionTiles from "@/components/DesktopActionTiles";
import CompositionCard from "@/components/implementations/CompositionCard";
import ProductCards from "@/components/implementations/ProductCards";
import MobileFooter from "@/components/MobileFooter";
import OverviewBar from "@/components/OverviewBar";
import PageColumn from "@/components/PageColumn";
import { useCurrentYearProducts } from "@/db/hooks";
import hooks from "@/hooks/database";
import { useIsMediumScreen } from "@/hooks/responsiveQueries";

const DEFAULT_RULESET_ID = "2024/2025";

const OverviewForRuleset = () => {
  const isMediumScreen = useIsMediumScreen();
  const currentYearProducts = useCurrentYearProducts();
  const searchParams = useLocalSearchParams<{ ruleset?: string }>();
  const hasProducts = !!currentYearProducts.length;

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
    }
  }, [existingRulesets, currentRulesetFormattedName]);

  if (!existingRulesets.includes(currentRulesetFormattedName)) {
    return <Redirect href="/+not-found" />;
  }

  return (
    <View className="flex-1">
      <OverviewBar
        rulesetId={currentRulesetFormattedName}
        showNavButtons={!isMediumScreen}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <PageColumn>
          <View className="flex flex-col items-center gap-4">
            {!isMediumScreen && (
              <DesktopActionTiles hasProducts={!!hasProducts} />
            )}
            {!!hasProducts && <CompositionCard />}
          </View>
          <ProductCards />
        </PageColumn>
      </ScrollView>
      {isMediumScreen && (
        <MobileFooter
          rulesetId={currentRulesetFormattedName}
          hasProducts={hasProducts}
        />
      )}
    </View>
  );
};

export default OverviewForRuleset;
