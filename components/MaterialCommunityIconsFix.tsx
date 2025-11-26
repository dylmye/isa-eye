import createIconSet from "@expo/vector-icons/createIconSet";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { loadAsync } from "expo-font";

loadAsync({
  "material-community-fix": require("@/assets/fonts/MaterialCommunityIcons.ttf"),
});

export default createIconSet(
  MaterialCommunityIcons.glyphMap,
  "material-community-fix",
  "MaterialCommunityIcons.ttf",
);
