import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as CheckboxPrimitive from "@rn-primitives/checkbox";
import React, { type RefObject } from "react";
import { Platform } from "react-native";
import { cn } from "@/utils/styles";

const Checkbox = ({
  className,
  ...props
}: CheckboxPrimitive.RootProps & {
  ref?: RefObject<CheckboxPrimitive.RootRef>;
}) => {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        "web:peer h-4 native:h-[20] native:w-[20] w-4 shrink-0 native:rounded rounded-sm border border-primary web:ring-offset-background web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        props.checked && "bg-primary",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("h-full w-full items-center justify-center")}
      >
        <MaterialCommunityIcons
          name="check"
          size={12}
          strokeWidth={Platform.OS === "web" ? 2.5 : 3.5}
          className="text-primary-foreground"
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
};

export { Checkbox };
