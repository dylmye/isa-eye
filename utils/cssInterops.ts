import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { cssInterop } from "nativewind";

import Logo from "@/components/Logo";
import MaterialCommunityIcons from "@/components/MaterialCommunityIconsFix";

cssInterop(MaterialCommunityIcons, {
  className: {
    target: "style",
    nativeStyleToProp: { color: true },
  },
});

cssInterop(MaterialCommunityIcons.Button, {
  className: {
    target: "style",
    nativeStyleToProp: { color: true },
  },
});

cssInterop(MaterialIcons.Button, {
  className: {
    target: "style",
    nativeStyleToProp: { color: true },
  },
});

cssInterop(Logo, {
  className: {
    target: "style",
    nativeStyleToProp: { color: true },
  },
});
