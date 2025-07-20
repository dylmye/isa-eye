import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { cva, type VariantProps } from "class-variance-authority";
import React, { type ComponentProps, type RefObject } from "react";
import { View, type ViewProps } from "react-native";
import { cn } from "@/utils/styles";
import { Text } from "./Text";

const alertVariants = cva(
  "relative bg-background w-full rounded-lg border p-2 shadow shadow-foreground/10",
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
      <View className="absolute left-3.5">
        <MaterialCommunityIcons
          name={icon}
          size={iconSize}
          className={colorVariants({ variant, className })}
        />
      </View>
      {children}
    </View>
  );
};

const AlertTitle = ({ className, ...props }: ComponentProps<typeof Text>) => {
  return (
    <Text
      className={cn(
        "mb-1 pl-7 font-medium text-base text-foreground leading-none tracking-tight",
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
      className={cn("pl-7 text-foreground text-sm leading-relaxed", className)}
      {...props}
    />
  );
};
AlertDescription.displayName = "Alert.Description";

Alert.Title = AlertTitle;
Alert.Description = AlertDescription;

export { Alert, AlertDescription, AlertTitle };
