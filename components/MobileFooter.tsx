import type { IconButtonProps } from "@expo/vector-icons/build/createIconSet";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import type { BottomSheetModal } from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import React, { useCallback, useRef } from "react";
import { View } from "react-native";

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
  color: "inherit",
};

const AddButton = (props: Omit<IconButtonProps<"">, "name">) => (
  <MaterialCommunityIcons.Button name="plus" {...commonIconProps} {...props} />
);

interface MobileFooterProps {
  previousRuleset?: string;
  nextRuleset?: string;
  onUpdateBalancePress: () => void;
  onAddProductPress: () => void;
}

/**
 * Actions footer for small-width viewports
 */
const MobileFooter = ({ previousRuleset, nextRuleset }: MobileFooterProps) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <Card className="color-foreground flex w-full flex-row items-center justify-between py-3">
      {previousRuleset ? (
        <NavBackButton
          onPress={() =>
            !!previousRuleset && router.push(`/overview/${previousRuleset}`)
          }
        />
      ) : (
        <View className="w-[40]" />
      )}
      <AddButton size={32} onPress={handlePresentModalPress} />
      {nextRuleset ? (
        <NavForwardButton
          onPress={() => router.push(`/overview/${nextRuleset}`)}
        />
      ) : (
        <View className="w-[40]" />
      )}
      <MobileActionsBottomSheet ref={bottomSheetModalRef} />
    </Card>
  );
};

export default MobileFooter;
