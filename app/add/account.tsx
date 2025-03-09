import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PageColumn from "@/components/PageColumn";
import ThemedText from "@/components/ThemedText";

const AddTransaction = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <PageColumn>
        <ThemedText>Add Account Page</ThemedText>
      </PageColumn>
    </ScrollView>
  </SafeAreaView>
);

export default AddTransaction;
