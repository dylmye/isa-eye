export interface DropdownValue<TValue = string> {
  label: string;
  value: TValue;
}

export type DropdownOptions<TValue = string> = DropdownValue<TValue>[];
