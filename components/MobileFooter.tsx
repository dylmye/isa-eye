import { StyleSheet, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { IconButtonProps } from "@expo/vector-icons/build/createIconSet";

import { getCrossPlatformColour } from "@/hooks/getCrossPlatformColour";
import { useAddButtonDisambi } from "@/hooks/useAddButtonDisambi";
import NavBackButton from "./implementations/NavBackButton";
import NavForwardButton from "./implementations/NavForwardButton";

const commonIconProps: Omit<IconButtonProps<"">, "name"> = {
  iconStyle: {
    marginRight: 0,
  },
  size: 24,
  backgroundColor: "transparent",
};

const AddButton = (props: Omit<IconButtonProps<"">, "name">) => (
  <MaterialCommunityIcons.Button name="plus" {...commonIconProps} {...props} />
);

interface MobileFooterProps {
  previousRuleset?: string;
  nextRuleset?: string;
  onAddTransactionPress: () => void;
  onAddProductPress: () => void;
}

const MobileFooter = ({
  previousRuleset,
  nextRuleset,
  onAddTransactionPress,
  onAddProductPress,
}: MobileFooterProps) => {
  const onPressAdd = useAddButtonDisambi(
    onAddTransactionPress,
    onAddProductPress
  );

  return (
    <View style={styles.container}>
      <NavBackButton
        disabled={!previousRuleset}
        onPress={() =>
          !!previousRuleset && router.push(`/overview/${previousRuleset}`)
        }
      />
      <AddButton size={32} onPress={onPressAdd} />
      {!!nextRuleset ? (
        <NavForwardButton
          disabled={!nextRuleset}
          onPress={() => router.push(`/overview/${nextRuleset}`)}
        />
      ) : (
        <View style={{ width: 45 }} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    backgroundColor: getCrossPlatformColour(
      "secondarySystemBackground",
      "@android:color/system_accent1_900",
      "rgb(39, 39, 39)"
    ),
    shadowColor: "#404040",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.31,
    shadowRadius: 3,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default MobileFooter;
