import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Cards from "@/components/Cards";
import CompositionCard from "@/components/implementations/CompositionCard";
import HistoryCard from "@/components/implementations/HistoryCard";
import OverviewBar from "@/components/OverviewBar";
import AccountCards from "@/components/implementations/AccountCards";
import PageColumn from "@/components/PageColumn";
import MobileFooter from "@/components/MobileFooter";
import { useIsMediumScreen } from "@/hooks/responsiveQueries";
import { RuleNames, rules } from "@/constants/rules";
import { useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
import { getOverviewNavbarProps } from "@/utils/getOverviewNavbarProps";
import DesktopActionTiles from "@/components/implementations/DesktopActionTiles";
import AddTransactionModal from "@/components/implementations/AddTransactionModal";
import ModalVisibilityState from "@/types/modalVisibilityState";
import AddAccountModal from "@/components/implementations/AddAccountModal";
import hooks from "@/hooks/database";
import { taxYearIsInRange } from "@/utils/taxYearIsInRange";
import Account from "@/types/account";
import { IsaTypeCodes, isaTypes } from "@/constants/isaTypes";
import banks from "@/constants/banks";

const useAccountList = (currentTaxYear: RuleNames) => {
  const accounts = hooks.useResultTable("allAccountsWithOpenCloseYears");

  return useMemo<Pick<Account, "bank" | "isaType" | "friendlyName">[]>(() => {
    const accountsArr = Object.values(accounts);

    if (!accountsArr.length) return [];

    const resultsArr: Pick<Account, "bank" | "isaType" | "friendlyName">[] = [];

    accountsArr
      .filter((a) =>
        taxYearIsInRange(
          currentTaxYear,
          a.startTaxYear as RuleNames,
          a.endTaxYear as RuleNames
        )
      )
      .forEach((acct) => {
        resultsArr.push({
          isaType: isaTypes.find(
            (i) => i.code === (acct.isaType as IsaTypeCodes)
          )!,
          bank: banks.find((b) => b.id === acct.providerName)!,
          friendlyName: acct.friendlyName as string,
        });
      });

    return resultsArr;
  }, [currentTaxYear, accounts]);
};

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

  const currentRuleset =
    rules.find((r) => r.name === currentRulesetFormattedName) ?? rules[0];

  const navbarProps = getOverviewNavbarProps(
    currentRulesetFormattedName ?? rules[0].name
  );

  const accounts = useAccountList(currentRulesetFormattedName);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <OverviewBar ruleset={currentRuleset} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <PageColumn>
          <Cards>
            {!isMediumScreen && (
              <DesktopActionTiles
                onPress={(key) =>
                  updateModalVisibility({ ...modalVisiblity, [key]: true })
                }
              />
            )}
            <CompositionCard />
            <HistoryCard />
          </Cards>
          <AccountCards accounts={accounts} />
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
