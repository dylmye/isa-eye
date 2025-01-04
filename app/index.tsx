import Card from "@/components/Card";
import OverviewBar from "@/components/OverviewBar";
import ThemedText from "@/components/ThemedText";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <OverviewBar />
    <View
      style={{
        flexDirection: "column",
        gap: 16,
        alignItems: "center",
      }}
    >
      <Card title="Composition" />
      <Card title="History" />
    </View>
  </SafeAreaView>
);

export default Home;
