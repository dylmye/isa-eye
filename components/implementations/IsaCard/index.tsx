import Card from "@/components/Card";
import CardBase from "@/components/CardBase";
import ThemedText from "@/components/ThemedText";
import { StyleSheet, Text, View } from "react-native";

const IsaCard = () => (
  <CardBase style={{ display: 'flex', flexDirection: 'row' }}>
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ThemedText>Nationwide Lifetime ISA</ThemedText>
    </View>
    <View style={{ alignItems: 'flex-end' }}>
      <ThemedText type="defaultSemiBold" style={{ fontSize: 24 }}>£2,400</ThemedText>
      <ThemedText>remaining</ThemedText>
    </View>
  </CardBase>
);

export default IsaCard;
