export interface OptionsSheetOption {
  label: string;
  onPress: () => void;
}

export const showOptionsSheet = (options: OptionsSheetOption[]): void => { };
