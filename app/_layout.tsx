import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import * as TinybaseUiReact from "tinybase/ui-react/with-schemas";
import { PortalHost } from '@rn-primitives/portal';
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { useSetupDatabase } from "@/hooks/useSetupDatabase";
import { Schemas } from "@/db/schema";

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
