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
import { useMemo } from "react";
import { getOverviewNavbarProps } from "@/utils/getOverviewNavbarProps";

const OverviewForRuleset = () => {
  const isMediumScreen = useIsMediumScreen();
  const searchParams = useLocalSearchParams<{ ruleset?: string }>();

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
            <CompositionCard />
            <HistoryCard />
          </Cards>
          <AccountCards />
        </PageColumn>
      </ScrollView>
      {/* {isMediumScreen && ( */}
      <MobileFooter
        previousRuleset={navbarProps?.previousRulesetName}
        nextRuleset={navbarProps?.nextRulesetName}
      />
      {/* )} */}
    </SafeAreaView>
  );
};

export default OverviewForRuleset;
