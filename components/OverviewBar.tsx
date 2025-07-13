import { router } from "expo-router";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "@/components/ui";
import type { RemainingBalanceByYearRow } from "@/db/queries/annualBalances";
import hooks from "@/hooks/database";
import { getCrossPlatformColour } from "@/hooks/getCrossPlatformColour";
import NavBackButton from "./implementations/NavBackButton";
import NavForwardButton from "./implementations/NavForwardButton";

interface OverviewBarProps {
  rulesetId: string;
  showNavButtons: boolean;
  previousRuleset?: string;
  nextRuleset?: string;
}

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
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 2,
      trailingZeroDisplay: "stripIfInteger",
    }).format(currentRow?.remainingBalance ?? 20_000);
  }, [remainingBalanceRow, rulesetId]);

  return (
    <View style={styles.container}>
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
          onPress={() => nextRuleset && router.push(`/overview/${nextRuleset}`)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // display: "flex",
    // flexDirection: "row",
    // gap: 24,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: getCrossPlatformColour(
    //   "secondarySystemBackground",
    //   "@android:color/system_accent1_900",
    //   "rgba(255, 255, 255, 0.15)",
    // ),
    // paddingVertical: 16,
    // shadowColor: "#404040",
    // shadowOffset: {
    //   width: 1,
    //   height: 1,
    // },
    // shadowOpacity: 0.31,
    // shadowRadius: 3,
    // elevation: 5,
  },
});

export default OverviewBar;
