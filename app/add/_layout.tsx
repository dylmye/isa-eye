import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        presentation: "transparentModal",
        animation: "fade",
        headerShown: false,
      }}
    />
  );
};

export default Layout;
