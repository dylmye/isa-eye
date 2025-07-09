import { Image, type ImageStyle } from "expo-image";
import {
  type ImageSourcePropType,
  type StyleProp,
  StyleSheet,
  View,
} from "react-native";

interface BankLogoIconProps {
  bankIcon: ImageSourcePropType;
  size: number;
  style?: StyleProp<ImageStyle>;
}

const BankLogoIcon = ({ bankIcon, size, style = {} }: BankLogoIconProps) => (
  <View style={{ width: size, height: size }}>
    <Image source={bankIcon} style={[styles.image, style]} />
  </View>
);

const styles = StyleSheet.create({
  image: {
    borderRadius: 1000,
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, 0.04)",
  },
});

export default BankLogoIcon;
