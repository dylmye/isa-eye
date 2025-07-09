import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";
import { version } from "canvaskit-wasm/package.json";
import { memo } from "react";
import ThemedText from "@/components/ThemedText";
import type CompositionChartProps from "./interface";

// On web, we need to load all Skia components (including victory-native-xl components)
const CompositionCardInner = (props: CompositionChartProps) => {
  return (
    <WithSkiaWeb<CompositionChartProps>
      opts={{
        locateFile: (file) =>
          `https://cdn.jsdelivr.net/npm/canvaskit-wasm@${version}/bin/full/${file}`,
      }}
      getComponent={() => import("./chart.tsx")}
      componentProps={props}
      fallback={<ThemedText>Loading...</ThemedText>}
    />
  );
};

export default memo(CompositionCardInner);
