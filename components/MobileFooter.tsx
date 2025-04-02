import { Platform, StyleSheet, View } from "react-native";
import { getCrossPlatformColour } from "@/hooks/getCrossPlatformColour";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { IconButtonProps } from "@expo/vector-icons/build/createIconSet";
import React from "react";
import { router } from "expo-router";
import { useAddButtonDisambi } from "@/hooks/useAddButtonDisambi";

const commonIconProps: Omit<IconButtonProps<"">, "name"> = {
  iconStyle: {
    marginRight: 0,
  },
  size: 24,
  backgroundColor: "transparent",
};

const BackButton = (props: Omit<IconButtonProps<"">, "name">) =>
  Platform.OS === "ios" ? (
    <MaterialIcons.Button
      name="arrow-back-ios"
      {...commonIconProps}
      {...props}
    />
  ) : (
    <MaterialCommunityIcons.Button
      name="chevron-left"
      {...commonIconProps}
      {...props}
    />
  );

const ForwardButton = (props: Omit<IconButtonProps<"">, "name">) =>
  Platform.OS === "ios" ? (
    <MaterialIcons.Button
      name="arrow-forward-ios"
      {...commonIconProps}
      {...props}
    />
  ) : (
    <MaterialCommunityIcons.Button
      name="chevron-right"
      {...commonIconProps}
      {...props}
    />
  );

const AddButton = (props: Omit<IconButtonProps<"">, "name">) => (
  <MaterialCommunityIcons.Button name="plus" {...commonIconProps} {...props} />
);

interface MobileFooterProps {
  previousRuleset?: string;
  nextRuleset?: string;
  onAddTransactionPress: () => void;
  onAddAccountPress: () => void;
}

const MobileFooter = ({
  previousRuleset,
  nextRuleset,
  onAddTransactionPress,
  onAddAccountPress,
}: MobileFooterProps) => {
  const onPressAdd = useAddButtonDisambi(
    onAddTransactionPress,
    onAddAccountPress
  );

  return (
    <View style={styles.container}>
      <BackButton
        disabled={!previousRuleset}
        onPress={() =>
          !!previousRuleset && router.push(`/overview/${previousRuleset}`)
        }
      />
      <AddButton size={32} onPress={onPressAdd} />
      <ForwardButton
        disabled={!nextRuleset}
        onPress={() => !!nextRuleset && router.push(`/overview/${nextRuleset}`)}
      />
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
