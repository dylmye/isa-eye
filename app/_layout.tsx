import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { PortalHost } from "@rn-primitives/portal";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import * as TinybaseUiReact from "tinybase/ui-react/with-schemas";
import "react-native-reanimated";

import { NAV_THEME } from "@/constants/navTheme";
import type { Schemas } from "@/db/schema";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useSetupDatabase } from "@/hooks/useSetupDatabase";

import "@/assets/styles/global.css";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Platform } from "react-native";

const LIGHT_THEME: typeof DefaultTheme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
};
const DARK_THEME: typeof DefaultTheme = {
  ...DarkTheme,
  colors: NAV_THEME.dark,
};

const { Provider: TinybaseProvider } =
  TinybaseUiReact as TinybaseUiReact.WithSchemas<Schemas>;

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const useIsomorphicLayoutEffect =
  Platform.OS === "web" && typeof window === "undefined"
    ? useEffect
    : useLayoutEffect;

const RootLayout = () => {
  const hasMounted = useRef(false);
  const { isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = useState(false);
  const { store, queries, indexes, relationships } = useSetupDatabase();

  useIsomorphicLayoutEffect(() => {
    if (hasMounted.current) {
      return;
    }

    if (Platform.OS === "web") {
      // Adds the background color to the html element to prevent white background on overscroll.
      document?.documentElement.classList.add("bg-background");
    }
    setIsColorSchemeLoaded(true);
    hasMounted.current = true;
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!isColorSchemeLoaded) {
      return;
    }
    if (Platform.OS === "web") {
      if (isDarkColorScheme) {
        document?.documentElement.classList.add("dark");
      } else {
        document?.documentElement.classList.remove("dark");
      }
    }
  }, [isColorSchemeLoaded, isDarkColorScheme]);

  if (!isColorSchemeLoaded) {
    return null;
  }

  return (
    <TinybaseProvider
      store={store}
      queries={queries}
      indexes={indexes}
      relationships={relationships}
    >
      <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
        <BottomSheetModalProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </BottomSheetModalProvider>
        <StatusBar style="auto" />
        <PortalHost />
      </ThemeProvider>
    </TinybaseProvider>
  );
};

export default RootLayout;
