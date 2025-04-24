import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useMemo, useState } from "react";

import { RuleNames, rules } from "@/constants/rules";
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
import hooks, { useGetAccounts } from "@/hooks/database";
import ModalVisibilityState from "@/types/modalVisibilityState";
import { getOverviewNavbarProps } from "@/utils/getOverviewNavbarProps";
import AccountCards from "@/components/implementations/AccountCards";

const OverviewForRuleset = () => {
  const isMediumScreen = useIsMediumScreen();
  const searchParams = useLocalSearchParams<{ ruleset?: string }>();
  const [modalVisiblity, updateModalVisibility] =
    useState<ModalVisibilityState>({
      addTransaction: false,
      addAccount: false,
      bulkUpload: false,
    });

  const currentRulesetFormattedName = useMemo<RuleNames>(
    () => searchParams?.ruleset?.replace("-", "/") as RuleNames,
    [searchParams?.ruleset]
  );
  const updateCurrentRulesetForStore = hooks.useSetValueCallback(
    "currentTaxYear",
    (newYear: string) => newYear,
    []
  );

  const currentRuleset =
    rules.find((r) => r.name === currentRulesetFormattedName) ?? rules[0];

  const navbarProps = getOverviewNavbarProps(
    currentRulesetFormattedName ?? rules[0].name
  );

  const accountsQueryId = useGetAccounts({});

  const accounts = hooks.useResultTable(accountsQueryId);

  const hasAccounts = useMemo(() => !!Object.keys(accounts).length, [accounts]);

  useEffect(() => {
    updateCurrentRulesetForStore(currentRulesetFormattedName);
  }, [currentRulesetFormattedName]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <OverviewBar
        ruleset={currentRuleset}
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
                hasAccounts={hasAccounts}
              />
            )}
            {hasAccounts && <CompositionCard />}
            {hasAccounts && <HistoryCard />}
          </Cards>
          {/* <AccountCards accounts={accounts} /> */}
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
