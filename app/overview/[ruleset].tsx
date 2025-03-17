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
import { rules } from "@/constants/rules";
import { useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
import { getOverviewNavbarProps } from "@/utils/getOverviewNavbarProps";
import DesktopActionTiles from "@/components/implementations/DesktopActionTiles";
import AddTransactionModal from "@/components/implementations/AddTransactionModal";
import ModalVisibilityState from "@/types/modalVisibilityState";
import AddAccountModal from "@/components/implementations/AddAccountModal";

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
    () => searchParams?.ruleset?.replace("-", "/"),
    [searchParams?.ruleset]
  );

  const currentRuleset =
    rules.find((r) => r.name === currentRulesetFormattedName) ?? rules[0];

  const navbarProps = getOverviewNavbarProps(
    currentRulesetFormattedName ?? rules[0].name
  );

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
          <AccountCards />
        </PageColumn>
      </ScrollView>
      {isMediumScreen && (
        <MobileFooter
          previousRuleset={navbarProps?.previousRulesetName}
          nextRuleset={navbarProps?.nextRulesetName}
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
