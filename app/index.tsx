import Card from "@/components/Card";
import Cards from "@/components/Cards";
import CompositionCard from "@/components/implementations/CompositionCard";
import OverviewBar from "@/components/OverviewBar";
import ThemedText from "@/components/ThemedText";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <OverviewBar />
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Cards>
        <CompositionCard />
        <Card title="History">
          <ThemedText>Contents</ThemedText>
        </Card>
      </Cards>
    </ScrollView>
  </SafeAreaView>
);

export default Home;
