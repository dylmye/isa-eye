import {
  Link as RouterLink,
  type LinkProps as RouterLinkProps,
} from "expo-router";
import { cn } from "@/utils/styles";
import { Text } from "./ui";

interface LinkProps extends RouterLinkProps {
  linkClassName?: string;
}

const Link = ({ className, linkClassName, ...props }: LinkProps) => (
  <RouterLink
    className={cn("underline", linkClassName)}
    target="_blank"
    {...props}
  >
    <Text className={cn("hover:color-primary transition-colors", className)}>
      {props.children}
    </Text>
  </RouterLink>
);

export default Link;
