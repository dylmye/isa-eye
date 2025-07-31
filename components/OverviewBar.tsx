import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import { useMemo } from "react";
import { Platform, View } from "react-native";
import { Card, Text } from "@/components/ui";
import type { RemainingBalanceByYearRow } from "@/db/queries/annualBalances";
import hooks from "@/hooks/database";
import { formatCurrency } from "@/utils/formatCurrency";
import { cn } from "@/utils/styles";
import { IntroDialog, RulesetDescriptionDialog } from "./dialogs";
import Logo from "./Logo";
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
  const currentRuleset = hooks.useRow("rulesets", rulesetId);
  const remainingBalanceRow = hooks.useResultTable(
    "remainingBalanceByYear",
  ) as Record<string, RemainingBalanceByYearRow>;

  const formattedRemainingBalance = useMemo(() => {
    const currentRow = Object.values(remainingBalanceRow ?? {}).find(
      (r) => r.rulesetId === rulesetId,
    );
    const currentRulesetAllowance =
      Number.parseFloat(currentRuleset?.sharedAllowancePence ?? "0") / 100;
    const currentBalance = currentRow?.remainingBalance ?? 0;
    return formatCurrency(currentRulesetAllowance - currentBalance);
  }, [remainingBalanceRow, rulesetId, currentRuleset?.sharedAllowancePence]);

  return (
    <Card className="w-full rounded-b-none">
      <Card.Content className="color-foreground flex flex-column py-4">
        <View className="mb-2 flex min-h-6 flex-1 flex-row items-center justify-between">
          <Logo className="h-5 w-5 fill-primary" accessibilityLabel="ISA Eye" />
          {/* @TODO why do we need to nest this so damn much */}
          <View>
            <RulesetDescriptionDialog>
              <Text
                className={cn(
                  "text-center font-semibold text-foreground text-lg leading-4 transition-colors",
                  Platform.OS === "web" &&
                    "transition-colors hover:text-primary",
                )}
                aria-hidden
                accessibilityLabel={`Currently viewing your data for the ${rulesetId} tax year. Press for notes.`}
              >
                {rulesetId}
                <MaterialCommunityIcons
                  name="information-outline"
                  color="inherit"
                  size={18}
                  className="ml-1"
                />
              </Text>
            </RulesetDescriptionDialog>
          </View>
          <View>
            <IntroDialog>
              <View>
                <MaterialCommunityIcons
                  name="help"
                  size={20}
                  className="color-primary hover:color-current transition-colors"
                />
              </View>
            </IntroDialog>
          </View>
        </View>
        <View className="flex flex-row items-center justify-center">
          {showNavButtons && previousRuleset ? (
            <NavBackButton
              onPress={() =>
                !!previousRuleset && router.push(`/overview/${previousRuleset}`)
              }
            />
          ) : (
            <View className="w-[40]" />
          )}
          <View className="px-4">
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
          {showNavButtons && nextRuleset ? (
            <NavForwardButton
              onPress={() =>
                nextRuleset && router.push(`/overview/${nextRuleset}`)
              }
            />
          ) : (
            <View className="w-[40]" />
          )}
        </View>
      </Card.Content>
    </Card>
  );
};

export default OverviewBar;
