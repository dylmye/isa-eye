import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PageColumn from "@/components/PageColumn";
import ThemedText from "@/components/ThemedText";

const AddTransaction = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: "#00000040" }}>
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <PageColumn>
        <ThemedText>Add Transaction Page</ThemedText>
      </PageColumn>
    </ScrollView>
  </SafeAreaView>
);

export default AddTransaction;
