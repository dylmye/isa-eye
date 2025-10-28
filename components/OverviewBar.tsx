import { router } from "expo-router";
import { useMemo } from "react";
import { Platform, Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Card, Text } from "@/components/ui";
import type { RemainingBalanceByYearRow } from "@/db/queries/annualBalances";
import hooks from "@/hooks/database";
import { formatCurrency } from "@/utils/formatCurrency";
import { useGetOverviewNavbarProps } from "@/utils/getOverviewNavbarProps";
import { cn } from "@/utils/styles";

import { IntroDialog, RulesetDescriptionDialog } from "./dialogs";
import Logo from "./Logo";
import MaterialCommunityIcons from "./MaterialCommunityIconsFix";
import NavBackButton from "./NavBackButton";
import NavForwardButton from "./NavForwardButton";

interface OverviewBarProps {
  rulesetId: string;
  showNavButtons: boolean;
}

/**
 * Feature card for viewing current ruleset and associated information, desktop navigation
 */
const OverviewBar = ({ rulesetId, showNavButtons }: OverviewBarProps) => {
  const { top: topInset } = useSafeAreaInsets();
  const { previousRulesetName, nextRulesetName } =
    useGetOverviewNavbarProps(rulesetId);

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
      <Card.Content
        className={cn(
          "color-foreground flex flex-column py-4",
          Platform.OS !== "web" && "mb-4",
        )}
        style={{ paddingTop: topInset }}
      >
        <View className="my-2 flex min-h-6 flex-1 flex-row items-center justify-between">
          <Logo className="h-5 w-5 fill-primary" accessibilityLabel="ISA Eye" />
          <View>
            <RulesetDescriptionDialog>
              <Pressable
                className="group flex flex-row items-center gap-1"
                hitSlop={12}
              >
                <Text
                  className={cn(
                    "gap-1 font-semibold text-foreground text-lg leading-4 transition-colors group-hover:text-primary",
                    Platform.OS === "web" && "transition-colors",
                  )}
                  aria-hidden
                  accessibilityLabel={`Currently viewing your data for the ${rulesetId} tax year. Press for notes.`}
                >
                  {rulesetId}
                </Text>
                <MaterialCommunityIcons
                  name="information-outline"
                  size={18}
                  className={cn(
                    "color-foreground group-hover:color-primary",
                    Platform.OS === "web" && "transition-colors",
                  )}
                  aria-hidden
                />
              </Pressable>
            </RulesetDescriptionDialog>
          </View>
          <View>
            <IntroDialog>
              <Pressable hitSlop={12}>
                <MaterialCommunityIcons
                  name="help"
                  size={20}
                  className={cn(
                    "color-foreground hover:color-primary",
                    Platform.OS === "web" && "transition-colors",
                  )}
                />
              </Pressable>
            </IntroDialog>
          </View>
        </View>
        <View className="flex flex-row items-center justify-center">
          {showNavButtons && previousRulesetName ? (
            <NavBackButton
              onPress={() =>
                !!previousRulesetName &&
                router.replace(`/overview/${previousRulesetName}`)
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
          {showNavButtons && nextRulesetName ? (
            <NavForwardButton
              onPress={() =>
                !!nextRulesetName &&
                router.replace(`/overview/${nextRulesetName}`)
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
