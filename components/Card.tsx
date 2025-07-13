import type { PropsWithChildren } from "react";
import { Text } from "@/components/ui";
import CardBase from "./CardBase";

interface CardProps {
  title: string;
}

const Card = ({ title, children }: PropsWithChildren<CardProps>) => (
  <CardBase>
    <Text
      className="mb-3 font-bold text-xl"
      numberOfLines={1}
      dynamicTypeRamp="title2"
    >
      {title}
    </Text>
    <Text>{children}</Text>
  </CardBase>
);

/** @deprecated - Use ui/Card instead */
export default Card;
