import { IconButtonProps } from "@expo/vector-icons/build/createIconSet";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Platform } from "react-native";

const commonIconProps: Omit<IconButtonProps<"">, "name"> = {
  iconStyle: {
    marginRight: 0,
  },
  size: 24,
  backgroundColor: "transparent",
};

const NavBackButton = (props: Omit<IconButtonProps<"">, "name">) =>
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

export default NavBackButton;
