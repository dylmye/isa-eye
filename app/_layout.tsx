import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import * as TinybaseUiReact from "tinybase/ui-react/with-schemas";
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
  const store = useSetupDatabase();

  return (
    <TinybaseProvider store={store}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }} />
        <StatusBar style="auto" />
      </ThemeProvider>
    </TinybaseProvider>
  );
};

export default RootLayout;
