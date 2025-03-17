import ActionTile from "@/components/ActionTile";
import { useThemeColor } from "@/hooks/useThemeColor";
import ModalVisibilityState from "@/types/modalVisibilityState";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

interface DesktopActionTilesProps {
  onPress: (key: keyof ModalVisibilityState) => void;
}

const DesktopActionTiles = ({ onPress }: DesktopActionTilesProps) => {
  const textColor = useThemeColor({}, "text");

  const sharedIconProps = {
    size: 52,
    color: textColor,
  };

  return (
    <View style={styles.container}>
      <ActionTile
        title="Add Transaction"
        onPress={() => onPress("addTransaction")}
        icon={<MaterialCommunityIcons {...sharedIconProps} name="cash-plus" />}
      />
      <ActionTile
        title="Add Account"
        onPress={() => onPress("addAccount")}
        icon={<MaterialCommunityIcons {...sharedIconProps} name="bank-plus" />}
      />
      <ActionTile
        title="Bulk Import"
        onPress={() => onPress("bulkUpload")}
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
