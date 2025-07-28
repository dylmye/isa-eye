import type { ImageSourcePropType } from "react-native";

declare module "*.png" {
  const value: ImageSourcePropType | string;
  export default value;
}

declare module "*.svg" {
  const value: ImageSourcePropType | string;
  export default value;
}
