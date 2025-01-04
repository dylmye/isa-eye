import Card from "@/components/Card";
import OverviewBar from "@/components/OverviewBar";
import ThemedText from "@/components/ThemedText";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <OverviewBar />
    <Card title="Composition" />
    <Card title="History" />
  </SafeAreaView>
);

export default Home;
