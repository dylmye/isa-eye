import Card from "../Card";
import React from "react";
import { View } from "react-native";
import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";
import ThemedText from "../ThemedText";

const CompositionCard = () => (
  <Card title="Composition">
    <View style={{ height: 32, width: 32 }}>
      <WithSkiaWeb
        getComponent={() => import("@/components/ui/CompositionChart")}
        fallback={<ThemedText>Loading...</ThemedText>}
      />
    </View>
  </Card>
);

export default CompositionCard;
