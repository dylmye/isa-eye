import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View } from "react-native";
import ActionTile from "@/components/ActionTile";
import { UpdateBalanceDialog } from "@/components/dialogs";
import type ModalVisibilityState from "@/types/modalVisibilityState";

interface DesktopActionTilesProps {
  onPress: (key: keyof ModalVisibilityState) => void;
  hasProducts: boolean;
}

const DesktopActionTiles = ({
  onPress,
  hasProducts,
}: DesktopActionTilesProps) => {
  const iconSize = 52;

  return (
    <View className="flex w-full flex-row justify-evenly gap-3">
      {hasProducts && <UpdateBalanceDialog />}
      <ActionTile
        title="Add Account"
        onPress={() => onPress("addProduct")}
        icon={<MaterialCommunityIcons size={iconSize} name="bank-plus" />}
      />
      <ActionTile
        title="Bulk Import"
        onPress={() => onPress("bulkUpload")}
        disabled
        icon={<MaterialCommunityIcons size={iconSize} name="database-import" />}
      />
    </View>
  );
};

export default DesktopActionTiles;
