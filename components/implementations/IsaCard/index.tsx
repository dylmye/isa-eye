import CardBase from "@/components/CardBase";
import ThemedText from "@/components/ThemedText";
import { View } from "react-native";
import { Image } from "expo-image";

const IsaCard = () => (
  <CardBase style={{ display: "flex", flexDirection: "row" }}>
    <View style={{ flex: 1, alignItems: "center", flexDirection: "row" }}>
      <Image
        source={require("@/assets/images/nationwide.svg")}
        contentFit="fill"
        style={{
          width: 28,
          height: 28,
          borderRadius: 1000,
          borderWidth: 2,
          borderColor: "rgba(0, 0, 0, 0.04)",
        }}
      />
      <ThemedText
        type="defaultSemiBold"
        adjustsFontSizeToFit
        style={{ fontSize: 24, marginHorizontal: 8 }}
        numberOfLines={1}
      >
        Nationwide Lifetime ISA
      </ThemedText>
    </View>
    <View style={{ alignItems: "flex-end" }}>
      <ThemedText type="defaultSemiBold" style={{ fontSize: 24 }}>
        £2,400
      </ThemedText>
      <ThemedText>remaining</ThemedText>
    </View>
  </CardBase>
);

export default IsaCard;
