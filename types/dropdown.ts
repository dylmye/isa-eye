import type { ImageSourcePropType } from "react-native";

export interface DropdownValue<TValue = string> {
  label: string;
  value: TValue;
}

export interface RichDropdownValue<TValue = string>
  extends DropdownValue<TValue> {
  image?: ImageSourcePropType;
  aliases?: string[];
}

export type DropdownOptions<TValue = string> = DropdownValue<TValue>[];

export type RichDropdownOptions<TValue = string> = RichDropdownValue<TValue>[];
