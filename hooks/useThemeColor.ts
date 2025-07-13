/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { NAV_THEME } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

/**
 * @deprecated Use Nativewind instead
 */
export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof NAV_THEME.light,
) {
  const { colorScheme } = useColorScheme() ?? "light";
  const colorFromProps = props[colorScheme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return NAV_THEME[colorScheme][colorName];
  }
}
