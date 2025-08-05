import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import { View } from "react-native";
import ActionTile from "@/components/ActionTile";
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
        <ActionTile
          title="Update Balance"
          icon={<MaterialCommunityIcons name="cash-plus" size={52} />}
          onPress={() => router.push("/update/balance")}
        />
      )}
      <ActionTile
        title="Add Account"
        icon={<MaterialCommunityIcons name="bank-plus" size={52} />}
        onPress={() => router.push("/add/account")}
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
