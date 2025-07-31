import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { PortalHost } from "@rn-primitives/portal";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as TinybaseUiReact from "tinybase/ui-react/with-schemas";
import "react-native-reanimated";

import { NAV_THEME } from "@/constants/navTheme";
import type { Schemas } from "@/db/schema";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useSetupDatabase } from "@/hooks/useSetupDatabase";
import "@/utils/cssInterops";

import "@/assets/styles/global.css";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { usePlatformSpecificSetup } from "@/hooks/usePlatformSetup";

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
              <SafeAreaView className="flex-1">
                <Stack screenOptions={{ headerShown: false }} />
              </SafeAreaView>
              <StatusBar style="auto" />
              <PortalHost />
            </ThemeProvider>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </TinybaseProvider>
  );
};

export default RootLayout;
