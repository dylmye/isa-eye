import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet, View } from "react-native";
import ActionTile from "@/components/ActionTile";
import { useThemeColor } from "@/hooks/useThemeColor";
import type ModalVisibilityState from "@/types/modalVisibilityState";

interface DesktopActionTilesProps {
  onPress: (key: keyof ModalVisibilityState) => void;
  hasProducts: boolean;
}

const DesktopActionTiles = ({
  onPress,
  hasProducts,
}: DesktopActionTilesProps) => {
  const textColor = useThemeColor({}, "text");

  const sharedIconProps = {
    size: 52,
    color: textColor,
  };

  return (
    <View style={styles.container}>
      {hasProducts && (
        <ActionTile
          title="Update Balance"
          onPress={() => onPress("updateBalance")}
          icon={
            <MaterialCommunityIcons {...sharedIconProps} name="cash-plus" />
          }
        />
      )}
      <ActionTile
        title="Add Account"
        onPress={() => onPress("addProduct")}
        icon={<MaterialCommunityIcons {...sharedIconProps} name="bank-plus" />}
      />
      <ActionTile
        title="Bulk Import"
        onPress={() => onPress("bulkUpload")}
        disabled
        icon={
          <MaterialCommunityIcons {...sharedIconProps} name="database-import" />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    gap: 12,
  },
});

export default DesktopActionTiles;
