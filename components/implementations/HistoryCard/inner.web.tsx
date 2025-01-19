import ThemedText from "@/components/ThemedText";
import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";

// On web, we need to load all Skia components (including victory-native-xl components)
const HistoryCardInner = () => (
  <WithSkiaWeb
    getComponent={() => import("./chart.tsx")}
    fallback={<ThemedText>Loading...</ThemedText>}
  />
);

export default HistoryCardInner;
