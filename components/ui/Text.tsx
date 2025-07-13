// https://www.reactnativereusables.com/components/text/
import * as Slot from "@rn-primitives/slot";
import {
  type ComponentProps,
  createContext,
  type RefObject,
  useContext,
} from "react";
import { Text as RNText } from "react-native";
import { cn } from "@/utils/styles";

const TextClassContext = createContext<string | undefined>(undefined);

const Text = ({
  className,
  asChild = false,
  ...props
}: ComponentProps<typeof RNText> & {
  ref?: RefObject<RNText>;
  asChild?: boolean;
}) => {
  const textClass = useContext(TextClassContext);
  const Component = asChild ? Slot.Text : RNText;
  return (
    <Component
      className={cn(
        "web:select-text text-base text-foreground",
        textClass,
        className,
      )}
      {...props}
    />
  );
};

export { Text, TextClassContext };
