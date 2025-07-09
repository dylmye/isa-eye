import { ActionSheetProvider } from "@expo/react-native-action-sheet";
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

import type { Schemas } from "@/db/schema";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useSetupDatabase } from "@/hooks/useSetupDatabase";

const { Provider: TinybaseProvider } =
  TinybaseUiReact as TinybaseUiReact.WithSchemas<Schemas>;

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const { store, queries, indexes } = useSetupDatabase();

  return (
    <TinybaseProvider store={store} queries={queries} indexes={indexes}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <ActionSheetProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </ActionSheetProvider>
        <StatusBar style="auto" />
        <PortalHost />
      </ThemeProvider>
    </TinybaseProvider>
  );
};

export default RootLayout;
