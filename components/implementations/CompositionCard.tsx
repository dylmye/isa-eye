import Card from "../Card";
import React from "react";
import { View } from "react-native";
import CompositionChart from "../ui/CompositionChart";

const CompositionCard = () => (
  <Card title="Composition">
    <View style={{ height: 32, width: 32 }}>
      <CompositionChart />
    </View>
  </Card>
);

export default CompositionCard;
