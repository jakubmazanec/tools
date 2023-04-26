/* eslint-disable @typescript-eslint/sort-type-constituents -- sorting hurts readability in this case */

export type BooleanParameterConfig =
  | {
      label?: string | undefined;
      description?: string | undefined;

      type: 'boolean';
      defaultValue?: undefined;
      required?: false | undefined;
      validate?: ((value: boolean) => void) | undefined;
    }
  | {
      label?: string | undefined;
      description?: string | undefined;

      type: 'boolean';
      defaultValue: boolean;
      required?: false | undefined;
      validate?: ((value: boolean) => void) | undefined;
    }
  | {
      label?: string | undefined;
      description?: string | undefined;

      type: 'boolean';
      defaultValue?: undefined;
      required: true;
      validate?: ((value: boolean) => void) | undefined;
    };

export type NumberParameterConfig =
  | {
      label?: string | undefined;
      description?: string | undefined;

      type: 'number';
      defaultValue?: undefined;
      required?: false | undefined;
      choices?: readonly number[] | undefined;
      validate?: ((value: number) => void) | undefined;
    }
  | {
      label?: string | undefined;
      description?: string | undefined;

      type: 'number';
      defaultValue: number;
      required?: false | undefined;
      choices?: readonly number[] | undefined;
      validate?: ((value: number) => void) | undefined;
    }
  | {
      label?: string | undefined;
      description?: string | undefined;

      type: 'number';
      defaultValue?: undefined;
      required: true;
      choices?: readonly number[] | undefined;
      validate?: ((value: number) => void) | undefined;
    };

export type StringParameterConfig =
  | {
      label?: string | undefined;
      description?: string | undefined;

      type: 'string';
      defaultValue?: undefined;
      required?: false | undefined;
      choices?: readonly string[] | undefined;
      validate?: ((value: string) => void) | undefined;
    }
  | {
      label?: string | undefined;
      description?: string | undefined;

      type: 'string';
      defaultValue: string;
      required?: false | undefined;
      choices?: readonly string[] | undefined;
      validate?: ((value: string) => void) | undefined;
    }
  | {
      label?: string | undefined;
      description?: string | undefined;

      type: 'string';
      defaultValue?: undefined;
      required: true;
      choices?: readonly string[] | undefined;
      validate?: ((value: string) => void) | undefined;
    };

/** A type representing parser's parameter configuration. */
export type ParameterConfig =
  | BooleanParameterConfig
  | NumberParameterConfig
  | StringParameterConfig;
