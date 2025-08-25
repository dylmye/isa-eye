import React from "react";
import { Appearance, Platform } from "react-native";
import { useColorScheme as useNativewindColorScheme } from "nativewind";

import { setAndroidNavBar } from "@/utils/setAndroidNavBar";

export const usePlatformSpecificSetup = Platform.select({
  web: useSetWebBackgroundClassName,
  android: useSetAndroidNavigationBar,
  default: () => { },
});

const useIsomorphicLayoutEffect =
  Platform.OS === "web" && typeof window === "undefined"
    ? React.useEffect
    : React.useLayoutEffect;

function useSetWebBackgroundClassName() {
  const { setColorScheme } = useNativewindColorScheme();
  useIsomorphicLayoutEffect(() => {
    // Adds the background color to the html element to prevent white background on overscroll.
    document.documentElement.classList.add("bg-background");
    if (Appearance.getColorScheme() === "dark") {
      document.documentElement.classList.add("dark");
      setColorScheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setColorScheme("light");
    }
  }, [Appearance.getColorScheme()]);
}

function useSetAndroidNavigationBar() {
  React.useLayoutEffect(() => {
    setAndroidNavBar(Appearance.getColorScheme() ?? "light");
  }, []);
}
