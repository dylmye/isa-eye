import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Cards from "@/components/Cards";
import CompositionCard from "@/components/implementations/CompositionCard";
import HistoryCard from "@/components/implementations/HistoryCard";
import OverviewBar from "@/components/OverviewBar";
const Home = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <OverviewBar />
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Cards>
        <CompositionCard />
        <HistoryCard />
      </Cards>
    </ScrollView>
  </SafeAreaView>
);

export default Home;
