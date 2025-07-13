import type { PropsWithChildren } from "react";
import { View, type ViewProps } from "react-native";

interface CardsProps extends Exclude<ViewProps, "children"> {}

const CardStack = ({ children, ...props }: PropsWithChildren<CardsProps>) => (
  <View className="mx-4 flex flex-col items-center gap-4" {...props}>
    {children}
  </View>
);

export default CardStack;
