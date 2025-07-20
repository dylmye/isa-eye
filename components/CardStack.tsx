import type { PropsWithChildren } from "react";
import { View, type ViewProps } from "react-native";

interface CardStackProps extends Exclude<ViewProps, "children"> {}

/**
 * @deprecated Replace with FlashList
 */
const CardStack = ({
  children,
  ...props
}: PropsWithChildren<CardStackProps>) => (
  <View className="flex flex-col items-center gap-4" {...props}>
    {children}
  </View>
);

export default CardStack;
