import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { cva, type VariantProps } from "class-variance-authority";
import React, { type ComponentProps, type RefObject } from "react";
import { View, type ViewProps } from "react-native";
import { cn } from "@/utils/styles";
import { Text } from "./Text";

const alertVariants = cva(
  "-z-[1] relative bg-background w-full rounded-lg border p-3 shadow shadow-foreground/10 flex flex-row gap-4",
  {
    variants: {
      variant: {
        default: "border-border",
        destructive: "border-destructive",
        informative: "border-blue-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const colorVariants = cva("", {
  variants: {
    variant: {
      default: "text-foreground",
      destructive: "text-destructive",
      informative: "text-blue-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Alert = ({
  className,
  variant,
  children,
  icon,
  iconSize = 18,
  iconClassName,
  ...props
}: ViewProps &
  VariantProps<typeof alertVariants> & {
    ref?: RefObject<View>;
    icon: keyof typeof MaterialCommunityIcons.glyphMap;
    iconSize?: number;
    iconClassName?: string;
  }) => {
  return (
    <View
      role="alert"
      className={alertVariants({ variant, className })}
      {...props}
    >
      <View>
        <MaterialCommunityIcons
          name={icon}
          size={iconSize}
          className={colorVariants({ variant, className })}
        />
      </View>
      <View className="flex-1">{children}</View>
    </View>
  );
};

const AlertTitle = ({ className, ...props }: ComponentProps<typeof Text>) => {
  return (
    <Text
      className={cn(
        "mb-1 font-medium text-base text-foreground leading-none tracking-tight",
        className,
      )}
      {...props}
    />
  );
};
AlertTitle.displayName = "Alert.Title";

const AlertDescription = ({
  className,
  ...props
}: ComponentProps<typeof Text>) => {
  return (
    <Text
      className={cn("text-foreground text-sm leading-relaxed", className)}
      {...props}
    />
  );
};
AlertDescription.displayName = "Alert.Description";

Alert.Title = AlertTitle;
Alert.Description = AlertDescription;

export { Alert, AlertDescription, AlertTitle };
