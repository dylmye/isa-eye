import { Schemas } from "@/db/schema";
import * as TinybaseUiReact from "tinybase/ui-react/with-schemas";

const hooks = TinybaseUiReact as TinybaseUiReact.WithSchemas<Schemas>;

export default hooks;
