import CardBase from "@/components/CardBase";
import ThemedText from "@/components/ThemedText";
import { View } from "react-native";
import BankLogoIcon from "../BankLogoIcon";

const IsaCard = () => (
  <CardBase style={{ display: "flex", flexDirection: "row" }}>
    <View style={{ flex: 1, alignItems: "center", flexDirection: "row" }}>
      <BankLogoIcon
        bankIcon={require("@/assets/images/bank-icons/nationwide.svg")}
        size={38}
        style={{ flex: 1 }}
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
