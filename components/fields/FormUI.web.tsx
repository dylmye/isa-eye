import type { PropsWithChildren } from "react";
import styles from "./shared/styles";

const FormUI = ({ children }: PropsWithChildren) => (
  <form style={styles.form}>{children}</form>
);

export default FormUI;
