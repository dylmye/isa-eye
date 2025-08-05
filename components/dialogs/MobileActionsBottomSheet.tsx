import BottomSheet, {
  BottomSheetBackdrop,
  type BottomSheetBackdropProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Portal } from "@rn-primitives/portal";
import { router } from "expo-router";
import { forwardRef } from "react";
import { NAV_THEME } from "@/constants/navTheme";
import { useColorScheme } from "@/hooks/useColorScheme";
import BottomSheetItem from "../BottomSheetItem";
import { Separator } from "../ui";

interface MobileActionsBottomSheetProps {
  hasProducts?: boolean;
  onDismiss?: () => void;
}

const MobileActionsBottomSheet = forwardRef<
  BottomSheet,
  MobileActionsBottomSheetProps
>(({ hasProducts, onDismiss }, ref) => {
  const { colorScheme } = useColorScheme();

  const renderBackdrop = (props: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />
  );

  return (
    <Portal name="mobile-actions">
      <BottomSheet
        ref={ref}
        index={-1}
        backgroundStyle={{ backgroundColor: NAV_THEME[colorScheme].card }}
        handleIndicatorStyle={{ backgroundColor: NAV_THEME[colorScheme].text }}
        backdropComponent={renderBackdrop}
        enablePanDownToClose
      >
        <BottomSheetView>
          <BottomSheetItem
            icon="cash-plus"
            label="Add Account"
            onPress={() => router.push("/add/account")}
          />
          <Separator />
          {hasProducts && (
            <BottomSheetItem
              icon="bank-plus"
              label="Update Balance"
              onPress={onDismiss}
            />
          )}
          <Separator />
          <BottomSheetItem
            icon="database-import"
            label="Bulk Import"
            disabled
            onPress={onDismiss}
          />
        </BottomSheetView>
      </BottomSheet>
    </Portal>
  );
});

export default MobileActionsBottomSheet;
