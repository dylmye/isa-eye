import * as AvatarPrimitive from "@rn-primitives/avatar";
import React, { type RefObject } from "react";
import { cn } from "@/utils/styles";

const Avatar = ({
  className,
  ...props
}: AvatarPrimitive.RootProps & {
  ref?: RefObject<AvatarPrimitive.RootRef>;
}) => {
  return (
    <AvatarPrimitive.Root
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        className,
      )}
      {...props}
    />
  );
};

const AvatarImage = ({
  className,
  ...props
}: AvatarPrimitive.ImageProps & {
  ref?: RefObject<AvatarPrimitive.ImageRef>;
}) => {
  return (
    <AvatarPrimitive.Image
      className={cn("aspect-square h-full w-full", className)}
      {...props}
    />
  );
};
AvatarImage.displayName = "Avatar.Image";

const AvatarFallback = ({
  className,
  ...props
}: AvatarPrimitive.FallbackProps & {
  ref?: RefObject<AvatarPrimitive.FallbackRef>;
}) => {
  return (
    <AvatarPrimitive.Fallback
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted",
        className,
      )}
      {...props}
    />
  );
};
AvatarFallback.displayName = "Avatar.Fallback";

Avatar.Image = AvatarImage;
Avatar.Fallback = AvatarFallback;

export { Avatar, AvatarFallback, AvatarImage };
