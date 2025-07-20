import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { forwardRef } from "react";
import { Pressable, View } from "react-native";
import { NAV_THEME } from "@/constants/navTheme";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Separator, Text } from "../ui";
import AddProductDialog from "./AddProductDialog";
import UpdateBalanceDialog from "./UpdateBalanceDialog";

const MobileActionsBottomSheet = forwardRef<BottomSheetModal>((_props, ref) => {
  const { colorScheme } = useColorScheme();
  return (
    <BottomSheetModal
      ref={ref}
      backgroundStyle={{ backgroundColor: NAV_THEME[colorScheme].card }}
      handleIndicatorStyle={{ backgroundColor: NAV_THEME[colorScheme].text }}
      enablePanDownToClose
      name="mobile-actions"
    >
      <BottomSheetView>
        <AddProductDialog>
          <Pressable className="flex-1 items-start p-3">
            <Text className="font-semibold">
              <MaterialCommunityIcons
                name="cash-plus"
                size={20}
                className="mr-2"
              />
              Add Account
            </Text>
          </Pressable>
        </AddProductDialog>
        <Separator />
        <UpdateBalanceDialog>
          <Pressable className="flex-1 items-start p-3">
            <Text className="font-semibold">
              <MaterialCommunityIcons
                name="bank-plus"
                size={20}
                className="mr-2"
              />
              Update Balance
            </Text>
          </Pressable>
        </UpdateBalanceDialog>
        <Separator />
        <View className="flex-1 items-start p-3">
          <Text className="font-semibold text-muted">Bulk import</Text>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

export default MobileActionsBottomSheet;
