import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Cards from "@/components/Cards";
import CompositionCard from "@/components/implementations/CompositionCard";
import HistoryCard from "@/components/implementations/HistoryCard";
import OverviewBar from "@/components/OverviewBar";
import AccountCards from "@/components/implementations/AccountCards";
import PageColumn from "@/components/PageColumn";
import MobileFooter from "@/components/MobileFooter";

const Home = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <OverviewBar />
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <PageColumn>
        <Cards>
          <CompositionCard />
          <HistoryCard />
        </Cards>
        <AccountCards />
      </PageColumn>
    </ScrollView>
    <MobileFooter />
  </SafeAreaView>
);

export default Home;
