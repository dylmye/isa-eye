import ThemedText from "@/components/ThemedText";
import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";
import { version } from "canvaskit-wasm/package.json";
import { memo } from "react";

// On web, we need to load all Skia components (including victory-native-xl components)
const HistoryCardInner = () => (
  <WithSkiaWeb
    opts={{
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/canvaskit-wasm@${version}/bin/full/${file}`,
    }}
    getComponent={() => import("./chart.tsx")}
    fallback={<ThemedText>Loading...</ThemedText>}
  />
);

export default memo(HistoryCardInner);
