import { PropsWithChildren } from "react";
import { StyleSheet, View, ViewProps } from "react-native";

interface CardsProps extends Exclude<ViewProps, 'children'> {}

const Cards = ({ children, ...props }: PropsWithChildren<CardsProps>) => (
  <View style={styles.container} {...props}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    alignItems: "center",
    marginHorizontal: 16,
  }
})

export default Cards;
