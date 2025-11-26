import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { PortalHost } from "@rn-primitives/portal";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as TinybaseUiReact from "tinybase/ui-react/with-schemas";
import "react-native-reanimated";

import { NAV_THEME } from "@/constants/navTheme";
import type { Schemas } from "@/db/schema";
import { useColorScheme } from "@/hooks/useColorScheme";
import { usePlatformSpecificSetup } from "@/hooks/usePlatformSetup";
import { useSetupDatabase } from "@/hooks/useSetupDatabase";
import "@/utils/cssInterops";

import "@/assets/styles/global.css";

const LIGHT_THEME: typeof DefaultTheme = {
  ...DefaultTheme,
  dark: false,
  colors: NAV_THEME.light,
};
const DARK_THEME: typeof DefaultTheme = {
  ...DarkTheme,
  dark: true,
  colors: NAV_THEME.dark,
};

const { Provider: TinybaseProvider } =
  TinybaseUiReact as TinybaseUiReact.WithSchemas<Schemas>;

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  usePlatformSpecificSetup();
  const { isDarkColorScheme } = useColorScheme();
  const { store, queries, indexes, relationships } = useSetupDatabase();
  const [iconFontLoaded, iconFontError] = useFonts({
    "material-community-fix": require("@/assets/fonts/MaterialCommunityIcons.ttf"),
  });

  useEffect(() => {
    if (iconFontLoaded) {
      SplashScreen.hideAsync();
    }
    if (iconFontError) {
      console.error(iconFontError);
    }
  }, [iconFontLoaded, iconFontError]);

  return (
    <TinybaseProvider
      store={store}
      queries={queries}
      indexes={indexes}
      relationships={relationships}
    >
      <SafeAreaProvider>
        <GestureHandlerRootView>
          <BottomSheetModalProvider>
            <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
              <Stack
                screenOptions={{
                  headerShown: false,
                  animation: "fade",
                }}
              />
              <StatusBar style="auto" />
            </ThemeProvider>
          </BottomSheetModalProvider>
          <PortalHost />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </TinybaseProvider>
  );
};

export default RootLayout;
