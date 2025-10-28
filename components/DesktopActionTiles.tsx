import { View } from "react-native";

import ActionTile from "@/components/ActionTile";

import MaterialCommunityIcons from "./MaterialCommunityIconsFix";

interface DesktopActionTilesProps {
  hasProducts: boolean;
}

/**
 * Set of `ActionTile`s for primary actions.
 */
const DesktopActionTiles = ({ hasProducts }: DesktopActionTilesProps) => {
  const iconSize = 52;

  return (
    <View className="flex w-full flex-row justify-evenly gap-3">
      {hasProducts && (
        <ActionTile
          title="Update Balance"
          icon={<MaterialCommunityIcons name="cash-plus" size={52} />}
          path="/update/balance"
        />
      )}
      <ActionTile
        title="Add Account"
        icon={<MaterialCommunityIcons name="bank-plus" size={52} />}
        path="/add/account"
      />
      <ActionTile
        title="Bulk Import"
        disabled
        icon={<MaterialCommunityIcons size={iconSize} name="database-import" />}
      />
    </View>
  );
};

export default DesktopActionTiles;
