export interface DropdownValue<TValue = string> {
  label: string;
  value: TValue;
}

export interface RichDropdownValue<TValue = string>
  extends DropdownValue<TValue> {
  image?: string;
  aliases?: string[];
}

export type DropdownOptions<TValue = string> = DropdownValue<TValue>[];

export type RichDropdownOptions<TValue = string> = RichDropdownValue<TValue>[];
