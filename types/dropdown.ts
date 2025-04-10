import { ImageSourcePropType } from "react-native";

export interface DropdownValue<TValue extends unknown = string> {
  label: string;
  value: TValue;
}

export interface RichDropdownValue<TValue extends unknown = string> extends DropdownValue<TValue> {
  image?: ImageSourcePropType;
  aliases?: string[];
}

export type DropdownOptions<TValue extends unknown = string> = DropdownValue<TValue>[];

export type RichDropdownOptions<TValue extends unknown = string> = RichDropdownValue<TValue>[];
