import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CardStack from "@/components/CardStack";
import AddProductModal from "@/components/implementations/AddProductModal";
import CompositionCard from "@/components/implementations/CompositionCard";
import DesktopActionTiles from "@/components/implementations/DesktopActionTiles";
import ProductCards from "@/components/implementations/ProductCards";
import UpdateBalanceModal from "@/components/implementations/UpdateBalanceModal";
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
    <SafeAreaView style={{ flex: 1 }}>
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
          onAddProductPress={() =>
            updateModalVisibility({ ...modalVisiblity, addProduct: true })
          }
          onUpdateBalancePress={() =>
            updateModalVisibility({ ...modalVisiblity, updateBalance: true })
          }
        />
      )}
      <UpdateBalanceModal
        isVisible={modalVisiblity?.updateBalance}
        onDismiss={() =>
          updateModalVisibility({ ...modalVisiblity, updateBalance: false })
        }
      />
      <AddProductModal
        isVisible={modalVisiblity?.addProduct}
        onDismiss={() =>
          updateModalVisibility({ ...modalVisiblity, addProduct: false })
        }
      />
    </SafeAreaView>
  );
};

export default OverviewForRuleset;
