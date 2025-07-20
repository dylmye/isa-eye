import * as LabelPrimitive from "@rn-primitives/label";
import React, { type RefObject } from "react";
import { cn } from "@/utils/styles";

const Label = ({
  className,
  onPress,
  onLongPress,
  onPressIn,
  onPressOut,
  ...props
}: LabelPrimitive.TextProps & {
  ref?: RefObject<LabelPrimitive.TextRef>;
}) => {
  return (
    <LabelPrimitive.Root
      className="web:cursor-default"
      onPress={onPress}
      onLongPress={onLongPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <LabelPrimitive.Text
        className={cn(
          "font-medium native:text-base text-foreground text-sm leading-none web:peer-disabled:cursor-not-allowed web:peer-disabled:opacity-70",
          className,
        )}
        {...props}
      />
    </LabelPrimitive.Root>
  );
};

export { Label };
