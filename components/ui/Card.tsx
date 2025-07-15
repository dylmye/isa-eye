import React, { type RefObject } from "react";
import { Text, type TextProps, View, type ViewProps } from "react-native";
import { cn } from "@/utils/styles";
import { TextClassContext } from "./Text";

const Card = ({
  className,
  ...props
}: ViewProps & {
  ref?: RefObject<View>;
}) => {
  return (
    <View
      className={cn(
        "rounded-lg border border-border bg-card shadow-foreground/10 shadow-sm",
        className,
      )}
      {...props}
    />
  );
};

const CardHeader = ({
  className,
  ...props
}: ViewProps & {
  ref?: RefObject<View>;
}) => {
  return (
    <View className={cn("flex flex-col space-y-1 p-5", className)} {...props} />
  );
};
CardHeader.displayName = "Card.Header";

const CardTitle = ({
  className,
  ...props
}: TextProps & {
  ref?: RefObject<Text>;
}) => {
  return (
    <Text
      role="heading"
      aria-level={3}
      className={cn(
        "font-semibold text-card-foreground text-xl leading-none tracking-tight",
        className,
      )}
      {...props}
    />
  );
};
CardTitle.displayName = "Card.Title";

const CardDescription = ({
  className,
  ...props
}: TextProps & {
  ref?: RefObject<Text>;
}) => {
  return (
    <Text
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
};
CardDescription.displayName = "Card.Description";

const CardContent = ({
  className,
  ...props
}: ViewProps & {
  ref?: RefObject<View>;
}) => {
  return (
    <TextClassContext.Provider value="text-card-foreground">
      <View className={cn("p-6 pt-0", className)} {...props} />
    </TextClassContext.Provider>
  );
};
CardContent.displayName = "Card.Content";

const CardFooter = ({
  className,
  ...props
}: ViewProps & {
  ref?: RefObject<View>;
}) => {
  return (
    <View
      className={cn("flex flex-row items-center p-6 pt-0", className)}
      {...props}
    />
  );
};
CardFooter.displayName = "Card.Footer";

Card.Content = CardContent;
Card.Description = CardDescription;
Card.Footer = CardFooter;
Card.Header = CardHeader;
Card.Title = CardTitle;

export { Card };
