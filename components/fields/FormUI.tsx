import type { PropsWithChildren } from "react";
import { View } from "react-native";
import styles from "./shared/styles";

const FormUI = ({ children }: PropsWithChildren) => (
  <View style={styles.form}>{children}</View>
);

export default FormUI;
