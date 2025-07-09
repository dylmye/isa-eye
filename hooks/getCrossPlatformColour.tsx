import { type ColorValue, Platform, PlatformColor } from "react-native";

/**
 * Web-safe colour picker for PlatformColor
 * @param ios
 * @param android
 * @param web
 * @returns The correct colour value
 */
export const getCrossPlatformColour = (
  ios: string,
  android: string,
  web: string,
): ColorValue => {
  switch (Platform.OS) {
    case "android": {
      return PlatformColor(android);
    }
    case "ios": {
      return PlatformColor(ios);
    }
    default:
      return web;
  }
};
