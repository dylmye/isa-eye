import { useActionSheet } from "@expo/react-native-action-sheet";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet } from "react-native";

import { getCrossPlatformColour } from "./getCrossPlatformColour";
import { useThemeColor } from "./useThemeColor";

export const useAddButtonDisambi = (
  onUpdateBalancePress: () => void,
  onAddProductPress: () => void
): (() => void) => {
  const { showActionSheetWithOptions } = useActionSheet();
  const textColor = useThemeColor({}, "text");

  const sharedIconProps = {
    size: 24,
    color: textColor,
  };

  const OPTIONS = [
    {
      label: "Update Balance",
      onPress: () => onUpdateBalancePress(),
      icon: <MaterialCommunityIcons name="cash-plus" {...sharedIconProps} />,
    },
    {
      label: "Add Account",
      onPress: () => onAddProductPress(),
      icon: <MaterialCommunityIcons name="bank-plus" {...sharedIconProps} />,
    },
    // {
    //   label: "Bulk Import",
    //   onPress: () => console.log("3"),
    //   icon: (
    //     <MaterialCommunityIcons name="database-import" {...sharedIconProps} />
    //   ),
    // },
  ];

  return () => {
    showActionSheetWithOptions(
      {
        options: OPTIONS.map((o) => o.label),
        icons: OPTIONS.map((o) => o.icon),
        autoFocus: true,
        containerStyle: { ...styles.shared, ...styles.darkContainer },
        tintColor: textColor,
      },
      (selectedIndex) => OPTIONS[selectedIndex ?? 0].onPress()
    );
  };
};

const styles = StyleSheet.create({
  shared: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginHorizontal: 16,
  },
  darkContainer: {
    backgroundColor: getCrossPlatformColour(
      "secondarySystemBackground",
      "@android:color/system_accent1_900",
      "rgb(39, 39, 39)"
    ),
  },
});
