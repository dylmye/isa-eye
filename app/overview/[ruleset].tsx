import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useMemo, useState } from "react";

import Cards from "@/components/Cards";
import CompositionCard from "@/components/implementations/CompositionCard";
import HistoryCard from "@/components/implementations/HistoryCard";
import OverviewBar from "@/components/OverviewBar";
import PageColumn from "@/components/PageColumn";
import MobileFooter from "@/components/MobileFooter";
import DesktopActionTiles from "@/components/implementations/DesktopActionTiles";
import AddTransactionModal from "@/components/implementations/AddTransactionModal";
import AddAccountModal from "@/components/implementations/AddAccountModal";
import { useIsMediumScreen } from "@/hooks/responsiveQueries";
import hooks from "@/hooks/database";
import ModalVisibilityState from "@/types/modalVisibilityState";
import { getOverviewNavbarProps } from "@/utils/getOverviewNavbarProps";
import AccountCards from "@/components/implementations/AccountCards";

const DEFAULT_RULESET_ID = '2024/2025'

const OverviewForRuleset = () => {
  const isMediumScreen = useIsMediumScreen();
  const searchParams = useLocalSearchParams<{ ruleset?: string }>();
  const [modalVisiblity, updateModalVisibility] =
    useState<ModalVisibilityState>({
      addTransaction: false,
      addAccount: false,
      bulkUpload: false,
    });

  const currentRulesetFormattedName = useMemo(
    () => searchParams?.ruleset?.replace("-", "/") ?? DEFAULT_RULESET_ID,
    [searchParams?.ruleset]
  );
  const updateCurrentRulesetForStore = hooks.useSetValueCallback(
    "currentTaxYear",
    (newYear: string) => newYear,
    []
  );

  const navbarProps = getOverviewNavbarProps();

  // @TODO use a query count for active accounts for current year
  const accounts = hooks.useRowCount("products");

  useEffect(() => {
    updateCurrentRulesetForStore(currentRulesetFormattedName);
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
          <Cards>
            {!isMediumScreen && (
              <DesktopActionTiles
                onPress={(key) =>
                  updateModalVisibility({ ...modalVisiblity, [key]: true })
                }
                hasAccounts={!!accounts}
              />
            )}
            {!!accounts && <CompositionCard />}
            {!!accounts && <HistoryCard />}
          </Cards>
          <AccountCards />
        </PageColumn>
      </ScrollView>
      {isMediumScreen && (
        <MobileFooter
          previousRuleset={navbarProps?.previousRulesetName}
          nextRuleset={navbarProps?.nextRulesetName}
          onAddAccountPress={() =>
            updateModalVisibility({ ...modalVisiblity, addAccount: true })
          }
          onAddTransactionPress={() =>
            updateModalVisibility({ ...modalVisiblity, addTransaction: true })
          }
        />
      )}
      <AddTransactionModal
        isVisible={modalVisiblity?.addTransaction}
        onDismiss={() =>
          updateModalVisibility({ ...modalVisiblity, addTransaction: false })
        }
      />
      <AddAccountModal
        isVisible={modalVisiblity?.addAccount}
        onDismiss={() =>
          updateModalVisibility({ ...modalVisiblity, addAccount: false })
        }
      />
    </SafeAreaView>
  );
};

export default OverviewForRuleset;
