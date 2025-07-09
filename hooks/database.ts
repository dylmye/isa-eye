import * as TinybaseUiReact from "tinybase/ui-react/with-schemas";
import type { Schemas } from "@/db/schema";

const hooks = TinybaseUiReact as TinybaseUiReact.WithSchemas<Schemas>;

export default hooks;
