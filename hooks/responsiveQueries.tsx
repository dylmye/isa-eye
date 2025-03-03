import { useMediaQuery } from "react-responsive";

export const useIsMediumScreen = () =>
  useMediaQuery({ query: "(max-width: 768px)" });
