/**
 * Form row configuration.
 */
export type FormRowConfig =
  | {
      type: 'confirm';
      label?: string;
    }
  | {
      type: 'select';
      label?: string;
    }
  | {
      type: 'text';
      label?: string;
      validate?: (value: string) => void;
    };
