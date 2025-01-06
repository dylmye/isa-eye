import ThemedText from "@/components/ThemedText";
import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";

// On web, we need to load all Skia components (including victory-native-xl components)
const CompositionCardInner = () => (
  <WithSkiaWeb
    getComponent={() => import("./chart")}
    fallback={<ThemedText>Loading...</ThemedText>}
  />
);

export default CompositionCardInner;
