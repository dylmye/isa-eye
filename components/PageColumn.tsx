import type { PropsWithChildren } from "react";
import { View } from "react-native";

/**
 * Container for main page views
 */
const PageColumn = ({ children }: PropsWithChildren<unknown>) => (
  <View className="container my-6 max-w-[50rem] self-center px-4">
    {children}
  </View>
);

export default PageColumn;
