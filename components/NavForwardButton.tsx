import type { IconButtonProps } from "@expo/vector-icons/build/createIconSet";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Platform } from "react-native";

const commonIconProps: Omit<IconButtonProps<"">, "name"> = {
  iconStyle: {
    marginRight: 0,
  },
  size: 24,
  backgroundColor: "transparent",
  color: "inherit",
};

/**
 * Platform-specific button for navigation
 */
const NavForwardButton = (props: Omit<IconButtonProps<"">, "name">) =>
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

export default NavForwardButton;
