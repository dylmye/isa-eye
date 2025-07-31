import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { cssInterop } from "nativewind";
import Logo from "@/components/Logo";

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
