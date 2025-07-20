import { router } from "expo-router";
import { useMemo } from "react";
import { View } from "react-native";
import { Card, Text } from "@/components/ui";
import type { RemainingBalanceByYearRow } from "@/db/queries/annualBalances";
import hooks from "@/hooks/database";
import { formatHeadlineCurrency } from "@/utils/formatHeadlineCurrency";
import NavBackButton from "./NavBackButton";
import NavForwardButton from "./NavForwardButton";

interface OverviewBarProps {
  rulesetId: string;
  showNavButtons: boolean;
  previousRuleset?: string;
  nextRuleset?: string;
}

/**
 * Feature card for viewing current ruleset and associated information, desktop navigation
 */
const OverviewBar = ({
  rulesetId,
  showNavButtons,
  previousRuleset,
  nextRuleset,
}: OverviewBarProps) => {
  const queries = hooks.useQueries();
  const remainingBalanceRow = queries?.getResultTable(
    "remainingBalanceByYear",
  ) as Record<string, RemainingBalanceByYearRow>;

  const formattedRemainingBalance = useMemo(() => {
    const currentRow = Object.values(remainingBalanceRow ?? {}).find(
      (r) => r.rulesetId === rulesetId,
    );
    return formatHeadlineCurrency(currentRow?.remainingBalance ?? 20_000);
  }, [remainingBalanceRow, rulesetId]);

  // @TODO: make this card same width as the others
  return (
    <Card className="w-full">
      <Card.Content className="color-foreground flex flex-row items-center justify-center py-4">
        {showNavButtons && (
          <NavBackButton
            disabled={!previousRuleset}
            onPress={() =>
              !!previousRuleset && router.push(`/overview/${previousRuleset}`)
            }
          />
        )}
        <View>
          <Text className="mb-2 text-center font-semibold text-lg" aria-hidden>
            {rulesetId}
          </Text>
          <Text
            aria-label={`Your remaining ISA allowance for the ${rulesetId} tax year.`}
            adjustsFontSizeToFit
            className="text-center font-bold text-7xl"
            dynamicTypeRamp="largeTitle"
          >
            {formattedRemainingBalance}
          </Text>
          <Text className="text-center" aria-hidden>
            remaining
          </Text>
        </View>
        {showNavButtons && (
          <NavForwardButton
            disabled={!nextRuleset}
            onPress={() =>
              nextRuleset && router.push(`/overview/${nextRuleset}`)
            }
          />
        )}
      </Card.Content>
    </Card>
  );
};

export default OverviewBar;
