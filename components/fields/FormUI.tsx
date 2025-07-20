import type { PropsWithChildren } from "react";
import { View } from "react-native";

const FormUI = ({ children }: PropsWithChildren) => (
  <View className="flex flex-col py-2">{children}</View>
);

export default FormUI;
