import type { IconButtonProps } from "@expo/vector-icons/build/createIconSet";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import type BottomSheet from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import React, { useCallback, useRef } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useGetOverviewNavbarProps } from "@/utils/getOverviewNavbarProps";
import { MobileActionsBottomSheet } from "./dialogs";
import NavBackButton from "./NavBackButton";
import NavForwardButton from "./NavForwardButton";
import { Card } from "./ui";

const commonIconProps: Omit<IconButtonProps<"">, "name"> = {
  iconStyle: {
    marginRight: 0,
  },
  size: 24,
  backgroundColor: "transparent",
  className: "color-foreground",
};

const AddButton = (props: Omit<IconButtonProps<"">, "name">) => (
  <MaterialCommunityIcons.Button name="plus" {...commonIconProps} {...props} />
);

interface MobileFooterProps {
  rulesetId: string;
  hasProducts?: boolean;
}

/**
 * Actions footer for small-width viewports
 */
const MobileFooter = ({ rulesetId, hasProducts }: MobileFooterProps) => {
  const bottomSheetModalRef = useRef<BottomSheet>(null);
  const { bottom: bottomInset } = useSafeAreaInsets();
  const { previousRulesetName, nextRulesetName } =
    useGetOverviewNavbarProps(rulesetId);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.snapToIndex(0);
  }, []);

  const onDismissModal = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  return (
    <Card
      className="color-foreground flex w-full flex-row items-center justify-between py-3"
      style={{ marginBottom: bottomInset }}
    >
      {previousRulesetName ? (
        <NavBackButton
          onPress={() =>
            !!previousRulesetName &&
            router.replace(`/overview/${previousRulesetName}`)
          }
        />
      ) : (
        <View className="w-[40]" />
      )}
      <AddButton size={32} onPress={handlePresentModalPress} />
      {nextRulesetName ? (
        <NavForwardButton
          onPress={() => router.replace(`/overview/${nextRulesetName}`)}
        />
      ) : (
        <View className="w-[40]" />
      )}
      <MobileActionsBottomSheet
        ref={bottomSheetModalRef}
        hasProducts={hasProducts}
        onDismiss={onDismissModal}
      />
    </Card>
  );
};

export default MobileFooter;
