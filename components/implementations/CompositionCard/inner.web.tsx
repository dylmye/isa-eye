import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";
import { version } from "canvaskit-wasm/package.json";
import { memo } from "react";
import { Text } from "@/components/ui";
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
      fallback={<Text>Loading...</Text>}
    />
  );
};

export default memo(CompositionCardInner);
