import { PropsWithChildren } from "react";
import { View } from "react-native";
import styles from "./shared/styles";

const FormUI = ({ children }: PropsWithChildren) => (
  <form style={styles.form}>{children}</form>
);

export default FormUI;
