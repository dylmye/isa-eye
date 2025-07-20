import * as SeparatorPrimitive from "@rn-primitives/separator";
import React, { type RefObject } from "react";
import { cn } from "@/utils/styles";

const Separator = ({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: SeparatorPrimitive.RootProps & {
  ref?: RefObject<SeparatorPrimitive.RootRef>;
}) => {
  return (
    <SeparatorPrimitive.Root
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className,
      )}
      {...props}
    />
  );
};

export { Separator };
