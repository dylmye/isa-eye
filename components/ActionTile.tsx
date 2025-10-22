import { Link } from "expo-router";
import type React from "react";
import { Platform, Pressable } from "react-native";
import { Card, Text } from "@/components/ui";
import { cn } from "@/utils/styles";

interface ActionTileProps {
  title: string;
  icon: React.ReactNode;
  path?: React.ComponentProps<typeof Link>["href"];
  disabled?: boolean;
}

/**
 * XXL buttons for primary actions on desktop.
 */
const ActionTile = ({ title, icon, path, disabled }: ActionTileProps) => {
  const child = (
    <Pressable className="flex-1">
      <Card
        className={cn(
          "min-h-16 items-center justify-center rounded-lg bg-primary py-3",
          Platform.OS === "web" && "transition-colors hover:opacity-95",
          disabled && "cursor-not-allowed opacity-75 hover:opacity-75",
        )}
      >
        <Card.Content className="color-primary-foreground items-center justify-center pb-0">
          {icon}
          <Text className="font-semibold text-primary-foreground">{title}</Text>
        </Card.Content>
      </Card>
    </Pressable>
  );

  if (!path) return child;

  return (
    <Link href={path} asChild disabled={disabled} className="flex-1">
      {child}
    </Link>
  );
};

export default ActionTile;
