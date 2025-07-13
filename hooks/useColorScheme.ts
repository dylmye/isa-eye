import { useColorScheme as useNativewindColorScheme } from "nativewind";

export const useColorScheme = () => {
  const { colorScheme } = useNativewindColorScheme();
  return {
    colorScheme: colorScheme ?? "dark",
    isDarkColorScheme: colorScheme === "dark",
  };
};
