import { StyleSheet } from "react-native";
import ThemedText from "./ThemedText";
import { PropsWithChildren } from "react";
import CardBase from "./CardBase";

interface CardProps {
  title: string;
}

const Card = ({ title, children }: PropsWithChildren<CardProps>) => (
  <CardBase>
    <ThemedText style={styles.title} numberOfLines={1} dynamicTypeRamp="title2">
      {title}
    </ThemedText>
    <ThemedText>{children}</ThemedText>
  </CardBase>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 12,
  },
});

export default Card;
