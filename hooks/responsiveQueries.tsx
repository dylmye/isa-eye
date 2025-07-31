import { useMemo } from "react";
import { Platform, useWindowDimensions } from "react-native";
import { useMediaQuery } from "react-responsive";

export const useIsMediumScreen = () => {
  const mediaQueryRes = useMediaQuery({ query: "(max-width: 768px)" });
  const { width } = useWindowDimensions();
  const isMobile = Platform.OS !== "web";

  return useMemo(() => {
    if (!isMobile) return mediaQueryRes;
    return width <= 768;
  }, [mediaQueryRes, width]);
};
