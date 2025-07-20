import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View } from "react-native";
import ActionTile from "@/components/ActionTile";
import { AddProductDialog, UpdateBalanceDialog } from "@/components/dialogs";
import type ModalVisibilityState from "@/types/modalVisibilityState";

interface DesktopActionTilesProps {
  onPress: (key: keyof ModalVisibilityState) => void;
  hasProducts: boolean;
}

/**
 * Set of `ActionTile`s for primary actions.
 */
const DesktopActionTiles = ({
  onPress,
  hasProducts,
}: DesktopActionTilesProps) => {
  const iconSize = 52;

  return (
    <View className="flex w-full flex-row justify-evenly gap-3">
      {hasProducts && (
        <UpdateBalanceDialog>
          <ActionTile
            title="Update Balance"
            icon={<MaterialCommunityIcons name="cash-plus" size={52} />}
          />
        </UpdateBalanceDialog>
      )}
      <AddProductDialog>
        <ActionTile
          title="Add Account"
          icon={<MaterialCommunityIcons name="bank-plus" size={52} />}
        />
      </AddProductDialog>
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
